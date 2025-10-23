import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sophie Martin',
    company: 'Boutique Élégance',
    role: 'Fondatrice',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
    content: 'L\'équipe a su transformer notre vision en un site e-commerce magnifique et performant. Nos ventes ont augmenté de 150% en 6 mois!',
    rating: 5,
  },
  {
    name: 'Thomas Dubois',
    company: 'Restaurant Le Gourmet',
    role: 'Directeur',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
    content: 'Un accompagnement professionnel du début à la fin. Le site est exactement ce que nous voulions, et le système de réservation fonctionne parfaitement.',
    rating: 5,
  },
  {
    name: 'Marie Leclerc',
    company: 'Cabinet Juridique ML',
    role: 'Avocate',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300',
    content: 'Excellent travail sur notre site professionnel. L\'équipe a compris nos besoins spécifiques et a livré un résultat qui dépasse nos attentes.',
    rating: 5,
  },
  {
    name: 'Alexandre Bernard',
    company: 'Tech Solutions Pro',
    role: 'CEO',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300',
    content: 'Service de maintenance impeccable. Nous sommes rassurés de savoir que notre plateforme est entre de bonnes mains. Réponse rapide et efficace.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Témoignages Clients
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            La satisfaction de nos clients est notre priorité. Découvrez ce qu'ils disent de notre collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl p-8 hover:border-blue-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-6">
                <Quote size={40} className="text-blue-600 opacity-20" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-orange-400 fill-current" />
                  ))}
                </div>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role} • {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Rejoignez nos clients satisfaits
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Plus de 150 entreprises nous font confiance pour leurs projets digitaux. Pourquoi pas vous?
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Démarrer votre projet
            <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
