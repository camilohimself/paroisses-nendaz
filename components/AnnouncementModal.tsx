'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { X } from 'lucide-react'
import Image from 'next/image'

const STORAGE_KEY = 'loto-eglises-2026-dismissed'
const EXPIRY_DATE = new Date('2026-02-23T00:00:00') // After event day (22 feb)

export default function AnnouncementModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Auto-expire after event date
    if (new Date() >= EXPIRY_DATE) return

    // Don't show if dismissed this session
    if (sessionStorage.getItem(STORAGE_KEY)) return

    // Small delay for better UX (let page load first)
    const timer = setTimeout(() => {
      setIsOpen(true)
      // Trigger enter animation on next frame
      requestAnimationFrame(() => setIsVisible(true))
    }, 600)
    return () => clearTimeout(timer)
  }, [])

  // Focus the close button when modal opens
  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      closeButtonRef.current.focus()
    }
  }, [isOpen])

  const handleClose = useCallback(() => {
    setIsVisible(false)
    // Wait for exit animation before unmounting
    setTimeout(() => {
      setIsOpen(false)
      sessionStorage.setItem(STORAGE_KEY, 'true')
    }, 200)
  }, [])

  // Close on Escape key & trap focus inside modal
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose()
        return
      }

      // Focus trap: keep Tab cycling within the modal
      if (e.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        const first = focusable[0]
        const last = focusable[focusable.length - 1]

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last?.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first?.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, handleClose])

  if (!isOpen) return null

  return (
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      aria-label="Annonce : Loto des Eglises"
      className={`
        fixed inset-0 z-50 flex items-center justify-center p-4
        transition-opacity duration-300 ease-out
        ${isVisible ? 'opacity-100' : 'opacity-0'}
      `}
    >
      {/* Overlay */}
      <div
        className={`
          absolute inset-0 bg-black/60 transition-all duration-300
          ${isVisible ? 'backdrop-blur-sm' : ''}
        `}
        onClick={handleClose}
      />

      {/* Modal */}
      <div
        className={`
          relative w-full max-w-sm sm:max-w-md md:max-w-lg
          transition-transform duration-300 ease-out
          ${isVisible ? 'scale-100' : 'scale-95'}
        `}
      >
        {/* Close button */}
        <button
          ref={closeButtonRef}
          onClick={handleClose}
          className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-stone-100 transition-colors"
          aria-label="Fermer l'annonce"
        >
          <X className="w-5 h-5 text-stone-700" />
        </button>

        {/* Poster image */}
        <div className="rounded-xl overflow-hidden shadow-2xl border-2 border-white/20">
          <Image
            src="/images/loto-eglises-2026.jpg"
            alt="Loto des Eglises de Basse-Nendaz et Haute-Nendaz - Dimanche 22 fevrier 2026 a 17h30 - Salle de la Biolette"
            width={800}
            height={1131}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </div>
  )
}
