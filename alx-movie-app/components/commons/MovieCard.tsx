import React from "react";
import Image from "next/image";
import { MovieCardProps } from "@/interfaces";

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  posterImage,
  releaseYear,
}) => {
  return (
    <article className="group overflow-hidden rounded-[24px] border border-white/10 bg-white/6 shadow-[0_20px_60px_rgba(3,8,20,0.35)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/40 md:rounded-[28px]">
      <div className="relative aspect-[2/3] overflow-hidden">
        <Image
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          src={posterImage || "/placeholder-movie.jpg"}
          width={500}
          height={750}
          alt={title}
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent opacity-80" />
        <div className="absolute left-3 top-3 rounded-full border border-white/15 bg-slate-950/70 px-2.5 py-1 text-[11px] font-medium tracking-[0.2em] text-white/80 uppercase backdrop-blur-sm md:left-4 md:top-4 md:px-3 md:text-xs md:tracking-[0.24em]">
          {releaseYear || "TBA"}
        </div>
      </div>

      <div className="space-y-2 px-3.5 py-4 md:px-4 md:py-5">
        <h3 className="line-clamp-2 font-[family-name:var(--font-display)] text-base font-semibold text-white md:text-xl">
          {title}
        </h3>
        <p className="text-xs leading-5 text-[var(--muted)] md:text-sm md:leading-6">
          Curated for effortless browsing across the latest featured releases.
        </p>
      </div>
    </article>
  );
};

export default MovieCard;
