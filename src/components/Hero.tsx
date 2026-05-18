import { ArrowDown, Mail, ExternalLink } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-950"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-violet-500/10 dark:bg-violet-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-violet-600/10 dark:bg-violet-600/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-400/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:64px_64px] opacity-30 dark:opacity-10" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-900/30 border border-violet-200 dark:border-violet-800 text-violet-700 dark:text-violet-300 text-sm font-medium mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
          Disponible pour de nouveaux projets
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight tracking-tight">
          Développeur{' '}
          <span className="relative inline-block">
            <span className="text-violet-600 dark:text-violet-400">Fullstack</span>
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 300 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 8C60 4 120 2 150 2C180 2 240 4 298 8"
                stroke="#7c3aed"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.6"
              />
            </svg>
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Je conçois et développe des applications web modernes et performantes,
          du design UI au déploiement en production.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button
            onClick={() => scrollTo('#projects')}
            className="group inline-flex items-center gap-2 px-7 py-3.5 bg-violet-600 hover:bg-violet-700 active:bg-violet-800 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:-translate-y-0.5"
          >
            Voir mes projets
            <ExternalLink size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-semibold rounded-xl hover:border-violet-400 dark:hover:border-violet-500 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-200 hover:-translate-y-0.5"
          >
            Me contacter
          </button>
        </div>

        <div className="flex items-center justify-center gap-4 mb-20">
          <a
            href="https://github.com/menzan12"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-violet-100 dark:hover:bg-violet-900/40 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-200"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="mailto:menzankader@gmail.com"
            className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-violet-100 dark:hover:bg-violet-900/40 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-200"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://www.linkedin.com/public-profile/settings/?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B7NSRxS7eStG8nJI5MPZ3hw%3D%3D"
            className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-violet-100 dark:hover:bg-violet-900/40 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-200"
          >
            <FaLinkedin size={18} />
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { value: '2+', label: 'Ans d\'expérience' },
            { value: '3+', label: 'Projets réalisés' },
            { value: '15+', label: 'Technologies' },
            { value: '100%', label: 'Satisfaction client' },
          ].map(stat => (
            <div
              key={stat.label}
              className="flex flex-col items-center p-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800"
            >
              <span className="text-2xl font-extrabold text-violet-600 dark:text-violet-400">{stat.value}</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 text-center mt-1">{stat.label}</span>
            </div>
          ))}
        </div>

        <button
          onClick={() => scrollTo('#about')}
          className="mt-16 mx-auto flex flex-col items-center gap-2 text-gray-400 dark:text-gray-600 hover:text-violet-600 dark:hover:text-violet-400 transition-colors group"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Découvrir</span>
          <ArrowDown size={16} className="animate-bounce group-hover:text-violet-600 dark:group-hover:text-violet-400" />
        </button>
      </div>
    </section>
  );
}
