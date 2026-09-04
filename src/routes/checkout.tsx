import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useList, listStore } from "@/lib/list-store";
import { getFragrance, eur } from "@/lib/catalog";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Your list — henry." },
      {
        name: "description",
        content:
          "The bottles you have chosen, and where they should be sent. Shipped from Prague the next morning.",
      },
      { property: "og:title", content: "Your list — henry." },
      {
        property: "og:description",
        content: "The bottles you have chosen, and where they should be sent.",
      },
    ],
  }),
  component: Checkout,
});

function Checkout() {
  const items = useList();
  const [done, setDone] = useState(false);

  const lines = items
    .map((i) => ({ item: i, f: getFragrance(i.slug) }))
    .filter((l) => l.f);
  const total = lines.reduce((n, l) => n + l.f!.price * l.item.qty, 0);
  const retail = lines.reduce((n, l) => n + l.f!.retail * l.item.qty, 0);

  if (done) {
    return (
      <div className="flex min-h-screen items-center justify-center spotlight px-6 text-center">
        <div className="fade-in">
          <p className="font-display text-4xl font-light text-bone md:text-5xl">
            Confirmed. Shipping tomorrow.
          </p>
          <p className="mt-6 text-sm text-bone-dim">— H</p>
          <Link
            to="/"
            className="mt-14 inline-block text-[11px] tracking-label text-gold"
          >
            Back to the viewing room
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen spotlight-soft px-6 py-10 md:px-12">
      <div className="flex items-center justify-between">
        <Link to="/" className="font-display text-2xl text-bone">
          henry<span className="text-gold">.</span>
        </Link>
        <Link
          to="/vault"
          className="text-[11px] tracking-label text-bone-dim transition-colors duration-500 hover:text-gold"
        >
          Back to the vault
        </Link>
      </div>

      {lines.length === 0 ? (
        <div className="py-40 text-center">
          <p className="font-display text-3xl font-light text-bone">
            You haven't chosen anything yet.
          </p>
          <Link
            to="/vault"
            className="mt-10 inline-block border border-gold px-8 py-3 text-[11px] tracking-label text-gold transition-colors duration-500 hover:bg-gold hover:text-void"
          >
            Enter the vault
          </Link>
        </div>
      ) : (
        <main className="mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-20 pb-24 lg:grid-cols-2">
          <section>
            <p className="text-[10px] tracking-label text-gold">Your list</p>
            <ul className="mt-10 divide-y divide-border border-y border-border">
              {lines.map(({ item, f }) => (
                <li key={item.slug} className="flex items-center gap-6 py-6">
                  <img
                    src={f!.image}
                    alt={f!.name}
                    width={900}
                    height={1100}
                    loading="lazy"
                    className="h-24 w-16 object-contain"
                  />
                  <div className="flex-1">
                    <p className="text-[10px] tracking-label text-bone-dim">
                      {f!.house}
                    </p>
                    <p className="mt-1 font-display text-xl text-bone">
                      {f!.name}
                    </p>
                    <p className="mt-1 text-xs text-bone-dim">
                      {f!.size} — {item.qty} bottle{item.qty > 1 ? "s" : ""}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gold">
                      {eur(f!.price * item.qty)}
                    </p>
                    <button
                      onClick={() => listStore.remove(item.slug)}
                      className="mt-2 text-[10px] tracking-label text-bone-dim transition-colors duration-500 hover:text-bone"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-2 text-sm">
              <p className="flex justify-between text-bone-dim">
                <span>At retail</span>
                <span className="line-through">{eur(retail)}</span>
              </p>
              <p className="flex justify-between text-bone">
                <span className="text-[10px] tracking-label text-gold">
                  You pay
                </span>
                <span className="font-display text-2xl">{eur(total)}</span>
              </p>
              <p className="pt-4 text-xs text-bone-dim">
                Shipped from Prague, insured, next morning.
              </p>
            </div>
          </section>

          <section>
            <p className="text-[10px] tracking-label text-gold">Where to</p>
            <form
              className="mt-10 space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                listStore.clear();
                setDone(true);
              }}
            >
              {[
                { label: "Name", type: "text", autoComplete: "name" },
                { label: "Email", type: "email", autoComplete: "email" },
                { label: "Street", type: "text", autoComplete: "street-address" },
                { label: "City", type: "text", autoComplete: "address-level2" },
                { label: "Postal code", type: "text", autoComplete: "postal-code" },
                { label: "Country", type: "text", autoComplete: "country-name" },
              ].map((field) => (
                <label key={field.label} className="block">
                  <span className="text-[10px] tracking-label text-bone-dim">
                    {field.label}
                  </span>
                  <input
                    required
                    type={field.type}
                    autoComplete={field.autoComplete}
                    className="mt-2 w-full border-b border-border bg-transparent pb-2 text-sm text-bone outline-none transition-colors duration-500 focus:border-gold"
                  />
                </label>
              ))}

              <button
                type="submit"
                className="mt-6 w-full border border-gold px-8 py-4 text-[11px] tracking-label text-gold transition-colors duration-500 hover:bg-gold hover:text-void"
              >
                Acquire
              </button>
              <p className="text-xs text-bone-dim">
                No account. No newsletter. I write once, when it ships.
              </p>
            </form>
          </section>
        </main>
      )}
    </div>
  );
}
