import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 bg-slate-950/70 px-6 py-10 text-white backdrop-blur-xl md:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 text-center md:grid-cols-[1.4fr_1fr_auto] md:items-center md:text-left">
        <div className="space-y-3">
          <Link
            href="/"
            className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[0.16em] uppercase"
          >
            Cine<span className="text-[var(--accent)]">Seek</span>
          </Link>
          <p className="max-w-xl text-sm leading-6 text-[var(--muted)] md:text-base">
            A polished movie discovery experience focused on fast browsing, smart
            filtering, and a stronger visual rhythm across the app.
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-3 text-sm font-medium text-[var(--muted)] md:justify-center md:text-base">
          <Link href="/" className="transition hover:text-white">Home</Link>
          <Link href="/movies" className="transition hover:text-white">Movies</Link>
          <a
            href="https://github.com/kimoban/alx-pwa-0x01"
            target="_blank"
            rel="noreferrer noopener"
            className="transition hover:text-white"
          >
            Repository
          </a>
        </nav>

        <div className="flex justify-center gap-4 text-lg md:justify-end">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-[var(--accent)]" title="Twitter">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-[var(--accent)]" title="Facebook">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-[var(--accent)]" title="Instagram">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-white/8 pt-6 text-center text-sm text-[var(--muted)] md:text-left">
        <p>&copy; {currentYear} CineSeek. Built for focused movie discovery.</p>
      </div>
    </footer>
  );
};

export default Footer;
