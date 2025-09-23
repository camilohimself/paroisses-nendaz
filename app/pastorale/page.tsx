import Link from 'next/link'

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
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-paroisse-turquoise hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-paroisse-turquoise/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-paroisse-turquoise text-xl">✝️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-anthracite">Réconciliation</h3>
              <ul className="text-sm text-neutral-gris space-y-2 mb-4">
                <li>• Samedi: 17h00-17h45</li>
                <li>• Sur rendez-vous</li>
                <li>• Temps forts liturgiques</li>
                <li>• Confession individuelle</li>
              </ul>
              <button className="w-full bg-paroisse-turquoise text-white py-2 px-4 rounded-lg hover:bg-paroisse-turquoise/90 transition font-medium">
                Prendre rendez-vous
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Catéchèse */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-anthracite mb-4">Catéchèse et Formation</h2>
            <p className="text-lg text-neutral-gris max-w-3xl mx-auto">
              Accompagnement dans la découverte et l&apos;approfondissement de la foi chrétienne,
              adapté à chaque âge et chaque étape de la vie.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center border-l-4 border-paroisse-jaune hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">👶</div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-anthracite">Éveil à la foi</h3>
              <p className="text-paroisse-jaune font-semibold mb-4">3-6 ans</p>
              <ul className="text-sm text-left space-y-2 text-neutral-gris">
                <li>• 1 fois par mois (samedi matin)</li>
                <li>• Approche parents-enfants</li>
                <li>• Activités ludiques et créatives</li>
                <li>• Découverte joyeuse de Jésus</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center border-l-4 border-paroisse-bleuRoi hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-anthracite">Catéchisme</h3>
              <p className="text-paroisse-bleuRoi font-semibold mb-4">7-15 ans</p>
              <ul className="text-sm text-left space-y-2 text-neutral-gris">
                <li>• Rencontres hebdomadaires</li>
                <li>• Groupes par classe d&apos;âge</li>
                <li>• Pédagogie moderne et interactive</li>
                <li>• Préparation aux sacrements</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center border-l-4 border-paroisse-vert hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-anthracite">Parcours adultes</h3>
              <p className="text-paroisse-vert font-semibold mb-4">Adultes</p>
              <ul className="text-sm text-left space-y-2 text-neutral-gris">
                <li>• Formation à la demande</li>
                <li>• Préparation baptême adultes</li>
                <li>• Approfondissement de la foi</li>
                <li>• Conférences et rencontres</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Groupes et activités */}
      <section className="py-16 bg-gradient-to-b from-neutral-grisClaire/30 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-anthracite mb-4">Vie Communautaire</h2>
            <p className="text-lg text-neutral-gris max-w-3xl mx-auto">
              Rejoignez nos groupes de prière et de service pour vivre votre foi en communauté
              et contribuer à la mission paroissiale.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-neutral-anthracite">Groupes de prière</h3>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-4 border-l-4 border-paroisse-bleuRoi shadow-md">
                  <h4 className="font-semibold text-neutral-anthracite mb-2">Chapelet</h4>
                  <p className="text-neutral-gris text-sm mb-1">Mardi 18h00 • Basse-Nendaz</p>
                  <p className="text-neutral-gris text-sm">Mai et octobre: quotidien</p>
                  <span className="inline-block mt-2 px-2 py-1 bg-paroisse-bleuRoi/10 text-paroisse-bleuRoi text-xs rounded-full">
                    Prière mariale
                  </span>
                </div>
                <div className="bg-white rounded-lg p-4 border-l-4 border-paroisse-vert shadow-md">
                  <h4 className="font-semibold text-neutral-anthracite mb-2">Adoration eucharistique</h4>
                  <p className="text-neutral-gris text-sm mb-1">Jeudi 19h00-20h00 • Haute-Nendaz</p>
                  <p className="text-neutral-gris text-sm">Premier vendredi: 9h00-10h00</p>
                  <span className="inline-block mt-2 px-2 py-1 bg-paroisse-vert/10 text-paroisse-vert text-xs rounded-full">
                    Temps de silence
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-neutral-anthracite">Services paroissiaux</h3>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-4 border-l-4 border-paroisse-violet shadow-md">
                  <h4 className="font-semibold text-neutral-anthracite mb-2">Visiteurs de malades</h4>
                  <p className="text-neutral-gris text-sm mb-1">Groupe de bénévoles</p>
                  <p className="text-neutral-gris text-sm">Visites domicile et EMS</p>
                  <span className="inline-block mt-2 px-2 py-1 bg-paroisse-violet/10 text-paroisse-violet text-xs rounded-full">
                    Solidarité
                  </span>
                </div>
                <div className="bg-white rounded-lg p-4 border-l-4 border-paroisse-jaune shadow-md">
                  <h4 className="font-semibold text-neutral-anthracite mb-2">Servants de messe</h4>
                  <p className="text-neutral-gris text-sm mb-1">Formation pour les jeunes</p>
                  <p className="text-neutral-gris text-sm">Service liturgique</p>
                  <span className="inline-block mt-2 px-2 py-1 bg-paroisse-jaune/10 text-paroisse-jaune text-xs rounded-full">
                    Jeunes
                  </span>
                </div>
                <div className="bg-white rounded-lg p-4 border-l-4 border-paroisse-rouge shadow-md">
                  <h4 className="font-semibold text-neutral-anthracite mb-2">Chorale paroissiale</h4>
                  <p className="text-neutral-gris text-sm mb-1">Répétitions hebdomadaires</p>
                  <p className="text-neutral-gris text-sm">Animation des messes solennelles</p>
                  <span className="inline-block mt-2 px-2 py-1 bg-paroisse-rouge/10 text-paroisse-rouge text-xs rounded-full">
                    Musique sacrée
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section contact et informations pratiques */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-neutral-anthracite mb-4">Contact et Informations</h2>
              <p className="text-lg text-neutral-gris">
                Pour toute demande de sacrement ou information sur la vie pastorale
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact principal */}
              <div className="bg-gradient-to-br from-paroisse-bleuRoi/10 to-paroisse-turquoise/10 p-6 rounded-xl border border-paroisse-bleuRoi/20">
                <h3 className="text-xl font-semibold text-neutral-anthracite mb-4 flex items-center">
                  <span className="mr-2">📞</span> Secrétariat paroissial
                </h3>
                <div className="space-y-3 text-neutral-gris">
                  <p><strong>Caroline Karlen</strong></p>
                  <p>📧 paroisse.nendaz@gmail.com</p>
                  <p>📱 027 288 27 58</p>
                  <div className="mt-4 p-3 bg-paroisse-jaune/10 rounded-lg">
                    <p className="text-sm font-medium text-neutral-anthracite">Horaires bureau:</p>
                    <p className="text-sm">Lundi-Vendredi: 8h30-11h30</p>
                  </div>
                </div>
              </div>

              {/* Équipe pastorale */}
              <div className="bg-gradient-to-br from-paroisse-vert/10 to-paroisse-jaune/10 p-6 rounded-xl border border-paroisse-vert/20">
                <h3 className="text-xl font-semibold text-neutral-anthracite mb-4 flex items-center">
                  <span className="mr-2">⛪</span> Équipe pastorale
                </h3>
                <div className="space-y-3 text-neutral-gris text-sm">
                  <div>
                    <p><strong>Abbé Jean-Michel Girard</strong> - Administrateur</p>
                    <p>📱 079 419 52 19</p>
                  </div>
                  <div>
                    <p><strong>Abbé François-Xavier Amherdt</strong> - Modérateur</p>
                    <p>📱 027 322 40 20</p>
                  </div>
                  <div className="mt-4 p-3 bg-paroisse-rouge/10 rounded-lg">
                    <p className="text-xs font-medium text-neutral-anthracite">Urgences 24h/24</p>
                    <p className="text-xs">Numéro d&apos;urgence disponible</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Liens utiles */}
            <div className="mt-12 text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-paroisse-bleuRoi to-paroisse-violet text-white rounded-lg hover:shadow-md transition font-medium"
                >
                  <span className="mr-2">📝</span>
                  Formulaire de contact
                </Link>
                <Link
                  href="/paroisses"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-paroisse-vert to-paroisse-turquoise text-white rounded-lg hover:shadow-md transition font-medium"
                >
                  <span className="mr-2">📍</span>
                  Nos paroisses
                </Link>
                <a
                  href="https://web.enoria.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-enoria to-enoria/80 text-white rounded-lg hover:shadow-md transition font-medium"
                >
                  <span className="mr-2">🔗</span>
                  Plateforme Enoria
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}