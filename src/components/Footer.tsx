import { Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">irzf</h3>
            <p className="text-gray-400 mb-4">Nouvelle entreprise spécialisée en création de sites web et maintenance.</p>
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
                <Mail size={20} className="mr-3 mt-1 flex-shrink-0 text-blue-400" />
                <a href="mailto:support@izrf.fr" className="hover:text-blue-400 transition-colors">
                  support@izrf.fr
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 flex-shrink-0 text-blue-400" />
                <span>Lille, France</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} irzf. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
