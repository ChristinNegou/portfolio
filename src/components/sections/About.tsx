import Image from "next/image";

const techStack = [
  "Next.js", "React", "TypeScript", "Tailwind CSS",
  "React Native", "Expo", "Supabase", "PostgreSQL",
  "Node.js", "Git", "Vercel", "Figma",
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-72 h-72 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white">
                <Image
                  src="/photo.jpg"
                  alt="Christin Negou"
                  width={288}
                  height={288}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl -z-10" />
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              À propos
            </span>
            <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-6">
              Qui je suis
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed mb-8">
              <p>
                Bonjour ! Je suis <strong className="text-slate-900">Christin Negou</strong>, développeur
                web et mobile freelance basé à <strong className="text-slate-900">Trois-Rivières,
                Québec</strong>. Diplômé de l&apos;<strong className="text-slate-900">UQTR</strong> en
                informatique de gestion.
              </p>
              <p>
                Je me spécialise dans la création de produits digitaux modernes
                pour les entrepreneurs et PME qui veulent une présence en ligne
                impactante ou un outil métier sur mesure.
              </p>
              <p>
                Que ce soit un site vitrine, une application web complexe ou une
                app mobile, je prends en charge le projet de la conception au
                déploiement.
              </p>
            </div>

            {/* Tech stack */}
            <div>
              <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Technologies maîtrisées
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm bg-white border border-border text-slate-700 font-medium px-3 py-1.5 rounded-full shadow-sm"
                  >
                    {tech}
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
