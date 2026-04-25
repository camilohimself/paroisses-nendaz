import Link from 'next/link'
import {
  Flame,
  Church,
  Users,
  BookOpen,
  Sparkles,
  HelpCircle,
  Download,
  Mail,
  Phone,
  Clock,
  ArrowRight,
} from 'lucide-react'

const SECTIONS = [
  {
    icon: Flame,
    title: 'Les veillées de prière dans les églises du secteur',
    body: (
      <p>
        La veille des funérailles, et quel que soit le type de célébration choisi, les proches
        du défunt peuvent demander à leur paroisse un temps de prière qui se déroule généralement
        au moment de la visite mortuaire. Ces temps de prière sont assurés par des équipes de
        bénévoles dans les églises du secteur (Veysonnaz, Haute-Nendaz, Basse-Nendaz, Fey et
        Aproz). Si vous désirez vivre ce temps de prière, vous pouvez le demander aux
        représentants des Pompes funèbres ou contacter la paroisse.
      </p>
    ),
  },
  {
    icon: Church,
    title: 'Messe de funérailles publique',
    body: (
      <>
        <p>
          De nombreuses personnes désirent être entourées par la communauté pour vivre leur
          deuil lors de funérailles publiques. Dans ce cas, la présence du prêtre est
          indispensable pour le rituel d’Adieu vécu au cours d’une messe annoncée publiquement
          et à horaires fixes en semaine à 17h00 ou le samedi matin à 10h00 (pas le dimanche).
        </p>
        <p className="mt-4">
          Dans ce cas, les familles rencontrent le prêtre pour préparer avec lui la
          célébration. Elles peuvent demander ou non une veillée de prière la veille des
          funérailles.
        </p>
        <div className="mt-5 border-l-2 border-amber-500/70 bg-amber-50/60 px-4 py-3 text-sm italic text-stone-700">
          <span className="font-semibold not-italic text-stone-900">NB.</span> Dès l’annonce du
          décès et sauf cas exceptionnels, les chorales qui desservent les différentes églises
          du secteur se rendent disponibles pour venir chanter la messe d’enterrement publique.
        </div>
      </>
    ),
  },
  {
    icon: Users,
    title: (
      <>
        Funérailles dans l’intimité
        <sup className="ml-0.5 text-xs font-medium text-stone-500">*</sup> et sans messe
      </>
    ),
    body: (
      <>
        <p>
          Nos paroisses proposent un autre type de funérailles chrétiennes composées d’une
          liturgie de la Parole sans communion et avec rituel du dernier Adieu. Ces funérailles
          sont vécues généralement
          <sup className="ml-0.5 text-xs font-medium text-stone-500">*</sup> dans l’intimité de
          la famille et des proches à des horaires fixés d’entente avec les familles. Comme la
          messe concerne toute la communauté, nous ne proposons pas de messe d’enterrement dans
          l’intimité. Les funérailles dans l’intimité se déroulent sans la présence d’un prêtre.
        </p>
        <p className="mt-4">
          Deux agents pastoraux laïcs formés à cette tâche prennent en charge ce type de
          célébrations dans notre secteur selon une répartition préétablie en fonction de leurs
          disponibilités&nbsp;: il s’agit de MM{' '}
          <a
            href="mailto:martinbruno@bluewin.ch"
            className="text-amber-700 underline decoration-amber-500/40 underline-offset-2 hover:text-amber-800"
          >
            Martin Fendrych
          </a>{' '}
          et{' '}
          <a
            href="mailto:jpglassey@bluewin.ch"
            className="text-amber-700 underline decoration-amber-500/40 underline-offset-2 hover:text-amber-800"
          >
            Jean-Philippe Glassey
          </a>
          . Une rencontre de préparation avec celui qui conduira la cérémonie est indispensable
          pour une bonne préparation de ce moment.
        </p>
        <div className="mt-5 border-l-2 border-amber-500/70 bg-amber-50/60 px-4 py-3 text-sm italic text-stone-700">
          <span className="font-semibold not-italic text-stone-900">NB.</span>{' '}
          <span className="font-semibold not-italic text-stone-700">*</span>
          Les funérailles sans messe proposées par les paroisses sont chrétiennes et peuvent
          être adaptées aux demandes des familles ainsi qu’à la personnalité du défunt.
          Généralement, elles sont vécues dans l’intimité, mais il est possible qu’elles soient
          publiques et annoncées au préalable.
        </div>
      </>
    ),
  },
  {
    icon: BookOpen,
    title: 'La messe de 7ème ou du souvenir',
    body: (
      <p>
        Après tout type de funérailles décrit ci-dessus, les familles peuvent demander aux
        paroisses une messe de septième ou du souvenir à une date choisie lors d’une messe
        dominicale. Durant ces messes il sera fait mention du défunt au moment de la prière
        eucharistique, mais ce ne sera pas l’occasion d’hommages publiques au défunt, cette
        pratique étant réservée aux funérailles.
      </p>
    ),
  },
  {
    icon: Sparkles,
    title: 'Dépôt de l’urne',
    body: (
      <p>
        En cas de crémation, le moment du dépôt de l’urne peut faire l’objet d’un temps de
        prière chrétienne en présence du prêtre. Une demande peut être faite par les familles
        dans ce sens et le prêtre se rendra présent, généralement avant une messe qu’il vient
        célébrer dans l’église voisine et qui sera souvent une messe du souvenir pour le
        défunt.
      </p>
    ),
  },
  {
    icon: HelpCircle,
    title: 'Autres demandes',
    body: (
      <p>
        Si vous souhaitez une forme de cérémonie non chrétienne et pour ce qui concerne le
        choix de la crémation ou de l’enterrement, adressez-vous à l’entreprise de Pompes
        funèbres choisie qui pourra adéquatement vous conseiller. En ce qui concerne
        l’emplacement de la tombe dans le cimetière ou de l’urne au columbarium (ou au Jardin
        du souvenir), adressez-vous aux Communes qui sont compétentes pour cette mise en
        œuvre.
      </p>
    ),
  },
]

