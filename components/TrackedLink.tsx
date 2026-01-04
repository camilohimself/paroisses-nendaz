'use client'

import { ReactNode } from 'react'
import { trackExternal, trackContact } from '@/lib/analytics-events'

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
    // Track based on link type
    if (href.includes('enoria.app')) {
      const source = context.includes('header') ? 'header'
        : context.includes('footer') ? 'footer'
        : context.includes('card') ? 'card'
        : 'other'
      trackExternal.enoriaClick(source as 'header' | 'footer' | 'card' | 'other')
    } else if (href.includes('youtube.com') || href.includes('youtu.be')) {
      // Extract video ID if present
      const videoIdMatch = href.match(/(?:v=|\/)([\w-]{11})/)
      const videoId = videoIdMatch ? videoIdMatch[1] : 'channel'
      trackExternal.youtubeClick(videoId, context)
    } else if (href.startsWith('tel:')) {
      const numero = href.replace('tel:', '')
      trackContact.phoneClick(numero, context)
    } else if (href.startsWith('mailto:')) {
      const email = href.replace('mailto:', '')
      trackContact.emailClick(email, context)
    } else if (href.startsWith('http')) {
      trackExternal.linkClick(href, context)
    }

    // Call original onClick if provided
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
