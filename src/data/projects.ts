export interface Project {
  slug: string;
  title: string;
  description: string;
  role: string;
  outcome: string;
}

export const projects: Project[] = [
  {
    slug: "creator-lab",
    title: "Creator Lab",
    description:
      "A content studio and education platform helping independent creators build sustainable businesses through courses, community, and practical frameworks.",
    role: "Founder & Creative Director",
    outcome:
      "Grew to 50,000+ subscribers and launched multiple six-figure product launches.",
  },
  {
    slug: "weekly-dispatch",
    title: "The Weekly Dispatch",
    description:
      "An editorial newsletter exploring entrepreneurship, media, and the craft of building things that matter—delivered every Sunday morning.",
    role: "Writer & Publisher",
    outcome:
      "Built a loyal readership with consistent 40%+ open rates over three years.",
  },
  {
    slug: "podcast-network",
    title: "Podcast Network",
    description:
      "Produced and hosted long-form interviews with founders, writers, and builders—distilled into actionable insights for a growing audience.",
    role: "Host & Producer",
    outcome:
      "Published 200+ episodes with over 2 million total downloads.",
  },
  {
    slug: "digital-products",
    title: "Digital Product Suite",
    description:
      "A collection of templates, guides, and tools designed to help creators ship faster—minimal design, maximum clarity.",
    role: "Product Designer",
    outcome:
      "Sold 10,000+ units with a 4.9 average customer rating.",
  },
];

export const featuredProjects = projects.slice(0, 2);
