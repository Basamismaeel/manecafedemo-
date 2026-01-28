import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { MessageSquare, Send } from 'lucide-react';
import { useState } from 'react';

const FeedbackSection = () => {
  const { t } = useLanguage();
  const { ref: introRef, isVisible: introVisible } = useScrollAnimation({ triggerOnce: true });
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation({ triggerOnce: true });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission (replace with actual API call)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-container">
      {/* Intro */}
      <div 
        ref={introRef}
        className={`max-w-3xl mx-auto text-center mb-16 scroll-fade-in ${introVisible ? 'visible' : ''}`}
      >
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent flex items-center justify-center animate-float">
          <MessageSquare size={28} className="text-primary" />
        </div>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary mb-6">
          {t.feedback.title}
        </h2>
        <div className="wavy-divider" />
        <p className="text-muted-foreground text-lg leading-relaxed mt-6">
          {t.feedback.description}
        </p>
      </div>

      {/* Feedback Form */}
      <div 
        ref={formRef}
        className={`max-w-2xl mx-auto ${formVisible ? 'visible' : ''}`}
      >
        <form 
          onSubmit={handleSubmit}
          className="bg-card rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-card transition-all duration-500 scroll-scale"
        >
          <div className="space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label 
                htmlFor="name" 
                className="text-sm font-medium text-foreground"
              >
                {t.feedback.nameLabel}
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder={t.feedback.namePlaceholder}
                required
                className="w-full"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label 
                htmlFor="email" 
                className="text-sm font-medium text-foreground"
              >
                {t.feedback.emailLabel}
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t.feedback.emailPlaceholder}
                required
                className="w-full"
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label 
                htmlFor="message" 
                className="text-sm font-medium text-foreground"
              >
                {t.feedback.messageLabel}
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t.feedback.messagePlaceholder}
                required
                rows={6}
                className="w-full resize-none"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto min-w-[150px]"
              size="lg"
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin">⏳</span>
                  {t.feedback.submitting}
                </>
              ) : (
                <>
                  <Send size={18} />
                  {t.feedback.submitButton}
                </>
              )}
            </Button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="p-4 rounded-md bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 animate-fade-in">
                {t.feedback.successMessage}
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="p-4 rounded-md bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200 animate-fade-in">
                {t.feedback.errorMessage}
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default FeedbackSection;
