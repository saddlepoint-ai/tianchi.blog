export const site = {
  title: 'Tianchi Blog',
  domain: 'tianchi.blog',
  description:
    'A personal field notebook for projects, ideas, interests, and long-form writing.',
  author: 'Tianchi',
  email: 'hello@tianchi.blog',
  social: {
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/',
  },
};

export const navItems = [
  { href: '/', label: 'Home' },
  { href: '/resume/', label: 'Resume' },
  { href: '/projects/', label: 'Projects' },
  { href: '/interests/', label: 'Interests' },
  { href: '/now/', label: 'Now' },
  { href: '/blog/', label: 'Blog' },
];

export const profile = {
  name: 'Tianchi',
  headline: 'Builder, researcher, and operator exploring AI-native tools.',
  location: 'Shanghai / Remote',
  intro:
    'I use this site as a public notebook: shipping notes, project write-ups, reading traces, and the ideas I want to keep thinking about.',
  focusAreas: ['AI agents', 'Developer tools', 'Product systems', 'Personal knowledge workflows'],
};

export const resume = {
  summary:
    'Personal resume content goes here. Replace these sections with your current role, work history, education, and the outcomes you want visitors to remember.',
  experience: [
    {
      role: 'Founder / Product Builder',
      company: 'Independent',
      period: '2024 - Present',
      details: [
        'Building prototypes around AI-assisted workflows and local-first productivity.',
        'Exploring how agents can make knowledge work more executable.',
      ],
    },
    {
      role: 'Product and Engineering',
      company: 'Previous Work',
      period: 'Earlier',
      details: [
        'Led product discovery, technical implementation, and user feedback loops.',
        'Worked across strategy, design, engineering, and operations.',
      ],
    },
  ],
  skills: ['Product strategy', 'Full-stack prototyping', 'AI tooling', 'Automation', 'Writing'],
};

export const projects = [
  {
    name: 'NodieSpace',
    status: 'Active exploration',
    description:
      'An AI-native workspace concept for turning conversations, files, and tasks into coordinated project flow.',
    tags: ['AI agents', 'Workspace', 'Productivity'],
  },
  {
    name: 'Personal Blog System',
    status: 'Live foundation',
    description:
      'A static publishing pipeline where Markdown notes become a fast, searchable personal site.',
    tags: ['Astro', 'Markdown', 'Publishing'],
  },
  {
    name: 'Research Notes',
    status: 'Ongoing',
    description:
      'A collection of experiments, reading notes, and product observations around AI and developer experience.',
    tags: ['Research', 'Writing', 'DX'],
  },
];

export const interests = [
  'AI agents and human-computer collaboration',
  'Personal knowledge management',
  'Developer experience and creative tools',
  'Long-form writing, books, and reflective systems',
  'Travel, coffee, and quiet places for thinking',
];

export const nowItems = [
  'Designing a durable workflow for writing and shipping public notes.',
  'Studying agentic coding patterns and where they break down in real products.',
  'Collecting examples of useful personal websites, field notes, and digital gardens.',
];
