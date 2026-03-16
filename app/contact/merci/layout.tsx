import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Message envoyé',
  description: 'Votre message a été envoyé avec succès. Notre équipe pastorale vous répondra dans les plus brefs délais.',
}

export default function MerciLayout({ children }: { children: React.ReactNode }) {
  return children
}
