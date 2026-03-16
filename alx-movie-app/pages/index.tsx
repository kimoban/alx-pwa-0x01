import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Button from "@/components/commons/Button";

const featuredHighlights = [
  {
    title: "Sharper browsing",
    description: "Quickly move through curated results with cleaner filters and tighter layouts.",
  },
  {
    title: "PWA-ready setup",
    description: "Installable experience with a visual system that now feels deliberate across screens.",
  },
  {
    title: "Focused discovery",
    description: "Search within fetched results, scan key metadata, and move through pages without friction.",
  },
];

const stats = [
  { label: "Featured titles per page", value: "20" },
  { label: "Curated genres", value: "4" },
  { label: "Responsive breakpoints", value: "3" },
];

const Home: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>CineSeek | Discover Your Next Watch</title>
        <meta
          name="description"
          content="Browse a more polished movie discovery experience with fast filters, responsive design, and installable PWA support."
        />
      </Head>

      <div className="px-4 pb-14 pt-4 md:px-8 md:pb-24 md:pt-6">
        <section className="hero-background film-grain relative mx-auto grid min-h-[calc(100vh-9rem)] max-w-7xl overflow-hidden rounded-[28px] border border-white/10 px-5 py-8 shadow-[0_30px_120px_rgba(0,0,0,0.4)] md:min-h-[calc(100vh-10rem)] md:rounded-[36px] md:grid-cols-[1.2fr_0.8fr] md:px-10 md:py-16">
          <div className="flex flex-col justify-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)] md:mb-4 md:text-sm md:tracking-[0.35em]">
              Movie discovery, refined
            </p>
            <h1 className="text-balance font-[family-name:var(--font-display)] text-[2.6rem] font-bold leading-[0.95] text-white sm:text-5xl md:text-7xl">
              Discover your next favorite film with a cleaner, sharper experience.
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-200 sm:text-base sm:leading-7 md:mt-6 md:text-xl md:leading-9">
              CineSeek now leans into stronger layout hierarchy, richer motion, and
              more reliable movie browsing so the app feels considered instead of
              merely functional.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <Button
                title="Browse Movies"
                size="lg"
                className="w-full sm:w-auto"
                action={() => router.push("/movies")}
              />
              <Button
                title="See What Changed"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
                action={() =>
                  window.scrollTo({
                    top: window.innerHeight * 0.9,
                    behavior: "smooth",
                  })
                }
              />
            </div>

            <div className="mt-8 grid gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[20px] border border-white/10 bg-slate-950/45 px-4 py-4 backdrop-blur-sm sm:rounded-[24px] sm:py-5"
                >
                  <p className="font-[family-name:var(--font-display)] text-2xl font-bold text-white sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-[var(--muted)] sm:text-sm sm:leading-6">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-end md:mt-0">
            <div className="ml-auto w-full max-w-md rounded-[24px] border border-white/10 bg-slate-950/70 p-4 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-md sm:p-5 md:rounded-[32px] md:p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)] md:text-xs md:tracking-[0.32em]">
                Release radar
              </p>
              <div className="mt-4 space-y-3 sm:mt-5 sm:space-y-4 md:space-y-5">
                {featuredHighlights.map((item, index) => (
                  <div key={item.title} className="rounded-[20px] border border-white/8 bg-white/5 p-4 sm:p-5 md:rounded-[24px]">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--accent)] text-xs font-bold text-slate-950 sm:h-8 sm:w-8 sm:text-sm">
                        0{index + 1}
                      </span>
                      <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold text-white sm:text-xl">
                        {item.title}
                      </h2>
                    </div>
                    <p className="text-xs leading-5 text-[var(--muted)] sm:text-sm sm:leading-6 md:text-base">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-6 grid max-w-7xl gap-4 sm:mt-8 sm:gap-6 md:grid-cols-3">
          {featuredHighlights.map((item) => (
            <article key={item.title} className="section-shell p-5 sm:p-6 md:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)] sm:text-xs sm:tracking-[0.3em]">
                Quality upgrade
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-xl font-semibold text-white sm:mt-4 sm:text-2xl">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)] sm:mt-4 sm:leading-7 md:text-base">
                {item.description}
              </p>
            </article>
          ))}
        </section>
      </div>
    </>
  );
};

export default Home;