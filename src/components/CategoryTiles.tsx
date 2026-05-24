import { useTranslation } from 'react-i18next';
import motorIcon from '../assets/motor-insurance.svg';
import healthIcon from '../assets/health-insurance.svg';
import termIcon from '../assets/term-life-insurance.svg';

interface Product {
  key: 'motor' | 'health' | 'term';
  iconSrc: string;
  accentColor: string;
}

const PRODUCTS: Product[] = [
  { key: 'motor', iconSrc: motorIcon, accentColor: 'text-green-400' },
  { key: 'health', iconSrc: healthIcon, accentColor: 'text-red-400' },
  { key: 'term', iconSrc: termIcon, accentColor: 'text-blue-400' },
];

export const CategoryTiles = () => {
  const { t } = useTranslation();

  return (
    <section className="section my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PRODUCTS.map(({ key, iconSrc }) => (
          <article
            key={key}
            className="glass-card rounded-card shadow-custom-shadow-l1 flex flex-col overflow-hidden hover:shadow-custom-shadow-hover transition-all duration-200 group"
          >
            {/* Top Icon Section */}
            <div className="p-8 pb-4">
              <div className="flex justify-center mb-6">
                <img
                  src={iconSrc}
                  alt={`${t(`products.${key}.title`)} icon`}
                  className="w-24 h-24 object-contain transition-transform duration-200 group-hover:scale-105"
                />
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

            {/* CTA Buttons */}
            <div className="px-8 py-6 border-t border-white/10 flex gap-3 mt-auto">
              <button className="flex-1 bg-secondary hover:bg-secondary-container text-on-secondary font-label-sm py-3 rounded-lg transition-colors">
                {t('products.cta_plans')}
              </button>
              <button className="flex-1 border border-secondary text-secondary hover:bg-secondary/10 font-label-sm py-3 rounded-lg transition-colors">
                {t('products.cta_quotes')}
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
