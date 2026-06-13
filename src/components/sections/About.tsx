import Image from "next/image";

const techStack = [
  { label: "Next.js", color: "text-white bg-white/10 border-white/10" },
  { label: "React", color: "text-cyan-300 bg-cyan-500/10 border-cyan-500/20" },
  { label: "TypeScript", color: "text-blue-300 bg-blue-500/10 border-blue-500/20" },
  { label: "Tailwind CSS", color: "text-teal-300 bg-teal-500/10 border-teal-500/20" },
  { label: "React Native", color: "text-indigo-300 bg-indigo-500/10 border-indigo-500/20" },
  { label: "Expo", color: "text-white bg-white/10 border-white/10" },
  { label: "Supabase", color: "text-emerald-300 bg-emerald-500/10 border-emerald-500/20" },
  { label: "PostgreSQL", color: "text-blue-300 bg-blue-500/10 border-blue-500/20" },
  { label: "Node.js", color: "text-green-300 bg-green-500/10 border-green-500/20" },
  { label: "Zustand", color: "text-violet-300 bg-violet-500/10 border-violet-500/20" },
  { label: "Vercel", color: "text-white bg-white/10 border-white/10" },
  { label: "Git", color: "text-orange-300 bg-orange-500/10 border-orange-500/20" },
];

const stats = [
  { value: "3", label: "projets livrés" },
  { value: "Web", label: "+ Mobile" },
  { value: "QC", label: "Trois-Rivières" },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#030712]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-indigo-600/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Photo side */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Outer glow rings */}
              <div className="absolute -inset-6 bg-gradient-to-br from-indigo-500/20 to-violet-600/20 rounded-[2.5rem] blur-2xl" />
              <div className="absolute -inset-3 bg-gradient-to-br from-indigo-500/10 to-violet-600/10 rounded-[2rem] blur-xl" />

              {/* Photo container */}
              <div className="relative w-72 h-80 rounded-[2rem] overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-black/60">
                <Image
                  src="/photo.jpg"
                  alt="Christin Negou"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900/80 to-transparent" />
              </div>

              {/* Floating UQTR badge */}
              <div className="absolute -bottom-4 -right-4 animate-float-slow" style={{ animationDelay: "0.5s" }}>
                <div className="bg-slate-800/90 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3 shadow-2xl">
                  <p className="text-xs text-slate-400 font-medium">Formation</p>
                  <p className="text-sm text-white font-bold">UQTR — Informatique</p>
                </div>
              </div>

              {/* Floating location badge */}
              <div className="absolute -top-4 -left-4 animate-float" style={{ animationDelay: "1s" }}>
                <div className="bg-slate-800/90 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3 shadow-2xl">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">📍</span>
                    <div>
                      <p className="text-xs text-slate-400 font-medium">Basé à</p>
                      <p className="text-sm text-white font-bold">Trois-Rivières, QC</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div>
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-[0.2em]">
              À propos
            </span>
            <h2 className="text-5xl sm:text-6xl font-bold text-white mt-3 mb-6 tracking-tight leading-tight">
              Qui je suis
            </h2>

            <div className="space-y-4 text-slate-400 leading-relaxed mb-8">
              <p>
                Bonjour ! Je suis <span className="text-white font-semibold">Christin Negou</span>,
                développeur web et mobile freelance diplômé de l&apos;
                <span className="text-white font-semibold">UQTR</span> en informatique de gestion.
              </p>
              <p>
                Je me spécialise dans la création de produits digitaux modernes pour les
                entrepreneurs et PME qui veulent une présence en ligne impactante ou un outil
                sur mesure.
              </p>
              <p>
                De la conception au déploiement, je livre des produits complets — site vitrine,
                application web ou app mobile — en respectant les délais et le budget.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-slate-900/50 border border-white/[0.07] rounded-2xl p-4 text-center"
                >
                  <p className="text-2xl font-black text-white mb-1">{s.value}</p>
                  <p className="text-xs text-slate-500 font-medium">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Tech stack */}
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.15em] mb-4">
                Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((t) => (
                  <span
                    key={t.label}
                    className={`text-xs font-medium px-3 py-1.5 rounded-full border ${t.color}`}
                  >
                    {t.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
