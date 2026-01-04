'use client'

import { ReactNode } from 'react'
import { trackContent } from '@/lib/analytics-events'

interface TrackedLinkProps {
  href: string
  children: ReactNode
  className?: string
  context: string
  onClick?: () => void
  target?: string
  rel?: string
  'aria-label'?: string
}

export default function TrackedLink({
  href,
  children,
  className,
  context,
  onClick,
  target,
  rel,
  'aria-label': ariaLabel
}: TrackedLinkProps) {
  const handleClick = () => {
    // Track avec select_content (événement standard GA4)
    if (href.includes('enoria.app')) {
      const source = context.includes('header') ? 'header'
        : context.includes('footer') ? 'footer'
        : context.includes('card') ? 'card'
        : 'other'
      trackContent.selectEnoria(source as 'header' | 'footer' | 'card' | 'other')
    } else if (href.includes('youtube.com') || href.includes('youtu.be')) {
      const videoIdMatch = href.match(/(?:v=|\/)([\w-]{11})/)
      const videoId = videoIdMatch ? videoIdMatch[1] : 'channel'
      trackContent.selectYoutube(videoId, context)
    } else if (href.startsWith('tel:')) {
      const numero = href.replace('tel:', '')
      trackContent.selectPhone(numero, context)
    } else if (href.startsWith('mailto:')) {
      const email = href.replace('mailto:', '')
      trackContent.selectEmail(email, context)
    } else if (href.startsWith('http')) {
      trackContent.selectExternalLink(href, context)
    }

    if (onClick) onClick()
  }

  return (
    <a
      href={href}
      className={className}
      onClick={handleClick}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  )
}
