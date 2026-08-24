import React from 'react';
import { Award, Smile, ShieldCheck, UserCheck } from 'lucide-react';
import { CLINIC_STATS } from '../data/dentalData';

export const TrustBadges: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-6 h-6 text-[#00A8E8]" />;
      case 'Smile':
        return <Smile className="w-6 h-6 text-[#00A8E8]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-[#00A8E8]" />;
      default:
        return <Award className="w-6 h-6 text-[#00A8E8]" />;
    }
  };

  return (
    <section className="py-4 bg-[#F8FAFC]" id="trust-badges">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CLINIC_STATS.map((stat, idx) => (
            <div
              key={stat.label}
              className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm hover:shadow-md hover:border-cyan-400/40 transition-all duration-300 flex items-start gap-4"
              id={`stat-card-${idx}`}
            >
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-100/80 flex items-center justify-center flex-shrink-0 shadow-sm">
                {getIcon(stat.iconName)}
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#0A2540] tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-[#00A8E8] mt-0.5">
                  {stat.label}
                </div>
                <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                  {stat.sublabel}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

