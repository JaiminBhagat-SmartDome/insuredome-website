import { useTranslation } from 'react-i18next';

interface FloatingActionButtonProps {
  onClick: () => void;
}

export const FloatingActionButton = ({ onClick }: FloatingActionButtonProps) => {
  const { t } = useTranslation();

  const handleClick = () => {
    onClick();
  };

  return (
    <>
      {/* FAB Button */}
      <button
        onClick={handleClick}
        className="fixed bottom-6 right-6 z-40 bg-secondary hover:bg-secondary-container text-on-secondary rounded-full shadow-custom-shadow-l2 hover:shadow-custom-shadow-l3 transition-all duration-200 group"
        aria-label={t('fab.label')}
        title={t('fab.label')}
      >
        {/* Desktop: Icon + Text */}
        <div className="hidden sm:flex items-center gap-3 px-6 py-4 group-hover:scale-105 transition-transform">
          <span className="material-symbols-outlined text-2xl">call</span>
          <span className="font-label-sm font-semibold">{t('fab.label')}</span>
        </div>

        {/* Mobile: Icon Only (Circle) */}
        <div className="sm:hidden flex items-center justify-center w-14 h-14 group-active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-2xl">call</span>
        </div>
      </button>

      {/* Accessibility label for screen readers */}
      <span className="visually-hidden">{t('fab.label')}</span>
    </>
  );
};
