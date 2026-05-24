import { useTranslation } from 'react-i18next';

interface Product {
  key: 'motor' | 'health' | 'term' | 'home' | 'travel' | 'fire' | 'marine' | 'commercial' | 'addon' | 'cyber';
  icon: string;
  accentColor: string;
}

const PRODUCTS: Product[] = [
  { key: 'motor', icon: 'directions_car', accentColor: 'text-green-400' },
  { key: 'health', icon: 'local_hospital', accentColor: 'text-red-400' },
  { key: 'term', icon: 'shield', accentColor: 'text-blue-400' },
  { key: 'home', icon: 'home', accentColor: 'text-amber-400' },
  { key: 'travel', icon: 'flight', accentColor: 'text-sky-400' },
  { key: 'fire', icon: 'local_fire_department', accentColor: 'text-orange-400' },
  { key: 'marine', icon: 'anchor', accentColor: 'text-cyan-400' },
  { key: 'commercial', icon: 'business_center', accentColor: 'text-violet-400' },
  { key: 'addon', icon: 'add_circle', accentColor: 'text-teal-400' },
  { key: 'cyber', icon: 'shield_moon', accentColor: 'text-indigo-400' },
];

export const CategoryTiles = () => {
  const { t } = useTranslation();

  return (
    <section className="section my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PRODUCTS.map(({ key, icon, accentColor }) => (
          <article
            key={key}
            className="glass-card rounded-card shadow-custom-shadow-l1 flex flex-col overflow-hidden hover:shadow-custom-shadow-hover transition-all duration-200 group"
          >
            {/* Top Icon Section */}
            <div className="p-8 pb-4">
              <div className="flex justify-center mb-6">
                <span className={`material-symbols-outlined text-[10rem] ${accentColor} transition-transform duration-200 group-hover:scale-105`}>
                  {icon}
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface text-center mb-2">
                {t(`products.${key}.title`)}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-center">
                {t(`products.${key}.description`)}
              </p>
            </div>

            {/* For Whom Section */}
            <div className="px-8 py-4 border-t border-white/10">
              <p className="font-label-sm text-label-sm text-secondary font-semibold mb-2">
                👉 {t('products.for_whom')}
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {t(`products.${key}.for_whom_desc`)}
              </p>
            </div>

            {/* Key Benefits Section */}
            <div className="px-8 py-4 border-t border-white/10 flex-grow">
              <p className="font-label-sm text-label-sm text-accent-purple font-semibold mb-3">
                💎 {t('products.key_benefits')}
              </p>
              <ul className="space-y-2">
                {(t(`products.${key}.benefits`, { returnObjects: true }) as string[]).map((benefit, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-success-green flex-shrink-0">✓</span>
                    <span className="font-body-md text-body-md text-on-surface-variant">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
