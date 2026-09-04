import { useSyncExternalStore } from "react";

export type ListItem = { slug: string; qty: number };

let items: ListItem[] = [];
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

export const listStore = {
  add(slug: string) {
    const existing = items.find((i) => i.slug === slug);
    items = existing
      ? items.map((i) => (i.slug === slug ? { ...i, qty: i.qty + 1 } : i))
      : [...items, { slug, qty: 1 }];
    emit();
  },
  remove(slug: string) {
    items = items.filter((i) => i.slug !== slug);
    emit();
  },
  clear() {
    items = [];
    emit();
  },
  subscribe(l: () => void) {
    listeners.add(l);
    return () => listeners.delete(l);
  },
  get() {
    return items;
  },
};

const empty: ListItem[] = [];

export function useList() {
  return useSyncExternalStore(
    listStore.subscribe,
    listStore.get,
    () => empty,
  );
}