export default function AccompagnementDeuilPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-stone-50 via-white to-stone-50/50">
      <div className="container mx-auto px-4 sm:px-6 py-10 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-stone-500">
            <Link href="/" className="hover:text-stone-800 transition-colors">
              Accueil
            </Link>
            <span>/</span>
            <Link href="/contact" className="hover:text-stone-800 transition-colors">
              Contact
            </Link>
            <span>/</span>
            <span className="text-stone-800 font-medium">Accompagnement du deuil</span>
          </div>
        </nav>

        {/* Hero */}
        <header className="mb-12 md:mb-16 max-w-4xl">
          <div className="mb-7 flex items-center gap-4 flex-wrap">
            <span
              className="text-stone-600 italic text-base md:text-lg leading-none tracking-wide"
              style={{ fontFamily: 'var(--font-crimson)' }}
            >
              Office pastoral du deuil
            </span>
            <span className="h-px w-12 bg-amber-600/40" aria-hidden="true" />
            <span className="text-[11px] uppercase tracking-[0.22em] text-stone-400 font-medium">
              Nendaz · Veysonnaz
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-stone-900 mb-5 tracking-tight leading-tight">
            Accompagnement du deuil
          </h1>
          <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-3xl font-light italic">
            Services proposés dans le secteur de Nendaz-Veysonnaz.
          </p>
          <p className="mt-6 text-base md:text-lg text-stone-700 leading-relaxed max-w-3xl text-justify hyphens-auto">
            Les paroisses catholiques de Nendaz-Veysonnaz sont soucieuses d’offrir un
            accompagnement digne et adapté aux personnes qui vivent leur deuil. Voici une brève
            présentation des services religieux chrétiens offerts dans le cadre paroissial, en
            parallèle à d’autres services qui peuvent être proposés par les entreprises de
            Pompes funèbres.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact?sujet=Accompagnement%20du%20deuil"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-stone-900 px-6 py-3 text-sm font-semibold text-white hover:bg-stone-800 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Contacter la paroisse
            </Link>
            <a
              href="/documents/accompagnement-deuil.pdf"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-800 hover:bg-stone-50 transition-colors"
            >
              <Download className="w-4 h-4" />
              Télécharger le document (PDF)
            </a>
          </div>
        </header>

        {/* Grid 2/3 */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Contenu principal — 6 sections */}
          <div className="lg:col-span-2 space-y-5">
            {SECTIONS.map((section, idx) => {
              const Icon = section.icon
              const roman = ['I', 'II', 'III', 'IV', 'V', 'VI'][idx]
              return (
                <section
                  key={idx}
                  className="bg-white rounded-xl border border-stone-200 shadow-sm p-6 md:p-8"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-amber-700" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs uppercase tracking-widest text-stone-400 font-semibold mb-1">
                        {roman}
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold text-stone-900 leading-tight">
                        {section.title}
                      </h2>
                    </div>
                  </div>
                  <div className="text-stone-700 leading-relaxed text-[15px] md:text-base pl-0 md:pl-15 text-justify hyphens-auto">
                    {section.body}
                  </div>
                </section>
              )
            })}

            {/* Signature */}
            <div className="text-center pt-8 pb-4">
              <p className="text-lg italic text-stone-700 font-light">Votre équipe pastorale</p>
              <p className="text-xs uppercase tracking-widest text-stone-400 mt-2">
                Nendaz · Veysonnaz · Haute-Nendaz · Basse-Nendaz · Fey · Aproz
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            {/* Qui contacter ? */}
            <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-6 lg:sticky lg:top-24">
              <h3 className="text-sm uppercase tracking-widest text-stone-500 font-semibold mb-5">
                Qui contacter&nbsp;?
              </h3>

              <div className="space-y-5 text-sm">
                <div>
                  <p className="font-semibold text-stone-900 mb-1">Veillée de prière</p>
                  <p className="text-stone-600 leading-relaxed">
                    Représentants des Pompes funèbres ou secrétariat paroissial.
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100">
                  <p className="font-semibold text-stone-900 mb-1">Messe de funérailles</p>
                  <p className="text-stone-600 leading-relaxed">
                    Rencontre avec le prêtre pour préparer la célébration.
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100">
                  <p className="font-semibold text-stone-900 mb-2">Funérailles dans l’intimité</p>
                  <p className="text-stone-600 leading-relaxed mb-3">
                    Agents pastoraux laïcs :
                  </p>
                  <div className="space-y-2">
                    <a
                      href="mailto:martinbruno@bluewin.ch"
                      className="flex items-center gap-2 text-stone-700 hover:text-amber-700 transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>Martin Fendrych</span>
                    </a>
                    <a
                      href="mailto:jpglassey@bluewin.ch"
                      className="flex items-center gap-2 text-stone-700 hover:text-amber-700 transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>Jean-Philippe Glassey</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Secrétariat paroissial */}
            <div className="bg-white rounded-xl border border-stone-200 shadow-sm border-l-2 border-l-amber-700 p-6">
              <p className="text-[11px] uppercase tracking-[0.22em] text-stone-400 font-medium mb-1">
                Coordonnées
              </p>
              <h3
                className="text-xl text-stone-900 italic mb-5 leading-tight"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Secrétariat paroissial
              </h3>

              <dl className="divide-y divide-stone-100 text-sm">
                <div className="flex items-baseline gap-3 py-3 first:pt-0">
                  <Phone className="w-3.5 h-3.5 text-amber-700 flex-shrink-0 self-center" />
                  <dt className="text-[11px] uppercase tracking-[0.18em] text-stone-500 font-medium w-20 flex-shrink-0">
                    Téléphone
                  </dt>
                  <dd className="flex-1">
                    <a
                      href="tel:+41272882250"
                      className="text-stone-800 hover:text-amber-700 transition-colors"
                    >
                      +41 27 288 22 50
                    </a>
                  </dd>
                </div>

                <div className="flex items-baseline gap-3 py-3">
                  <Mail className="w-3.5 h-3.5 text-amber-700 flex-shrink-0 self-center" />
                  <dt className="text-[11px] uppercase tracking-[0.18em] text-stone-500 font-medium w-20 flex-shrink-0">
                    Courriel
                  </dt>
                  <dd className="flex-1 min-w-0">
                    <a
                      href="mailto:paroisse_nendaz@bluemail.ch"
                      className="text-stone-800 hover:text-amber-700 transition-colors break-all"
                    >
                      paroisse_nendaz@bluemail.ch
                    </a>
                  </dd>
                </div>

                <div className="flex items-baseline gap-3 py-3 last:pb-0">
                  <Clock className="w-3.5 h-3.5 text-amber-700 flex-shrink-0 self-start mt-1" />
                  <dt className="text-[11px] uppercase tracking-[0.18em] text-stone-500 font-medium w-20 flex-shrink-0 self-start mt-0.5">
                    Heures
                  </dt>
                  <dd className="flex-1 text-stone-800">
                    <p>Mardi et vendredi</p>
                    <p className="text-stone-500 text-[13px] mt-0.5">
                      8h – 11h30 · 14h – 16h30
                    </p>
                  </dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>

        {/* Liens croisés */}
        <section className="mt-16 pt-10 border-t border-stone-200">
          <h2 className="text-xs uppercase tracking-widest text-stone-400 font-semibold mb-6">
            Pour aller plus loin
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/sacrements/onction-malades"
              className="group bg-white rounded-xl border border-stone-200 p-6 hover:border-stone-400 hover:shadow-sm transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-stone-400 mb-2">
                    Sacrement
                  </p>
                  <h3 className="text-lg font-bold text-stone-900 mb-1">Onction des malades</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    Sacrement pour confier la souffrance à la compassion du Christ, à recevoir
                    tant que la personne parle.
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-stone-900 group-hover:translate-x-1 transition-all flex-shrink-0 mt-6" />
              </div>
            </Link>
            <Link
              href="/paroisses"
              className="group bg-white rounded-xl border border-stone-200 p-6 hover:border-stone-400 hover:shadow-sm transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-stone-400 mb-2">
                    Secteur
                  </p>
                  <h3 className="text-lg font-bold text-stone-900 mb-1">
                    Églises du secteur
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    Veysonnaz, Haute-Nendaz, Basse-Nendaz, Fey, Aproz, Brignon, Saclentse —
                    horaires et informations par paroisse.
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-stone-900 group-hover:translate-x-1 transition-all flex-shrink-0 mt-6" />
              </div>
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
