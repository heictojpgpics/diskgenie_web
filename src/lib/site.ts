export const DOWNLOAD_URL = "https://github.com/heictojpgpics/diskgenie/releases";

export const NAV_LINKS = [
  { label: "Views", href: "#views" },
  { label: "Cleanup", href: "#cleanup" },
  { label: "Themes", href: "#themes" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const MODES = [
  { name: "Folders", shot: "/shots/folders.webp", caption: "The classic tree, sized as you go" },
  { name: "Treemap", shot: "/shots/treemap.webp", caption: "Every file a rectangle, sized by bytes" },
  { name: "Sunburst", shot: "/shots/sunburst.webp", caption: "Your drive as rings, growing outward" },
  { name: "Flame", shot: "/shots/flame.webp", caption: "Depth top to bottom, size left to right" },
  { name: "Bubbles", shot: "/shots/bubbles.webp", caption: "Nested bubbles, one per folder" },
  { name: "Mind Map", shot: "/shots/mindmap.webp", caption: "Branches spreading out from the root" },
  { name: "Top Sizes", shot: "/shots/topsizes.webp", caption: "The biggest items, ranked" },
  { name: "Age Map", shot: "/shots/agemap.webp", caption: "Where your bytes sit on a timeline" },
  { name: "List", shot: "/shots/list.webp", caption: "The whole scan as an outline you expand" },
] as const;

export const THEMES = [
  { id: "light", name: "Light", shot: "/shots/theme-light.webp", dots: ["#ffffff", "#ff6b4a"], note: "Clean white with a coral accent. The default." },
  { id: "dark", name: "Dark", shot: "/shots/theme-dark.webp", dots: ["#2b2d33", "#ff6b4a"], note: "Graphite surfaces, same coral accent." },
  { id: "ember", name: "Ember", shot: "/shots/theme-ember.webp", dots: ["#2c2320", "#e0a34e"], note: "Warm browns with a honey gold accent." },
  { id: "tide", name: "Tide", shot: "/shots/theme-tide.webp", dots: ["#131c24", "#4cc3d9"], note: "Deep blues with a lagoon cyan accent." },
  { id: "blossom", name: "Blossom", shot: "/shots/theme-blossom.webp", dots: ["#fbf1ee", "#d8506b"], note: "Soft blush with a rose accent. The one this page wears." },
] as const;

export const FAQS = [
  {
    q: "Which computers does it run on?",
    a: "Windows 10 or newer, and macOS on Apple Silicon. One license covers one Windows PC and one Mac together, so people with both only pay once.",
  },
  {
    q: "How fast is a scan?",
    a: "On Windows, a full drive usually finishes in seconds, and results stream in while it runs so you can start digging before the end. Mac scans are a little slower but work the same way.",
  },
  {
    q: "Could it delete something I actually need?",
    a: "Nothing is deleted the moment you pick it. Everything you mark goes into a queue you review first, and the final move goes to the Recycle Bin or the Mac Trash, where a mistake is still reversible. Anything that could not be recovered that way gets refused before it moves. OneDrive and other cloud placeholder files are never opened, so a scan never downloads them by accident.",
  },
  {
    q: "Does my data leave my computer?",
    a: "No. Scans, previews and everything you see run entirely on your machine. There is no account to create and no file names are sent anywhere. The only network traffic is license activation.",
  },
  {
    q: "How much does it cost?",
    a: "A license is $10 for a year or $25 once, and it covers both your Windows PC and your Mac. In India, local pricing is ₹499 a year or ₹1,799 once.",
  },
  {
    q: "What happens after I buy?",
    a: "You get a license key by email. Paste it into the app once and you are in. The app checks in periodically to keep things honest, and if you go offline it keeps working for 14 days.",
  },
] as const;

export type Region = "usd" | "inr";

export const PRICING: Record<
  Region,
  { symbol: string; yearly: string; lifetime: string; label: string }
> = {
  usd: { symbol: "$", yearly: "10", lifetime: "25", label: "USD" },
  inr: { symbol: "₹", yearly: "499", lifetime: "1,799", label: "INR" },
};
