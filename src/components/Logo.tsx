import React from 'react';

export type LogoVariant = 'full' | 'icon' | 'horizontal' | 'vertical';

interface LogoProps {
  variant?: LogoVariant;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  lightMode?: boolean; // if on dark background
}

export const LogoEmblemSvg: React.FC<{ className?: string; colorGold?: string; colorBrown?: string }> = ({
  className = "w-10 h-10",
  colorGold = "#D4A574",
  colorBrown = "#4A3728"
}) => {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Shah Sweets and Bakers Emblem"
    >
      <defs>
        <linearGradient id="goldShine" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5D7A1" />
          <stop offset="50%" stopColor={colorGold} />
          <stop offset="100%" stopColor="#B38048" />
        </linearGradient>
        <linearGradient id="richBrown" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#674D38" />
          <stop offset="100%" stopColor={colorBrown} />
        </linearGradient>
      </defs>

      {/* Decorative Traditional Arch & Outer Medallion Border */}
      <circle cx="60" cy="60" r="56" stroke="url(#goldShine)" strokeWidth="2.5" strokeDasharray="4 2" />
      <circle cx="60" cy="60" r="51" stroke={colorBrown} strokeWidth="1.5" />

      {/* Traditional Filigree Corner Accents */}
      <circle cx="60" cy="11" r="2.5" fill="url(#goldShine)" />
      <circle cx="60" cy="109" r="2.5" fill="url(#goldShine)" />
      <circle cx="11" cy="60" r="2.5" fill="url(#goldShine)" />
      <circle cx="109" cy="60" r="2.5" fill="url(#goldShine)" />

      {/* Royal Crown Top representing Premium Status */}
      <path
        d="M44 34L48 24L60 30L72 24L76 34C73 35.5 67 36.5 60 36.5C53 36.5 47 35.5 44 34Z"
        fill="url(#goldShine)"
      />
      <circle cx="48" cy="22.5" r="1.8" fill="url(#goldShine)" />
      <circle cx="60" cy="27.5" r="2.2" fill="#FFFBF0" />
      <circle cx="72" cy="22.5" r="1.8" fill="url(#goldShine)" />

      {/* Ornate Sweet Bowl (Mithai Katori) */}
      <path
        d="M32 66C32 82 44.5 90 60 90C75.5 90 88 82 88 66C88 63 85 62 78 62H42C35 62 32 63 32 66Z"
        fill="url(#richBrown)"
        stroke="url(#goldShine)"
        strokeWidth="1.8"
      />
      {/* Bowl Base */}
      <path
        d="M48 90L46 97H74L72 90"
        stroke="url(#goldShine)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line x1="42" y1="97" x2="78" y2="97" stroke="url(#goldShine)" strokeWidth="2.5" strokeLinecap="round" />

      {/* Jalebi Spiral & Mithai Golden Swirl Stacked Inside Bowl */}
      <path
        d="M60 42C67 42 73 47 73 54C73 60 67 63 60 63C53 63 48 58 48 53C48 48 52 45 56 45C60 45 63 48 63 51C63 53 61.5 55 60 55C58.5 55 58 54 58 53"
        stroke="url(#goldShine)"
        strokeWidth="3.2"
        strokeLinecap="round"
      />

      {/* Delicate Steam / Aroma Wisps Rising */}
      <path
        d="M45 42C43 38 46 36 44 32"
        stroke="url(#goldShine)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M75 42C77 38 74 36 76 32"
        stroke="url(#goldShine)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.85"
      />

      {/* Decorative Star Accents */}
      <path d="M38 73L39.5 75.5L42 76L39.8 77.5L40.2 80L38 78.5L35.8 80L36.2 77.5L34 76L36.5 75.5Z" fill="url(#goldShine)" />
      <path d="M82 73L83.5 75.5L86 76L83.8 77.5L84.2 80L82 78.5L79.8 80L80.2 77.5L78 76L80.5 75.5Z" fill="url(#goldShine)" />
      <circle cx="60" cy="76" r="2.5" fill="url(#goldShine)" />
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  className = '',
  size = 'md',
  lightMode = false,
}) => {
  const textColor = lightMode ? 'text-[#FFFBF0]' : 'text-[#4A3728]';
  const subTextColor = lightMode ? 'text-[#D4A574]' : 'text-[#8C6D53]';
  const goldColor = '#D4A574';
  const brownColor = lightMode ? '#FFFBF0' : '#4A3728';

  // Sizing definitions
  const emblemSizes = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  // Icon Only Variation (Compact symbol for mobile & favicon)
  if (variant === 'icon') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <LogoEmblemSvg className={emblemSizes[size]} colorGold={goldColor} colorBrown={brownColor} />
      </div>
    );
  }

  // Vertical Variation (Stacked format for mobile & hero showcase)
  if (variant === 'vertical') {
    return (
      <div className={`flex flex-col items-center text-center select-none ${className}`}>
        <div className="relative mb-2">
          <LogoEmblemSvg className={emblemSizes[size || 'xl']} colorGold={goldColor} colorBrown={brownColor} />
        </div>
        <span className="font-urdu text-lg tracking-widest text-[#D4A574] mb-0.5 leading-none">
          شاہ سویٹس اینڈ بیکرز
        </span>
        <h1 className={`font-playfair font-black tracking-[0.18em] leading-tight ${textColor} uppercase text-2xl sm:text-3xl`}>
          SHAH SWEETS
        </h1>
        <div className="flex items-center gap-2 w-full justify-center mt-1">
          <div className="h-[1px] w-8 bg-[#D4A574]/60" />
          <span className={`font-poppins font-semibold text-xs tracking-[0.25em] ${subTextColor} uppercase`}>
            & BAKERS • SHABQADAR
          </span>
          <div className="h-[1px] w-8 bg-[#D4A574]/60" />
        </div>
      </div>
    );
  }

  // Horizontal Variation (Wide format for footer)
  if (variant === 'horizontal') {
    return (
      <div className={`inline-flex items-center gap-4 select-none ${className}`}>
        <LogoEmblemSvg className="w-14 h-14 flex-shrink-0" colorGold={goldColor} colorBrown={brownColor} />
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className={`font-playfair font-black text-xl tracking-[0.12em] ${textColor} uppercase`}>
              SHAH SWEETS & BAKERS
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-urdu text-sm text-[#D4A574]">شاہ سویٹس</span>
            <span className="text-[#D4A574]/50">•</span>
            <span className={`font-poppins text-xs font-medium tracking-wider ${subTextColor} uppercase`}>
              Shabqadar, 25000
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Full Logo (Default for Header & Navbar)
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <div className="relative flex-shrink-0 transition-transform duration-300 hover:scale-105">
        <LogoEmblemSvg className={emblemSizes[size]} colorGold={goldColor} colorBrown={brownColor} />
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5">
          <span className={`font-playfair font-black text-lg sm:text-xl tracking-[0.14em] leading-none ${textColor} uppercase`}>
            SHAH SWEETS
          </span>
        </div>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="font-urdu text-xs text-[#D4A574] leading-none">شاہ سویٹس</span>
          <span className="text-[#D4A574]/60 text-[10px]">•</span>
          <span className={`font-poppins text-[10px] sm:text-xs font-semibold tracking-[0.18em] ${subTextColor} uppercase leading-none`}>
            & BAKERS • SHABQADAR
          </span>
        </div>
      </div>
    </div>
  );
};
