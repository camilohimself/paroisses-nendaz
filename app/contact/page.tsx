import type { Metadata } from 'next'
import Image from 'next/image'
import BreadcrumbSchema from '@/components/structured-data/BreadcrumbSchema';
import PersonSchema from '@/components/structured-data/PersonSchema';
import ContactForm from '@/components/ContactForm';

const teamMembers = [
  {
    name: 'Abbé Félicien Roux',
    jobTitle: 'Prêtre',
    telephone: '+41272882250',
    email: 'felicienroux20@gmail.com',
    image: '/images/equipe/felicien.jpg',
  },
  {
    name: 'Blandine Bornet',
    jobTitle: 'Agent pastoral',
    telephone: '+41272885159',
    email: 'bllescretes@gmail.com',
    image: '/images/equipe/blandine.jpg',
  },
  {
    name: 'Jean-Philippe Glassey',
    jobTitle: 'Agent pastoral',
    telephone: '+41272071318',
    email: 'jpglassey@bluewin.ch',
    image: '/images/equipe/jp.jpg',
  },
  {
    name: 'Martin Fendrych',
    jobTitle: 'Agent pastoral',
    telephone: '+41273460003',
    email: 'martinbruno@bluewin.ch',
    image: '/images/equipe/martin.jpg',
  },
  {
    name: 'Nadia Fendrych',
    jobTitle: 'Agent pastoral',
    telephone: '+41273460003',
    email: 'nadia.fendrych@gmail.com',
    image: '/images/equipe/nadia.jpg',
  },
];

