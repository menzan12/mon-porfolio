import { Monitor, Server, Database, Cloud } from 'lucide-react';
import type { JSX } from 'react';


interface SkillGroup {
  icon: JSX.Element;
  title: string;
  color: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    icon: <Monitor size={20} />,
    title: 'Frontend',
    color: 'from-violet-500 to-violet-600',
    skills: [
      'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js',
      'Redux Toolkit', 'Zustand', 'Tailwind CSS', 'Swr', 'Bootstrap', 'Axios', 'Vite',
    ],
  },
  {
    icon: <Server size={20} />,
    title: 'Backend',
    color: 'from-blue-500 to-blue-600',
    skills: [
      'Node.js', 'Express', 'SQL','Bun','Elisia',
      'JWT', 'bcrypt', 'Postman', 'Zod', 'Prisma', 'NoSQL',
    ],
  },
  {
    icon: <Database size={20} />,
    title: 'Base de données',
    color: 'from-emerald-500 to-emerald-600',
    skills: ['SQLite', 'MongoDB', 'Firebase'],
  },
  {
    icon: <Cloud size={20} />,
    title: 'Déploiement & DevOps',
    color: 'from-amber-500 to-amber-600',
    skills: ['Git', 'GitHub', 'Vercel', 'Hostinger', 'Render', 'Firebase', 'GitHub Actions'],
  },
];

const levelMap: Record<string, number> = {
  HTML: 95, CSS: 90, JavaScript: 88, TypeScript: 82, React: 85, 'Next.js': 80,
  'Redux Toolkit': 75, Zustand: 78, 'Tailwind CSS': 90, Bootstrap: 82, Axios: 85, Vite: 80,
  'Node.js': 82, Express: 80, Django: 72, 'Spring Boot': 68, JWT: 85, bcrypt: 80,
  Postman: 88, Zod: 75, Prisma: 78, Mongoose: 80,
  SQLite: 78, MongoDB: 82, Firebase: 80,
  Git: 88, GitHub: 88, Vercel: 85, Hostinger: 75, Render: 78, 'GitHub Actions': 72,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm font-semibold mb-4">
            Compétences
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Ma stack technique
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Un ensemble de technologies soigneusement choisi pour construire des applications complètes et performantes
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {skillGroups.map(group => (
            <div
              key={group.title}
              className="bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 hover:border-violet-200 dark:hover:border-violet-800 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/5"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${group.color} flex items-center justify-center text-white shadow-lg`}>
                  {group.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{group.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <SkillBadge key={skill} name={skill} level={levelMap[skill] ?? 75} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-center text-lg font-bold text-gray-900 dark:text-white mb-8">
            Niveaux de maîtrise
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {['React', 'TypeScript', 'Node.js', 'MongoDB', 'Next.js', 'Tailwind CSS', 'Express', 'Git'].map(skill => (
              <div key={skill} className="flex items-center gap-4">
                <span className="w-28 text-sm font-medium text-gray-700 dark:text-gray-300 text-right flex-shrink-0">
                  {skill}
                </span>
                <div className="flex-1 h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-violet-500 to-violet-600"
                    style={{ width: `${levelMap[skill] ?? 75}%` }}
                  />
                </div>
                <span className="w-10 text-xs font-semibold text-violet-600 dark:text-violet-400">
                  {levelMap[skill] ?? 75}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillBadge({ name, level }: { name: string; level: number }) {
  const intensity = level >= 85 ? 'high' : level >= 75 ? 'mid' : 'low';
  const styles = {
    high: 'bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-700',
    mid: 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700',
    low: 'bg-gray-50 dark:bg-gray-800/60 text-gray-600 dark:text-gray-400 border-gray-100 dark:border-gray-700',
  };

  return (
    <span className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all hover:-translate-y-0.5 cursor-default ${styles[intensity]}`}>
      {name}
    </span>
  );
}
