import { User, Briefcase, GraduationCap, MapPin, Download } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm font-semibold mb-4">
            À propos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Qui suis-je ?
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Passionné par le développement web et les nouvelles technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative mx-auto w-64 h-64 sm:w-80 sm:h-80">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500 to-violet-700 rotate-6 opacity-20" />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-400 to-violet-600 -rotate-3 opacity-10" />
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-violet-200 dark:border-violet-800 shadow-2xl">
                <img
                  src="https://www.journaldufreenaute.fr/wp-content/uploads/2024/10/Bureau-de-developpeur-avec-plusieurs-ecrans.jpg"
                  alt="Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-xl border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">
                    Disponible
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Menzan.AK — Développeur Fullstack
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              Développeur fullstack passionné avec plus de 2 ans d'expérience
              dans la conception et le développement d'applications web
              complètes. Je maîtrise aussi bien le frontend avec React et
              Next.js que le backend avec Node.js, Express et Spring Boot.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              J'aime créer des expériences utilisateur fluides et des
              architectures backend robustes. Mon approche est centrée sur la
              qualité du code, les bonnes pratiques et la livraison de solutions
              qui répondent réellement aux besoins des utilisateurs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: User, label: "Nom", value: "Menzan.AK" },
                { icon: MapPin, label: "Localisation", value: "Abidjan" },
                {
                  icon: GraduationCap,
                  label: "Formation",
                  value: "Ingénierie Logiciel",
                },
                { icon: Briefcase, label: "Statut", value: "Freelance / CDI" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center flex-shrink-0">
                    <item.icon
                      size={16}
                      className="text-violet-600 dark:text-violet-400"
                    />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 dark:text-gray-500">
                      {item.label}
                    </p>
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="/Cv Menzan Abdoul Kader.pdf"
              download="Cv Menzan Abdoul Kader.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-violet-500/25 hover:-translate-y-0.5"
            >
              <Download size={16} />
              Télécharger mon CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
