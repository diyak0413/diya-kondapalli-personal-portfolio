// ============================================
// DIYA'S PORTFOLIO - CONTENT CONFIGURATION
// ============================================
// How to customize: Edit the values below to personalize your portfolio.
// Each [REPLACE: ...] marker indicates content you should update.
// Simply replace the placeholder text with your own content.

export const siteConfig = {
  name: "[REPLACE: Your Name]",
  tagline: "[REPLACE: Your one-line tagline, e.g., 'Building at the intersection of technology and impact']",
  email: "[REPLACE: your.email@example.com]",
  socialLinks: {
    github: "[REPLACE: https://github.com/yourusername]",
    linkedin: "[REPLACE: https://linkedin.com/in/yourusername]",
    twitter: "[REPLACE: https://twitter.com/yourusername]"
  }
};

export const heroContent = {
  greeting: "Hi, I'm",
  name: "[REPLACE: Diya]",
  headline: "[REPLACE: A high school student building meaningful things with code and curiosity.]",
  description: "[REPLACE: I'm passionate about using technology to solve real problems. Currently exploring machine learning, web development, and computational biology — always learning, always building.]",
  cta: {
    primary: "View Projects",
    secondary: "Read My Writing"
  }
};

export const aboutContent = {
  title: "About Me",
  paragraphs: [
    "[REPLACE: Write 2-3 sentences about who you are, what drives you, and what you're curious about. Example: I've always been fascinated by how things work — from the logic of code to the systems that shape our world.]",
    "[REPLACE: Write about your current focus and what you're working on. Example: Right now, I'm diving deep into machine learning and its applications in healthcare, while building tools that make information more accessible.]",
    "[REPLACE: Write about your goals and vision. Example: I believe in learning by doing, documenting the journey, and using technology as a force for good. This portfolio is my digital notebook — a growing archive of projects, ideas, and lessons learned.]"
  ],
  stats: [
    { label: "Projects Built", value: "[REPLACE: 8+]" },
    { label: "Lines of Code", value: "[REPLACE: 15K+]" },
    { label: "Blog Posts", value: "[REPLACE: 12]" }
  ],
  skills: [
    "[REPLACE: Python]",
    "[REPLACE: JavaScript]",
    "[REPLACE: React]",
    "[REPLACE: Machine Learning]",
    "[REPLACE: Data Analysis]",
    "[REPLACE: UI/UX Design]"
  ]
};

export const projectsContent = {
  title: "Projects",
  subtitle: "A selection of things I've built — each one a learning experience.",
  projects: [
    {
      id: 1,
      title: "[REPLACE: Project Title 1]",
      problem: "[REPLACE: Describe the problem you identified. Example: Students struggle to find reliable study resources organized by topic.]",
      solution: "[REPLACE: Describe what you built. Example: A web app that aggregates and categorizes educational content using NLP.]",
      impact: "[REPLACE: Describe the impact or outcome. Example: Used by 200+ students at my school.]",
      technologies: ["[REPLACE: Tech 1]", "[REPLACE: Tech 2]", "[REPLACE: Tech 3]"],
      links: {
        demo: "[REPLACE: Demo URL or remove if none]",
        github: "[REPLACE: GitHub URL or remove if none]"
      },
      image: null,
      featured: true
    },
    {
      id: 2,
      title: "[REPLACE: Project Title 2]",
      problem: "[REPLACE: Problem statement for project 2]",
      solution: "[REPLACE: What you built for project 2]",
      impact: "[REPLACE: Impact of project 2]",
      technologies: ["[REPLACE: Tech 1]", "[REPLACE: Tech 2]"],
      links: {
        demo: "[REPLACE: Demo URL]",
        github: "[REPLACE: GitHub URL]"
      },
      image: null,
      featured: true
    },
    {
      id: 3,
      title: "[REPLACE: Project Title 3]",
      problem: "[REPLACE: Problem statement for project 3]",
      solution: "[REPLACE: What you built for project 3]",
      impact: "[REPLACE: Impact of project 3]",
      technologies: ["[REPLACE: Tech 1]", "[REPLACE: Tech 2]"],
      links: {
        demo: "[REPLACE: Demo URL]",
        github: "[REPLACE: GitHub URL]"
      },
      image: null,
      featured: false
    },
    {
      id: 4,
      title: "[REPLACE: Project Title 4]",
      problem: "[REPLACE: Problem statement for project 4]",
      solution: "[REPLACE: What you built for project 4]",
      impact: "[REPLACE: Impact of project 4]",
      technologies: ["[REPLACE: Tech 1]", "[REPLACE: Tech 2]"],
      links: {
        demo: "[REPLACE: Demo URL]",
        github: "[REPLACE: GitHub URL]"
      },
      image: null,
      featured: false
    }
  ]
};

