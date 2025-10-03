import Link from 'next/link'

interface QuickAccessCardProps {
  title: string
  description: string
  href: string
  color: 'red' | 'blue' | 'green' | 'purple' | 'yellow' | 'orange' | 'enoria'
  external?: boolean
  icon?: React.ReactNode
  subItems?: string[]
}

export default function QuickAccessCard({
  title,
  description,
  href,
  color,
  external = false,
  icon,
  subItems
}: QuickAccessCardProps) {
  // SOLUTION: Classes conditionnelles EXPLICITES pour Tailwind purge
  let colorClasses = ''

  if (color === 'red') {
    colorClasses = 'bg-paroisse-rouge hover:bg-paroisse-rouge/90 text-white'
  } else if (color === 'blue') {
    colorClasses = 'bg-paroisse-bleuRoi hover:bg-paroisse-bleuRoi/90 text-white'
  } else if (color === 'green') {
    colorClasses = 'bg-paroisse-vert hover:bg-paroisse-vert/90 text-white'
  } else if (color === 'purple') {
    colorClasses = 'bg-paroisse-violet hover:bg-paroisse-violet/90 text-white'
  } else if (color === 'yellow') {
    colorClasses = 'bg-paroisse-jaune hover:bg-paroisse-jaune/90 text-neutral-anthracite'
  } else if (color === 'orange') {
    colorClasses = 'bg-paroisse-rouge hover:bg-paroisse-rouge/90 text-white'
  } else if (color === 'enoria') {
    colorClasses = 'bg-enoria hover:bg-enoria/90 text-white'
  }

  const baseClasses = `${colorClasses} p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 block group transform hover:scale-105 min-h-full`

  const content = (
    <>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-2 transition-colors">
            {title}
          </h3>
          <p className="text-sm opacity-95 font-medium">
            {description}
          </p>
          {subItems && subItems.length > 0 && (
            <ul className="mt-3 space-y-1">
              {subItems.map((item, index) => (
                <li key={index} className="text-xs opacity-90 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60 mr-2" />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
        {icon && (
          <div className="ml-3 flex-shrink-0 opacity-90">
            {icon}
          </div>
        )}
      </div>
      {external && (
        <div className="mt-3 flex items-center text-sm opacity-90 font-medium">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Lien externe
        </div>
      )}
    </>
  )

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
      >
        {content}
      </a>
    )
  }

  return (
    <Link href={href} className={baseClasses}>
      {content}
    </Link>
  )
}
