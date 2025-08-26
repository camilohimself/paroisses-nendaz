export default function ParoissesPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Paroisses</h1>
          <p className="text-xl opacity-90">Nendaz et Veysonnaz</p>
        </div>
      </section>

      {/* Parishes Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Nendaz */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center">Paroisse de Nendaz</h2>
              
              <div className="space-y-8">
                {/* Église Saint-Léger */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">Photo Église Saint-Léger</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Église Saint-Léger</h3>
                    <p className="text-gray-600 mb-4">Basse-Nendaz</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Construite en 1860</li>
                      <li>• Capacité: 350 places</li>
                      <li>• Orgue historique</li>
                      <li>• Messe principale: Dimanche 10h00</li>
                    </ul>
                  </div>
                </div>

                {/* Chapelle Saint-Michel */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">Photo Chapelle Saint-Michel</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Chapelle Saint-Michel</h3>
                    <p className="text-gray-600 mb-4">Haute-Nendaz</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Rénovée en 2010</li>
                      <li>• Capacité: 200 places</li>
                      <li>• Messes touristiques</li>
                      <li>• Samedi 18h00</li>
                    </ul>
                  </div>
                </div>

                {/* Chapelle Bleusy */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">Photo Chapelle Bleusy</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Chapelle Bleusy</h3>
                    <p className="text-gray-600 mb-4">Montagne</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Chapelle de montagne</li>
                      <li>• Pèlerinage annuel en août</li>
                      <li>• Accès à pied uniquement</li>
                      <li>• Vue panoramique sur les Alpes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Veysonnaz */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center">Paroisse de Veysonnaz</h2>
              
              <div className="space-y-8">
                {/* Église Saint-Symphorien */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">Photo Église Saint-Symphorien</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Église Saint-Symphorien</h3>
                    <p className="text-gray-600 mb-4">Centre du village</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Construction: 1932</li>
                      <li>• Rénovation complète: 2018</li>
                      <li>• Vitraux modernes</li>
                      <li>• Dimanche 11h00 (été)</li>
                    </ul>
                  </div>
                </div>

                {/* Info complémentaire */}
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-blue-800">Histoire</h3>
                  <p className="text-blue-700 text-sm leading-relaxed">
                    La paroisse de Veysonnaz, créée au XXe siècle, dessert principalement 
                    la station touristique et les résidents permanents. Elle maintient 
                    une tradition d&apos;accueil particulièrement forte pendant la saison hivernale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Informations pratiques</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4 text-green-600">Horaires d&apos;été</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Samedi 18h00</span>
                  <span>Haute-Nendaz</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche 10h00</span>
                  <span>Basse-Nendaz</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche 11h00</span>
                  <span>Veysonnaz</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Horaires d&apos;hiver</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Samedi 18h00</span>
                  <span>Haute-Nendaz</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche 10h00</span>
                  <span>Basse-Nendaz</span>
                </div>
                <div className="text-gray-500 text-center mt-4">
                  Pas de messe à Veysonnaz
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Messes de semaine</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Mardi 8h30</span>
                  <span>Basse-Nendaz</span>
                </div>
                <div className="flex justify-between">
                  <span>Jeudi 18h30</span>
                  <span>Haute-Nendaz</span>
                </div>
                <div className="flex justify-between">
                  <span>Vendredi 8h30</span>
                  <span>Veysonnaz</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}