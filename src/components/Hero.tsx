import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full">
              <Sparkles size={18} className="text-blue-600" />
              <span className="text-blue-600 font-medium text-sm">Solutions digitales innovantes</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Donnez vie à vos{' '}
              <span className="text-blue-600">projets digitaux</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Agence digitale spécialisée en création de sites web sur mesure, solutions IA,
              SEO et maintenance. Nous transformons vos idées en expériences digitales performantes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all hover:shadow-lg hover:scale-105 transform"
              >
                Consultation gratuite
                <ArrowRight size={20} className="ml-2" />
              </button>
              <button
                onClick={scrollToServices}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all"
              >
                Découvrir nos services
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-gray-900">150+</div>
                <div className="text-sm text-gray-600">Projets réalisés</div>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div>
                <div className="text-3xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Clients satisfaits</div>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div>
                <div className="text-3xl font-bold text-gray-900">5+</div>
                <div className="text-sm text-gray-600">Ans d'expérience</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl transform rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl transform -rotate-6"></div>
              <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl flex items-center justify-center p-12">
                <div className="space-y-6 w-full">
                  <div className="h-4 bg-gray-200 rounded-full w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded-full w-full"></div>
                  <div className="h-4 bg-gray-200 rounded-full w-5/6"></div>
                  <div className="h-32 bg-gradient-to-br from-blue-100 to-orange-100 rounded-xl mt-8"></div>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="h-20 bg-blue-50 rounded-lg"></div>
                    <div className="h-20 bg-orange-50 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
