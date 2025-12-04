import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-neutral-anthracite border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-neutral-anthracite">
              Paroisses de Nendaz et Veysonnaz
            </h3>
            <div className="text-neutral-gris space-y-2">
              <p>Route de Nendaz 355</p>
              <p>1996 Basse-Nendaz</p>
              <p>Tél: +41 27 288 22 50</p>
              <p>paroisse_nendaz@bluemail.ch</p>
            </div>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-neutral-anthracite">Heures de présence</h3>
            <div className="text-neutral-gris space-y-2">
              <p className="font-medium">Mardi et Vendredi</p>
              <p>8h - 11h30</p>
              <p>14h - 16h30</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-neutral-anthracite">Navigation</h3>
            <div className="text-neutral-gris space-y-2">
              <Link href="/paroisses" className="block hover:text-paroisse-bleuRoi transition-colors">
                Nos paroisses
              </Link>
              <Link href="/pastorale" className="block hover:text-paroisse-bleuRoi transition-colors">
                Pastorale
              </Link>
              <Link href="/actualites" className="block hover:text-paroisse-bleuRoi transition-colors">
                Actualités
              </Link>
              <Link href="/horaires" className="block hover:text-paroisse-bleuRoi transition-colors">
                Horaires messes
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-neutral-anthracite">Services</h3>
            <div className="text-neutral-gris space-y-2">
              <a
                href="https://www.youtube.com/@paroissesnendazetveysonnaz"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-paroisse-bleuRoi transition-colors"
              >
                Messe en direct
              </a>
              <a
                href="https://web.enoria.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-paroisse-bleuRoi transition-colors"
              >
                Base Enoria
              </a>
              <a
                href="https://www.davidica.ch/location-salle.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-paroisse-bleuRoi transition-colors"
              >
                Réservation salle
              </a>
              <a
                href="/api/feuille-annonces/generate"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-paroisse-bleuRoi transition-colors"
              >
                Feuilles annonces
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-neutral-gris text-sm">
              © 2025 Paroisses de Nendaz et Veysonnaz. Tous droits réservés.
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="#"
                className="text-neutral-gris hover:text-paroisse-bleuRoi transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@paroissesnendazetveysonnaz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-gris hover:text-paroisse-bleuRoi transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}