export const site = {
  title: 'Tianchi Blog',
  domain: 'tianchi.blog',
  description:
    'Tianchi Cai — founder, RL/RAG researcher, and rower. Notes on agent harnesses, context engineering, and spec-driven development.',
  author: 'Tianchi Cai',
  email: 'hello@tianchi.blog',
  social: {
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/',
  },
};

export const navItems = [
  { href: '/', label: 'Home' },
  { href: '/resume/', label: 'Resume' },
  { href: '/blog/', label: 'Blog' },
];

export const profile = {
  name: 'Tianchi Cai',
  role: 'Founder & CEO',
  headline: 'LLMs · Reinforcement Learning · RAG · Agent Harnesses',
  location: 'Hong Kong / Shanghai',
  intro:
    'I work at the intersection of LLMs, reinforcement learning, and retrieval. Previously led the RL & RAG team at Ant Group and trained chat models at Minimax. I write here about agent harnesses, context engineering, and spec-driven development — and occasionally about rowing.',
  funFact:
    'Passionate rower — dozens of national championships in the club division.',
  focusAreas: [
    'LLMs',
    'Reinforcement learning',
    'RAG / retrieval',
    'Agent harnesses',
    'Spec-driven development',
  ],
  highlights: [
    {
      label: 'Ant Group',
      detail: 'Led RL & RAG team — 10+ papers, billions in marketing savings.',
    },
    {
      label: 'Minimax',
      detail: 'Aligned Xingye & Talkie chat models to human preference.',
    },
    {
      label: 'HKU',
      detail: 'Philosophy → Math & CS. ACM-ICPC Asian Gold medalist.',
    },
  ],
};

export const timeline = [
  { period: '2013 – 2018', label: 'HKU', sub: 'Math & CS' },
  { period: '2017', label: 'Google', sub: 'SWE intern, Ads' },
  { period: '2018 – 2024', label: 'Ant Group', sub: 'Lead RL & RAG' },
  { period: '2024 – 2025', label: 'Minimax', sub: 'Xingye & Talkie' },
  { period: '2025 – Present', label: 'Founder & CEO', sub: 'Building' },
];

export const resume = {
  summary:
    'Founder and CEO. Previously led the Reinforcement Learning & RAG team at Ant Group and worked on chat models at Minimax. Hands-on across LLM training, RLHF, retrieval, and large-scale optimization — with 10+ peer-reviewed papers and a Best Paper runner-up.',
  current: {
    role: 'Founder & CEO',
    company: 'Stealth',
    period: '2025 – Present',
    details: [
      'Building AI-native products around LLMs, agents, and human-in-the-loop execution.',
      'Working in public on agent harness design, context engineering, and spec-driven development.',
    ],
  },
  experience: [
    {
      role: 'Chat model alignment — Xingye & Talkie',
      company: 'Minimax',
      period: '2024 – 2025',
      details: [
        'Responsible for the Xingye and Talkie chat models.',
        'Aligned models to human preference and product requirements.',
      ],
    },
    {
      role: 'Lead, Reinforcement Learning & RAG team',
      company: 'Ant Group',
      period: '2018 – 2024',
      details: [
        'Led work across reinforcement learning, RLHF, RAG, and large-scale ranking / decision systems.',
        'Published 10+ papers — many SOTA results in RL, RLHF, and RAG.',
        'First large-scale RL system in marketing budget allocation. Best Paper runner-up (WSDM 2023).',
        'Saved billions of RMB in marketing budgets each year.',
      ],
    },
    {
      role: 'Software Engineering Intern, Ads',
      company: 'Google',
      period: '2017',
      details: ['Full-stack SWE intern on the Ads team.'],
    },
  ],
  education: [
    {
      school: 'The University of Hong Kong',
      degree: 'B.A. Philosophy → Mathematics & Computer Science track',
      period: '2013 – 2018',
      details: [
        'ACM-ICPC Asian Regional Gold medalist.',
        'Four-year scholarship recipient.',
        'LSE summer school in microeconomics.',
      ],
    },
  ],
  publications: [
    {
      title:
        'FoRAG: Factuality-optimized Retrieval Augmented Generation for Web-enhanced Long-form Question Answering',
      venue: 'KDD 2024',
    },
    {
      title:
        'Marketing budget allocation with offline constrained deep reinforcement learning',
      venue: 'WSDM 2023 — Best Paper Runner-up',
    },
    {
      title:
        'Face4RAG: Factual Consistency Evaluation for Retrieval Augmented Generation in Chinese',
      venue: 'KDD 2024',
    },
    {
      title:
        'MiniMax-M1: Scaling Test-Time Compute Efficiently with Lightning Attention',
      venue: 'Minimax (technical report)',
    },
    {
      title:
        'Model-free Reinforcement Learning with Stochastic Reward Stabilization for Recommender Systems',
      venue: 'SIGIR 2023',
    },
    {
      title: 'Generalizing Consistent Multi-Class Classification',
      venue: 'NeurIPS 2022',
    },
  ],
  skills: [
    'LLMs',
    'RLHF',
    'RAG',
    'Reinforcement learning',
    'Marketing optimization',
    'Agent workflows',
    'Spec-driven development',
  ],
  funFact:
    'Passionate rower; dozens of national championships in the club division.',
};
