import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';


interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'SkillMarket',
    description:
      'Application web complète développée avec React et les meilleures pratiques modernes. Interface utilisateur soignée, expérience fluide et performances optimisées.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://projet-final-frontend-jwjpzw9eh-menzan12s-projects.vercel.app/',
    githubUrl: 'https://github.com/menzan12/Projet-final-frontend',
    image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
  },
  {
    title: 'Afrique Délices',
    description:
      'Plateforme e-commerce de produits africains artisanaux. Catalogue produits, panier d\'achat, système de commande et interface d\'administration complète.',
    tech: ['HTML', 'Bootstrap', 'CSS', 'Vercel'],
    liveUrl: 'https://afriquedelices-git-master-menzan12s-projects.vercel.app/',
    githubUrl: 'https://github.com/menzan12/Projet-final',
    image: 'https://images.for9a.com/thumb/max-2000-auto-100-jpeg/opportunity/49217-tasty-pakistani-dish-top-view-23-2148825150.jpg',
    featured: true,
  },
  {
    title: 'Projet Backend',
    description:
      "API backend développée pour gérer les données, l’authentification et les opérations serveur d’une application web avec une architecture sécurisée et scalable.",
    tech: ['Node.js', 'Express', 'JWT', 'bcrypt', 'Mongoose'],
    liveUrl: '#',
    githubUrl: 'https://github.com/menzan12/Projet-final-backend',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'School-Projet',
    description:
      "Application de gestion scolaire permettant l’administration des élèves, classes, enseignants et inscriptions. Le système facilite l’organisation académique avec une interface moderne et intuitive.",
    tech: ['React', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'pnpm', 'SQLite', 'Node', 'Express', 'Zod'],
    liveUrl: '#',
    githubUrl: 'https://github.com/menzan12/school-Projet',
    image: 'https://images.pexels.com/photos/7947664/pexels-photo-7947664.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm font-semibold mb-4">
            Projets
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Mes réalisations
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Des projets concrets qui illustrent mes compétences techniques et ma capacité à livrer des solutions complètes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/menzan12"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-semibold rounded-xl hover:border-violet-400 dark:hover:border-violet-500 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-200 hover:-translate-y-0.5"
          >
            <FaGithub size={16} />
            Voir plus sur GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-violet-500/10 hover:border-violet-200 dark:hover:border-violet-800 transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        {project.featured && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-violet-600 text-white text-xs font-bold">
            Featured
          </span>
        )}
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.liveUrl !== '#' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-800 hover:bg-violet-600 hover:text-white transition-colors"
            >
              <ExternalLink size={14} />
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-800 hover:bg-violet-600 hover:text-white transition-colors"
          >
            <FaGithub size={14} />
          </a>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map(t => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-medium"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {project.liveUrl !== '#' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold rounded-lg transition-colors"
            >
              <ExternalLink size={13} />
              Live Demo
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-semibold rounded-lg transition-colors"
          >
            <FaGithub size={13} />
            Code
          </a>
        </div>
      </div>
    </div>
  );
}
