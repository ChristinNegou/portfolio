export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-[#030712] border-t border-white/[0.06] py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-bold text-white">
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Christin</span> Negou
          </span>
          <p className="text-slate-600 text-xs mt-1">Développeur freelance — Trois-Rivières, Québec</p>
        </div>
        <p className="text-slate-700 text-xs">© {year} · Tous droits réservés</p>
        <div className="flex items-center gap-5">
          <a href="https://github.com/ChristinNegou" target="_blank" rel="noopener noreferrer"
            className="text-slate-600 hover:text-white transition-colors text-sm font-medium">
            GitHub
          </a>
          <a href="https://linkedin.com/in/noel-christian-negou-397005394" target="_blank" rel="noopener noreferrer"
            className="text-slate-600 hover:text-white transition-colors text-sm font-medium">
            LinkedIn
          </a>
          <a href="mailto:christiannegou@yahoo.com"
            className="text-slate-600 hover:text-white transition-colors text-sm font-medium">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
