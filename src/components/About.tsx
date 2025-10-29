import { Target, Users, Lightbulb, Award } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Orienté résultats',
    description: 'Chaque projet est conçu pour atteindre vos objectifs business et maximiser votre ROI.',
  },
  {
    icon: Users,
    title: 'Accompagnement personnalisé',
    description: 'Une relation client privilégiée avec un suivi sur-mesure à chaque étape de votre projet.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation constante',
    description: 'Nous utilisons les dernières technologies pour créer des solutions modernes et performantes.',
  },
  {
    icon: Award,
    title: 'Excellence & qualité',
    description: 'Des standards de qualité élevés pour garantir la réussite et la pérennité de vos projets.',
  },
];

export default function About() {
  return (
    <>
      <section id="about" className="py-20 bg-gradient-to-b from-blue-50 to-blue-100 relative overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute top-20 right-1/3 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-float-up"></div>
        <div className="absolute -bottom-10 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float-slow" style={{ animationDelay: '2s' }}></div>
        
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
              À propos d'izrf
            </h2>
            <p className="text-lg text-blue-700 mb-6 leading-relaxed">
              izrf est une agence web de confiance basée à Lille. Nous aidons les entreprises à créer leur présence en ligne avec des solutions web performantes, modernes et adaptées à leurs besoins.
            </p>
            <p className="text-lg text-blue-700 mb-6 leading-relaxed">
              En tant que partenaire digital, nous transformons vos idées en sites web exceptionnels qui génèrent des résultats. Notre approche combine expertise technique et stratégie business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center space-x-3 bg-white p-3 rounded-lg border-l-4 border-blue-600 shadow-sm">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">✨</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Qualité</div>
                  <div className="text-sm text-gray-600">premium</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white p-3 rounded-lg border-l-4 border-blue-500 shadow-sm">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">⚡</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Performance</div>
                  <div className="text-sm text-gray-600">optimale</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white p-3 rounded-lg border-l-4 border-blue-400 shadow-sm">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-300 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-900 font-bold text-xl">🎯</span>
                </div>
                <div>
                  <div className="font-semibold text-blue-900">Expertise</div>
                  <div className="text-sm text-blue-700">reconnue</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Developer web" className="h-40 rounded-2xl object-cover shadow-lg" />
                <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Code programming" className="h-56 rounded-2xl object-cover shadow-lg" />
              </div>
              <div className="space-y-4 pt-8">
                <img src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Coding on laptop" className="h-56 rounded-2xl object-cover shadow-lg" />
                <img src="https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Web developer" className="h-40 rounded-2xl object-cover shadow-lg" />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4">
            Nos Valeurs
          </h3>
          <p className="text-blue-700 max-w-2xl mx-auto">
            Les principes qui guident notre travail au quotidien
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group relative bg-white border-2 border-blue-100 rounded-xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300 text-center overflow-hidden transform hover:-translate-y-1"
              >
                {/* Gradient de fond au survol */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                
                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-blue-200 group-hover:to-blue-100 transition-all shadow-md group-hover:shadow-lg">
                    <Icon size={28} className="text-blue-600 group-hover:text-blue-700 transition-colors" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{value.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    </>
  );
}
