import { Globe, Wrench, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Création de sites web sur mesure',
    description: 'Sites vitrines, e-commerce, applications web performantes et responsive adaptés à vos besoins spécifiques.',
    features: ['Design moderne', 'Responsive mobile', 'Performance optimisée', 'SEO friendly'],
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
    <>
      <section id="services" className="py-24 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 relative overflow-hidden">
        {/* Texture de fond */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -ml-48 -mt-48 animate-float-slow"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mr-48 mb-48 animate-float-slow" style={{ animationDelay: '3s' }}></div>
        </div>
        
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Nos Services
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Des solutions digitales complètes pour propulser votre présence en ligne et atteindre vos objectifs business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-3xl hover:bg-white transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 bg-gradient-to-br from-blue-600 to-blue-500 shadow-lg group-hover:shadow-xl">
                    <Icon size={32} className="text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-700 mb-4 leading-relaxed text-sm font-medium">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700 text-sm">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
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
