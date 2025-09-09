interface DecorativeOrnamentProps {
  type?: 'divider' | 'corner' | 'cross'
  position?: 'top' | 'bottom' | 'center'
  className?: string
}

export default function DecorativeOrnament({ 
  type = 'divider', 
  position = 'center',
  className = ""
}: DecorativeOrnamentProps) {
  const ornaments = {
    divider: (
      <div className={`flex items-center justify-${position} ${className}`}>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-0.5 bg-gradient-to-r from-communion to-chaleur"></div>
          <div className="w-3 h-3 border-2 border-esperance rotate-45 bg-lumiere/30"></div>
          <div className="w-12 h-0.5 bg-gradient-to-r from-chaleur via-lumiere to-ciel"></div>
          <div className="w-4 h-4 border-2 border-mystique rounded-full bg-white flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-mystique rounded-full"></div>
          </div>
          <div className="w-12 h-0.5 bg-gradient-to-r from-ciel via-lumiere to-chaleur"></div>
          <div className="w-3 h-3 border-2 border-esperance rotate-45 bg-lumiere/30"></div>
          <div className="w-8 h-0.5 bg-gradient-to-r from-chaleur to-communion"></div>
        </div>
      </div>
    ),
    corner: (
      <div className={`absolute ${position === 'top' ? 'top-4 right-4' : 'bottom-4 left-4'} opacity-20 ${className}`}>
        <svg width="40" height="40" viewBox="0 0 40 40" className="text-mystique">
          <path 
            d="M20 5 L25 15 L35 15 L27.5 22.5 L30 32.5 L20 27.5 L10 32.5 L12.5 22.5 L5 15 L15 15 Z" 
            fill="currentColor"
            opacity="0.6"
          />
          <circle cx="20" cy="20" r="3" fill="var(--jaune-lumiere)" />
        </svg>
      </div>
    ),
    cross: (
      <div className={`flex items-center justify-${position} ${className}`}>
        <svg width="24" height="24" viewBox="0 0 24 24" className="text-communion">
          <path 
            d="M12 2 L12 10 L20 10 L20 14 L12 14 L12 22 L8 22 L8 14 L0 14 L0 10 L8 10 L8 2 Z" 
            fill="currentColor"
          />
          <circle cx="12" cy="12" r="8" fill="none" stroke="var(--jaune-lumiere)" strokeWidth="1" opacity="0.3" />
        </svg>
      </div>
    )
  }

  return ornaments[type]
}