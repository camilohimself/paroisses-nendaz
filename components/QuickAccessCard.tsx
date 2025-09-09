import Link from 'next/link'

interface QuickAccessCardProps {
  title: string
  description: string
  href: string
  color: 'red' | 'blue' | 'green' | 'purple' | 'yellow' | 'orange' | 'enoria'
  external?: boolean
  icon?: React.ReactNode
}

const colorClasses = {
  red: 'bg-communion hover:bg-[var(--rouge-communion)]/90 shadow-lg hover:shadow-xl text-white',
  blue: 'bg-ciel hover:bg-[var(--bleu-ciel)]/90 shadow-lg hover:shadow-xl text-white',
  green: 'bg-esperance hover:bg-[var(--vert-esperance)]/90 shadow-lg hover:shadow-xl text-white',
  purple: 'bg-mystique hover:bg-[var(--violet-mystique)]/90 shadow-lg hover:shadow-xl text-white',
  yellow: 'bg-lumiere hover:bg-[var(--jaune-lumiere)]/90 shadow-lg hover:shadow-xl text-[var(--foreground)]',
  orange: 'bg-chaleur hover:bg-[var(--orange-chaleur)]/90 shadow-lg hover:shadow-xl text-white',
  enoria: 'bg-enoria hover:bg-[var(--vert-enoria)]/90 shadow-lg hover:shadow-xl text-white'
}

export default function QuickAccessCard({
  title,
  description,
  href,
  color,
  external = false,
  icon
}: QuickAccessCardProps) {
  const baseClasses = `${colorClasses[color]} p-6 rounded-lg transition-parish block group transform hover:scale-105`

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