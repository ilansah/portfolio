import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 via-slate-50 to-sky-50 relative overflow-hidden">
        {/* Éléments décoratifs de fond */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-float-up"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-down" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-52 h-52 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse-glow"></div>
        
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full">
              <Sparkles size={18} className="text-blue-600" />
              <span className="text-blue-600 font-medium text-sm">Nouvelle agence web</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Donnez vie à vos{' '}
              <span className="text-blue-600">projets digitaux</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              IRZF est une jeune entreprise spécialisée dans la création de sites web, le référencement (SEO) et la maintenance. Nous développons activement notre portefeuille de projets tout en consolidant notre expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all hover:shadow-lg transform"
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

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-8 pt-4">
              <div>
                <div className="text-2xl font-bold text-blue-700">Jeune</div>
                <div className="text-sm text-blue-600">Nouvelle entreprise</div>
              </div>
              <div className="h-12 w-px bg-blue-200 hidden sm:block"></div>
              <div>
                <div className="text-2xl font-bold text-blue-700">Peu</div>
                <div className="text-sm text-blue-600">Projets réalisés</div>
              </div>
              <div className="h-12 w-px bg-blue-200 hidden sm:block"></div>
              <div>
                <div className="text-2xl font-bold text-blue-700">Lille</div>
                <div className="text-sm text-blue-600">Basée à Lille</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl transform rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl transform -rotate-6"></div>
              <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl flex items-center justify-center p-12">
                <div className="space-y-6 w-full">
                  <div className="h-4 bg-blue-200 rounded-full w-3/4"></div>
                  <div className="h-4 bg-blue-100 rounded-full w-full"></div>
                  <div className="h-4 bg-blue-200 rounded-full w-5/6"></div>
                  <div className="h-32 bg-gradient-to-br from-blue-200 to-blue-100 rounded-xl mt-8"></div>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="h-20 bg-blue-100 rounded-lg"></div>
                    <div className="h-20 bg-blue-50 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
