"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { DEFAULT_SOLUTION_TAB, SOLUTION_TABS } from "@/constants/solutions";
import type { SolutionTabId } from "@/types";
import { usePathname, useRouter } from "next/navigation";

function getTabFromHash(hash: string): SolutionTabId | null {
  const raw = hash.replace(/^#/, "").trim();
  if (!raw) return null;
  const ids = new Set(SOLUTION_TABS.map((t) => t.id));
  return ids.has(raw as SolutionTabId) ? (raw as SolutionTabId) : null;
}

export default function SolutionsTabs() {
  const router = useRouter();
  const pathname = usePathname();
  const [activeId, setActiveId] = useState<SolutionTabId>(() => {
    if (typeof window === "undefined") return DEFAULT_SOLUTION_TAB;
    return getTabFromHash(window.location.hash) ?? DEFAULT_SOLUTION_TAB;
  });

  useEffect(() => {
    const onHashChange = () => {
      const next = getTabFromHash(window.location.hash);
      if (next) setActiveId(next);
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const active = useMemo(() => SOLUTION_TABS.find((t) => t.id === activeId) ?? SOLUTION_TABS[0], [activeId]);

  const onSelect = (id: SolutionTabId) => {
    setActiveId(id);
    router.replace(`${pathname}#${id}`, { scroll: false });
  };

  return (
    <div className="mt-10">
      <div className="flex gap-2 overflow-x-auto pb-2 [-webkit-overflow-scrolling:touch]">
        {SOLUTION_TABS.map((t) => {
          const isActive = t.id === activeId;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => onSelect(t.id)}
              className={`shrink-0 rounded-full border px-5 py-2.5 font-semibold transition-all ${
                isActive
                  ? "bg-[#0766AD] text-white border-[#0766AD] shadow-sm"
                  : "bg-white text-[#0766AD] border-black/10 hover:bg-white/70"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-xl border border-[#0766AD]/5 mt-6">
        {/* Heading */}
        <div className="text-[#29ADB2] font-bold tracking-wider uppercase text-sm mb-3">{active.eyebrow}</div>
        <h2 className="font-anton text-4xl md:text-5xl uppercase leading-tight max-w-[28ch]">
          {active.headline}
        </h2>

        {/* Cards: equal width + equal height so bottoms align */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch mt-6">
          <div>
            <div className="bg-[#FDFBF7] border border-[#0766AD]/10 rounded-3xl p-7 h-full">
              <div className="font-anton text-2xl uppercase mb-3">{active.problemTitle}</div>
              <p className="text-[#0766AD]/80 text-lg leading-relaxed">{active.problem}</p>
              {active.problemBullets && active.problemBullets.length > 0 ? (
                <ul className="mt-6 space-y-3 text-[#0766AD]/85 text-lg leading-relaxed">
                  {active.problemBullets.map((b, i) => (
                    <li key={i} className="flex gap-3">
                      <Check className="mt-1 text-[#29ADB2] shrink-0" size={18} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>

          <div>
            <div className="bg-[#FDFBF7] border border-[#0766AD]/10 rounded-3xl p-7 h-full">
              <div className="font-anton text-2xl uppercase mb-3">{active.solutionsTitle}</div>
              <ul className="space-y-3 text-[#0766AD]/85 text-lg leading-relaxed">
                {active.solutions.map((s, i) => (
                  <li key={i} className="flex gap-3">
                    <Check className="mt-1 text-[#29ADB2] shrink-0" size={18} />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA centered under the two cards */}
        <div className="mt-10 flex justify-center">
          <button 
            onClick={() => router.push('/register')}
            className="bg-[#29ADB2] hover:bg-[#29ADB2]/90 text-white px-8 py-4 rounded-full font-semibold transition-all flex items-center gap-2 group"
          >
            {active.ctaLabel}
            <div className="bg-white text-[#29ADB2] rounded-full p-1 group-hover:translate-x-1 transition-transform">
              <ArrowRight size={18} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