export const blogContent = {
  title: "Writing",
  subtitle: "Reflections, breakdowns, and lessons learned along the way.",
  posts: [
    {
      id: 1,
      title: "[REPLACE: Blog Post Title 1]",
      excerpt: "[REPLACE: A brief 1-2 sentence summary of this post. Example: Documenting my first experience with neural networks and what surprised me most.]",
      date: "[REPLACE: Month Year, e.g., June 2025]",
      category: "[REPLACE: Category, e.g., Technical, Reflection, Tutorial]",
      readTime: "[REPLACE: X min read]",
      slug: "post-1"
    },
    {
      id: 2,
      title: "[REPLACE: Blog Post Title 2]",
      excerpt: "[REPLACE: Summary of post 2]",
      date: "[REPLACE: Month Year]",
      category: "[REPLACE: Category]",
      readTime: "[REPLACE: X min read]",
      slug: "post-2"
    },
    {
      id: 3,
      title: "[REPLACE: Blog Post Title 3]",
      excerpt: "[REPLACE: Summary of post 3]",
      date: "[REPLACE: Month Year]",
      category: "[REPLACE: Category]",
      readTime: "[REPLACE: X min read]",
      slug: "post-3"
    },
    {
      id: 4,
      title: "[REPLACE: Blog Post Title 4]",
      excerpt: "[REPLACE: Summary of post 4]",
      date: "[REPLACE: Month Year]",
      category: "[REPLACE: Category]",
      readTime: "[REPLACE: X min read]",
      slug: "post-4"
    }
  ]
};

export const awardsContent = {
  title: "Recognition",
  subtitle: "Milestones and acknowledgments from the journey so far.",
  awards: [
    {
      id: 1,
      title: "[REPLACE: Award/Recognition Title 1]",
      organization: "[REPLACE: Organization Name]",
      year: "[REPLACE: Year]",
      description: "[REPLACE: Brief description of what this recognition was for. Keep it factual and understated.]"
    },
    {
      id: 2,
      title: "[REPLACE: Award/Recognition Title 2]",
      organization: "[REPLACE: Organization Name]",
      year: "[REPLACE: Year]",
      description: "[REPLACE: Brief description]"
    },
    {
      id: 3,
      title: "[REPLACE: Award/Recognition Title 3]",
      organization: "[REPLACE: Organization Name]",
      year: "[REPLACE: Year]",
      description: "[REPLACE: Brief description]"
    }
  ]
};

// ============================================
// HOW TO ADD NEW CONTENT
// ============================================
// 
// TO ADD A NEW PROJECT:
// Copy the project object structure below and add it to the projects array:
// {
//   id: [next number],
//   title: "Your Project Title",
//   problem: "The problem you solved",
//   solution: "What you built",
//   impact: "The results/impact",
//   technologies: ["Tech1", "Tech2"],
//   links: { demo: "url", github: "url" },
//   image: null,
//   featured: true/false
// }
//
// TO ADD A NEW BLOG POST:
// Copy the post object structure and add to posts array:
// {
//   id: [next number],
//   title: "Post Title",
//   excerpt: "Brief summary",
//   date: "Month Year",
//   category: "Category",
//   readTime: "X min read",
//   slug: "unique-slug"
// }
//
// TO ADD A NEW AWARD:
// Copy the award object structure and add to awards array:
// {
//   id: [next number],
//   title: "Award Title",
//   organization: "Organization",
//   year: "Year",
//   description: "Brief description"
// }
