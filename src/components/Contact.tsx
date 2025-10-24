import { useState, useEffect } from 'react';
import { Send, Mail, MapPin, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Initialiser EmailJS au montage du composant
  useEffect(() => {
    emailjs.init('DHc-e069x2uEqLyL0'); // À remplacer par votre clé publique EmailJS
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Envoyer l'email via EmailJS
      await emailjs.send(
        'service_ak6nrr4', // À remplacer
        'template_yvopk17', // À remplacer
        {
          from_name: formData.name,
          from_email: formData.email,
          service: formData.service,
          message: formData.message,
          to_email: 'support@izrf.fr',
        }
      );

      setIsSubmitted(true);
      setFormData({ name: '', email: '', service: '', message: '' });
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (err) {
      setError('Erreur lors de l\'envoi du message. Veuillez réessayer.');
      console.error('Erreur EmailJS:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <section id="contact" className="py-24 bg-gradient-to-br from-blue-600 via-blue-600 to-blue-700 relative overflow-hidden">
        {/* Texture de fond */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -mr-48 -mt-48 animate-float-slow"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full -ml-48 mb-48 animate-float-slow" style={{ animationDelay: '3s' }}></div>
        </div>
        
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Contactez-nous
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Prêt à démarrer votre projet? Parlez-nous de vos besoins et obtenez une consultation gratuite.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {isSubmitted ? (
              <div className="bg-green-500/20 border-2 border-green-400 rounded-2xl p-12 text-center backdrop-blur-sm">
                <CheckCircle size={64} className="text-green-300 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Message envoyé avec succès!</h3>
                <p className="text-green-100">
                  Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-blue-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors bg-white hover:border-blue-400"
                      placeholder="Jean Dupont"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-blue-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors bg-white hover:border-blue-400"
                      placeholder="jean@exemple.fr"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Phone removed — no phone contact provided */}
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-800 mb-2">
                      Service souhaité *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors bg-white"
                    >
                      <option value="">Sélectionnez un service</option>
                      <option value="web">Création de site web</option>
                      {/* IA option removed */}
                      <option value="maintenance">Maintenance</option>
                      <option value="seo">SEO</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none bg-white"
                    placeholder="Décrivez votre projet..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all inline-flex items-center justify-center group shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{isLoading ? 'Envoi en cours...' : 'Envoyer le message'}</span>
                  <Send size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                {error && <p className="text-red-200 text-sm mt-2">{error}</p>}
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-black mb-6">Informations de contact</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail size={24} className="mr-4 flex-shrink-0 mt-1 text-black/70" />
                  <div>
                    <div className="font-semibold mb-1 text-black">Email</div>
                    <a href="mailto:support@izrf.fr" className="text-black hover:text-blue-600 transition-colors font-medium">
                      support@izrf.fr
                    </a>
                  </div>
                </div>
                {/* Phone removed from contact card */}
                <div className="flex items-start">
                  <MapPin size={24} className="mr-4 flex-shrink-0 mt-1 text-black/70" />
                  <div>
                    <div className="font-semibold mb-1 text-black">Adresse</div>
                    <p className="text-black font-medium">
                      Lille, France
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening hours removed — no schedule provided */}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
