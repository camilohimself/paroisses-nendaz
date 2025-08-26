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
  red: 'bg-red-600 hover:bg-red-700',
  blue: 'bg-blue-600 hover:bg-blue-700',
  green: 'bg-green-600 hover:bg-green-700',
  purple: 'bg-purple-600 hover:bg-purple-700',
  yellow: 'bg-yellow-600 hover:bg-yellow-700',
  orange: 'bg-orange-600 hover:bg-orange-700'
}

export default function QuickAccessCard({
  title,
  description,
  href,
  color,
  external = false,
  icon
}: QuickAccessCardProps) {
  const baseClasses = `${colorClasses[color]} text-white p-6 rounded-lg transition-colors duration-200 block group`

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