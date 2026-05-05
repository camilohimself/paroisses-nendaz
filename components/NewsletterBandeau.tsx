'use client'

import { useState, FormEvent } from 'react'
import { Mail, ArrowRight, Check, AlertCircle, Loader2 } from 'lucide-react'
import { trackNewsletter } from '@/lib/analytics-events'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function NewsletterBandeau() {
  const [email, setEmail] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (status === 'loading' || status === 'success') return

    if (honeypot) {
      setStatus('success')
      return
    }

    setStatus('loading')
    setErrorMessage('')
    trackNewsletter.submit()

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim().toLowerCase() })
      })

      const data = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(data.error || 'Une erreur est survenue.')
      }

      setStatus('success')
      setEmail('')
      trackNewsletter.subscribed()
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Une erreur est survenue.'
      setStatus('error')
      setErrorMessage(message)
      trackNewsletter.error(message)
    }
  }

  const isLocked = status === 'loading' || status === 'success'

  return (
    <div className="border-t border-gray-200 pt-8 pb-2">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-start gap-3 max-w-md">
          <Mail className="w-5 h-5 text-enoria mt-0.5 shrink-0" aria-hidden="true" />
          <div>
            <p className="text-sm font-medium text-neutral-anthracite">
              Recevez la newsletter
            </p>
            <p className="text-xs text-neutral-gris mt-0.5 leading-relaxed">
              Un mot mensuel des paroisses de Nendaz et Veysonnaz dans votre boîte mail.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-2 md:max-w-sm md:w-full"
          noValidate
        >
          <input
            type="text"
            name="website"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute left-[-9999px] w-px h-px overflow-hidden"
          />

          <label htmlFor="newsletter-email" className="sr-only">
            Adresse email
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="votre@email.ch"
            required
            disabled={isLocked}
            className="flex-1 px-3 py-2 text-sm rounded-lg border border-gray-300 bg-white text-neutral-anthracite placeholder:text-neutral-gris/70 focus:outline-none focus:ring-2 focus:ring-enoria/40 focus:border-enoria transition disabled:bg-gray-50 disabled:text-neutral-gris"
          />
          <button
            type="submit"
            disabled={isLocked}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg bg-enoria text-white hover:bg-enoria/90 transition disabled:opacity-60 disabled:cursor-not-allowed shrink-0"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                <span>Envoi…</span>
              </>
            ) : status === 'success' ? (
              <>
                <Check className="w-4 h-4" aria-hidden="true" />
                <span>Envoyé</span>
              </>
            ) : (
              <>
                <span>S’inscrire</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </>
            )}
          </button>
        </form>
      </div>

      <div aria-live="polite" className="mt-2 min-h-[1.25rem]">
        {status === 'success' && (
          <p className="text-xs text-enoria flex items-center gap-1.5 md:justify-end">
            <Check className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span>Vérifiez votre boîte mail pour confirmer votre inscription.</span>
          </p>
        )}
        {status === 'error' && errorMessage && (
          <p className="text-xs text-paroisse-rougeFonce flex items-center gap-1.5 md:justify-end">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span>{errorMessage}</span>
          </p>
        )}
      </div>
    </div>
  )
}
