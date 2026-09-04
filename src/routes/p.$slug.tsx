import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { getFragrance, eur } from "@/lib/catalog";
import { listStore } from "@/lib/list-store";

export const Route = createFileRoute("/p/$slug")({
  loader: ({ params }) => {
    const fragrance = getFragrance(params.slug);
    if (!fragrance) throw notFound();
    return { fragrance };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Unavailable — henry." },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const f = loaderData.fragrance;
    const description = `${f.name} by ${f.house}. Retail ${eur(f.retail)}, my price ${eur(f.price)}. Bought direct, sealed, batch code on the base.`;
    return {
      meta: [
        { title: `${f.name} — ${f.house} — henry.` },
        { name: "description", content: description },
        { property: "og:title", content: `${f.name} — ${f.house}` },
        { property: "og:description", content: description },
      ],
    };
  },
  component: Ceremony,
  notFoundComponent: Missing,
});

function Missing() {
  return (
    <div className="min-h-screen spotlight-soft">
      <SiteNav />
      <div className="mx-auto max-w-md px-6 py-40 text-center">
        <p className="font-display text-3xl text-bone">Not in the vault.</p>
        <Link
          to="/vault"
          className="mt-8 inline-block text-[11px] tracking-label text-gold"
        >
          Back to the vault
        </Link>
      </div>
      <SiteFooter />
    </div>
  );
}

function Ceremony() {
  const { fragrance: f } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-void">
      <SiteNav />

      {/* Act I — the bottle */}
      <section className="spotlight flex min-h-[88vh] flex-col items-center justify-center px-6 py-16 text-center">
        <p className="fade-up text-[10px] tracking-label text-gold">
          {f.house}
        </p>
        <h1 className="fade-up mt-4 font-display text-5xl font-light text-bone md:text-7xl">
          {f.name}
        </h1>
        <img
          src={f.image}
          alt={`${f.name} by ${f.house} under a single overhead light`}
          width={900}
          height={1100}
          className="fade-in mt-10 max-h-[52vh] w-auto object-contain"
        />
        <p className="mt-10 text-[10px] tracking-label text-bone-dim">
          {f.concentration} — {f.size}
        </p>
      </section>

      {/* Act II — the notes */}
      <section className="mx-auto max-w-3xl px-6 py-32">
        <p className="text-[10px] tracking-label text-gold">The notes</p>
        <div className="mt-12 space-y-14">
          {(
            [
              ["Top", f.notes.top],
              ["Heart", f.notes.heart],
              ["Base", f.notes.base],
            ] as const
          ).map(([label, list]) => (
            <div key={label} className="grid grid-cols-1 gap-4 md:grid-cols-[8rem_1fr]">
              <p className="text-[10px] tracking-label text-bone-dim">{label}</p>
              <ul className="space-y-3">
                {list.map((n) => (
                  <li
                    key={n}
                    className="border-b border-border pb-3 font-display text-2xl font-light text-bone"
                  >
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-14 text-sm text-bone-dim">
          Sillage — {f.sillage.toLowerCase()}
        </p>
      </section>

      {/* Act III — Henry's note */}
      <section className="spotlight-soft px-6 py-32">
        <div className="mx-auto max-w-2xl">
          <p className="text-[10px] tracking-label text-gold">My note</p>
          <p className="mt-10 font-display text-2xl font-light leading-relaxed text-bone md:text-3xl">
            {f.henry}
          </p>
          <p className="mt-10 text-sm text-bone-dim">— H</p>
        </div>
      </section>

      {/* Act IV — provenance */}
      <section className="mx-auto max-w-3xl px-6 py-32">
        <p className="text-[10px] tracking-label text-gold">Provenance</p>
        <dl className="mt-12 divide-y divide-border border-y border-border">
          {(
            [
              ["Batch", f.provenance.batch],
              ["Bought", f.provenance.bought],
              ["Condition", f.provenance.sealed],
            ] as const
          ).map(([k, v]) => (
            <div key={k} className="grid grid-cols-1 gap-2 py-6 md:grid-cols-[8rem_1fr]">
              <dt className="text-[10px] tracking-label text-bone-dim">{k}</dt>
              <dd className="text-sm text-bone">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Act V — acquire */}
      <section className="spotlight px-6 py-32 text-center">
        <div className="mx-auto max-w-md">
          <div className="flex items-baseline justify-center gap-8">
            <div>
              <p className="text-[10px] tracking-label text-bone-dim">Retail</p>
              <p className="mt-2 font-display text-2xl text-bone-dim line-through">
                {eur(f.retail)}
              </p>
            </div>
            <div className="border-l border-border pl-8">
              <p className="text-[10px] tracking-label text-gold">My price</p>
              <p className="mt-2 font-display text-2xl text-bone">
                {eur(f.price)}
              </p>
            </div>
          </div>

          {f.available ? (
            <div className="mt-12 flex flex-col items-center gap-4">
              <button
                onClick={() => listStore.add(f.slug)}
                className="w-full max-w-xs border border-gold px-8 py-4 text-[11px] tracking-label text-gold transition-colors duration-500 hover:bg-gold hover:text-void"
              >
                Acquire
              </button>
              <Link
                to="/checkout"
                className="text-[11px] tracking-label text-bone-dim transition-colors duration-500 hover:text-gold"
              >
                Go to my list
              </Link>
            </div>
          ) : (
            <p className="mt-12 text-sm text-bone-dim">
              Gone. Next batch arrives {f.nextBatch}.
            </p>
          )}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
