export default function sitemap() {
  return [
    {
      url: "/",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },

    {
      url: "/taetigkeiten/allgemeines",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "/taetigkeiten/einsaetze",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "/taetigkeiten/uebungen",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "/taetigkeiten/jugend",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "/taetigkeiten/archiv",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },

    {
      url: "/buergerservice/sirenensignale",
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.9,
    },

    {
      url: "/buergerservice/notruf",
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.9,
    },
    {
      url: "/buergerservice/rettungsgasse",
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.9,
    },
    {
      url: "/buergerservice/richtig-loeschen",
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.9,
    },
    {
      url: "/buergerservice/abschnitt-schwechat-land",
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.9,
    },

    {
      url: "/feuerwehr/kommando",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "/feuerwehr/mannschaft",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "/feuerwehr/fuhrpark",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "/feuerwehr/ausruestung",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },

    {
      url: "/impressum",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}
