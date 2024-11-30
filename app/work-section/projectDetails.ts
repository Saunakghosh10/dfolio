export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "Pathforge",
    description:
      "Forge Your Path to Programming Mastery",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Saunakghosh10/Pathforge",
    demo: "https://pathforge.vercel.app/",
    image: require(".//../../public/projects/pathforge.png"),
    available: true,
  },
  {
    id: 1,
    name: "InfinityUi",
    description:
      "InfinityUi is a component library offering customizable, reusable UI elements for modern web apps, prioritizing performance and aesthetics.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Saunakghosh10/infinity-ui",
    demo: "#",
    image: require(".//../../public/projects/infinityui.png"),
    available: true,
  },
  {
    id: 2,
    name: "Lumina",
    description:
      "Lumina is a SaaS platform for organizing knowledge through content curation, note-taking, and AI-driven summarization, enhanced by advanced UI/UX for research and learning.",
    technologies: ["React", "Next.js", "Postgres"],
    github: "https://github.com/Saunakghosh10/lumina",
    demo: "#",
    image: require(".//../../public/projects/lumina.png"),
    available: true,
  },
  {
    id: 3,
    name: "AiContentTools",
    description:
      "AI Content Tools automate content creation, provide insights, and convert text into videos for platforms like YouTube Shorts and TikTok.",
    technologies: ["Next.js", "Postgres", "Framer Motion"],
    github: "https://github.com/Saunakghosh10/ai-content-tools",
    demo: "https://ai-content-manager.vercel.app/",
    image: require(".//../../public/projects/aicontent.png"),
    available: true,
  },
  {
    id: 4,
    name: "Calibrate",
    description:
      "Calibrate is a dynamic scheduling app with daily-refreshing plans, built using Next.js to help users efficiently manage tasks.",
    technologies: ["Next.js", "Typescript", "Prisma"],
    github: "https://github.com/Saunakghosh10/calibrate",
    demo: "#",
    image: require(".//../../public/projects/calibrate.png"),
    available: true,
  },
  // {
  //   id: 4,
  //   name: "SkyWatch",
  //   description:
  //     "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current weather and forecast for the next 2 days in any city.",
  //   technologies: ["React", "CSS", "Chart.js"],
  //   github: "https://github.com/victorcodess/weather-forecast-website",
  //   demo: "https://sky-watch.vercel.app/",
  //   image: require(".//../../public/projects/skywatch-flip.png"),
  //   available: true,
  // },
  // {
  //   id: 4,
  //   name: "Alpaca Image Generator",
  //   description:
  //     "An image generator website that allows users to generate, combine, and download images.",
  //   technologies: ["React", "CSS", "Merge Images"],
  //   github: "https://github.com/victorcodess/alpaca-image-generator",
  //   demo: "http://alpaca-image-generator-beta.vercel.app",
  //   image: require(".//../../public/projects/alpaca-flip.png"),
  //   available: true,
  // },

  // {
  //   id: 5,
  //   name: "Link Shortener",
  //   description:
  //     "A website that reduces the length of your URL using Bit.ly's API",
  //   technologies: ["JavaScript", "CSS", "Bit.ly's API"],
  //   github: "https://github.com/victorcodess/url-shortener",
  //   demo: "https://url-shortener-nine-delta.vercel.app",
  //   image: require(".//../../public/projects/shortener-new.webp"),
  //   available: true,
  // },
  // {
  //   id: 6,
  //   name: "Carpooling Service",
  //   description:
  //     "TMTM helps Covenant University students find fellow students who are headed to the same location, so they can share a ride and split the cost.",
  //   technologies: ["Material UI", "React", "Formik"],
  //   github: "https://github.com/victorcodess/carpooling-service",
  //   demo: "",
  //   image: require(".//../../public/projects/carpool-new.webp"),
  //   available: false,
  // },
  // {
  //   id: 7,
  //   name: "MLSC.ng",
  //   description:
  //     "This is platform for Microsoft Learn Student Ambassadors to shorten links, append their sharing IDs and generate event certificates.",
  //   technologies: ["Next.js", "Next Auth", "Tailwind CSS"],
  //   github: "https://github.com/msp-nigeria/mlsc.ng-frontend",
  //   demo: "",
  //   image: require(".//../../public/projects/mlsc.png"),
  //   available: false,
  // },
];

export const designProjects = [
  {
    id: 1,
    name: "Hebron Statup Lab Website",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 2,
    name: "RAGS Scrubs Website",
    description:
      "An image generator website that allows users to generate, combine, and download images.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 3,
    name: "Crown Branding Agency Website",
    description:
      "A website that reduces the length of your URL using Bit.ly's API",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image:
      "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 4,
    name: "Titi Mobile App",
    description:
      "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
    available: false,
  },
];
