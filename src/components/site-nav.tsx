import { Link } from "@tanstack/react-router";
import { useList } from "@/lib/list-store";

export function SiteNav() {
  const items = useList();
  const count = items.reduce((n, i) => n + i.qty, 0);

  return (
    <header className="relative z-20 flex items-center justify-between px-6 py-7 md:px-12">
      <Link
        to="/"
        className="font-display text-2xl leading-none tracking-tight text-bone"
      >
        henryperfumes
      </Link>

      <nav className="hidden items-center gap-10 text-[11px] tracking-label text-bone-dim md:flex">
        <Link
          to="/vault"
          className="transition-colors duration-500 hover:text-gold"
          activeProps={{ className: "text-bone" }}
        >
          Vault
        </Link>
        <Link
          to="/henry"
          className="transition-colors duration-500 hover:text-gold"
          activeProps={{ className: "text-bone" }}
        >
          Henry
        </Link>
        <a
          href="mailto:henry@henryperfumes.eu"
          className="transition-colors duration-500 hover:text-gold"
        >
          Write to me
        </a>
      </nav>

      <Link
        to="/checkout"
        className="text-[11px] tracking-label text-bone-dim transition-colors duration-500 hover:text-gold"
      >
        List {count > 0 ? `(${count})` : ""}
      </Link>
    </header>
  );
}
