import heroBottle from "@/assets/hero-bottle.jpg";
import bottle1 from "@/assets/bottle-1.jpg";
import bottle2 from "@/assets/bottle-2.jpg";
import bottle3 from "@/assets/bottle-3.jpg";
import bottle4 from "@/assets/bottle-4.jpg";
import lv1 from "@/assets/lv-1.jpg";
import lv2 from "@/assets/lv-2.jpg";
import lv3 from "@/assets/lv-3.jpg";

export type Fragrance = {
  slug: string;
  name: string;
  house: string;
  size: string;
  price: number;
  retail: number;
  image: string;
  family: string;
  available: boolean;
  nextBatch?: string;
  notes: { top: string[]; heart: string[]; base: string[] };
  henry: string;
  provenance: { batch: string; bought: string; sealed: string };
  concentration: string;
  sillage: string;
};

export const fragrances: Fragrance[] = [
  {
    slug: "obsidian-hour",
    name: "Obsidian Hour",
    house: "Maison Verrier",
    size: "100 ml",
    price: 218,
    retail: 395,
    image: heroBottle,
    family: "Amber",
    available: true,
    concentration: "Extrait de parfum",
    sillage: "Close, then wide after an hour",
    notes: {
      top: ["Bergamot peel", "Pink pepper", "Cold iris"],
      heart: ["Turkish rose", "Saffron thread", "Immortelle"],
      base: ["Laotian oud", "Grey amber", "Vetiver root"],
    },
    henry:
      "I wore this for four nights before I listed it. It is not a loud thing. The first twenty minutes are almost severe, and then it turns warm and stays close to the skin until morning. If you want to be noticed across a room, this is the wrong bottle. If you want one person to lean in, consider it.",
    provenance: {
      batch: "Batch 24E — 60 bottles",
      bought: "Bought direct from the house in Grasse, March",
      sealed: "Factory sealed, cellophane intact, code on the base",
    },
  },
  {
    slug: "black-lacquer",
    name: "Black Lacquer",
    house: "Studio Nocturne",
    size: "50 ml",
    price: 142,
    retail: 260,
    image: bottle1,
    family: "Woody",
    available: true,
    concentration: "Eau de parfum",
    sillage: "Quiet. A room, not a corridor.",
    notes: {
      top: ["Green cardamom", "Grapefruit rind"],
      heart: ["Smoked tea", "Dried fig"],
      base: ["Cedar", "Birch tar", "White musk"],
    },
    henry:
      "Underrated house, badly photographed bottles, very good juice. This is what I reach for when I am working late and do not want to think about what I am wearing.",
    provenance: {
      batch: "Batch 12B — 40 bottles",
      bought: "Bought direct from the studio in Antwerp, February",
      sealed: "Sealed, batch code matches the invoice",
    },
  },
  {
    slug: "pale-collar",
    name: "Pale Collar",
    house: "Maison Verrier",
    size: "75 ml",
    price: 176,
    retail: 320,
    image: bottle2,
    family: "Floral",
    available: true,
    concentration: "Eau de parfum",
    sillage: "Moderate, steady",
    notes: {
      top: ["Neroli", "Bitter orange"],
      heart: ["Jasmine sambac", "Orris butter"],
      base: ["Sandalwood", "Tonka"],
    },
    henry:
      "The jasmine here is real and it shows in the price the house pays for it. Worth the money at what I sell it for. Not worth it at retail.",
    provenance: {
      batch: "Batch 09A — 35 bottles",
      bought: "Bought direct from the house in Grasse, March",
      sealed: "Factory sealed",
    },
  },
  {
    slug: "bone-china",
    name: "Bone China",
    house: "Atelier Fivre",
    size: "100 ml",
    price: 129,
    retail: 240,
    image: bottle3,
    family: "Clean",
    available: false,
    nextBatch: "March",
    concentration: "Eau de parfum",
    sillage: "Very close",
    notes: {
      top: ["Aldehydes", "Lemon leaf"],
      heart: ["Iris", "Rice steam"],
      base: ["Cashmere musk", "Blond wood"],
    },
    henry:
      "The most worn bottle in my own drawer. Nothing happens in it and that is the point.",
    provenance: {
      batch: "Batch 03C — 25 bottles",
      bought: "Bought direct from the atelier in Lisbon, January",
      sealed: "Sealed",
    },
  },
  {
    slug: "amber-ledger",
    name: "Amber Ledger",
    house: "Studio Nocturne",
    size: "50 ml",
    price: 164,
    retail: 298,
    image: bottle4,
    family: "Amber",
    available: true,
    concentration: "Extrait de parfum",
    sillage: "Wide. Consider a single spray.",
    notes: {
      top: ["Clove", "Blood orange"],
      heart: ["Labdanum", "Honeyed tobacco"],
      base: ["Benzoin", "Vanilla pod", "Leather"],
    },
    henry:
      "Heavy. Cold weather only. I have sold nine of these and six of the buyers wrote back, which is unusual.",
    provenance: {
      batch: "Batch 18F — 30 bottles",
      bought: "Bought direct from the studio in Antwerp, February",
      sealed: "Sealed, cellophane intact",
    },
  },
  {
    slug: "grey-vetiver-no-4",
    name: "Grey Vetiver No. 4",
    house: "Atelier Fivre",
    size: "100 ml",
    price: 138,
    retail: 255,
    image: bottle1,
    family: "Woody",
    available: true,
    concentration: "Eau de parfum",
    sillage: "Moderate",
    notes: {
      top: ["Grapefruit", "Juniper"],
      heart: ["Haitian vetiver", "Angelica"],
      base: ["Oakmoss", "Ambrette seed"],
    },
    henry:
      "A working vetiver. Nothing decorative about it. If the house had a marketing budget it would cost twice this.",
    provenance: {
      batch: "Batch 21D — 45 bottles",
      bought: "Bought direct from the atelier in Lisbon, January",
      sealed: "Sealed",
    },
  },
  {
    slug: "night-porter",
    name: "Night Porter",
    house: "Maison Verrier",
    size: "50 ml",
    price: 205,
    retail: 380,
    image: bottle2,
    family: "Amber",
    available: false,
    nextBatch: "April",
    concentration: "Extrait de parfum",
    sillage: "Close and long",
    notes: {
      top: ["Black pepper"],
      heart: ["Rose absolute", "Incense"],
      base: ["Oud", "Castoreum", "Amber"],
    },
    henry:
      "Gone within a week last time. I am not going to pretend that is scarcity marketing — the batch was twelve bottles.",
    provenance: {
      batch: "Batch 07G — 12 bottles",
      bought: "Bought direct from the house in Grasse, November",
      sealed: "Sealed",
    },
  },
  {
    slug: "salt-and-iris",
    name: "Salt & Iris",
    house: "Atelier Fivre",
    size: "75 ml",
    price: 152,
    retail: 275,
    image: bottle3,
    family: "Clean",
    available: true,
    concentration: "Eau de parfum",
    sillage: "Close",
    notes: {
      top: ["Sea salt", "Green mandarin"],
      heart: ["Iris root", "Violet leaf"],
      base: ["Driftwood", "Musk"],
    },
    henry:
      "Spring bottle. Thin in December, correct in May. Buy it in April and you will thank yourself.",
    provenance: {
      batch: "Batch 15A — 50 bottles",
      bought: "Bought direct from the atelier in Lisbon, January",
      sealed: "Sealed",
    },
  },
  {
    slug: "the-long-hour",
    name: "The Long Hour",
    house: "Studio Nocturne",
    size: "100 ml",
    price: 189,
    retail: 349,
    image: bottle4,
    family: "Floral",
    available: true,
    concentration: "Eau de parfum",
    sillage: "Moderate to wide",
    notes: {
      top: ["Plum", "Cassis"],
      heart: ["Damask rose", "Geranium"],
      base: ["Patchouli", "Amber", "Vanilla"],
    },
    henry:
      "The rose is doing most of the work and it is a very good rose. Worth a sample before a full bottle — write to me and I will send one.",
    provenance: {
      batch: "Batch 30B — 55 bottles",
      bought: "Bought direct from the studio in Antwerp, February",
      sealed: "Sealed",
    },
  },
  {
    slug: "lv-ombre-nocturne",
    name: "Ombre Nocturne",
    house: "Louis Vuitton",
    size: "100 ml",
    price: 249,
    retail: 380,
    image: lv1,
    family: "Amber",
    available: true,
    concentration: "Eau de parfum",
    sillage: "Wide, warm, patient",
    notes: {
      top: ["Saffron", "Black pepper"],
      heart: ["Agarwood", "Rose"],
      base: ["Amber", "Sandalwood", "Leather"],
    },
    henry:
      "The house prices this the way houses of that size price things. I buy it direct and ask a hundred and thirty less. Same bottle, same batch code, same cellophane.",
    provenance: {
      batch: "Batch 41L — 18 bottles",
      bought: "Bought direct from the maison in Paris, February",
      sealed: "Factory sealed, cellophane intact, code on the base",
    },
  },
  {
    slug: "lv-imagination",
    name: "Imagination",
    house: "Louis Vuitton",
    size: "100 ml",
    price: 232,
    retail: 355,
    image: lv2,
    family: "Clean",
    available: true,
    concentration: "Eau de parfum",
    sillage: "Bright, then close",
    notes: {
      top: ["Calabrian bergamot", "Citron"],
      heart: ["Black tea", "Ginger"],
      base: ["Ambrox", "Guaiac wood"],
    },
    henry:
      "Citrus and tea, done with better material than most. It is a daytime bottle and it does not pretend otherwise. Worth it at my price.",
    provenance: {
      batch: "Batch 38L — 22 bottles",
      bought: "Bought direct from the maison in Paris, February",
      sealed: "Factory sealed",
    },
  },
  {
    slug: "lv-attrape-reves",
    name: "Attrape-Rêves",
    house: "Louis Vuitton",
    size: "100 ml",
    price: 238,
    retail: 360,
    image: lv3,
    family: "Floral",
    available: false,
    nextBatch: "May",
    concentration: "Eau de parfum",
    sillage: "Moderate, sweet at the edges",
    notes: {
      top: ["Peony", "Litchi"],
      heart: ["Ylang-ylang", "Damask rose"],
      base: ["Cocoa", "Patchouli"],
    },
    henry:
      "Twelve bottles last time and they went to people who already knew what it was. Write to me if you want one from the May batch.",
    provenance: {
      batch: "Batch 27L — 12 bottles",
      bought: "Bought direct from the maison in Paris, November",
      sealed: "Sealed",
    },
  },
];

export const featured: Fragrance = fragrances[0]!;

export function getFragrance(slug: string) {
  return fragrances.find((f) => f.slug === slug);
}

export const eur = (n: number) => `€${n.toLocaleString("en-IE")}`;
