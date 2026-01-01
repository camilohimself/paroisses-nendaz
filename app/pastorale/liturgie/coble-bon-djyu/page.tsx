'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  ArrowLeft,
  Users,
  Music,
  BookOpen,
  Heart,
  ChevronDown,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Camera
} from 'lucide-react'

export default function CobleBonDjyuPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      question: "Qui peut rejoindre le groupe ?",
      answer: "Toutes les familles et les personnes ayant à cœur de vivre de belles célébrations en communauté. Notre groupe n'étant pas uniquement un chœur, chacun peut venir avec ses charismes et ses talents (musicaux, organisationnels, artistiques,...)."
    },
    {
      question: "Quels sont les engagements ?",
      answer: "L'objectif est d'animer au minimum quatre messes par année scolaire (2x à Haute-Nendaz et 2x à Basse-Nendaz). La répétition a lieu 1h avant le début de la messe et est ouverte à tous les enfants chanteurs et musiciens motivés."
    },
    {
      question: "Comment se déroule une animation ?",
      answer: "Chacun peut participer selon son charisme : chant, musique, lectures, servants de messe, accueil... Les enfants ont une place d'honneur dans nos célébrations. La répétition 1h avant permet de se préparer ensemble dans la joie."
    }
  ]

  const prochainesDates = [
    {
      date: "Samedi 28 février 2026",
      heure: "17h30",
      lieu: "Haute-Nendaz",
      lieuComplet: "Église de Haute-Nendaz"
    },
    {
      date: "Dimanche 26 avril 2026",
      heure: "10h00",
      lieu: "Basse-Nendaz",
      lieuComplet: "Église de Basse-Nendaz"
    }
  ]

  const charismes = [
    { icon: Music, label: "Chant & Musique" },
    { icon: BookOpen, label: "Lectures" },
    { icon: Users, label: "Servants de messe" },
    { icon: Heart, label: "Accueil" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-rose-50/30">
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-24">

        {/* Retour */}
        <div className="max-w-4xl mx-auto mb-8">
          <Link
            href="/pastorale/liturgie"
            className="inline-flex items-center gap-2 text-stone-600 hover:text-rose-400 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Retour à Liturgie</span>
          </Link>
        </div>

        {/* En-tête */}
        <div className="max-w-4xl mx-auto mb-12 md:mb-16 text-center">
          {/* Icône groupe */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center">
              <Users className="w-10 h-10 text-rose-400" />
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-stone-800 mb-4 tracking-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}>
            i cöble dû Bon Djyû
          </h1>

          <p className="text-lg sm:text-xl text-rose-400 font-medium mb-6"
             style={{ fontFamily: 'Crimson Text, serif', fontStyle: 'italic' }}>
            « La bande du Bon Dieu » en patois nendard
          </p>

          <div className="inline-block px-6 py-2 bg-rose-50 border border-rose-200 rounded-full">
            <p className="text-sm uppercase tracking-widest text-rose-500 font-semibold">
              Animation liturgique familiale
            </p>
          </div>
        </div>

        {/* Photo placeholder */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative bg-gradient-to-br from-rose-50 to-stone-100 rounded-2xl border-2 border-dashed border-rose-200 p-12 md:p-16 text-center">
            <Camera className="w-16 h-16 text-rose-300 mx-auto mb-4" />
            <p className="text-lg text-rose-400 font-medium">Photo du groupe à venir</p>
            <p className="text-sm text-stone-500 mt-2">Prochaine séance photo lors de notre prochaine célébration</p>
          </div>
        </div>

        {/* Description principale */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-2xl shadow-lg border border-stone-200 p-8 md:p-10">
            <h2 className="text-2xl font-bold text-stone-800 mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}>
              Notre mission
            </h2>

            <div className="prose prose-stone max-w-none">
              <p className="text-lg text-stone-600 leading-relaxed mb-6">
                <strong className="text-stone-800">i cöble dû Bon Djyû</strong> est née d'une volonté d'animer des messes où chacun peut participer, selon son charisme, à rendre la célébration encore plus belle et priante.
              </p>

              <p className="text-stone-600 leading-relaxed mb-6">
                L'objectif est de proposer une animation de messe en complément des messes de familles déjà existantes. Vivre sa foi aujourd'hui est difficile et se mettre à plusieurs pour prier peut aider.
              </p>

              <p className="text-stone-600 leading-relaxed">
                Pour cela nous aspirons à nous rassembler afin de (re)découvrir et de vivre ensemble le mystère de la messe, et qu'une véritable famille et communauté existe dans l'Église.
              </p>
            </div>

            {/* Charismes */}
            <div className="mt-8 pt-8 border-t border-stone-200">
              <h3 className="text-lg font-semibold text-stone-800 mb-4">Une place pour chaque charisme</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {charismes.map((charisme, index) => (
                  <div key={index} className="flex flex-col items-center p-4 bg-rose-50/50 rounded-xl border border-rose-100">
                    <charisme.icon className="w-8 h-8 text-rose-400 mb-2" />
                    <span className="text-sm text-stone-700 text-center font-medium">{charisme.label}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-stone-500 mt-4 text-center italic">
                Les enfants ont une place d'honneur dans nos célébrations
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-stone-800 mb-6 text-center"
              style={{ fontFamily: 'Playfair Display, serif' }}>
            Questions fréquentes
          </h2>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-stone-50 transition-colors"
                >
                  <span className="font-semibold text-stone-800">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-rose-400 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'max-h-48' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 pb-4 text-stone-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prochaines dates */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-stone-800 mb-6 text-center"
              style={{ fontFamily: 'Playfair Display, serif' }}>
            Prochaines célébrations
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {prochainesDates.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-rose-200 p-6 hover:border-rose-300 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-rose-400" />
                  </div>
                  <div>
                    <p className="font-bold text-stone-800 text-lg">{event.date}</p>
                    <p className="text-rose-500 font-semibold">{event.heure}</p>
                    <div className="flex items-center gap-1 mt-2 text-stone-600">
                      <MapPin className="w-4 h-4" />
                      <span>{event.lieuComplet}</span>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-stone-500 bg-stone-50 rounded-lg px-3 py-2">
                  Répétition 1h avant la messe, ouverte à tous
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-rose-50 via-rose-100 to-stone-100 rounded-2xl p-8 md:p-10 border-2 border-rose-200">
            <h2 className="text-2xl font-bold mb-2 text-center text-stone-800"
                style={{ fontFamily: 'Playfair Display, serif' }}>
              Rejoignez-nous
            </h2>
            <p className="text-stone-600 text-center mb-8">
              Contactez Jonathan pour plus d'informations ou pour rejoindre le groupe
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+41794555387"
                className="inline-flex items-center gap-3 px-6 py-3 bg-white text-stone-700 rounded-xl font-semibold hover:bg-rose-50 transition-colors border border-rose-300 shadow-sm"
              >
                <Phone className="w-5 h-5 text-rose-400" />
                +41 79 455 53 87
              </a>
              <a
                href="mailto:Jonathan.droxler@gmail.com"
                className="inline-flex items-center gap-3 px-6 py-3 bg-rose-300 text-stone-800 rounded-xl font-semibold hover:bg-rose-400 transition-colors shadow-sm"
              >
                <Mail className="w-5 h-5" />
                Envoyer un email
              </a>
            </div>

            <p className="text-center mt-6 text-stone-500 text-sm">
              Responsable : Jonathan Droxler
            </p>
          </div>
        </div>

        {/* Citation */}
        <div className="max-w-3xl mx-auto">
          <div className="relative py-12 px-8 bg-white border-2 border-stone-200 rounded-2xl shadow-lg text-center">
            <div className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-rose-300 rounded-tl-2xl"></div>
            <div className="absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-rose-300 rounded-tr-2xl"></div>
            <div className="absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-rose-300 rounded-bl-2xl"></div>
            <div className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-rose-300 rounded-br-2xl"></div>

            <p className="text-2xl md:text-3xl font-bold text-stone-800 mb-4 leading-relaxed"
               style={{ fontFamily: 'Crimson Text, serif', fontStyle: 'italic' }}>
              « Là où deux ou trois sont réunis en mon nom,<br />je suis au milieu d'eux. »
            </p>
            <div className="w-12 h-px bg-rose-300 mx-auto mb-3"></div>
            <p className="text-sm text-stone-500 uppercase tracking-widest font-semibold">
              Matthieu 18, 20
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
