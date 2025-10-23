import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">
              Digital<span className="text-blue-500">Agency</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Votre partenaire digital pour créer des solutions web sur mesure, innovantes et performantes.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-blue-500 transition-colors"
                >
                  Nos Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-blue-500 transition-colors"
                >
                  Projets
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-blue-500 transition-colors"
                >
                  Témoignages
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-blue-500 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={20} className="mr-3 mt-1 flex-shrink-0 text-blue-500" />
                <a href="mailto:contact@digitalagency.fr" className="hover:text-blue-500 transition-colors">
                  contact@digitalagency.fr
                </a>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="mr-3 mt-1 flex-shrink-0 text-blue-500" />
                <a href="tel:+33123456789" className="hover:text-blue-500 transition-colors">
                  +33 1 23 45 67 89
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 flex-shrink-0 text-blue-500" />
                <span>Paris, France</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Digital Agency. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
