import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-6 backdrop-blur-md">
      <div className="flex max-w-sm flex-col items-center gap-4 rounded-[28px] border border-white/10 bg-slate-900/80 px-8 py-10 text-center shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
        <div className="h-14 w-14 animate-spin rounded-full border-4 border-white/10 border-t-[var(--accent)]" />
        <div className="space-y-2">
          <h1 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-white md:text-3xl">
            Loading films
          </h1>
          <p className="text-sm leading-6 text-[var(--muted)] md:text-base">
            Pulling the next set of titles and refreshing your filters.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
