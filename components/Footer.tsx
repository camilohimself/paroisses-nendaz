import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[var(--foreground)] to-[var(--brun-terre)] text-white relative overflow-hidden">
      {/* Ornement décoratif en arrière-plan */}
      <div className="absolute top-0 left-0 w-full h-32 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 400 100" fill="none">
          <path d="M0 50 Q100 20 200 50 T400 50" stroke="var(--jaune-lumiere)" strokeWidth="2" fill="none" />
          <path d="M0 60 Q100 30 200 60 T400 60" stroke="var(--rouge-communion)" strokeWidth="1" fill="none" />
          <path d="M0 40 Q100 10 200 40 T400 40" stroke="var(--bleu-ciel)" strokeWidth="1" fill="none" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* En-tête avec citation */}
        <div className="text-center mb-12">
          <p className="text-accent text-lg italic text-[var(--jaune-lumiere)] max-w-2xl mx-auto">
            « Là où deux ou trois sont rassemblés en mon nom, je suis au milieu d'eux »
          </p>
          <p className="text-sm text-gray-300 mt-2">— Matthieu 18:20</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-lumiere flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
              </svg>
              Paroisses du secteur de Nendaz
            </h3>
            <div className="text-gray-300 space-y-2">
              <p>Route de Nendaz 355</p>
              <p>1996 Basse-Nendaz</p>
              <p>Tél: 027 / 288 22 50</p>
              <p>paroisse_nendaz@bluemail.ch</p>
            </div>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Heures de présence</h3>
            <div className="text-gray-300 space-y-2">
              <p className="font-medium">Mardi</p>
              <p>8h30 - 11h30</p>
              <p>14h00 - 16h30</p>
              <p className="font-medium pt-2">Vendredi</p>
              <p>8h30 - 11h30</p>
              <p>14h00 - 16h30</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <div className="text-gray-300 space-y-2">
              <Link href="/paroisses" className="block hover:text-white transition-colors">
                Nos paroisses
              </Link>
              <Link href="/pastorale" className="block hover:text-white transition-colors">
                Pastorale
              </Link>
              <Link href="/actualites" className="block hover:text-white transition-colors">
                Actualités
              </Link>
              <Link href="/horaires" className="block hover:text-white transition-colors">
                Horaires messes
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <div className="text-gray-300 space-y-2">
              <a 
                href="https://www.youtube.com/@paroissesnendazetveysonnaz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:text-white transition-colors"
              >
                🔴 Messe en direct
              </a>
              <a 
                href="https://web.enoria.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:text-lumiere transition-parish flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 bg-enoria rounded-full"></span>
                Base Enoria
              </a>
              <Link href="/reservation" className="block hover:text-white transition-colors">
                Réservation salle
              </Link>
              <Link href="/documents" className="block hover:text-white transition-colors">
                Feuilles annonces
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm">
              © 2025 Paroisses de Nendaz. Tous droits réservés.
              <br />
              <span className="text-accent italic text-xs">Avec amour et foi au service de notre communauté</span>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a 
                href="#" 
                className="text-gray-400 hover:text-lumiere transition-parish"
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
                className="text-gray-400 hover:text-communion transition-parish"
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