import Image from 'next/image';
import BreadcrumbSchema from '@/components/structured-data/BreadcrumbSchema';
import { Heart, Smartphone, Building2 } from 'lucide-react';
import IbanCard from '@/components/IbanCard';
import DonsTracker from '@/components/DonsTracker';

export const metadata = {
  title: 'Faire un don | Paroisses de Nendaz et Veysonnaz',
  description: 'Soutenez les activités pastorales et la vie paroissiale des communes de Nendaz et Veysonnaz par vos dons.',
};

export default function DonsPage() {
  return (
    <div className="min-h-screen">
      <DonsTracker />
      <BreadcrumbSchema
        items={[
          { name: 'Dons', url: 'https://www.paroisses-nendaz.ch/dons' }
        ]}
      />

      {/* Header sobre */}
      <section className="bg-white py-24 border-b-4 border-amber-500">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Heart className="w-16 h-16 text-amber-600" />
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none tracking-tight">
            <span className="text-stone-800">FAIRE UN</span>
            <br />
            <span className="text-amber-600 text-5xl md:text-7xl font-normal tracking-wide">DON</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-gris max-w-3xl mx-auto leading-relaxed">
            Chaque don contribue à faire vivre la paroisse et ses activités pour les habitants des communes de <strong>Nendaz</strong> et <strong>Veysonnaz</strong>
          </p>
        </div>
      </section>

      {/* Section TWINT */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">

              {/* Titre */}
              <div className="text-center mb-10">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Smartphone className="w-8 h-8 text-amber-600" />
                  <h2 className="text-3xl font-bold text-stone-800">Paiement TWINT</h2>
                </div>
                <p className="text-lg text-stone-600">
                  Scannez le code QR avec l'application TWINT pour faire un don en quelques secondes
                </p>
              </div>

              {/* Image QR Code TWINT */}
              <div className="flex justify-center mb-10">
                <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-stone-200">
                  <Image
                    src="/images/twint-qr.jpg"
                    alt="QR Code TWINT - Paroisse de Nendaz"
                    width={400}
                    height={400}
                    className="w-full max-w-md mx-auto rounded-lg"
                  />
                </div>
              </div>

              {/* Instructions */}
              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-semibold text-stone-800 mb-4">Comment faire un don ?</h3>
                <ol className="space-y-3 text-stone-700">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    <span>Ouvrez l'application <strong>TWINT</strong> sur votre smartphone</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    <span>Scannez le <strong>code QR</strong> ci-dessus</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    <span>Confirmez le <strong>montant</strong> et validez le don</span>
                  </li>
                </ol>
              </div>

              {/* Message de remerciement */}
              <div className="bg-stone-100 border-l-4 border-amber-600 p-6 rounded-lg">
                <p className="text-lg text-stone-800 font-medium mb-2">
                  Merci pour votre générosité !
                </p>
                <p className="text-stone-600 leading-relaxed">
                  Votre soutien permet de maintenir nos activités pastorales, d'entretenir nos lieux de culte et d'accompagner les habitants de nos paroisses dans leur vie spirituelle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Virement bancaire */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Titre */}
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Building2 className="w-8 h-8 text-stone-700" />
                <h2 className="text-3xl font-bold text-stone-800">Virement bancaire</h2>
              </div>
              <p className="text-lg text-stone-600">
                Vous pouvez également effectuer un don par virement bancaire
              </p>
            </div>

            {/* Cartes IBAN */}
            <div className="grid md:grid-cols-2 gap-6">
              <IbanCard
                commune="Nendaz"
                iban="CH27 0076 5000 K022 7898 3"
                colorScheme="stone"
              />
              <IbanCard
                commune="Veysonnaz"
                iban="CH80 8057 2000 0017 6694 0"
                colorScheme="amber"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section informations complémentaires */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-stone-600 mb-6">
              Pour toute question concernant les dons, n'hésitez pas à nous contacter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block bg-stone-700 text-white px-8 py-3 rounded-lg hover:bg-stone-800 transition-colors font-semibold"
              >
                Nous contacter
              </a>
              <a
                href="/contact#formulaire"
                className="inline-block border-2 border-amber-600 text-amber-700 px-8 py-3 rounded-lg hover:bg-amber-50 transition-colors font-semibold"
              >
                Intentions de messe
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Autres façons de soutenir */}
      <section className="py-12 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8 text-stone-800">Autres façons de soutenir</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/pastorale" className="group bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all border border-stone-200">
                <p className="font-semibold text-stone-800 group-hover:text-amber-700 transition-colors">S'engager bénévolement</p>
                <p className="text-sm text-stone-500">Découvrir les services paroissiaux</p>
              </a>
              <a href="/pastorale/liturgie" className="group bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all border border-stone-200">
                <p className="font-semibold text-stone-800 group-hover:text-amber-700 transition-colors">Servir à la messe</p>
                <p className="text-sm text-stone-500">Lecteurs, servants, chorales</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
