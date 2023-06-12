const CONFIG = {
  // profile setting (required)
  profile: {
    name: "itsybitsycyber",
    image: "/avatar.jpg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "blockchain developer",
    bio: "crypto maxi",
    email: "nadvnnie@gmail.com",
    linkedin: "nadiavnn",
    github: "itsybitsycyber",
    twitter: "itsybitsycyber",
    instagram: "",
  },
  projects: [
    {
      name: `itsybitsycyber`,
      href: "https://github.com/itsybitsycyber/ZeroKnowledge",
    },
  ],
  // blog setting (required)
  blog: {
    title: "ItsyBitsyCyber",
    description: "Welcome to my blog!",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://itsybitsycyber-github-io.vercel.app/",
  since: 2022, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "", //  "https://og-image-korean.vercel.app" The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "itsybitsycyber/itsybitsycyber",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}

module.exports = { CONFIG }