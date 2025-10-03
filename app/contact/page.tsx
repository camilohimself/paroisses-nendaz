export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="py-12 bg-white border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-neutral-anthracite mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Contactez-nous
          </h1>
          <div className="w-24 h-0.5 bg-sky-500 mx-auto mb-6"></div>
          <p className="text-neutral-gris italic max-w-2xl mx-auto text-lg">
            Nous sommes à votre écoute pour vous accompagner
          </p>
        </div>
      </div>

      {/* Contact Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Titre Section */}
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-neutral-anthracite mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Secrétariat paroissial
              </h2>
              <p className="text-neutral-gris max-w-2xl mx-auto">
                Caroline Karlen vous accueille pour toutes vos demandes
              </p>
            </div>

            {/* Liste verticale style VERSION 2 */}
            <div className="space-y-0">

              {/* Adresse */}
              <div className="group relative border-b-2 border-neutral-grisClaire">
                <div className="block py-10 px-8 hover:bg-neutral-grisClaire/50 transition-all duration-300 border-l-4 border-transparent hover:border-sky-500">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="mb-3">
                        <h3 className="text-2xl font-bold text-neutral-anthracite group-hover:text-sky-600 transition-colors mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                          Adresse
                        </h3>
                        <p className="text-sm text-sky-600 font-semibold uppercase tracking-wide">
                          Secrétariat paroissial
                        </p>
                      </div>
                      <p className="text-neutral-gris leading-relaxed">
                        Route de la Cure 1<br />
                        1996 Basse-Nendaz<br />
                        Suisse
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Téléphone */}
              <div className="group relative border-b-2 border-neutral-grisClaire">
                <a href="tel:0272882343" className="block py-10 px-8 hover:bg-neutral-grisClaire/50 transition-all duration-300 border-l-4 border-transparent hover:border-emerald-500">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="mb-3">
                        <h3 className="text-2xl font-bold text-neutral-anthracite group-hover:text-emerald-600 transition-colors mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                          Téléphone
                        </h3>
                        <p className="text-sm text-emerald-600 font-semibold uppercase tracking-wide">
                          Joignable aux heures d'ouverture
                        </p>
                      </div>
                      <p className="text-neutral-gris leading-relaxed text-xl font-semibold">
                        027 288 23 43
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              {/* Email */}
              <div className="group relative border-b-2 border-neutral-grisClaire">
                <a href="mailto:paroisse.nendaz@netplus.ch" className="block py-10 px-8 hover:bg-neutral-grisClaire/50 transition-all duration-300 border-l-4 border-transparent hover:border-amber-500">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="mb-3">
                        <h3 className="text-2xl font-bold text-neutral-anthracite group-hover:text-amber-600 transition-colors mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                          Email
                        </h3>
                        <p className="text-sm text-amber-600 font-semibold uppercase tracking-wide">
                          Réponse sous 48h
                        </p>
                      </div>
                      <p className="text-neutral-gris leading-relaxed">
                        paroisse.nendaz@netplus.ch
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              {/* Horaires */}
              <div className="group relative border-b-2 border-neutral-grisClaire">
                <div className="block py-10 px-8 hover:bg-neutral-grisClaire/50 transition-all duration-300 border-l-4 border-transparent hover:border-rose-500">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="mb-3">
                        <h3 className="text-2xl font-bold text-neutral-anthracite group-hover:text-rose-600 transition-colors mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                          Horaires d'ouverture
                        </h3>
                        <p className="text-sm text-rose-600 font-semibold uppercase tracking-wide">
                          Présence Caroline Karlen
                        </p>
                      </div>
                      <p className="text-neutral-gris leading-relaxed">
                        Lundi - Vendredi<br />
                        8h30 - 11h30
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Urgences */}
              <div className="group relative">
                <div className="block py-10 px-8 hover:bg-red-50/50 transition-all duration-300 border-l-4 border-transparent hover:border-red-500">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="mb-3">
                        <h3 className="text-2xl font-bold text-neutral-anthracite group-hover:text-red-600 transition-colors mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                          Urgences pastorales
                        </h3>
                        <p className="text-sm text-red-600 font-semibold uppercase tracking-wide">
                          24h/24 • 7j/7
                        </p>
                      </div>
                      <p className="text-neutral-gris leading-relaxed">
                        Pour l'onction des malades et autres urgences pastorales, contactez-nous à tout moment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Services du secrétariat */}
            <div className="mt-20">
              <div className="relative py-12">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-sky-500 to-transparent"></div>
                <h3 className="text-3xl font-bold text-neutral-anthracite mb-8 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Services proposés
                </h3>
                <ul className="space-y-3 text-neutral-gris max-w-2xl mx-auto">
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-3 mt-1">•</span>
                    <span>Annonce de manifestations pour le Bulletin paroissial (délai: 1 mois à l'avance)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-3 mt-1">•</span>
                    <span>Intentions de messe (délai: 2 semaines avant) - possible via le site web</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-3 mt-1">•</span>
                    <span>Informations sur les sacrements (baptême, mariage, confirmation...)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-3 mt-1">•</span>
                    <span>Inscriptions catéchèse et toute autre question paroissiale</span>
                  </li>
                </ul>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-sky-500 to-transparent"></div>
              </div>
            </div>

            {/* Formulaire de contact style épuré */}
            <div className="mt-20">
              <h2 className="text-4xl font-bold text-neutral-anthracite mb-12 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
                Écrivez-nous
              </h2>

              <form className="space-y-8 max-w-2xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-neutral-anthracite mb-3">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      className="w-full px-5 py-4 border-2 border-neutral-grisClaire rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-neutral-anthracite mb-3">
                      Nom *
                    </label>
                    <input
                      type="text"
                      className="w-full px-5 py-4 border-2 border-neutral-grisClaire rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-neutral-anthracite mb-3">
                    Email *
                  </label>
                  <input
                    type="email"
                    className="w-full px-5 py-4 border-2 border-neutral-grisClaire rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-neutral-anthracite mb-3">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-5 py-4 border-2 border-neutral-grisClaire rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-neutral-anthracite mb-3">
                    Sujet *
                  </label>
                  <select
                    className="w-full px-5 py-4 border-2 border-neutral-grisClaire rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all"
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
                  <label className="block text-sm font-semibold text-neutral-anthracite mb-3">
                    Message *
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-5 py-4 border-2 border-neutral-grisClaire rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                    placeholder="Décrivez votre demande..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-sky-500 text-white py-4 px-8 rounded-lg hover:bg-sky-600 transition-all font-semibold text-lg shadow-lg hover:shadow-xl"
                >
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-neutral-grisClaire/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-neutral-anthracite mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Équipe pastorale
              </h2>
              <div className="w-24 h-0.5 bg-emerald-500 mx-auto mb-6"></div>
              <p className="text-neutral-gris italic max-w-2xl mx-auto">
                Notre équipe à votre service
              </p>
            </div>

            {/* Liste style VERSION 2 */}
            <div className="space-y-0 bg-white rounded-lg overflow-hidden shadow-lg">

              {/* Abbé Félicien Roux */}
              <div className="group relative border-b-2 border-neutral-grisClaire">
                <div className="block py-8 px-8 hover:bg-neutral-grisClaire/50 transition-all duration-300 border-l-4 border-transparent hover:border-sky-500">
                  <h3 className="text-xl font-bold text-neutral-anthracite group-hover:text-sky-600 transition-colors mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Abbé Félicien Roux
                  </h3>
                  <p className="text-sm text-sky-600 font-semibold uppercase tracking-wide mb-3">
                    Prêtre
                  </p>
                  <div className="text-neutral-gris space-y-1 text-sm">
                    <p>Rte de Nendaz 355, 1996 Basse-Nendaz</p>
                    <p className="font-semibold">027.288.22.50</p>
                  </div>
                </div>
              </div>

              {/* Blandine Bornet */}
              <div className="group relative border-b-2 border-neutral-grisClaire">
                <div className="block py-8 px-8 hover:bg-neutral-grisClaire/50 transition-all duration-300 border-l-4 border-transparent hover:border-emerald-500">
                  <h3 className="text-xl font-bold text-neutral-anthracite group-hover:text-emerald-600 transition-colors mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Blandine Bornet
                  </h3>
                  <p className="text-sm text-emerald-600 font-semibold uppercase tracking-wide mb-3">
                    Membre de l'équipe
                  </p>
                  <div className="text-neutral-gris space-y-1 text-sm">
                    <p>Ch des Crêtes 9, 1996 Basse-Nendaz</p>
                    <p className="font-semibold">027.288.51.59</p>
                  </div>
                </div>
              </div>

              {/* Jean-Philippe Glassey */}
              <div className="group relative border-b-2 border-neutral-grisClaire">
                <div className="block py-8 px-8 hover:bg-neutral-grisClaire/50 transition-all duration-300 border-l-4 border-transparent hover:border-amber-500">
                  <h3 className="text-xl font-bold text-neutral-anthracite group-hover:text-amber-600 transition-colors mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Jean-Philippe Glassey
                  </h3>
                  <p className="text-sm text-amber-600 font-semibold uppercase tracking-wide mb-3">
                    Membre de l'équipe
                  </p>
                  <div className="text-neutral-gris space-y-1 text-sm">
                    <p>Rte de Magrappé 9, 1993 Veysonnaz</p>
                    <p className="font-semibold">027.207.13.18</p>
                  </div>
                </div>
              </div>

              {/* Martin Fendrych */}
              <div className="group relative border-b-2 border-neutral-grisClaire">
                <div className="block py-8 px-8 hover:bg-neutral-grisClaire/50 transition-all duration-300 border-l-4 border-transparent hover:border-rose-500">
                  <h3 className="text-xl font-bold text-neutral-anthracite group-hover:text-rose-600 transition-colors mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Martin Fendrych
                  </h3>
                  <p className="text-sm text-rose-600 font-semibold uppercase tracking-wide mb-3">
                    Membre de l'équipe
                  </p>
                  <div className="text-neutral-gris space-y-1 text-sm">
                    <p>Ch du Fio 15, 1991 Salins</p>
                    <p className="font-semibold">027.346.00.03</p>
                  </div>
                </div>
              </div>

              {/* Nadia Fendrych */}
              <div className="group relative border-b-2 border-neutral-grisClaire">
                <div className="block py-8 px-8 hover:bg-neutral-grisClaire/50 transition-all duration-300 border-l-4 border-transparent hover:border-indigo-500">
                  <h3 className="text-xl font-bold text-neutral-anthracite group-hover:text-indigo-600 transition-colors mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Nadia Fendrych
                  </h3>
                  <p className="text-sm text-indigo-600 font-semibold uppercase tracking-wide mb-3">
                    Membre de l'équipe
                  </p>
                  <div className="text-neutral-gris space-y-1 text-sm">
                    <p>Chemin du Fio 15, 1991 Salins</p>
                    <p className="font-semibold">027.346.00.03</p>
                  </div>
                </div>
              </div>

              {/* Camilo Rivera */}
              <div className="group relative">
                <div className="block py-8 px-8 hover:bg-neutral-grisClaire/50 transition-all duration-300 border-l-4 border-transparent hover:border-lime-600">
                  <h3 className="text-xl font-bold text-neutral-anthracite group-hover:text-lime-700 transition-colors mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Camilo Rivera
                  </h3>
                  <p className="text-sm text-lime-700 font-semibold uppercase tracking-wide mb-3">
                    Membre de l'équipe
                  </p>
                  <div className="text-neutral-gris space-y-1 text-sm">
                    <p>Rue de Clodevis, 1967 Bramois</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Conseil de paroisse */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-neutral-anthracite mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Conseil de paroisse
              </h2>
              <div className="w-24 h-0.5 bg-rose-500 mx-auto mb-6"></div>
              <p className="text-neutral-gris italic max-w-2xl mx-auto">
                Organisation et services paroissiaux
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Bureau */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg border-t-4 border-sky-500">
                <div className="bg-sky-500/10 py-6 px-8">
                  <h3 className="text-2xl font-bold text-neutral-anthracite" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Bureau
                  </h3>
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-neutral-grisClaire">
                    <span className="font-semibold text-neutral-anthracite">Président</span>
                    <span className="text-neutral-gris">Jean-Daniel Bourban</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-neutral-grisClaire">
                    <span className="font-semibold text-neutral-anthracite">Vice-président</span>
                    <span className="text-neutral-gris">Marie Praz</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-neutral-grisClaire">
                    <span className="font-semibold text-neutral-anthracite">Secrétaire</span>
                    <span className="text-neutral-gris">Philippe Fournier</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-semibold text-neutral-anthracite">Caissier</span>
                    <span className="text-neutral-gris">André Mariéthoz</span>
                  </div>
                </div>
              </div>

              {/* Personnes ressources */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg border-t-4 border-emerald-500">
                <div className="bg-emerald-500/10 py-6 px-8">
                  <h3 className="text-2xl font-bold text-neutral-anthracite" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Personnes ressources
                  </h3>
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-neutral-grisClaire">
                    <span className="font-semibold text-neutral-anthracite">Catéchèse</span>
                    <span className="text-neutral-gris">Anne Glassey</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-neutral-grisClaire">
                    <span className="font-semibold text-neutral-anthracite">Servants de messe</span>
                    <span className="text-neutral-gris">Nicolas Fournier</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-neutral-grisClaire">
                    <span className="font-semibold text-neutral-anthracite">Chorale</span>
                    <span className="text-neutral-gris">Isabelle Délèze</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-semibold text-neutral-anthracite">Visiteurs malades</span>
                    <span className="text-neutral-gris">Groupe bénévoles</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Citation finale */}
            <div className="mt-20">
              <div className="relative py-12">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-rose-500 to-transparent"></div>
                <p className="text-neutral-anthracite text-2xl leading-relaxed max-w-2xl mx-auto text-center" style={{ fontFamily: 'Crimson Text, serif', fontStyle: 'italic' }}>
                  « L'Église est une communion de personnes qui vivent ensemble dans l'amour du Christ. »
                </p>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-rose-500 to-transparent"></div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}