import { useState, useEffect } from 'react';
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

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [isOpen, onClose]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTurnstileSimulation = () => {
    // Simulate Turnstile verification (placeholder)
    setIsCaptchaVerified(!isCaptchaVerified);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isCaptchaVerified) {
      alert(t('modal.error_captcha'));
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset and close after 2 seconds
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
        {/* Header */}
        <div className="p-8 border-b border-outline-variant">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="font-headline-md text-headline-md text-on-surface">
                {t('modal.title')}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                {t('modal.subtitle')}
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-on-surface-variant hover:text-on-surface transition-colors flex-shrink-0"
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="px-8 py-6 bg-secondary/5 border-b border-outline-variant">
          <p className="font-label-sm text-label-sm text-secondary font-semibold mb-3">
            📞 {t('modal.contact_available')}
          </p>
          <div className="space-y-2">
            <a
              href={`tel:${t('modal.phone_number')}`}
              className="flex items-center gap-3 p-3 bg-secondary/10 rounded-lg hover:bg-secondary/15 transition-colors group"
            >
              <span className="text-secondary font-semibold flex-shrink-0">📱</span>
              <div>
                <p className="font-label-sm text-on-surface font-semibold">
                  {t('modal.phone_number')}
                </p>
                <p className="text-xs text-on-surface-variant">{t('modal.call_now')}</p>
              </div>
            </a>
            <a
              href={`mailto:${t('modal.email_address')}`}
              className="flex items-center gap-3 p-3 bg-secondary/10 rounded-lg hover:bg-secondary/15 transition-colors group"
            >
              <span className="text-secondary font-semibold flex-shrink-0">✉️</span>
              <div>
                <p className="font-label-sm text-on-surface font-semibold">
                  {t('modal.email_address')}
                </p>
                <p className="text-xs text-on-surface-variant">{t('modal.email_us')}</p>
              </div>
            </a>
          </div>
          <p className="text-xs text-on-surface-variant mt-3 italic">
            {t('modal.unavailable_form')}
          </p>
        </div>

        {/* Form Section */}
        <div className="p-8">

        {/* Success Message */}
        {isSuccess ? (
          <div className="bg-success-green/10 border border-success-green rounded-lg p-4 text-center">
            <p className="font-body-md text-success-green">{t('modal.success')}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Input */}
            <div>
              <label className="font-label-sm text-label-sm text-on-surface block mb-2">
                {t('modal.name')}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 bg-surface-container rounded-lg border border-outline-variant focus:border-secondary focus:outline-none transition-colors font-body-md"
                placeholder="John Doe"
              />
            </div>

            {/* Phone Input */}
            <div>
              <label className="font-label-sm text-label-sm text-on-surface block mb-2">
                {t('modal.phone')}
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 bg-surface-container rounded-lg border border-outline-variant focus:border-secondary focus:outline-none transition-colors font-body-md"
                placeholder="+91 98765 43210"
              />
            </div>

            {/* Insurance Type Dropdown */}
            <div>
              <label className="font-label-sm text-label-sm text-on-surface block mb-2 font-semibold">
                {t('modal.type')}
              </label>
              <select
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-surface-container border-2 border-outline-variant rounded-lg focus:border-secondary focus:outline-none transition-colors font-body-md text-on-surface hover:border-outline-variant/70 hover:bg-surface-dim cursor-pointer appearance-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23818cf8' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 12px center',
                  paddingRight: '36px'
                }}
              >
                <option value="" disabled className="bg-surface-container text-on-surface-variant">{t('modal.select_option')}</option>
                <option value="motor" className="bg-surface-container text-on-surface">{t('modal.motor_opt')}</option>
                <option value="health" className="bg-surface-container text-on-surface">{t('modal.health_opt')}</option>
                <option value="term" className="bg-surface-container text-on-surface">{t('modal.term_opt')}</option>
              </select>
            </div>

            {/* Turnstile Placeholder */}
            <div className="mt-6 p-4 border-2 border-dashed border-outline-variant rounded-lg bg-surface-container/50">
              <button
                type="button"
                onClick={handleTurnstileSimulation}
                className={`w-full py-3 px-4 rounded-lg font-label-sm font-semibold transition-all ${
                  isCaptchaVerified
                    ? 'bg-success-green/20 text-success-green border border-success-green'
                    : 'bg-outline-variant/20 text-on-surface-variant border border-outline-variant hover:border-outline'
                }`}
              >
                {isCaptchaVerified ? '✓ Turnstile Verified' : 'Click to Verify with Turnstile'}
              </button>
              <p className="text-xs text-on-surface-variant text-center mt-2">
                Placeholder for Cloudflare Turnstile integration
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-6 bg-secondary hover:bg-secondary-container disabled:opacity-50 text-on-secondary font-label-sm font-semibold py-3 rounded-lg transition-colors shadow-custom-shadow-l1 hover:shadow-custom-shadow-l2"
            >
              {isSubmitting ? t('modal.submitting') : t('modal.submit')}
            </button>
          </form>
        )}
        </div>
      </div>
    </div>
  );
};
