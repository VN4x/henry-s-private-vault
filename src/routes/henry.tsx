import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import henryPortrait from "@/assets/henry.jpg";

export const Route = createFileRoute("/henry")({
  head: () => ({
    meta: [
      { title: "Henry — the man who buys the bottles" },
      {
        name: "description",
        content:
          "Henry, 28, Prague. How he buys fragrance direct from the houses, why his prices sit where they do, and what he will not sell you.",
      },
      { property: "og:title", content: "Henry — the man who buys the bottles" },
      {
        property: "og:description",
        content:
          "Henry, 28, Prague. How he buys direct from the houses and why his prices sit where they do.",
      },
    ],
  }),
  component: HenryPage,
});

function HenryPage() {
  return (
    <div className="min-h-screen spotlight-soft">
      <SiteNav />

      <main className="mx-auto grid max-w-4xl grid-cols-1 gap-16 px-6 py-24 md:grid-cols-[16rem_1fr] md:px-12">
        <div className="fade-in">
          <img
            src={henryPortrait}
            alt="Henry, 28, in a black turtleneck, half his face in shadow"
            width={1024}
            height={1024}
            loading="lazy"
            className="w-full max-w-[16rem] object-cover"
          />
          <p className="mt-6 text-[10px] tracking-label text-bone-dim">
            Henry, 28 — Prague
          </p>
        </div>

        <div className="fade-up">
          <h1 className="font-display text-4xl font-light text-bone md:text-5xl">
            One man, one list<span className="text-gold">.</span>
          </h1>

          <div className="mt-10 space-y-6 text-sm leading-relaxed text-bone-dim">
            <p>
              I started buying fragrance properly at twenty-two, mostly because I
              could not accept the arithmetic. A bottle leaves a house in Grasse
              and arrives on a counter at four times what it cost to make. Some
              of that is the glass. Most of it is the floor space.
            </p>
            <p>
              So I fly, I meet the houses, and I buy small batches direct. No
              distributor, no counter, no window in a department store. What I
              save I hand back to you, minus enough to keep doing it.
            </p>
            <p>
              I wear every bottle before I list it, usually for three or four
              nights. If I cannot write a paragraph about it that I believe, it
              does not go in the vault. That is the whole method.
            </p>
            <p>
              I will not sell you something I think is thin. Write to me and ask
              — I would rather send you a sample and lose the sale than take your
              money for a bottle you will not wear.
            </p>
            <p className="text-bone">— H</p>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-8 border-t border-border pt-10 text-xs text-bone-dim md:grid-cols-3">
            <div>
              <p className="text-[10px] tracking-label text-gold">Houses</p>
              <p className="mt-3">Three, all visited in person</p>
            </div>
            <div>
              <p className="text-[10px] tracking-label text-gold">Batches</p>
              <p className="mt-3">12 to 60 bottles, never more</p>
            </div>
            <div>
              <p className="text-[10px] tracking-label text-gold">Shipping</p>
              <p className="mt-3">From Prague, next morning</p>
            </div>
          </div>

          <a
            href="mailto:henry@henryperfumes.eu"
            className="mt-12 inline-block border border-border px-8 py-3 text-[11px] tracking-label text-bone-dim transition-colors duration-500 hover:border-gold-dim hover:text-gold"
          >
            Write to me
          </a>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
