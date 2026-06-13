const projects = [
  {
    name: "MenuGo",
    type: "Application mobile",
    label: "Projet vedette",
    description:
      "Application iOS & Android complète de commande à emporter pour restaurants locaux. Authentification Supabase, panier multi-restaurant, calcul TPS/TVQ québécois, suivi de commande en temps réel et onboarding 3 slides.",
    tags: ["React Native", "Expo SDK 54", "Supabase", "Zustand", "TanStack Query"],
    live: null,
    github: "https://github.com/ChristinNegou/menugo-app",
    gradient: "from-indigo-500 via-violet-600 to-purple-700",
    accentColor: "indigo",
    icon: (
      <svg className="w-10 h-10 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
    featured: true,
  },
  {
    name: "Le Bœuf & Bière",
    type: "Site web vitrine",
    label: null,
    description:
      "Site vitrine pour un restaurant pub artisanal avec menu digital interactif, réservation en ligne et interface d'administration Supabase.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    live: "https://projet1-christin-negou-s-projects.vercel.app",
    github: "https://github.com/ChristinNegou/LeBoeufBiere",
    gradient: "from-amber-500 to-orange-600",
    accentColor: "amber",
    icon: (
      <svg className="w-8 h-8 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2M5 21H3M9 7h1m-1 4h1m4-4h1m-1 4h1M9 15h6" />
      </svg>
    ),
    featured: false,
  },
  {
    name: "Clinique Physio Mauricie",
    type: "Site web professionnel",
    label: null,
    description:
      "Site vitrine pour une clinique de physiothérapie avec présentation des thérapeutes, services et formulaire de contact professionnel.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://clinique-de-physiotherapie.vercel.app",
    github: "https://github.com/ChristinNegou/clinique-de-physiotherapie",
    gradient: "from-teal-500 to-cyan-600",
    accentColor: "teal",
    icon: (
      <svg className="w-8 h-8 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    featured: false,
  },
];

const tagColors: Record<string, string> = {
  indigo: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
  amber: "bg-amber-500/10 text-amber-300 border-amber-500/20",
  teal: "bg-teal-500/10 text-teal-300 border-teal-500/20",
};

export default function Projects() {
  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <section id="projets" className="py-28 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#030712]" />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Orb */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-violet-600/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="text-xs font-bold text-indigo-400 uppercase tracking-[0.2em]">
            Portfolio
          </span>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mt-3 mb-4 tracking-tight">
            Projets récents
          </h2>
          <p className="text-slate-400 text-lg max-w-lg">
            Du design au déploiement — des produits complets livrés à des clients québécois.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
          {/* Featured card */}
          <div className="lg:col-span-3 group relative bg-slate-900/40 backdrop-blur-sm border border-white/[0.07] rounded-3xl overflow-hidden hover:border-indigo-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10">
            {/* Gradient header */}
            <div className={`relative h-56 bg-gradient-to-br ${featured.gradient} overflow-hidden`}>
              {/* Inner grid */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
              {/* Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-white/10 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-2xl">
                  {featured.icon}
                </div>
              </div>
              {/* Featured badge */}
              <div className="absolute top-4 left-4 bg-black/30 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">
                ✦ {featured.label}
              </div>
              {/* Type badge */}
              <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm text-white/80 text-xs font-medium px-3 py-1.5 rounded-full">
                {featured.type}
              </div>
            </div>

            <div className="p-7">
              <h3 className="text-2xl font-bold text-white mb-3">{featured.name}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{featured.description}</p>

              <div className="flex flex-wrap gap-2 mb-7">
                {featured.tags.map((tag) => (
                  <span key={tag} className={`text-xs font-medium px-3 py-1 rounded-full border ${tagColors[featured.accentColor]}`}>
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={featured.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm font-medium transition-colors group/link"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                Voir le code
                <svg className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Two smaller cards */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {rest.map((project) => (
              <div
                key={project.name}
                className="group relative flex-1 bg-slate-900/40 backdrop-blur-sm border border-white/[0.07] rounded-3xl overflow-hidden hover:border-white/15 transition-all duration-500 hover:shadow-xl"
              >
                {/* Gradient strip */}
                <div className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/15 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                      {project.icon}
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 bg-black/25 backdrop-blur-sm text-white/70 text-[10px] font-medium px-2.5 py-1 rounded-full">
                    {project.type}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-2">{project.name}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-4 line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className={`text-[10px] font-medium px-2.5 py-1 rounded-full border ${tagColors[project.accentColor]}`}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1 bg-white/5 hover:bg-white/10 text-white text-xs font-medium py-2 rounded-xl transition-colors border border-white/5 hover:border-white/10"
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Voir le site
                      </a>
                    )}
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-1 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white text-xs font-medium py-2 px-3 rounded-xl transition-colors border border-white/5 hover:border-white/10 ${!project.live ? "flex-1" : ""}`}
                    >
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
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
      </div>
    </section>
  );
}
