'use client'

import { useEffect, useRef } from 'react'
import { trackDons } from '@/lib/analytics-events'

export default function DonsTracker() {
  const hasTrackedCheckout = useRef(false)
  const hasTrackedTwint = useRef(false)

  useEffect(() => {
    // Track begin_checkout (événement e-commerce GA4 standard)
    if (!hasTrackedCheckout.current) {
      trackDons.beginCheckout()
      hasTrackedCheckout.current = true
    }

    // Track add_payment_info pour TWINT après 3 secondes
    const timer = setTimeout(() => {
      if (!hasTrackedTwint.current) {
        trackDons.addPaymentInfoTwint()
        hasTrackedTwint.current = true
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return null
}
