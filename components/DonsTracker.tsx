'use client'

import { useEffect, useRef } from 'react'
import { trackDons } from '@/lib/analytics-events'

export default function DonsTracker() {
  const hasTrackedView = useRef(false)
  const hasTrackedTwint = useRef(false)

  useEffect(() => {
    // Track page view once
    if (!hasTrackedView.current) {
      trackDons.pageView()
      hasTrackedView.current = true
    }

    // Track TWINT QR visibility after 3 seconds
    const timer = setTimeout(() => {
      if (!hasTrackedTwint.current) {
        trackDons.twintView()
        hasTrackedTwint.current = true
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return null
}
