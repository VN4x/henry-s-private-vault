import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { fragrances, eur } from "@/lib/catalog";

export const Route = createFileRoute("/vault")({
  head: () => ({
    meta: [
      { title: "The Vault — henry." },
      {
        name: "description",
        content:
          "Every bottle Henry currently holds, with the retail price and the price he asks. Small batches, bought direct from the houses.",
      },
      { property: "og:title", content: "The Vault — henry." },
      {
        property: "og:description",
        content:
          "Every bottle Henry currently holds, with the retail price and the price he asks.",
      },
    ],
  }),
  component: Vault,
});

const houses = ["All houses", "Maison Verrier", "Studio Nocturne", "Atelier Fivre"];
const families = ["All notes", "Amber", "Woody", "Floral", "Clean"];

function Vault() {
  const [house, setHouse] = useState(houses[0]);
  const [family, setFamily] = useState(families[0]);
  const [heldOnly, setHeldOnly] = useState(false);

  const shown = fragrances.filter(
    (f) =>
      (house === houses[0] || f.house === house) &&
      (family === families[0] || f.family === family) &&
      (!heldOnly || f.available),
  );

  return (
    <div className="min-h-screen spotlight-soft">
      <SiteNav />

      <main className="mx-auto max-w-[1400px] px-6 pb-24 md:px-12">
        <header className="fade-up max-w-xl py-16">
          <p className="text-[10px] tracking-label text-gold">The vault</p>
          <h1 className="mt-4 font-display text-4xl font-light text-bone md:text-5xl">
            What I am holding
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-bone-dim">
            Everything here is in my hands in Prague, sealed, with the batch code
            on the base. When a batch is gone I say so and give you the month the
            next one lands.
          </p>
        </header>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 border-y border-border py-4 text-[10px] tracking-label">
          <Row options={houses} value={house} onChange={setHouse} />
          <Row options={families} value={family} onChange={setFamily} />
          <button
            onClick={() => setHeldOnly(!heldOnly)}
            className={`transition-colors duration-500 ${heldOnly ? "text-gold" : "text-bone-dim hover:text-bone"}`}
          >
            In hand only
          </button>
        </div>

        {shown.length === 0 ? (
          <p className="py-24 text-center text-sm text-bone-dim">
            Nothing in the vault answers to that. Loosen the filter.
          </p>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((f) => (
              <Link
                key={f.slug}
                to="/p/$slug"
                params={{ slug: f.slug }}
                className="vault-card group bg-void p-8"
              >
                <div className="flex h-64 items-center justify-center">
                  <img
                    src={f.image}
                    alt={`${f.name} by ${f.house}`}
                    width={900}
                    height={1100}
                    loading="lazy"
                    className={`max-h-64 w-auto object-contain transition-opacity duration-700 ${f.available ? "opacity-90 group-hover:opacity-100" : "opacity-40"}`}
                  />
                </div>

                <p className="mt-8 text-[10px] tracking-label text-bone-dim">
                  {f.house}
                </p>
                <h2 className="mt-2 font-display text-2xl font-light text-bone">
                  {f.name}
                </h2>

                {f.available ? (
                  <p className="mt-4 flex items-baseline gap-4 text-sm">
                    <span className="text-bone-dim line-through">
                      {eur(f.retail)}
                    </span>
                    <span className="text-gold">{eur(f.price)}</span>
                    <span className="text-[10px] tracking-label text-bone-dim">
                      {f.size}
                    </span>
                  </p>
                ) : (
                  <p className="mt-4 text-xs text-bone-dim">
                    Gone. Next batch arrives {f.nextBatch}.
                  </p>
                )}
              </Link>
            ))}
          </div>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}

function Row({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-5">
      {options.map((o) => (
        <button
          key={o}
          onClick={() => onChange(o)}
          className={`transition-colors duration-500 ${o === value ? "text-gold" : "text-bone-dim hover:text-bone"}`}
        >
          {o}
        </button>
      ))}
    </div>
  );
}
