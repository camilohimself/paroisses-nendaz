'use client'

import { useState, useRef } from 'react'
import { trackContact } from '@/lib/analytics-events'

type ContactSujet = 'Demande de baptême' | 'Demande de mariage' | 'Inscription catéchisme' | 'Réservation salle' | 'Intention de messe' | 'Autre'

export default function ContactForm() {
  const [hasStarted, setHasStarted] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleFirstInteraction = () => {
    if (!hasStarted) {
      trackContact.formStart()
      setHasStarted(true)
    }
  }

  const handleSubmit = () => {
    const form = formRef.current
    if (form) {
      const sujetSelect = form.querySelector('select[name="sujet"]') as HTMLSelectElement
      const sujet = sujetSelect?.value as ContactSujet
      if (sujet) {
        trackContact.formSubmit(sujet)
      }
    }
  }

  return (
    <form
      ref={formRef}
      action="https://formsubmit.co/paroisse_nendaz@bluemail.ch"
      method="POST"
      className="space-y-6"
      onSubmit={handleSubmit}
    >
      {/* FormSubmit Configuration */}
      <input type="hidden" name="_subject" value="Nouveau message depuis paroisses-nendaz.ch" />
      <input type="hidden" name="_next" value="https://www.paroisses-nendaz.ch/contact/merci" />
      <input type="hidden" name="_captcha" value="true" />
      <input type="hidden" name="_template" value="table" />

      {/* Honeypot anti-spam (invisible pour les humains) */}
      <input
        type="text"
        name="_honey"
        style={{
          position: 'absolute',
          left: '-9999px',
          top: '-9999px',
          opacity: 0,
          height: 0,
          width: 0,
          zIndex: -1
        }}
        tabIndex={-1}
        autoComplete="off"
      />
      {/* Second honeypot avec nom attrayant pour les bots */}
      <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
        <label htmlFor="website_url">Website</label>
        <input
          type="text"
          name="website_url"
          id="website_url"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-stone-700 mb-2">
            Prénom *
          </label>
          <input
            type="text"
            name="prenom"
            className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            required
            onFocus={handleFirstInteraction}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-stone-700 mb-2">
            Nom *
          </label>
          <input
            type="text"
            name="nom"
            className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            required
            onFocus={handleFirstInteraction}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-stone-700 mb-2">
          Email *
        </label>
        <input
          type="email"
          name="email"
          className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
          required
          onFocus={handleFirstInteraction}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-stone-700 mb-2">
          Téléphone
        </label>
        <input
          type="tel"
          name="telephone"
          className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
          onFocus={handleFirstInteraction}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-stone-700 mb-2">
          Sujet *
        </label>
        <select
          name="sujet"
          className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
          required
          onFocus={handleFirstInteraction}
        >
          <option value="">Choisissez un sujet...</option>
          <option value="Demande de baptême">Demande de baptême</option>
          <option value="Demande de mariage">Demande de mariage</option>
          <option value="Inscription catéchisme">Inscription catéchisme</option>
          <option value="Réservation salle">Réservation salle</option>
          <option value="Intention de messe">Intention de messe</option>
          <option value="Autre">Autre</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-stone-700 mb-2">
          Message *
        </label>
        <textarea
          name="message"
          rows={5}
          className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
          placeholder="Décrivez votre demande..."
          required
          onFocus={handleFirstInteraction}
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-stone-700 text-white py-3 px-6 rounded-lg hover:bg-stone-800 transition font-semibold shadow-lg hover:shadow-xl"
      >
        Envoyer le message
      </button>
    </form>
  )
}
