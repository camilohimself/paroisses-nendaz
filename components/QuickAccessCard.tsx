import Link from 'next/link'

interface QuickAccessCardProps {
  title: string
  description: string
  href: string
  color: 'red' | 'blue' | 'green' | 'purple' | 'yellow' | 'orange'
  external?: boolean
  icon?: React.ReactNode
}

const colorClasses = {
  red: 'bg-liturgique-communion hover:bg-liturgique-communion/80 shadow-lg hover:shadow-xl',
  blue: 'bg-liturgique-ciel hover:bg-liturgique-ciel/80 shadow-lg hover:shadow-xl',
  green: 'bg-liturgique-esperance hover:bg-liturgique-esperance/80 shadow-lg hover:shadow-xl',
  purple: 'bg-liturgique-mystique hover:bg-liturgique-mystique/80 shadow-lg hover:shadow-xl',
  yellow: 'bg-liturgique-lumiere text-neutral-charcoal hover:bg-liturgique-lumiere/80 shadow-lg hover:shadow-xl',
  orange: 'bg-liturgique-chaleur hover:bg-liturgique-chaleur/80 shadow-lg hover:shadow-xl'
}

export default function QuickAccessCard({
  title,
  description,
  href,
  color,
  external = false,
  icon
}: QuickAccessCardProps) {
  const isYellow = color === 'yellow'
  const textColor = isYellow ? '' : 'text-white'
  const baseClasses = `${colorClasses[color]} ${textColor} p-6 rounded-lg transition-all duration-300 block group transform hover:scale-105`

  const content = (
    <>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-2 group-hover:text-gray-100 transition-colors">
            {title}
          </h3>
          <p className="text-sm opacity-90 group-hover:opacity-100 transition-opacity">
            {description}
          </p>
        </div>
        {icon && (
          <div className="ml-3 flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">
            {icon}
          </div>
        )}
      </div>
      {external && (
        <div className="mt-3 flex items-center text-sm opacity-75">
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