const link = ""

export default function sitemap() {
  return [
    {
      url: link +"/",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },

    {
      url: link +"/taetigkeiten/allgemeines",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: link +"/taetigkeiten/einsaetze",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: link +"/taetigkeiten/uebungen",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: link +"/taetigkeiten/jugend",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: link +"/taetigkeiten/archiv",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },

    {
      url: link +"/buergerservice/sirenensignale",
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.9,
    },

    {
      url: link +"/buergerservice/notruf",
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.9,
    },
    {
      url: link +"/buergerservice/rettungsgasse",
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.9,
    },
    {
      url: link +"/buergerservice/richtig-loeschen",
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.9,
    },
    {
      url: link +"/buergerservice/abschnitt-schwechat-land",
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.9,
    },

    {
      url: link +"/feuerwehr/kommando",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: link +"/feuerwehr/mannschaft",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: link +"/feuerwehr/fuhrpark",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: link +"/feuerwehr/ausruestung",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },

    {
      url: link +"/impressum",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}
