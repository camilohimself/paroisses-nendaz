import BreadcrumbSchema from '@/components/structured-data/BreadcrumbSchema';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <BreadcrumbSchema
        items={[
          { name: 'Contact', url: 'https://www.paroisses-nendaz.ch/contact' }
        ]}
      />

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

              <form
                action="https://formsubmit.co/paroisse_nendaz@bluemail.ch"
                method="POST"
                className="space-y-6"
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
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-stone-700 text-white py-3 px-6 rounded-lg hover:bg-stone-800 transition font-semibold shadow-lg hover:shadow-xl"
                >
                  Envoyer le message
                </button>
              </form>
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
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img
                  src="/images/equipe/felicien.jpg"
                  alt="Abbé Félicien Roux"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Abbé Félicien Roux</h3>
                <p className="text-stone-600 font-medium mb-3">Prêtre</p>
                <div className="text-sm text-stone-600">
                  <a href="tel:+41272882250" className="text-amber-600 hover:underline font-medium block">
                    +41 27 288 22 50
                  </a>
                </div>
              </div>
            </div>

            {/* Blandine Bornet */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img
                  src="/images/equipe/blandine.jpg"
                  alt="Blandine Bornet"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Blandine Bornet</h3>
                <p className="text-stone-600 font-medium mb-3">Agent pastoral</p>
                <div className="text-sm text-stone-600">
                  <a href="tel:+41272885159" className="text-amber-600 hover:underline font-medium block">
                    +41 27 288 51 59
                  </a>
                </div>
              </div>
            </div>

            {/* Jean-Philippe Glassey */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img
                  src="/images/equipe/jp.jpg"
                  alt="Jean-Philippe Glassey"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Jean-Philippe Glassey</h3>
                <p className="text-stone-600 font-medium mb-3">Agent pastoral</p>
                <div className="text-sm text-stone-600">
                  <a href="tel:+41272071318" className="text-amber-600 hover:underline font-medium block">
                    +41 27 207 13 18
                  </a>
                </div>
              </div>
            </div>

            {/* Martin Fendrych */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img
                  src="/images/equipe/martin.jpg"
                  alt="Martin Fendrych"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Martin Fendrych</h3>
                <p className="text-stone-600 font-medium mb-3">Agent pastoral</p>
                <div className="text-sm text-stone-600">
                  <a href="tel:+41273460003" className="text-amber-600 hover:underline font-medium block">
                    +41 27 346 00 03
                  </a>
                </div>
              </div>
            </div>

            {/* Nadia Fendrych */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img
                  src="/images/equipe/nadia.jpg"
                  alt="Nadia Fendrych"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Nadia Fendrych</h3>
                <p className="text-stone-600 font-medium mb-3">Agent pastoral</p>
                <div className="text-sm text-stone-600">
                  <a href="tel:+41273460003" className="text-amber-600 hover:underline font-medium block">
                    +41 27 346 00 03
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
    </div>
  )
}