export const metadata: Metadata = {
  title: 'Contact et informations',
  description: 'Contactez les paroisses de Nendaz et Veysonnaz. Secrétariat paroissial, équipe pastorale, formulaire de contact et horaires d\'ouverture.',
  openGraph: {
    title: 'Contact - Paroisses de Nendaz',
    description: 'Contactez les paroisses de Nendaz et Veysonnaz. Secrétariat, équipe pastorale et formulaire de contact.',
    url: 'https://www.paroisses-nendaz.ch/contact',
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <BreadcrumbSchema
        items={[
          { name: 'Contact', url: 'https://www.paroisses-nendaz.ch/contact' }
        ]}
      />
      <PersonSchema persons={teamMembers} />

      {/* Header VERSION 2 - Grandes lettres épurées */}
      <section className="bg-white py-24 border-b-4 border-amber-500">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-7xl md:text-9xl font-black mb-8 leading-none tracking-tight">
            <span className="text-stone-800">CONTACT</span>
            <br />
            <span className="text-amber-600 text-4xl md:text-6xl font-normal tracking-wide">& INFORMATIONS</span>
          </h1>
          <p className="text-xl md:text-2xl text-stone-600 max-w-2xl mx-auto">
            Votre paroisse à l'écoute
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Left Column - Contact Details */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Secrétariat paroissial</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-stone-100 rounded-full flex items-center justify-center flex-shrink-0">
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Adresse</h3>
                    <p className="text-stone-600">
                      Route de Nendaz 355<br />
                      1996 Basse-Nendaz<br />
                      Suisse
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-stone-100 rounded-full flex items-center justify-center flex-shrink-0">
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Téléphone</h3>
                    <a href="tel:+41272882250" className="text-amber-600 hover:underline font-medium">
                      +41 27 288 22 50
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-stone-100 rounded-full flex items-center justify-center flex-shrink-0">
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:paroisse_nendaz@bluemail.ch" className="text-amber-600 hover:underline">
                      paroisse_nendaz@bluemail.ch
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-stone-100 rounded-full flex items-center justify-center flex-shrink-0">
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Horaires</h3>
                    <p className="text-stone-600">
                      Mardi et Vendredi<br />
                      8h - 11h30<br />
                      14h - 16h30
                    </p>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="mt-8 p-6 bg-amber-50 border border-amber-300 rounded-lg">
                <h3 className="text-lg font-semibold text-amber-900 mb-2">Urgences</h3>
                <p className="text-amber-800 text-sm">
                  Pour l&apos;onction des malades et autres urgences pastorales
                </p>
                <p className="text-amber-900 font-semibold mt-2">
                  24h/24 • 7j/7
                </p>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div id="formulaire">
              <h2 className="text-3xl font-bold mb-8">Écrivez-nous</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Équipe pastorale</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Abbé Félicien Roux */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <Image
                  src="/images/equipe/felicien.jpg"
                  alt="Abbé Félicien Roux, prêtre des paroisses de Nendaz"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Abbé Félicien Roux</h3>
                <p className="text-stone-600 font-medium mb-3">Prêtre</p>
                <div className="text-sm text-stone-600 space-y-1">
                  <a href="tel:+41272882250" className="text-amber-600 hover:underline font-medium block">
                    +41 27 288 22 50
                  </a>
                  <a href="mailto:felicienroux20@gmail.com" className="text-amber-600 hover:underline block">
                    felicienroux20@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Blandine Bornet */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <Image
                  src="/images/equipe/blandine.jpg"
                  alt="Blandine Bornet, agent pastoral"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Blandine Bornet</h3>
                <p className="text-stone-600 font-medium mb-3">Agent pastoral</p>
                <div className="text-sm text-stone-600 space-y-1">
                  <a href="tel:+41272885159" className="text-amber-600 hover:underline font-medium block">
                    +41 27 288 51 59
                  </a>
                  <a href="mailto:bllescretes@gmail.com" className="text-amber-600 hover:underline block">
                    bllescretes@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Jean-Philippe Glassey */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <Image
                  src="/images/equipe/jp.jpg"
                  alt="Jean-Philippe Glassey, agent pastoral"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Jean-Philippe Glassey</h3>
                <p className="text-stone-600 font-medium mb-3">Agent pastoral</p>
                <div className="text-sm text-stone-600 space-y-1">
                  <a href="tel:+41272071318" className="text-amber-600 hover:underline font-medium block">
                    +41 27 207 13 18
                  </a>
                  <a href="mailto:jpglassey@bluewin.ch" className="text-amber-600 hover:underline block">
                    jpglassey@bluewin.ch
                  </a>
                </div>
              </div>
            </div>

            {/* Martin Fendrych */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <Image
                  src="/images/equipe/martin.jpg"
                  alt="Martin Fendrych, agent pastoral"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Martin Fendrych</h3>
                <p className="text-stone-600 font-medium mb-3">Agent pastoral</p>
                <div className="text-sm text-stone-600 space-y-1">
                  <a href="tel:+41273460003" className="text-amber-600 hover:underline font-medium block">
                    +41 27 346 00 03
                  </a>
                  <a href="mailto:martinbruno@bluewin.ch" className="text-amber-600 hover:underline block">
                    martinbruno@bluewin.ch
                  </a>
                </div>
              </div>
            </div>

            {/* Nadia Fendrych */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <Image
                  src="/images/equipe/nadia.jpg"
                  alt="Nadia Fendrych, agent pastoral"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Nadia Fendrych</h3>
                <p className="text-stone-600 font-medium mb-3">Agent pastoral</p>
                <div className="text-sm text-stone-600 space-y-1">
                  <a href="tel:+41273460003" className="text-amber-600 hover:underline font-medium block">
                    +41 27 346 00 03
                  </a>
                  <a href="mailto:nadia.fendrych@gmail.com" className="text-amber-600 hover:underline block">
                    nadia.fendrych@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Camilo Rivera */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-400 text-sm">Photo à venir</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Camilo Rivera</h3>
                <p className="text-stone-600 font-medium mb-3">Agent de communication</p>
                <div className="text-sm text-stone-600">
                  <a href="mailto:paroissenendaz@gmail.com" className="text-amber-600 hover:underline block">
                    paroissenendaz@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Section Secrétariat */}
          <div className="mt-16 max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Secrétariat</h3>
            <div className="text-gray-600 space-y-4">
              <p className="text-center">
                Vous pouvez prendre contact avec notre secrétaire<br /><strong>Caroline Karlen</strong><br />durant les heures de présence:
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Pour annoncer vos manifestations à paraître dans le Bulletin paroissial (un mois à l'avance), ou sur le site.</li>
                <li>Pour vos intentions de messe (délai 2 semaines avant). Il est possible de les transmettre via notre site.</li>
                <li>Pour toute autre question (baptême, mariages, etc.).</li>
              </ul>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mt-6">
                <p className="text-amber-800">
                  <strong>Horaires du secrétariat :</strong><br/>
                  Mardi et Vendredi : 8h - 11h30<br/>
                  14h - 16h30
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conseils de gestion des Paroisses */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Conseils de gestion des Paroisses</h2>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">

              {/* Conseil de Nendaz */}
              <div>
                <h3 className="text-xl font-bold text-center mb-6 text-stone-800">Paroisse de Nendaz</h3>
                <div className="bg-stone-50 p-6 rounded-lg">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center py-2 border-b border-stone-200">
                      <span className="font-semibold text-stone-900">Félicien Roux</span>
                      <span className="text-stone-700 text-xs">Curé</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-stone-200">
                      <span className="font-semibold text-stone-900">Gilles Broccard</span>
                      <span className="text-stone-700 text-xs">Président</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-stone-200">
                      <span className="font-semibold text-stone-900">Serge Darioli</span>
                      <span className="text-stone-700 text-xs">Caissier</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-stone-200">
                      <span className="font-semibold text-stone-900">Solange Bressoud</span>
                      <span className="text-stone-700 text-xs">Secrétaire</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-stone-200">
                      <span className="font-semibold text-stone-900">Johan Favre</span>
                      <span className="text-stone-700 text-xs">Membre</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-stone-200">
                      <span className="font-semibold text-stone-900">Gilles Briguet</span>
                      <span className="text-stone-700 text-xs">Membre</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-stone-200">
                      <span className="font-semibold text-stone-900">Richard Neuwerth</span>
                      <span className="text-stone-700 text-xs">Membre</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-semibold text-stone-900">Charles-Henri Fournier</span>
                      <span className="text-stone-700 text-xs text-right">Délégué commune</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conseil de Veysonnaz */}
              <div>
                <h3 className="text-xl font-bold text-center mb-6 text-amber-800">Paroisse de Veysonnaz</h3>
                <div className="bg-amber-50 p-6 rounded-lg">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center py-2 border-b border-amber-200">
                      <span className="font-semibold text-amber-900">Félicien Roux</span>
                      <span className="text-amber-700 text-xs">Curé</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-amber-200">
                      <span className="font-semibold text-amber-900">Christian Charbonnet</span>
                      <span className="text-amber-700 text-xs">Président</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-amber-200">
                      <span className="font-semibold text-amber-900">Pierre-Alain Lathion</span>
                      <span className="text-amber-700 text-xs">Caissier</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-amber-200">
                      <span className="font-semibold text-amber-900">Benjamin Revaz</span>
                      <span className="text-amber-700 text-xs">Membre</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-amber-200">
                      <span className="font-semibold text-amber-900">Laurence Fournier</span>
                      <span className="text-amber-700 text-xs text-right">Déléguée commune Veysonnaz</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-semibold text-amber-900">Charles-Henri Fournier</span>
                      <span className="text-amber-700 text-xs text-right">Délégué commune Nendaz</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Liens utiles */}
      <section className="py-12 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8 text-stone-800">Liens utiles</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <a href="/pastorale" className="group bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all text-center">
                <p className="font-semibold text-stone-800 group-hover:text-amber-700 transition-colors">Vie pastorale</p>
                <p className="text-xs text-stone-500">Sacrements & catéchèse</p>
              </a>
              <a href="/paroisses" className="group bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all text-center">
                <p className="font-semibold text-stone-800 group-hover:text-amber-700 transition-colors">Nos paroisses</p>
                <p className="text-xs text-stone-500">Églises & chapelles</p>
              </a>
              <a href="/actualites" className="group bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all text-center">
                <p className="font-semibold text-stone-800 group-hover:text-amber-700 transition-colors">Actualités</p>
                <p className="text-xs text-stone-500">Événements à venir</p>
              </a>
              <a href="/dons" className="group bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all text-center">
                <p className="font-semibold text-stone-800 group-hover:text-amber-700 transition-colors">Faire un don</p>
                <p className="text-xs text-stone-500">Soutenir la paroisse</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}