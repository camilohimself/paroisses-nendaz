export default function PastoralePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-green-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Pastorale</h1>
          <p className="text-xl opacity-90">Sacrements • Catéchèse • Communauté</p>
        </div>
      </section>

      {/* Sacrements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Sacrements</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Baptême */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 text-xl">💧</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Baptême</h3>
              <ul className="text-sm text-gray-700 space-y-2 mb-4">
                <li>• Âge: 0-7 ans ou adultes</li>
                <li>• Préparation: 2 rencontres</li>
                <li>• Documents requis</li>
                <li>• Contact secrétariat</li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                Demander un baptême
              </button>
            </div>

            {/* Première Communion */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-yellow-600 text-xl">🍞</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Première Communion</h3>
              <ul className="text-sm text-gray-700 space-y-2 mb-4">
                <li>• Âge: 8-9 ans (3H-4H)</li>
                <li>• Parcours: Septembre à mai</li>
                <li>• Inscription: Juin précédent</li>
                <li>• Responsable: Catéchiste</li>
              </ul>
              <button className="w-full bg-yellow-600 text-white py-2 px-4 rounded hover:bg-yellow-700 transition">
                Inscription catéchisme
              </button>
            </div>

            {/* Confirmation */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-red-600 text-xl">🕊️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Confirmation</h3>
              <ul className="text-sm text-gray-700 space-y-2 mb-4">
                <li>• Âge: 14-15 ans (10CO-11CO)</li>
                <li>• Parcours: 2 ans</li>
                <li>• Retraite obligatoire</li>
                <li>• Évêque présent</li>
              </ul>
              <button className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition">
                Parcours confirmation
              </button>
            </div>

            {/* Mariage */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-pink-600 text-xl">💒</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Mariage</h3>
              <ul className="text-sm text-gray-700 space-y-2 mb-4">
                <li>• Préparation: 6 mois minimum</li>
                <li>• Sessions: 4 rencontres</li>
                <li>• Documents requis</li>
                <li>• Cours préparation obligatoire</li>
              </ul>
              <button className="w-full bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700 transition">
                Demander un mariage
              </button>
            </div>

            {/* Onction des malades */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-purple-600 text-xl">🙏</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Onction des malades</h3>
              <ul className="text-sm text-gray-700 space-y-2 mb-4">
                <li>• Sur demande</li>
                <li>• À domicile ou EMS</li>
                <li>• Contact urgence disponible</li>
                <li>• 24h/24 • 7j/7</li>
              </ul>
              <button className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition">
                Appel urgence
              </button>
            </div>

            {/* Réconciliation */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-indigo-600 text-xl">✝️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Réconciliation</h3>
              <ul className="text-sm text-gray-700 space-y-2 mb-4">
                <li>• Samedi: 17h00-17h45</li>
                <li>• Sur rendez-vous</li>
                <li>• Temps forts liturgiques</li>
                <li>• Confession individuelle</li>
              </ul>
              <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition">
                Prendre rendez-vous
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Catéchèse */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Catéchèse</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <div className="text-4xl mb-4">👶</div>
              <h3 className="text-xl font-semibold mb-3">Éveil à la foi</h3>
              <p className="text-gray-600 mb-4">3-6 ans</p>
              <ul className="text-sm text-left space-y-1">
                <li>• 1 fois par mois</li>
                <li>• Parents-enfants</li>
                <li>• Samedi matin</li>
                <li>• Activités ludiques</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold mb-3">Catéchisme</h3>
              <p className="text-gray-600 mb-4">7-15 ans</p>
              <ul className="text-sm text-left space-y-1">
                <li>• Hebdomadaire période scolaire</li>
                <li>• Par classe d&apos;âge</li>
                <li>• Supports modernes</li>
                <li>• Préparation sacrements</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow text-center">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-3">Parcours adultes</h3>
              <p className="text-gray-600 mb-4">Adultes</p>
              <ul className="text-sm text-left space-y-1">
                <li>• Sur demande</li>
                <li>• Baptême adultes</li>
                <li>• Approfondissement foi</li>
                <li>• Rencontres thématiques</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Groupes et activités */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Groupes et activités</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Groupes de prière</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold">Chapelet</h4>
                  <p className="text-gray-600 text-sm">Mardi 18h00 • Basse-Nendaz</p>
                  <p className="text-gray-600 text-sm">Mai et octobre: quotidien</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold">Adoration</h4>
                  <p className="text-gray-600 text-sm">Jeudi 19h00-20h00 • Haute-Nendaz</p>
                  <p className="text-gray-600 text-sm">Premier vendredi: 9h00-10h00</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Services paroissiaux</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold">Visiteurs de malades</h4>
                  <p className="text-gray-600 text-sm">Groupe de bénévoles</p>
                  <p className="text-gray-600 text-sm">Visites domicile et EMS</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold">Servants de messe</h4>
                  <p className="text-gray-600 text-sm">Formation jeunes</p>
                  <p className="text-gray-600 text-sm">Service liturgique</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold">Chorale</h4>
                  <p className="text-gray-600 text-sm">Répétitions hebdomadaires</p>
                  <p className="text-gray-600 text-sm">Messes solennelles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}