const services = [
  {
    num: "01",
    title: "Sites web",
    description:
      "Site vitrine, landing page ou site institutionnel. Design soigné, optimisé SEO, rapide et responsive.",
    features: ["Design sur mesure", "SEO & performance", "Hébergement inclus", "Responsive mobile"],
    gradient: "from-indigo-500 to-violet-600",
    glow: "group-hover:shadow-indigo-500/20",
    border: "group-hover:border-indigo-500/40",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Applications web",
    description:
      "Dashboard, SaaS, outil interne. Fonctionnalités avancées, auth, base de données et API sur mesure.",
    features: ["Authentification", "Base de données", "API REST", "Interface admin"],
    gradient: "from-violet-500 to-purple-700",
    glow: "group-hover:shadow-violet-500/20",
    border: "group-hover:border-violet-500/40",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Applications mobiles",
    description:
      "App iOS & Android avec React Native & Expo. Expérience native, déployable sur App Store et Play Store.",
    features: ["iOS & Android", "React Native / Expo", "Notifications push", "Mode hors ligne"],
    gradient: "from-cyan-500 to-blue-600",
    glow: "group-hover:shadow-cyan-500/20",
    border: "group-hover:border-cyan-500/40",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 px-4 sm:px-6 relative overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0 bg-surface" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Orb */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="text-xs font-bold text-indigo-400 uppercase tracking-[0.2em]">
            Ce que je fais
          </span>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mt-3 mb-4 tracking-tight">
            Mes services
          </h2>
          <p className="text-slate-400 text-lg max-w-lg">
            De la conception au lancement, je prends en charge votre projet de A à Z.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {services.map((s) => (
            <div
              key={s.num}
              className={`group relative bg-slate-900/50 backdrop-blur-sm border border-white/[0.07] ${s.border} rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl ${s.glow} overflow-hidden`}
            >
              {/* Number watermark */}
              <span className="absolute top-6 right-7 text-7xl font-black text-white/[0.03] select-none leading-none">
                {s.num}
              </span>

              {/* Icon */}
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${s.gradient} flex items-center justify-center text-white mb-6 shadow-lg`}>
                {s.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{s.description}</p>

              <ul className="space-y-2.5">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-slate-400">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${s.gradient} shrink-0`} />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Hover glow line at bottom */}
              <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
