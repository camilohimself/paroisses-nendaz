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
      <section className="bg-white py-24 border-b-4 border-sky-500">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-7xl md:text-9xl font-black mb-8 leading-none tracking-tight">
            <span className="text-neutral-anthracite">CONTACT</span>
            <br />
            <span className="text-sky-500 text-4xl md:text-6xl font-normal tracking-wide">& INFORMATIONS</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-gris max-w-2xl mx-auto">
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
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Adresse</h3>
                    <p className="text-gray-600">
                      Route de Nendaz 355<br />
                      1996 Basse-Nendaz<br />
                      Suisse
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Téléphone</h3>
                    <p className="text-gray-600">+41 27 288 22 50</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">paroisse_nendaz@bluemail.ch</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Horaires</h3>
                    <p className="text-gray-600">
                      Mardi et Vendredi<br />
                      8h - 11h30<br />
                      14h - 16h30
                    </p>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="mt-8 p-6 bg-red-50 border border-red-200 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-2">Urgences</h3>
                <p className="text-red-700 text-sm">
                  Pour l&apos;onction des malades et autres urgences pastorales
                </p>
                <p className="text-red-800 font-semibold mt-2">
                  24h/24 • 7j/7
                </p>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Écrivez-nous</h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Prénom *
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nom *
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required 
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Sujet *
                  </label>
                  <select 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Choisissez un sujet...</option>
                    <option value="bapteme">Demande de baptême</option>
                    <option value="mariage">Demande de mariage</option>
                    <option value="catechisme">Inscription catéchisme</option>
                    <option value="reservation">Réservation salle</option>
                    <option value="intention">Intention de messe</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Décrivez votre demande..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-paroisse-bleuRoi text-white py-3 px-6 rounded-lg hover:bg-paroisse-bleuRoi/90 transition font-semibold"
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
              <div className="h-48 bg-gray-200 flex items-center justify-center">
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Abbé Félicien Roux</h3>
                <p className="text-blue-600 font-medium mb-3">Prêtre</p>
                <div className="text-sm text-gray-600 space-y-1">
                  <p className="font-medium">+41 27 288 22 50</p>
                  <a href="mailto:paroisse_nendaz@bluemail.ch" className="text-blue-500 hover:underline">
                    Email
                  </a>
                </div>
              </div>
            </div>

            {/* Blandine Bornet */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Blandine Bornet</h3>
                <p className="text-purple-600 font-medium mb-3">Agent pastoral</p>
                <div className="text-sm text-gray-600 space-y-1">
                  <p className="font-medium">+41 27 288 51 59</p>
                  <a href="mailto:paroisse_nendaz@bluemail.ch" className="text-blue-500 hover:underline">
                    Email
                  </a>
                </div>
              </div>
            </div>

            {/* Jean-Philippe Glassey */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Jean-Philippe Glassey</h3>
                <p className="text-green-600 font-medium mb-3">Agent pastoral</p>
                <div className="text-sm text-gray-600 space-y-1">
                  <p className="font-medium">+41 27 207 13 18</p>
                  <a href="mailto:paroisse_nendaz@bluemail.ch" className="text-blue-500 hover:underline">
                    Email
                  </a>
                </div>
              </div>
            </div>

            {/* Martin Fendrych */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Martin Fendrych</h3>
                <p className="text-orange-600 font-medium mb-3">Agent pastoral</p>
                <div className="text-sm text-gray-600 space-y-1">
                  <p className="font-medium">+41 27 346 00 03</p>
                  <a href="mailto:paroisse_nendaz@bluemail.ch" className="text-blue-500 hover:underline">
                    Email
                  </a>
                </div>
              </div>
            </div>

            {/* Nadia Fendrych */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Nadia Fendrych</h3>
                <p className="text-purple-600 font-medium mb-3">Agent pastoral</p>
                <div className="text-sm text-gray-600 space-y-1">
                  <p className="font-medium">+41 27 346 00 03</p>
                  <a href="mailto:paroisse_nendaz@bluemail.ch" className="text-blue-500 hover:underline">
                    Email
                  </a>
                </div>
              </div>
            </div>

            {/* Camilo Rivera */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Camilo Rivera</h3>
                <p className="text-blue-600 font-medium mb-3">Agent pastoral</p>
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
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                <p className="text-blue-700">
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
                <h3 className="text-xl font-bold text-center mb-6 text-blue-800">Paroisse de Nendaz</h3>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center py-2 border-b border-blue-200">
                      <span className="font-semibold text-blue-900">Félicien Roux</span>
                      <span className="text-blue-700 text-xs">Curé</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-blue-200">
                      <span className="font-semibold text-blue-900">Gilles Broccard</span>
                      <span className="text-blue-700 text-xs">Président</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-blue-200">
                      <span className="font-semibold text-blue-900">Serge Darioli</span>
                      <span className="text-blue-700 text-xs">Caissier</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-blue-200">
                      <span className="font-semibold text-blue-900">Solange Bressoud</span>
                      <span className="text-blue-700 text-xs">Secrétaire</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-blue-200">
                      <span className="font-semibold text-blue-900">Johan Favre</span>
                      <span className="text-blue-700 text-xs">Membre</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-blue-200">
                      <span className="font-semibold text-blue-900">Gilles Briguet</span>
                      <span className="text-blue-700 text-xs">Membre</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-blue-200">
                      <span className="font-semibold text-blue-900">Richard Neuwerth</span>
                      <span className="text-blue-700 text-xs">Membre</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-semibold text-blue-900">Charles-Henri Fournier</span>
                      <span className="text-blue-700 text-xs text-right">Délégué commune</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conseil de Veysonnaz */}
              <div>
                <h3 className="text-xl font-bold text-center mb-6 text-green-800">Paroisse de Veysonnaz</h3>
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center py-2 border-b border-green-200">
                      <span className="font-semibold text-green-900">Félicien Roux</span>
                      <span className="text-green-700 text-xs">Curé</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-green-200">
                      <span className="font-semibold text-green-900">Christian Charbonnet</span>
                      <span className="text-green-700 text-xs">Président</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-green-200">
                      <span className="font-semibold text-green-900">Pierre-Alain Lathion</span>
                      <span className="text-green-700 text-xs">Caissier</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-green-200">
                      <span className="font-semibold text-green-900">Benjamin Revaz</span>
                      <span className="text-green-700 text-xs">Membre</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-green-200">
                      <span className="font-semibold text-green-900">Laurence Fournier</span>
                      <span className="text-green-700 text-xs text-right">Déléguée commune Veysonnaz</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-semibold text-green-900">Charles-Henri Fournier</span>
                      <span className="text-green-700 text-xs text-right">Délégué commune Nendaz</span>
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