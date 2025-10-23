import { Globe, Bot, Wrench, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Création de sites web sur mesure',
    description: 'Sites vitrines, e-commerce, applications web performantes et responsive adaptés à vos besoins spécifiques.',
    features: ['Design moderne', 'Responsive mobile', 'Performance optimisée', 'SEO friendly'],
  },
  {
    icon: Bot,
    title: 'Solutions IA personnalisées',
    description: 'Intégration d\'intelligence artificielle pour automatiser vos processus et améliorer l\'expérience utilisateur.',
    features: ['Chatbots intelligents', 'Automatisation', 'Analyse prédictive', 'Personnalisation'],
  },
  {
    icon: Wrench,
    title: 'Maintenance et support web',
    description: 'Support technique réactif, mises à jour régulières et sauvegardes automatiques pour garantir la continuité de votre activité.',
    features: ['Support 48h', 'Mises à jour', 'Sauvegardes', 'Monitoring 24/7'],
  },
  {
    icon: TrendingUp,
    title: 'SEO & stratégie organique',
    description: 'Optimisation pour les moteurs de recherche et stratégies de contenu pour augmenter votre visibilité en ligne.',
    features: ['Audit SEO', 'Mots-clés', 'Contenu optimisé', 'Suivi analytics'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nos Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des solutions digitales complètes pour propulser votre présence en ligne et atteindre vos objectifs business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-blue-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <Icon size={32} className="text-blue-600 group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="mt-8 text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center group-hover:translate-x-2 transition-transform">
                  En savoir plus
                  <span className="ml-2">→</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
