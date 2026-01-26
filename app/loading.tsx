export default function Loading() {
  return (
    <div className="min-h-[70vh] bg-stone-50 flex items-center justify-center px-4">
      <div className="text-center">

        {/* Croix animée */}
        <div className="mb-8 flex justify-center">
          <div className="relative animate-pulse">
            <div className="w-1 h-16 bg-amber-400"></div>
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-10 h-1 bg-amber-400"></div>
          </div>
        </div>

        {/* Skeleton cards */}
        <div className="max-w-4xl mx-auto space-y-6">

          {/* Skeleton titre */}
          <div className="flex justify-center">
            <div className="h-8 bg-stone-200 rounded w-64 animate-pulse"></div>
          </div>

          {/* Skeleton description */}
          <div className="flex justify-center">
            <div className="h-4 bg-stone-200 rounded w-96 animate-pulse"></div>
          </div>

          {/* Skeleton cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm p-6 space-y-4">
                <div className="h-32 bg-stone-200 rounded animate-pulse"></div>
                <div className="h-4 bg-stone-200 rounded w-3/4 animate-pulse"></div>
                <div className="h-3 bg-stone-200 rounded w-1/2 animate-pulse"></div>
              </div>
            ))}
          </div>

        </div>

        {/* Texte de chargement */}
        <p className="mt-8 text-stone-500 text-sm">
          Chargement en cours...
        </p>

      </div>
    </div>
  )
}
