import type { Metadata } from 'next'
import Link from 'next/link'
import { Check, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Inscription confirmée — Paroisses de Nendaz et Veysonnaz',
  description: 'Votre inscription à la newsletter des paroisses de Nendaz et Veysonnaz est confirmée.',
  robots: { index: false, follow: false }
}

export default function MerciNewsletterPage() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-4 py-20">
      <div className="max-w-lg text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-enoria/10 text-enoria mb-6">
          <Check className="w-7 h-7" aria-hidden="true" strokeWidth={2} />
        </div>
        <h1 className="text-2xl md:text-3xl font-semibold text-neutral-anthracite mb-4">
          Merci, votre inscription est confirmée.
        </h1>
        <p className="text-neutral-gris mb-10 leading-relaxed">
          Vous recevrez désormais la newsletter des paroisses de Nendaz et Veysonnaz dans votre boîte mail. Vous pourrez vous désinscrire à tout moment via le lien en pied de chaque message.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-enoria hover:text-enoria/80 transition"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Retour à l’accueil
        </Link>
      </div>
    </main>
  )
}
