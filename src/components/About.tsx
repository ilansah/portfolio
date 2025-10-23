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
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              À Propos de Notre Agence
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Depuis plus de 5 ans, nous accompagnons les entreprises dans leur transformation digitale.
              Notre équipe d'experts passionnés combine créativité et expertise technique pour donner vie
              à vos projets web les plus ambitieux.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Que vous soyez une startup en pleine croissance, une PME établie ou un indépendant
              souhaitant marquer sa présence en ligne, nous avons la solution adaptée à vos besoins
              et votre budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">5+</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Années</div>
                  <div className="text-sm text-gray-600">d'expérience</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">150+</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Projets</div>
                  <div className="text-sm text-gray-600">réalisés</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">98%</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Satisfaction</div>
                  <div className="text-sm text-gray-600">client</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-40 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl"></div>
                <div className="h-56 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl"></div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-56 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl"></div>
                <div className="h-40 bg-gradient-to-br from-blue-500 to-orange-500 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Nos Valeurs
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Les principes qui guident notre travail au quotidien
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-blue-600 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon size={28} className="text-blue-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
