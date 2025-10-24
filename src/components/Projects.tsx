import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import type { Project } from '../lib/supabase';
import { mockProjects } from '../data/mockProjects';

export default function Projects() {
  const navigate = useNavigate();
  // Use local mock data so we can work fully offline and edit projects locally.
  const [projects] = useState<Project[]>(() => mockProjects.filter((p) => p.is_featured));
  const [loading] = useState(false);
  return (
    <>
      <section id="projects" className="py-20 bg-gradient-to-b from-blue-50 via-blue-100 to-blue-50 relative overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute top-20 left-1/3 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-float-up"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-down" style={{ animationDelay: '2s' }}></div>
        
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
            Projets à la Une
          </h2>
          <p className="text-lg text-blue-700 max-w-2xl mx-auto">
            Découvrez quelques-unes de nos réalisations récentes et laissez-vous inspirer par notre travail.
          </p>
        </div>

        {(() => {
          if (loading) {
            return (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg animate-pulse">
                    <div className="aspect-video bg-gray-200"></div>
                    <div className="p-6 space-y-4">
                      <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded w-full"></div>
                      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    </div>
                  </div>
                ))}
              </div>
            );
          }

          if (projects.length === 0) {
            return (
              <div className="text-center py-12">
                <p className="text-gray-600">Aucun projet à la une n'a été trouvé.</p>
              </div>
            );
          }

          return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-100 border-2 border-blue-200"
                  onClick={() => navigate(`/projet/${project.slug}`)}
                  tabIndex={0}
                >
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.featured_image}
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
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          );
        })()}
      </div>
    </section>
    </>
  );
}
