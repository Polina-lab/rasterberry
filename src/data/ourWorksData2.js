import worksThumbnail1 from "../assets/projects/sarapuu/Sarapuu.png";
import worksThumbnail2 from "../assets/projects/above/abovespace.png";
// import worksThumbnail3 from "../assets/projects/...";
// ... добавляй свои импорты сюда

import sarapuu from "../assets/projects/sarapuu/Sarapuu2.png";
import above from "../assets/projects/above/abovespace.png";
// import sarapuu2 from "../assets/projects/sarapuu/Sarapuu3.png";

// ─── CATEGORIES ───────────────────────────────────────────────────────────
// branding | web-design | graphic-design | print | social-media | photography
// featured: true → показывается на главной странице (максимум 6)

const ourWorksData = [
  {
    id: 1,
    category: "branding",
    featured: true,
    thumbnail: worksThumbnail1,
    images: [sarapuu],
  },
  {
    id: 2,
    category: "web-design",
    featured: true,
    thumbnail: worksThumbnail2,
    images: [above],
  },
  {
    id: 3,
    category: "graphic-design",
    featured: true,
    thumbnail: worksThumbnail1,
    images: [sarapuu],
  },
  {
    id: 4,
    category: "print",
    featured: true,
    thumbnail: worksThumbnail1,
    images: [sarapuu],
  },
  {
    id: 5,
    category: "social-media",
    featured: true,
    thumbnail: worksThumbnail2,
    images: [above],
  },
  {
    id: 6,
    category: "branding",
    featured: true,
    thumbnail: worksThumbnail1,
    images: [sarapuu],
  },
  // ── Остальные работы — только на странице /works ──
  {
    id: 7,
    category: "web-design",
    featured: false,
    thumbnail: worksThumbnail1,
    images: [sarapuu],
  },
  {
    id: 8,
    category: "graphic-design",
    featured: false,
    thumbnail: worksThumbnail2,
    images: [above],
  },
  // ... добавляй свои работы по этому шаблону
];

export default ourWorksData;
