const projects = [
  {
    name: "Le Bœuf & Bière",
    type: "Site web vitrine",
    description:
      "Site complet pour un restaurant pub artisanal : menu digital interactif, section événements, formulaire de réservation en ligne et interface d'administration.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    live: "https://projet1-christin-negou-s-projects.vercel.app",
    github: "https://github.com/ChristinNegou/LeBoeufBiere",
    gradient: "from-amber-500 to-orange-600",
    icon: (
      <svg className="w-8 h-8 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2M5 21H3M9 7h1m-1 4h1m4-4h1m-1 4h1M9 15h6" />
      </svg>
    ),
  },
  {
    name: "Clinique Physio Mauricie",
    type: "Site web professionnel",
    description:
      "Site vitrine pour une clinique de physiothérapie : présentation des thérapeutes et services, prise de contact en ligne et design médical rassurant.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://clinique-de-physiotherapie.vercel.app",
    github: "https://github.com/ChristinNegou/clinique-de-physiotherapie",
    gradient: "from-teal-500 to-cyan-600",
    icon: (
      <svg className="w-8 h-8 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    name: "MenuGo",
    type: "Application mobile",
    description:
      "App mobile de commande à emporter pour restaurants locaux : exploration des menus, panier multi-restaurant, paiement simplifié et suivi de commande en temps réel.",
    tags: ["React Native", "Expo SDK 54", "Supabase", "Zustand"],
    live: null,
    github: "https://github.com/ChristinNegou/menugo-app",
    gradient: "from-indigo-500 to-violet-600",
    icon: (
      <svg className="w-8 h-8 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
  },
];

export default function Projects() {
  return (
    <section id="projets" className="py-24 px-4 sm:px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-4">
            Projets récents
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Des projets concrets livrés à des clients québécois — du design
            jusqu&apos;au déploiement.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow group"
            >
              {/* Visual header */}
              <div
                className={`h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  {project.icon}
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                  {project.type}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-xl text-slate-900 mb-2">
                  {project.name}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-primary-light text-primary font-medium px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 bg-primary text-white text-sm font-medium py-2.5 rounded-xl hover:bg-primary-dark transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Voir le site
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-1.5 border border-border text-slate-700 text-sm font-medium py-2.5 px-4 rounded-xl hover:bg-surface transition-colors ${!project.live ? "flex-1" : ""}`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
