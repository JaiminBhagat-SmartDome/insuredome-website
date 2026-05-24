import { useState, useEffect, type ChangeEvent, type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InquiryModal = ({ isOpen, onClose }: InquiryModalProps) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', phone: '', type: '' });
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [isOpen, onClose]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTurnstileSimulation = () => {
    setIsCaptchaVerified((prev) => !prev);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isCaptchaVerified) {
      alert(t('modal.error_captcha'));
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: '', phone: '', type: '' });
      setIsCaptchaVerified(false);
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-surface-white rounded-card shadow-custom-shadow-l3 max-w-md w-full border border-outline overflow-hidden animate-in">
        {/* Contact + Form */}
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
