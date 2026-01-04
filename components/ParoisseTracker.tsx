'use client'

import { useEffect, useRef } from 'react'
import { trackPastoral } from '@/lib/analytics-events'

type ParoisseSlug = 'aproz' | 'basse-nendaz' | 'brignon' | 'fey' | 'haute-nendaz' | 'saclentse' | 'veysonnaz'

interface ParoisseTrackerProps {
  slug: string
  nom: string
}

export default function ParoisseTracker({ slug, nom }: ParoisseTrackerProps) {
  const hasTracked = useRef(false)

  useEffect(() => {
    if (hasTracked.current) return
    hasTracked.current = true

    // Only track official paroisses (not chapels)
    const validSlugs: ParoisseSlug[] = ['aproz', 'basse-nendaz', 'brignon', 'fey', 'haute-nendaz', 'saclentse', 'veysonnaz']
    if (validSlugs.includes(slug as ParoisseSlug)) {
      trackPastoral.paroisseView(slug as ParoisseSlug, nom)
    }
  }, [slug, nom])

  return null
}
