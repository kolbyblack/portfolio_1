import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="px-6 pb-10 md:px-12">
      <div className="max-w-5xl border-t border-zinc-800 pt-6 text-sm uppercase tracking-[0.18em] text-zinc-500">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p>Email</p>
          <a href="mailto:kobbyawesome@gmail.com" className="text-zinc-200 transition-opacity hover:opacity-70">
            kobbyawesome@gmail.com
          </a>
        </div>

        <div className="mt-3 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p>Links</p>
          <div className="flex flex-wrap gap-4 text-zinc-300">
            <Link to="/awards" className="hover:opacity-70">
              Awards
            </Link>
            <a href="https://linkedin.com/in/kobby-essel" target="_blank" rel="noreferrer" className="hover:opacity-70">
              LinkedIn
            </a>
            <a href="https://github.com/kolbyblack" target="_blank" rel="noreferrer" className="hover:opacity-70">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
