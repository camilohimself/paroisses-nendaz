'use client'

import { useEffect, useRef } from 'react'
import { trackPastoral } from '@/lib/analytics-events'

type SacrementType = 'bapteme' | 'communion' | 'confirmation' | 'mariage' | 'pardon' | 'onction-malades'
type ParoisseSlug = 'aproz' | 'basse-nendaz' | 'brignon' | 'fey' | 'haute-nendaz' | 'saclentse' | 'veysonnaz'

interface PageTrackerProps {
  type: 'sacrement' | 'paroisse' | 'priere' | 'liturgie'
  sacrement?: SacrementType
  paroisseSlug?: ParoisseSlug
  paroisseNom?: string
  section?: string
  page?: string
}

export default function PageTracker({
  type,
  sacrement,
  paroisseSlug,
  paroisseNom,
  section,
  page
}: PageTrackerProps) {
  const hasTracked = useRef(false)

  useEffect(() => {
    if (hasTracked.current) return
    hasTracked.current = true

    switch (type) {
      case 'sacrement':
        if (sacrement) {
          trackPastoral.sacrementView(sacrement)
        }
        break
      case 'paroisse':
        if (paroisseSlug && paroisseNom) {
          trackPastoral.paroisseView(paroisseSlug, paroisseNom)
        }
        break
      case 'priere':
        trackPastoral.priereView(section)
        break
      case 'liturgie':
        if (page) {
          trackPastoral.liturgieView(page)
        }
        break
    }
  }, [type, sacrement, paroisseSlug, paroisseNom, section, page])

  return null
}
