import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { featured, eur } from "@/lib/catalog";
import { listStore } from "@/lib/list-store";
import henryPortrait from "@/assets/henry.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "henry. — Bought direct. Priced honest." },
      {
        name: "description",
        content:
          "One man in Prague buys elite fragrance direct from the houses and sells it at an honest price. Tonight's selection is in the viewing room.",
      },
      { property: "og:title", content: "henry. — Bought direct. Priced honest." },
      {
        property: "og:description",
        content:
          "One man in Prague buys elite fragrance direct from the houses and sells it at an honest price.",
      },
    ],
  }),
  component: ViewingRoom,
});

function ViewingRoom() {
  const f = featured;

  return (
    <div className="min-h-screen spotlight">
      <SiteNav />

      <main className="relative mx-auto grid max-w-[1500px] grid-cols-1 items-center gap-16 px-6 pb-24 pt-8 md:px-12 lg:grid-cols-[1fr_1.2fr_1fr] lg:gap-8 lg:pt-4">
        {/* Left — the curator */}
        <section className="fade-up order-2 max-w-sm lg:order-1">
          <img
            src={henryPortrait}
            alt="Henry, the curator, in a black turtleneck"
            width={1024}
            height={1024}
            loading="lazy"
            className="h-28 w-28 rounded-full object-cover object-top grayscale-[0.2] md:h-36 md:w-36"
          />

          <p className="mt-10 text-[10px] tracking-label text-gold">
            Bought direct.
          </p>
          <h1 className="mt-3 font-display text-4xl font-light leading-tight text-bone md:text-5xl">
            Your curator tonight<span className="text-gold">.</span>
          </h1>

          <div className="mt-8 h-px w-24 bg-gold-dim" />

          <p className="mt-8 max-w-xs text-sm leading-relaxed text-bone-dim">
            I am Henry. I buy from the houses myself, one batch at a time, and I
            put a single bottle in this room each night. Tonight it is{" "}
            <span className="text-bone">{f.name}</span> by {f.house}.
          </p>

          <ul className="mt-10 space-y-3 text-xs text-bone-dim">
            <li className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 bg-gold-dim" />
              {f.concentration}, {f.size}
            </li>
            <li className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 bg-gold-dim" />
              {f.provenance.batch}
            </li>
            <li className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 bg-gold-dim" />
              Sillage — {f.sillage.toLowerCase()}
            </li>
          </ul>

          <div className="mt-12 flex gap-12">
            <div>
              <p className="text-[10px] tracking-label text-bone-dim">Retail</p>
              <p className="mt-2 font-display text-xl text-bone-dim line-through">
                {eur(f.retail)}
              </p>
            </div>
            <div className="border-l border-border pl-12">
              <p className="text-[10px] tracking-label text-gold">My price</p>
              <p className="mt-2 font-display text-xl text-bone">
                {eur(f.price)}
              </p>
            </div>
          </div>
        </section>

        {/* Center — the bottle under the light */}
        <section className="order-1 flex justify-center lg:order-2">
          <img
            src={f.image}
            alt={`${f.name} by ${f.house}, a faceted crystal flacon under a single overhead light`}
            width={1024}
            height={1280}
            className="fade-in mix-blend-screen max-h-[74vh] w-auto object-contain"
          />
        </section>

        {/* Right — the mark and the act */}
        <section className="fade-up order-3 lg:pl-4">
          <p className="font-display text-6xl leading-none text-bone md:text-7xl">
            henry<span className="text-gold">.</span>
          </p>
          <p className="mt-6 max-w-[18rem] text-sm leading-relaxed text-bone-dim">
            Bought direct. Priced honest. Chosen by one man.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              onClick={() => listStore.add(f.slug)}
              className="border border-gold px-8 py-3 text-[11px] tracking-label text-gold transition-colors duration-500 hover:bg-gold hover:text-void"
            >
              Acquire
            </button>
            <Link
              to="/p/$slug"
              params={{ slug: f.slug }}
              className="border border-border px-8 py-3 text-[11px] tracking-label text-bone-dim transition-colors duration-500 hover:border-gold-dim hover:text-bone"
            >
              The full note
            </Link>
          </div>

          <Link
            to="/vault"
            className="mt-10 inline-block text-[11px] tracking-label text-bone-dim transition-colors duration-500 hover:text-gold"
          >
            Enter the vault →
          </Link>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
