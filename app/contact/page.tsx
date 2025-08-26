export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gray-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact</h1>
          <p className="text-xl opacity-90">Nous sommes à votre écoute</p>
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
                    <span className="text-blue-600 text-sm">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Adresse</h3>
                    <p className="text-gray-600">
                      Route de la Cure 1<br />
                      1996 Basse-Nendaz<br />
                      Suisse
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 text-sm">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Téléphone</h3>
                    <p className="text-gray-600">027 288 23 43</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 text-sm">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">paroisse.nendaz@netplus.ch</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-600 text-sm">⏰</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Horaires</h3>
                    <p className="text-gray-600">
                      Lundi - Vendredi<br />
                      8h30 - 11h30
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
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition font-semibold"
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Curé */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-4xl">👨‍💼</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Abbé Vincent Lafargue</h3>
                <p className="text-blue-600 font-medium mb-2">Curé</p>
                <p className="text-sm text-gray-600">
                  Responsable pastoral des deux paroisses
                </p>
              </div>
            </div>

            {/* Vicaire */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-4xl">👨‍💼</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Abbé Jean-Marie Cettou</h3>
                <p className="text-green-600 font-medium mb-2">Vicaire</p>
                <p className="text-sm text-gray-600">
                  Pastorale des jeunes et catéchèse
                </p>
              </div>
            </div>

            {/* Assistante pastorale */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-4xl">👩‍💼</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Sophie Fournier</h3>
                <p className="text-purple-600 font-medium mb-2">Assistante pastorale</p>
                <p className="text-sm text-gray-600">
                  Accompagnement sacrements et animation
                </p>
              </div>
            </div>

            {/* Sacristain */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-4xl">👨‍🔧</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Pierre Délèze</h3>
                <p className="text-orange-600 font-medium mb-2">Sacristain</p>
                <p className="text-sm text-gray-600">
                  Entretien des églises et préparation liturgique
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conseil de paroisse */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Conseil de paroisse</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-blue-800">Bureau</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium">Président:</span>
                    <span>Jean-Daniel Bourban</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Vice-président:</span>
                    <span>Marie Praz</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Secrétaire:</span>
                    <span>Philippe Fournier</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Caissier:</span>
                    <span>André Mariéthoz</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-green-800">Personnes ressources</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium">Catéchèse:</span>
                    <span>Anne Glassey</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Servants de messe:</span>
                    <span>Nicolas Fournier</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Chorale:</span>
                    <span>Isabelle Délèze</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Visiteurs malades:</span>
                    <span>Groupe bénévoles</span>
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