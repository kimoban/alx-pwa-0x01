import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../commons/Button";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/movies", label: "Movies" },
];

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-40 border-b border-white/8 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-5 md:px-8">
        <Link
          href="/"
          className="text-center font-[family-name:var(--font-display)] text-[1.75rem] font-bold tracking-[0.16em] text-white uppercase sm:text-left md:text-3xl"
        >
          Cine<span className="text-[var(--accent)]">Seek</span>
        </Link>

        <nav className="flex w-full items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-sm sm:w-auto sm:gap-2">
          {navigation.map((item) => {
            const isActive = router.pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex-1 rounded-full px-4 py-2.5 text-center text-sm font-medium transition sm:flex-none md:px-5 ${
                  isActive
                    ? "bg-white text-slate-950"
                    : "text-[var(--muted)] hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden sm:flex sm:shrink-0">
          <Button
            title="Explore Now"
            size="sm"
            action={() => router.push("/movies")}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
