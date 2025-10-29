import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Wrona Thomas',
    company: 'Tomilan Trek',
    role: 'Fondateur',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
    content: 'L\'équipe a créé une plateforme de randonnée magnifique qui facilite le partage d\'itinéraires et les conseils entre randonneurs. La qualité du travail est exceptionnelle!',
    rating: 5,
  },
  {
    name: 'Anonyme',
    company: 'Client',
    role: 'Propriétaire',
    image: undefined,
    content: 'Excellent travail sur notre site web. Notre présence en ligne s\'est améliorée considérablement et nous recevons plus de clients grâce à ce projet.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <>
      <section id="testimonials" className="py-20 bg-gradient-to-b from-blue-50 via-blue-100 to-blue-50 relative overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-float-right"></div>
        <div className="absolute bottom-20 right-1/3 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-down" style={{ animationDelay: '1.5s' }}></div>
        
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
            Témoignages Clients
          </h2>
          <p className="text-lg text-blue-700 max-w-2xl mx-auto">
            La satisfaction de nos clients est notre priorité. Découvrez ce qu'ils disent de notre collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white border-2 border-blue-200 rounded-2xl p-8 hover:border-blue-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient de fond au survol */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <Quote size={40} className="text-blue-400 opacity-30" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 italic text-sm">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center pt-4 border-t border-gray-100">
                  {testimonial.image ? (
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-3 ring-2 ring-blue-100 group-hover:ring-blue-300 transition-all"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mr-3 ring-2 ring-blue-100 group-hover:ring-blue-300 transition-all">
                      <span className="text-white font-bold text-sm">{testimonial.name.charAt(0)}</span>
                    </div>
                  )}
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                    <div className="text-xs text-gray-500">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Quelques clients</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Nous accompagnons nos premiers clients et développons notre expérience projet par projet.</p>
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
    </>
  );
}
