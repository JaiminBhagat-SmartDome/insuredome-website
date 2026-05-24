import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InquiryModal = ({ isOpen, onClose }: InquiryModalProps) => {
  const { t } = useTranslation();

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-surface-white rounded-card shadow-custom-shadow-l3 max-w-md w-full border border-outline overflow-hidden animate-in">
        {/* Header with close button */}
        <div className="flex items-center justify-between px-6 md:px-8 py-4 border-b border-outline">
          <h2 className="text-lg font-semibold text-on-surface">{t('modal.call_now')}</h2>
          <button
            onClick={onClose}
            className="text-on-surface/60 hover:text-on-surface transition-colors p-1"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-[1.5rem]">close</span>
          </button>
        </div>

        {/* Contact section */}
        <div className="px-6 md:px-8 py-6 bg-surface">
          <div className="mb-6 space-y-4">
            <div className="rounded-3xl bg-primary-container px-4 py-4 shadow-custom-shadow-l1 border border-outline">
              <div className="mt-3 space-y-3">
                <a
                  href={`tel:${t('modal.phone_number')}`}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-primary-container border border-white/10 hover:bg-primary-container/90 transition-colors"
                >
                  <span className="text-secondary font-semibold">📱</span>
                  <div>
                    <p className="font-label-sm text-on-primary font-semibold">{t('modal.phone_number')}</p>
                    <p className="text-xs text-on-primary/80">{t('modal.call_now')}</p>
                  </div>
                </a>
                <a
                  href={`mailto:${t('modal.email_address')}`}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-primary-container border border-white/10 hover:bg-primary-container/90 transition-colors"
                >
                  <span className="text-secondary font-semibold">✉️</span>
                  <div>
                    <p className="font-label-sm text-on-primary font-semibold">{t('modal.email_address')}</p>
                    <p className="text-xs text-on-primary/80">{t('modal.email_us')}</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
