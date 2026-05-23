import { useTranslation } from 'react-i18next';

interface StatItem {
  key: 'years' | 'clients' | 'ratio' | 'support';
  icon: string;
  iconBgColor: string;
  iconColor: string;
}

const STAT_CONFIG: StatItem[] = [
  { key: 'years', icon: 'verified', iconBgColor: 'bg-secondary/20', iconColor: 'text-secondary' },
  { key: 'clients', icon: 'groups', iconBgColor: 'bg-success-green/20', iconColor: 'text-success-green' },
  { key: 'ratio', icon: 'pie_chart', iconBgColor: 'bg-accent-purple/20', iconColor: 'text-accent-purple' },
  { key: 'support', icon: 'support_agent', iconBgColor: 'bg-secondary-container/20', iconColor: 'text-secondary-container' },
];

export const TrustStats = () => {
  const { t } = useTranslation();

  return (
    <section className="section my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {STAT_CONFIG.map(({ key, icon, iconBgColor, iconColor }) => (
          <div
            key={key}
            className="glass-card rounded-card shadow-custom-shadow-l1 p-8 flex flex-col items-center text-center group hover:shadow-custom-shadow-hover transition-all duration-200"
          >
            {/* Icon Container */}
            <div className={`w-12 h-12 ${iconBgColor} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
              <span className={`material-symbols-outlined ${iconColor} text-2xl`} style={{ fontVariationSettings: "'FILL' 1" }}>
                {icon}
              </span>
            </div>

            {/* Stat Number */}
            <span className="font-headline-md text-headline-md text-on-surface mb-1">
              {t(`stats.${key}`)}
            </span>

            {/* Stat Label */}
            <span className="font-body-md text-body-md text-on-surface-variant">
              {t(`stats.${key}_label`)}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
