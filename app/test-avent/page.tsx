'use client'

import { useState } from 'react'
import { ChevronRight, MapPin, Sparkles, BookOpen, Music, Heart, ExternalLink } from 'lucide-react'

export default function TestAventPage() {
  const [dialogueStep, setDialogueStep] = useState(0)
  const [missionStep, setMissionStep] = useState(0)
  const [showChallenge, setShowChallenge] = useState(false)

  // Dialogues de Luce
  const dialogues = [
    "Salut, Bienvenue à toi pèlerin de l'espérance.",
    "Je me présente rapidement : Je m'appelle Luce, qui veut dire Lumière.",
    "Je suis vêtue de jaune, en référence au drapeau du Vatican.",
    "Je suis venue vous montrer la lumière qui habite en mon cœur et qui illumine notre chemin de foi.",
    "Si tu m'observes d'un peu plus près, tu pourras trouver un objet qui m'aide à prier. L'as-tu trouvé ?",
    "Bravo ! Tu as trouvé, c'est un chapelet que je porte autour du cou.",
  ]

  // Mission indices
  const missionIndices = [
    "Pour commencer, je cherche un lieu secret et précieux.",
    "Il brille comme une étoile au cœur de l'église, souvent avec de l'or.",
    "C'est là qu'on garde le plus grand trésor de la messe.",
    "Indice : Je suis tout devant !",
  ]

  const handleContinue = () => {
    if (dialogueStep < dialogues.length - 1) {
      setDialogueStep(dialogueStep + 1)
    } else {
      // Fin du dialogue, on passe à la mission
      setDialogueStep(-1)
    }
  }

  const handleMissionContinue = () => {
    if (missionStep < missionIndices.length - 1) {
      setMissionStep(missionStep + 1)
    } else {
      // Mission révélée
      setMissionStep(-1)
    }
  }

  const handleTabernacleFound = () => {
    setMissionStep(-2) // État "trouvé"
  }

  const handleShowChallenge = () => {
    setShowChallenge(true)
  }

  // Dialogue actif
  if (dialogueStep >= 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 flex items-center justify-center p-6">
        <div className="w-full max-w-lg">
          {/* Personnage Luce */}
          <div className="flex justify-center mb-8">
            <img
              src="/images/avent/personnages/luce-jaune.png"
              alt="Luce - Lumière de l'Espérance"
              className="w-56 h-56 object-contain drop-shadow-2xl animate-bounce"
              style={{ animationDuration: '3s' }}
            />
          </div>

          {/* Bulle de dialogue */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl relative">
            {/* Triangle bulle */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[20px] border-b-white"></div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-amber-600 mb-6 flex items-center gap-2">
                <Sparkles className="w-8 h-8 flex-shrink-0" />
                <span>Luce</span>
              </h2>
              <p className="text-xl text-slate-700 leading-relaxed">
                {dialogues[dialogueStep]}
              </p>
            </div>

            {/* Bouton Continuer - ÉNORME */}
            <button
              onClick={handleContinue}
              className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 active:from-amber-600 active:to-yellow-600 text-white font-bold py-6 px-8 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl text-xl"
            >
              {dialogueStep < dialogues.length - 1 ? 'Continuer' : 'Commencer la mission'}
              <ChevronRight className="w-8 h-8 flex-shrink-0" />
            </button>

            {/* Étape du dialogue */}
            <div className="mt-6 text-center text-base text-slate-500 font-medium">
              {dialogueStep + 1} / {dialogues.length}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Mission active
  if (missionStep >= 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 p-6 py-12">
        <div className="w-full max-w-lg mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <div className="flex items-start gap-4 mb-8">
              <MapPin className="w-10 h-10 text-amber-600 flex-shrink-0 mt-1" />
              <h2 className="text-2xl font-bold text-slate-800 leading-tight">
                Mission : Trouve le Tabernacle
              </h2>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-xl mb-8">
              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                <strong>Te voici dans l'église de Basse-Nendaz où je vais te proposer un petit défi.</strong>
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Es-tu prêt ? C'est parti !
              </p>
            </div>

            <div className="mb-10">
              <p className="text-2xl text-slate-800 font-semibold leading-relaxed">
                {missionIndices[missionStep]}
              </p>
            </div>

            <button
              onClick={handleMissionContinue}
              className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 active:from-amber-600 active:to-yellow-600 text-white font-bold py-6 px-8 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl text-xl"
            >
              {missionStep < missionIndices.length - 1 ? 'Besoin d\'un indice ?' : 'J\'ai trouvé !'}
              <ChevronRight className="w-8 h-8 flex-shrink-0" />
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Tabernacle trouvé
  if (missionStep === -1) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 p-6 py-12">
        <div className="w-full max-w-lg mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <Sparkles className="w-20 h-20 text-amber-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-amber-600 mb-6 leading-tight">
                Félicitations ! Bravo, tu as trouvé !
              </h2>
            </div>

            <div className="space-y-6 mb-10">
              <p className="text-xl text-slate-700 leading-relaxed">
                L'objet que tu vois est le <strong>Tabernacle</strong>.
              </p>
              <p className="text-xl text-slate-700 leading-relaxed">
                C'est ici que l'on conserve l'Eucharistie, le corps du Christ.
              </p>
              <p className="text-xl text-slate-700 leading-relaxed">
                C'est un lieu de silence, de prière et de grande importance, symbolisant la
                <strong> présence réelle de Dieu parmi nous</strong> pendant que nous attendons Noël.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-xl mb-10">
              <p className="text-lg text-slate-700 italic leading-relaxed">
                "Bien joué ! Maintenant, comme disait Saint Augustin :
                <strong> chanter c'est prier deux fois !</strong>"
              </p>
              <p className="text-base text-slate-600 mt-4 leading-relaxed">
                Le chant permet de prier non seulement avec la tête et le cœur, mais avec le corps tout entier.
              </p>
            </div>

            <button
              onClick={handleTabernacleFound}
              className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 active:from-amber-600 active:to-yellow-600 text-white font-bold py-6 px-8 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl text-xl"
            >
              Découvrir le chant
              <Music className="w-8 h-8 flex-shrink-0" />
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Chant + Défi final
  if (missionStep === -2 && !showChallenge) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 p-6 py-12">
        <div className="w-full max-w-lg mx-auto space-y-8">
          {/* Vidéo YouTube */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <div className="flex items-start gap-4 mb-8">
              <Music className="w-10 h-10 text-amber-600 flex-shrink-0 mt-1" />
              <h2 className="text-2xl font-bold text-slate-800 leading-tight">
                Chant de la semaine
              </h2>
            </div>

            <div className="aspect-video mb-8 rounded-2xl overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/fOJoUI_IA4s"
                title="Dans la lumière de Dieu"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>

            <div className="bg-amber-50 rounded-2xl p-6">
              <h3 className="font-bold text-xl text-slate-800 mb-6 flex items-center gap-2">
                <BookOpen className="w-6 h-6 flex-shrink-0" />
                <span>Paroles</span>
              </h3>
              <p className="text-slate-700 leading-relaxed text-center text-lg">
                Dans la lumière de Dieu,<br />
                je marche avec joie,<br />
                Sa douce lumière brille sur moi.<br />
                Il me protège, il m'aime tant,<br />
                Dans la lumière de Dieu,<br />
                je suis son enfant.<br />
                Oui, dans la lumière de Dieu,<br />
                je suis son enfant.
              </p>
            </div>
          </div>

          {/* Bouton défi - ÉNORME */}
          <button
            onClick={handleShowChallenge}
            className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 active:from-amber-600 active:to-yellow-600 text-white font-bold py-6 px-8 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl text-xl"
          >
            Découvrir le défi de la semaine
            <Heart className="w-8 h-8 flex-shrink-0" />
          </button>
        </div>
      </div>
    )
  }

  // Défi final
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 p-6 py-12">
      <div className="w-full max-w-lg mx-auto">
        <div className="bg-white rounded-3xl p-8 shadow-2xl">
          <div className="text-center mb-10">
            <Heart className="w-20 h-20 text-red-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-amber-600 mb-4 leading-tight">
              Ton défi de la semaine
            </h2>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-8 mb-10">
            <p className="text-xl text-slate-800 mb-6 font-semibold text-center leading-relaxed">
              Maintenant que tu t'es bien rechargé devant le tabernacle par un temps de prière...
            </p>
            <p className="text-lg text-slate-700 mb-8 text-center leading-relaxed">
              Je te propose de ressortir d'ici et de <strong>partager autour de toi la joie lumineuse</strong> reçue ici :
            </p>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-xl shadow">
                <p className="text-slate-700 font-medium text-lg">✨ Par un sourire</p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow">
                <p className="text-slate-700 font-medium text-lg">💬 Par une parole qui fait du bien</p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow">
                <p className="text-slate-700 font-medium text-lg">📖 Par une parole de sagesse</p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow">
                <p className="text-slate-700 font-medium text-lg">😄 Par l'humour</p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow">
                <p className="text-slate-700 font-medium text-lg">🌟 Par la joie de vivre</p>
              </div>
            </div>
          </div>

          <div className="bg-amber-100 border-l-4 border-amber-500 p-6 rounded-xl mb-8">
            <p className="text-xl text-slate-800 font-semibold mb-3 leading-relaxed">
              Je te remercie d'être venu !
            </p>
            <p className="text-lg text-slate-700 mb-3 leading-relaxed">
              Rendez-vous <strong>dimanche prochain</strong> pour une nouvelle aventure du pèlerin avec <strong>Fe à Fey</strong> !
            </p>
            <p className="text-lg text-slate-700 italic leading-relaxed">
              Je me réjouis de faire ta connaissance.
            </p>
          </div>

          {/* Liens ressources */}
          <div className="space-y-4 mb-8">
            <a
              href="https://www.lejourduseigneur.com/videos/le-chapelet-pour-les-nuls-2645"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-amber-600 active:text-amber-700 font-medium text-lg p-4 bg-amber-50 rounded-xl"
            >
              <ExternalLink className="w-6 h-6 flex-shrink-0" />
              <span>En savoir plus sur le chapelet</span>
            </a>
            <a
              href="https://www.catholique95.fr/fiches-ludiques-jubile/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-amber-600 active:text-amber-700 font-medium text-lg p-4 bg-amber-50 rounded-xl"
            >
              <ExternalLink className="w-6 h-6 flex-shrink-0" />
              <span>Fiches ludiques du Jubilé 2025</span>
            </a>
            <a
              href="https://www.iubilaeum2025.va/fr.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-amber-600 active:text-amber-700 font-medium text-lg p-4 bg-amber-50 rounded-xl"
            >
              <ExternalLink className="w-6 h-6 flex-shrink-0" />
              <span>Site officiel du Jubilé 2025</span>
            </a>
          </div>

          {/* Bouton retour accueil */}
          <a
            href="/"
            className="block w-full bg-gradient-to-r from-slate-600 to-slate-700 active:from-slate-700 active:to-slate-800 text-white font-bold py-6 px-8 rounded-2xl text-center transition-all shadow-xl text-xl"
          >
            Retour à l'accueil
          </a>
        </div>
      </div>
    </div>
  )
}
