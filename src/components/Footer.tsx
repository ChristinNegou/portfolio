export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-950 text-slate-500 text-sm py-8 px-4 text-center">
      <p>
        © {year} Christin Negou — Développeur freelance, Trois-Rivières, Québec
      </p>
      <p className="mt-1">
        <a
          href="https://github.com/ChristinNegou"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-slate-300 transition-colors"
        >
          GitHub
        </a>
        {" · "}
        <a
          href="https://linkedin.com/in/christinnegou"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-slate-300 transition-colors"
        >
          LinkedIn
        </a>
      </p>
    </footer>
  );
}
