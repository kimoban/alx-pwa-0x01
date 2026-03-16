import React, { startTransition, useDeferredValue, useEffect, useState } from "react";
import Head from "next/head";
import Button from "@/components/commons/Button";
import Loading from "@/components/commons/Loading";
import MovieCard from "@/components/commons/MovieCard";
import { MovieSummary, MoviesApiResponse } from "@/interfaces";

const genres = ["All", "Animation", "Comedy", "Fantasy"];
const currentYear = new Date().getFullYear();
const yearOptions = Array.from({ length: 8 }, (_, index) => currentYear - index);

const Movies: React.FC = () => {
  const [page, setPage] = useState(1);
  const [year, setYear] = useState<number | null>(null);
  const [genre, setGenre] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState<MovieSummary[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const deferredSearchTerm = useDeferredValue(searchTerm);

  useEffect(() => {
    let cancelled = false;

    const fetchMovies = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch("/api/fetch-movies", {
          method: "POST",
          body: JSON.stringify({
            page,
            year,
            genre: genre === "All" ? "" : genre,
          }),
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
        });

        const payload = await response.json().catch(() => null);

        if (!response.ok) {
          throw new Error(payload?.error || "Unable to fetch movies right now.");
        }

        if (cancelled) {
          return;
        }

        const data = payload as MoviesApiResponse;

        startTransition(() => {
          setMovies(data.movies || []);
          setTotalPages(data.totalPages || 1);
          setTotalResults(data.totalResults || 0);
        });
      } catch (requestError) {
        if (!cancelled) {
          setMovies([]);
          setError(
            requestError instanceof Error
              ? requestError.message
              : "Unable to fetch movies right now.",
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchMovies();

    return () => {
      cancelled = true;
    };
  }, [genre, page, year]);

  const normalizedSearch = deferredSearchTerm.trim().toLowerCase();
  const filteredMovies = movies.filter((movie) =>
    movie.titleText.text.toLowerCase().includes(normalizedSearch),
  );

  return (
    <>
      <Head>
        <title>CineSeek | Browse Movies</title>
        <meta
          name="description"
          content="Filter and browse movies by year, genre, and title with a more polished CineSeek experience."
        />
      </Head>

      <div className="mx-auto max-w-7xl px-4 py-6 md:px-8 md:py-12">
        <section className="section-shell p-5 sm:p-6 md:p-8">
          <div className="flex flex-col gap-8 sm:gap-10">
            <div className="flex flex-col gap-5 sm:gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)] sm:text-sm sm:tracking-[0.32em]">
                  Browse collection
                </p>
                <h1 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold text-white sm:mt-4 sm:text-4xl md:text-6xl">
                  {genre === "All" ? "Featured movies" : `${genre} picks`}
                </h1>
                <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--muted)] sm:mt-4 sm:leading-7 md:text-lg">
                  Filter by genre and release year, then narrow the visible results with
                  a lightweight title search on the current page.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:w-[28rem]">
                <label className="flex flex-col gap-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">
                    Search titles
                  </span>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder="Type a movie title"
                    className="min-h-12 rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-[var(--accent)]"
                  />
                </label>

                <label className="flex flex-col gap-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">
                    Release year
                  </span>
                  <select
                    value={year ?? ""}
                    onChange={(event) => {
                      setPage(1);
                      setYear(event.target.value ? Number(event.target.value) : null);
                    }}
                    className="min-h-12 rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-[var(--accent)]"
                    title="Select Year"
                  >
                    <option value="">All years</option>
                    {yearOptions.map((optionYear) => (
                      <option value={optionYear} key={optionYear}>
                        {optionYear}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>

            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {genres.map((genreOption) => (
                  <Button
                    key={genreOption}
                    title={genreOption}
                    variant={genre === genreOption ? "primary" : "secondary"}
                    size="sm"
                    action={() => {
                      setPage(1);
                      setGenre(genreOption);
                    }}
                  />
                ))}
              </div>

              <div className="grid gap-2 rounded-[22px] border border-white/10 bg-slate-950/60 px-4 py-3 text-xs text-[var(--muted)] sm:grid-flow-col sm:auto-cols-max sm:items-center sm:gap-3 sm:rounded-full sm:py-2 sm:text-sm">
                <span>Page {page} of {Math.max(totalPages, 1)}</span>
                <span className="hidden text-white/20 sm:inline">|</span>
                <span>{filteredMovies.length} visible results</span>
                <span className="hidden text-white/20 sm:inline">|</span>
                <span>{totalResults} total matches from API</span>
              </div>
            </div>

            {error ? (
              <div className="rounded-[24px] border border-red-400/25 bg-red-500/10 px-5 py-4 text-sm text-red-100">
                {error}
              </div>
            ) : null}

            {!loading && !error && filteredMovies.length === 0 ? (
              <div className="rounded-[28px] border border-dashed border-white/12 bg-slate-950/35 px-6 py-16 text-center">
                <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-white">
                  No movies match that search.
                </h2>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)] md:text-base">
                  Try a broader title search or switch genre and year filters.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {filteredMovies.map((movie) => (
                  <MovieCard
                    key={movie.id}
                    title={movie.titleText.text}
                    posterImage={movie.primaryImage?.url}
                    releaseYear={movie.releaseYear.year}
                  />
                ))}
              </div>
            )}

            <div className="flex flex-col gap-4 border-t border-white/8 pt-5 sm:pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-6 text-[var(--muted)]">
                Search runs on the current fetched page, while year and genre update the API request.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:flex">
                <Button
                  title="Previous"
                  variant="secondary"
                  disabled={page === 1 || loading}
                  className="w-full"
                  action={() => setPage((currentPage) => Math.max(currentPage - 1, 1))}
                />
                <Button
                  title="Next"
                  variant="secondary"
                  disabled={page >= totalPages || loading}
                  className="w-full"
                  action={() => setPage((currentPage) => currentPage + 1)}
                />
              </div>
            </div>
          </div>
        </section>

        {loading ? <Loading /> : null}
      </div>
    </>
  );
};

export default Movies;