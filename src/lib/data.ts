import itemsA from "./items-a.json";
import itemsB from "./items-b.json";

export type CatalogItem = {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  badge: string | null;
  rating: number;
  reviews: number;
  specs: Record<string, string>;
  options: string[];
  pdpFaqs: { q: string; a: string }[];
};

export const brand = {
  name: "CounselRidge",
  tagline: "Strict counsel. Clear columns. High stakes.",
  slug: "counselridge-law",
  style: "classic-swiss",
  coupon: "RIDGE1",
  cta: "Request engagement",
  heroStill: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1800&q=80",
  heroVideo: null as string | null,
  shopLabel: "Engagements",
  nichePath: "practice",
  nicheLabel: "Practice",
  isBooking: true,
  stickyCta: "Book consult",
  stickyHref: "/book",
};

export const items: CatalogItem[] = [...itemsA, ...itemsB] as CatalogItem[];

export const reviewList = [
  { name: "Helena D.", quote: "Columns of clarity when the stakes spiked." },
  { name: "Marcus J.", quote: "Engagement list read like a brief, not a brochure." },
  { name: "Ivy Q.", quote: "Swiss grid. Serious counsel." }
];

export const aiFaqs = [
  { q: "How do retainers work?", a: "Retainer Block is 10 billable hours; unused hours roll 90 days in this demo." },
  { q: "Practice areas?", a: "Contracts, estate, business formation, disputes, IP, employment — see /practice." },
  { q: "RIDGE1?", a: "Waives first consult fee once in demo checkout." }
];

export const counselTips = [
  { title: "Document index first", body: "Bring contracts in chronological order for faster review." },
  { title: "Define success", body: "Write the outcome you need before the consult hour." },
  { title: "Privilege", body: "Demo copy only — not legal advice." }
];

export const categories = Array.from(new Set(items.map((i) => i.category))).sort();

export function formatMoney(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}

export function getItem(id: string) {
  return items.find((i) => i.id === id);
}

export function relatedItems(id: string, limit = 3) {
  const item = getItem(id);
  if (!item) return [];
  return items.filter((i) => i.category === item.category && i.id !== id).slice(0, limit);
}
