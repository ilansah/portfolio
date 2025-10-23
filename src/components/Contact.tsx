import { useState } from 'react';
import { Send, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Contactez-nous
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Prêt à démarrer votre projet? Parlez-nous de vos besoins et obtenez une consultation gratuite.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {isSubmitted ? (
              <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-12 text-center">
                <CheckCircle size={64} className="text-green-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Message envoyé avec succès!</h3>
                <p className="text-gray-600">
                  Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                      placeholder="Jean Dupont"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                      placeholder="jean@exemple.fr"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                      placeholder="+33 6 12 34 56 78"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                      Service souhaité *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors bg-white"
                    >
                      <option value="">Sélectionnez un service</option>
                      <option value="web">Création de site web</option>
                      <option value="ia">Solution IA</option>
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
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors resize-none"
                    placeholder="Décrivez votre projet..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-semibold py-4 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center group"
                >
                  <span>Envoyer le message</span>
                  <Send size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Informations de contact</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail size={24} className="mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href="mailto:contact@digitalagency.fr" className="text-blue-100 hover:text-white transition-colors">
                      contact@digitalagency.fr
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone size={24} className="mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Téléphone</div>
                    <a href="tel:+33123456789" className="text-blue-100 hover:text-white transition-colors">
                      +33 1 23 45 67 89
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin size={24} className="mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Adresse</div>
                    <p className="text-blue-100">
                      123 Avenue des Champs-Élysées<br />
                      75008 Paris, France
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-8">
              <h4 className="font-bold text-gray-900 mb-3">Consultation gratuite</h4>
              <p className="text-gray-600 text-sm mb-4">
                Bénéficiez d'un premier rendez-vous gratuit de 30 minutes pour discuter de votre projet.
              </p>
              <button className="w-full bg-orange-500 text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition-colors">
                Réserver un créneau
              </button>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="font-bold text-gray-900 mb-3">Horaires d'ouverture</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Lundi - Vendredi</span>
                  <span className="font-semibold text-gray-900">9h - 18h</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi</span>
                  <span className="font-semibold text-gray-900">10h - 14h</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche</span>
                  <span className="font-semibold text-gray-900">Fermé</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
