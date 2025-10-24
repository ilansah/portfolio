import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar } from 'lucide-react';
import { supabase, Project, ProjectImage } from '../lib/supabase';
import ImageGallery from '../components/ImageGallery';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [images, setImages] = useState<ProjectImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      if (!slug) return;

      setLoading(true);

      const { data: projectData, error: projectError } = await supabase
        .from('projects')
        .select('*')
        .eq('slug', slug)
        .maybeSingle();

      if (projectError) {
        console.error('Error fetching project:', projectError);
        setLoading(false);
        return;
      }

      if (!projectData) {
        setLoading(false);
        return;
      }

      setProject(projectData);

      const { data: imagesData, error: imagesError } = await supabase
        .from('project_images')
        .select('*')
        .eq('project_id', projectData.id)
        .order('display_order', { ascending: true });

      if (imagesError) {
        console.error('Error fetching images:', imagesError);
      } else {
        setImages(imagesData || []);
      }

      setLoading(false);
    };

    fetchProject();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen pt-24 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mb-8"></div>
            <div className="h-96 bg-gray-200 rounded mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen pt-24 pb-16 bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Projet non trouvé</h2>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
          >
            <ArrowLeft size={20} className="mr-2" />
            Retour à l'accueil
          </button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Date non spécifiée';
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center text-gray-600 hover:text-blue-600 font-medium mb-8 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Retour aux projets
        </button>

        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              {project.category}
            </span>
            <div className="flex items-center text-gray-600">
              <Calendar size={18} className="mr-2" />
              <span>{formatDate(project.project_date)}</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {project.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
            <div>
              <span className="font-semibold text-gray-900">Client:</span> {project.client_name}
            </div>
            {project.client_industry && (
              <div>
                <span className="font-semibold text-gray-900">Secteur:</span> {project.client_industry}
              </div>
            )}
            {project.project_url && (
              <a
                href={project.project_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
              >
                Visiter le site
                <ExternalLink size={18} className="ml-2" />
              </a>
            )}
          </div>

          <p className="text-xl text-gray-600 leading-relaxed">{project.description}</p>
        </div>

        <div className="mb-12">
          <img
            src={project.featured_image}
            alt={project.title}
            className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-12">
            {project.challenge && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Le Défi</h2>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">{project.challenge}</p>
              </div>
            )}

            {project.solution && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Solution</h2>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">{project.solution}</p>
              </div>
            )}

            {project.results && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Résultats</h2>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">{project.results}</p>
              </div>
            )}
          </div>

          <div className="space-y-6">
            {project.technologies && project.technologies.length > 0 && (
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-white text-gray-700 px-4 py-2 rounded-lg text-sm font-medium border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.features && project.features.length > 0 && (
              <div className="bg-blue-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Fonctionnalités Clés</h3>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {images.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Galerie du Projet</h2>
            <ImageGallery images={images} />
          </div>
        )}

        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Vous avez un projet similaire?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Discutons de vos besoins et voyons comment nous pouvons vous aider à atteindre vos objectifs.
          </p>
          <button
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Contactez-nous
            <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
