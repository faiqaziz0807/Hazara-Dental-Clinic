import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  showText = true,
  className = '',
}) => {
  const isLight = variant === 'light';

  // Dimension scaling
  const sizeMap = {
    sm: { icon: 34, hazaraText: 'text-base', clinicText: 'text-[9px]', tracking: 'tracking-[0.2em]' },
    md: { icon: 44, hazaraText: 'text-xl', clinicText: 'text-[11px]', tracking: 'tracking-[0.24em]' },
    lg: { icon: 56, hazaraText: 'text-2xl', clinicText: 'text-xs', tracking: 'tracking-[0.28em]' },
    xl: { icon: 72, hazaraText: 'text-3xl', clinicText: 'text-sm', tracking: 'tracking-[0.3em]' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`} id="hazara-dental-logo">
      {/* Official Heart-Tooth Vector Emblem matching Hazara Dental Clinic Brand */}
      <div className="relative flex-shrink-0 flex items-center justify-center">
        <svg
          width={currentSize.icon}
          height={currentSize.icon}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 hover:scale-105"
        >
          {/* Outer Heart-Tooth Navy Blue Border */}
          <path
            d="M50 25 C38 10, 15 15, 15 36 C15 54, 30 70, 42 85 C44 87, 45 88, 47 88 C49 88, 49 84, 49 78 C47 70, 40 58, 40 45 C40 33, 44 26, 50 26 C56 26, 60 33, 60 45 C60 58, 53 70, 51 78 C51 84, 51 88, 53 88 C55 88, 56 87, 58 85 C70 70, 85 54, 85 36 C85 15, 62 10, 50 25 Z"
            fill={isLight ? '#38BDF8' : '#0A2540'}
            opacity="0.15"
          />

          {/* Cyan/Teal Heart Accent Line */}
          <path
            d="M50 20 C36 6, 12 12, 12 36 C12 55, 30 72, 44 87 C47 90, 49 88, 50 83 C51 88, 53 90, 56 87 C70 72, 88 55, 88 36 C88 12, 64 6, 50 20 Z"
            stroke={isLight ? '#38BDF8' : '#00A8E8'}
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Dark Navy Outer Shield Contour */}
          <path
            d="M50 16 C34 2, 8 8, 8 36 C8 58, 28 76, 42 91 C46 95, 48 93, 50 87 C52 93, 54 95, 58 91 C72 76, 92 58, 92 36 C92 8, 66 2, 50 16 Z"
            stroke={isLight ? '#FFFFFF' : '#0A2540'}
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Stylized White Tooth Core in Center */}
          <path
            d="M50 30 C43 30, 36 34, 35 44 C34 54, 38 66, 40 78 C41 83, 44 83, 46 76 C48 68, 50 63, 50 56 C50 63, 52 68, 54 76 C56 83, 59 83, 60 78 C62 66, 66 54, 65 44 C64 34, 57 30, 50 30 Z"
            fill={isLight ? '#FFFFFF' : '#0A2540'}
            stroke={isLight ? '#FFFFFF' : '#0A2540'}
            strokeWidth="2"
            strokeLinejoin="round"
          />

          {/* Inner Tooth Enamel Highlight Wave */}
          <path
            d="M42 40 C46 36, 54 36, 58 40 C56 46, 44 46, 42 40 Z"
            fill={isLight ? '#0A2540' : '#FFFFFF'}
          />

          {/* Dental Care Apex V-Chevron Accent (Base) */}
          <path
            d="M38 68 L50 78 L62 68"
            stroke={isLight ? '#38BDF8' : '#00A8E8'}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Typography strictly matching official branding */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-black uppercase font-['Outfit'] ${currentSize.hazaraText} tracking-wider ${
              isLight ? 'text-white' : 'text-[#0A2540]'
            }`}
          >
            HAZARA
          </span>
          <div
            className={`w-full my-0.5 h-[2px] rounded-full ${
              isLight ? 'bg-cyan-400' : 'bg-[#00A8E8]'
            }`}
          />
          <span
            className={`font-bold uppercase font-['Outfit'] ${currentSize.clinicText} ${currentSize.tracking} ${
              isLight ? 'text-cyan-200' : 'text-[#0A2540]'
            }`}
          >
            DENTAL CLINIC
          </span>
        </div>
      )}
    </div>
  );
};
