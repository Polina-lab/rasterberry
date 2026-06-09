import worksThumbnail1 from "../assets/projects/sarapuu/Sarapuu.png";
import worksThumbnail2 from "../assets/projects/above/abovespace.png";

import sarapuu from "../assets/projects/sarapuu/Sarapuu2.png";
import above from "../assets/projects/above/abovespace.png";

// ─── Доступные категории ──────────────────────────────────────────────────
// branding | web-design | graphic-design | print | social-media | photography

// ─── Доступные этапы ─────────────────────────────────────────────────────
// planning | implementation | draft | testing | result
// Указывай только те этапы, которые реально есть у проекта.
// Тексты этапов — в файлах переводов: works.{id}.stages.{stage}

const ourWorksData = [
  {
    id: 1,
    category: "branding",
    featured: true,
    thumbnail: worksThumbnail1,
    images: [sarapuu],
    link: "https://example.com", // ссылка на готовую работу (опционально)
    stages: ["planning", "implementation", "draft", "result"],
  },
  {
    id: 2,
    category: "web-design",
    featured: true,
    thumbnail: worksThumbnail2,
    images: [above],
    link: "https://example.com",
    stages: ["planning", "implementation", "draft", "testing", "result"],
  },
  {
    id: 3,
    category: "graphic-design",
    featured: true,
    thumbnail: worksThumbnail1,
    images: [sarapuu],
    stages: ["planning", "draft", "result"],
  },
  {
    id: 4,
    category: "print",
    featured: true,
    thumbnail: worksThumbnail1,
    images: [sarapuu],
    stages: ["planning", "implementation", "result"],
  },
  {
    id: 5,
    category: "social-media",
    featured: true,
    thumbnail: worksThumbnail2,
    images: [above],
    stages: ["planning", "implementation", "draft", "result"],
  },
  {
    id: 6,
    category: "branding",
    featured: true,
    thumbnail: worksThumbnail1,
    images: [sarapuu],
    link: "https://example.com",
    stages: ["planning", "implementation", "draft", "testing", "result"],
  },
  // ── Работы только на странице /works ─────────────────────────────────
  {
    id: 7,
    category: "web-design",
    featured: false,
    thumbnail: worksThumbnail1,
    images: [sarapuu],
    link: "https://example.com",
    stages: ["planning", "implementation", "draft", "result"],
  },
  // ... добавляй свои работы по этому шаблону
];

export default ourWorksData;
