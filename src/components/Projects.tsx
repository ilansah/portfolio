import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Fashion',
    category: 'Site e-commerce',
    description: 'Boutique en ligne complète avec gestion de stock, paiements sécurisés et interface utilisateur élégante.',
    image: 'https://images.pexels.com/photos/270640/pexels-photo-270640.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Node.js', 'Stripe'],
  },
  {
    title: 'Restaurant Le Gourmet',
    category: 'Site vitrine',
    description: 'Site vitrine moderne avec réservation en ligne, menu interactif et galerie photos haute qualité.',
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['WordPress', 'SEO', 'Responsive'],
  },
  {
    title: 'Plateforme SaaS',
    category: 'Application web',
    description: 'Application web complexe avec tableau de bord analytique, gestion d\'équipes et API REST.',
    image: 'https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Vue.js', 'Python', 'PostgreSQL'],
  },
  {
    title: 'Cabinet d\'Avocat',
    category: 'Site vitrine',
    description: 'Site professionnel avec blog juridique, formulaires de contact sécurisés et espace client.',
    image: 'https://images.pexels.com/photos/7876050/pexels-photo-7876050.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Next.js', 'TypeScript', 'Supabase'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Projets à la Une
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez quelques-unes de nos réalisations récentes et laissez-vous inspirer par notre travail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-white font-semibold">Voir le projet</span>
                    <ExternalLink size={20} className="text-white" />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
            Voir tous les projets
            <ExternalLink size={20} className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
