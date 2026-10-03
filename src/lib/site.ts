export const DOWNLOAD_URL = "https://github.com/heictojpgpics/diskgenie/releases";
export const REPO_URL = "https://github.com/heictojpgpics/diskgenie";

export const NAV_LINKS = [
  { label: "Visualize", href: "#visualize" },
  { label: "Features", href: "#features" },
  { label: "Themes", href: "#themes" },
  { label: "Safety", href: "#safety" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const MODES = [
  { name: "Folders", shot: "/shots/folders.webp", caption: "Browse folder by folder, sized as you go" },
  { name: "Treemap", shot: "/shots/treemap.webp", caption: "Every file a rectangle, sized by bytes" },
  { name: "Sunburst", shot: "/shots/sunburst.webp", caption: "Rings radiating out from the scan root" },
  { name: "Flame", shot: "/shots/flame.webp", caption: "Depth top to bottom, size left to right" },
  { name: "Bubbles", shot: "/shots/bubbles.webp", caption: "Nested bubbles, one per folder" },
  { name: "Mind Map", shot: "/shots/mindmap.webp", caption: "Branches from the root, sized by weight" },
  { name: "Top Sizes", shot: "/shots/topsizes.webp", caption: "The biggest items, ranked" },
  { name: "Age Map", shot: "/shots/agemap.webp", caption: "Where your bytes sit on a timeline" },
  { name: "List", shot: "/shots/list.webp", caption: "Every item as an expandable outline" },
] as const;

export const THEMES = [
  { id: "light", name: "Light", shot: "/shots/theme-light.webp", dots: ["#ffffff", "#ff6b4a"], note: "Neutral white + coral — the shipped default." },
  { id: "dark", name: "Dark", shot: "/shots/theme-dark.webp", dots: ["#2b2d33", "#ff6b4a"], note: "Graphite surfaces, the same coral ink." },
  { id: "ember", name: "Ember", shot: "/shots/theme-ember.webp", dots: ["#2c2320", "#e0a34e"], note: "Warm espresso surfaces, honey-gold ink." },
  { id: "tide", name: "Tide", shot: "/shots/theme-tide.webp", dots: ["#131c24", "#4cc3d9"], note: "Deep marine surfaces, lagoon-cyan ink." },
  { id: "blossom", name: "Blossom", shot: "/shots/theme-blossom.webp", dots: ["#fbf1ee", "#d8506b"], note: "Blush cream surfaces, rose ink. You're soaking in it." },
] as const;

export const FAQS = [
  {
    q: "Is DiskGenie really for both Windows and Mac?",
    a: "Yes. One codebase, two natives: the Rust core speaks NTFS/Win32 on Windows and the Keychain + Trash on macOS, and each platform gets its own tuned UI vocabulary. One license covers one Windows PC and one Mac together.",
  },
  {
    q: "How fast is a scan?",
    a: "The turbo engine parses the NTFS master file table directly, so a full C:\\ scan lands in seconds, with results streaming in while it runs. The standard engine is always the honest fallback — visible, with a stated reason, never a silent downgrade. On macOS the standard engine is the path.",
  },
  {
    q: "Could it delete something I actually need?",
    a: "No — deleting is deliberately a two-step dance. Everything you stage lands in a queue you review, and the commit moves items to the Recycle Bin (or the Mac Trash), never straight to oblivion. The product carries zero direct-delete APIs — that rule is enforced by a CI check on every build. Cloud placeholder files are never opened, previewed, or hashed, and protected system folders can't be staged.",
  },
  {
    q: "Does my data leave my machine?",
    a: "Scans, hashes, and previews are all local. Analytics are anonymous, off when unconfigured, and one checkbox to disable — no file names, no paths, ever. The only network calls are license activation and a daily revalidation for Pro.",
  },
  {
    q: "What do I get free, and what needs Pro?",
    a: "The live system Monitor is free forever. The full-disk map with all nine views, the Cleanup Queue, Duplicates, Applications, and Snapshots come with Pro — yearly or lifetime, activated right inside the app. Offline grace runs 14 days.",
  },
  {
    q: "How does licensing actually work?",
    a: "Your key activates against a Cloudflare-hosted backend that issues Ed25519-signed entitlement tokens — a spoofed server can't forge one, and a revoked key stops working within a day. After activation, the app revalidates once every 24 hours and tolerates 14 days fully offline.",
  },
  {
    q: "Which systems are supported?",
    a: "Windows 10 or later (WebView2 ships with modern Windows) and macOS on Apple Silicon. The installer and a portable zip both ship from the releases page.",
  },
] as const;
