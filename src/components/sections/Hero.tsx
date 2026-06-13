const floatingTags = [
  { label: "Next.js 16", pos: "top-[22%] left-[7%]", rot: "-rotate-[12deg]", delay: "0s" },
  { label: "TypeScript", pos: "top-[28%] right-[8%]", rot: "rotate-[8deg]", delay: "0.6s" },
  { label: "React Native", pos: "bottom-[32%] left-[5%]", rot: "rotate-[7deg]", delay: "1.1s" },
  { label: "Supabase", pos: "bottom-[26%] right-[7%]", rot: "-rotate-[9deg]", delay: "1.5s" },
  { label: "Tailwind CSS", pos: "top-[16%] right-[23%]", rot: "rotate-[4deg]", delay: "0.9s" },
  { label: "Expo SDK 54", pos: "bottom-[40%] left-[21%]", rot: "-rotate-[5deg]", delay: "1.3s" },
  { label: "PostgreSQL", pos: "top-[40%] right-[18%]", rot: "rotate-[11deg]", delay: "0.4s" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Base background */}
      <div className="absolute inset-0 bg-[#030712]" />

      {/* Grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Orbs */}
      <div className="absolute top-1/4 left-[15%] w-[700px] h-[700px] rounded-full bg-indigo-600/15 blur-[140px] animate-orb pointer-events-none" />
      <div className="absolute bottom-1/4 right-[10%] w-[500px] h-[500px] rounded-full bg-violet-600/12 blur-[120px] animate-orb pointer-events-none" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-cyan-500/8 blur-[100px] pointer-events-none" />

      {/* Floating tech tags — desktop only */}
      <div className="absolute inset-0 hidden lg:block pointer-events-none select-none">
        {floatingTags.map(({ label, pos, rot, delay }) => (
          <div
            key={label}
            className={`absolute ${pos} ${rot} animate-float`}
            style={{ animationDelay: delay }}
          >
            <div className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-full px-4 py-1.5 text-xs text-slate-500 font-medium whitespace-nowrap">
              {label}
            </div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-5 py-2 text-sm text-emerald-400 font-medium mb-10">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Disponible pour de nouveaux projets
        </div>

        {/* Name */}
        <h1 className="font-bold tracking-tight mb-6">
          <span className="block text-6xl sm:text-7xl lg:text-[88px] leading-none text-white mb-3">
            Christin Negou
          </span>
          <span className="block text-5xl sm:text-6xl lg:text-7xl leading-none bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Développeur freelance
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Je conçois des{" "}
          <span className="text-white font-medium">sites web</span> et{" "}
          <span className="text-white font-medium">applications mobiles</span>{" "}
          sur mesure pour entrepreneurs et PME du Québec.{" "}
          <span className="text-slate-500">Basé à Trois-Rivières.</span>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projets"
            className="group inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-indigo-500 to-violet-600 text-white px-9 py-4 rounded-full font-semibold text-base shadow-2xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-105 transition-all duration-300"
          >
            Voir mes projets
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 px-9 py-4 rounded-full font-semibold text-base transition-all duration-300 backdrop-blur-sm"
          >
            Me contacter
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 animate-float-slow">
        <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
      </div>
    </section>
  );
}
