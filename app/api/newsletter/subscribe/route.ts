import { NextResponse } from 'next/server'

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null)
    const email = typeof body?.email === 'string'
      ? body.email.trim().toLowerCase()
      : ''

    if (!email || !EMAIL_REGEX.test(email) || email.length > 254) {
      return NextResponse.json(
        { error: 'Adresse email invalide.' },
        { status: 400 }
      )
    }

    const apiKey = process.env.BREVO_API_KEY
    const listId = process.env.BREVO_LIST_ID
    const templateId = process.env.BREVO_DOI_TEMPLATE_ID
    const redirectionUrl = process.env.BREVO_DOI_REDIRECT_URL

    if (!apiKey || !listId || !templateId || !redirectionUrl) {
      console.error('[newsletter] Configuration Brevo incomplète')
      return NextResponse.json(
        { error: 'Service indisponible pour le moment.' },
        { status: 503 }
      )
    }

    const brevoResponse = await fetch(
      'https://api.brevo.com/v3/contacts/doubleOptinConfirmation',
      {
        method: 'POST',
        headers: {
          'api-key': apiKey,
          'content-type': 'application/json',
          accept: 'application/json'
        },
        body: JSON.stringify({
          email,
          includeListIds: [parseInt(listId, 10)],
          templateId: parseInt(templateId, 10),
          redirectionUrl
        })
      }
    )

    if (brevoResponse.status === 204 || brevoResponse.ok) {
      return NextResponse.json({ success: true }, { status: 200 })
    }

    const errorBody = await brevoResponse.json().catch(() => ({} as Record<string, unknown>))
    const code = typeof errorBody.code === 'string' ? errorBody.code : ''

    if (code === 'duplicate_parameter') {
      return NextResponse.json(
        { error: 'Cette adresse est déjà inscrite.' },
        { status: 409 }
      )
    }

    if (code === 'invalid_parameter') {
      return NextResponse.json(
        { error: 'Adresse email invalide.' },
        { status: 400 }
      )
    }

    console.error('[newsletter] Erreur Brevo', brevoResponse.status, errorBody)
    return NextResponse.json(
      { error: 'Inscription impossible pour le moment.' },
      { status: 502 }
    )
  } catch (error) {
    console.error('[newsletter] Erreur inattendue', error)
    return NextResponse.json(
      { error: 'Une erreur est survenue.' },
      { status: 500 }
    )
  }
}
