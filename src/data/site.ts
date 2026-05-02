export const site = {
  title: 'Tianchi Blog',
  domain: 'tianchi.blog',
  description:
    'Notes on AI agents, retrieval, reinforcement learning, development workflows, and rowing.',
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
  { href: '/interests/', label: 'Interests' },
  { href: '/blog/', label: 'Blog' },
];

export const profile = {
  name: 'Tianchi Cai',
  headline:
    'Founder and CEO working across LLMs, reinforcement learning, retrieval, and agentic development.',
  location: 'Hong Kong / Shanghai',
  intro:
    'I use this site as a public notebook for AI systems, agent workflows, retrieval, reinforcement learning, and the occasional rowing note.',
  focusAreas: ['LLMs', 'Reinforcement learning', 'Retrieval systems', 'Agent harnesses'],
};

export const resume = {
  summary:
    'Founder and CEO with hands-on experience in LLM applications, reinforcement learning, retrieval-augmented generation, large-scale marketing optimization, and agentic development workflows.',
  education: [
    {
      school: 'The University of Hong Kong',
      degree: 'B.A. Philosophy; Mathematics & Computer Science track',
      period: '2013 - 2018',
      details: [
        'ACM-ICPC Asian Gold Medalist.',
        'Four-year scholarship recipient.',
        'LSE summer school in microeconomics.',
      ],
    },
  ],
  experience: [
    {
      role: 'Founder & CEO',
      company: 'Current venture',
      period: '2024 - Present',
      details: [
        'Building AI-native products and workflows around LLMs, agents, and human-in-the-loop execution.',
        'Exploring how Claude Code, harness design, and spec-driven development change software production.',
      ],
    },
    {
      role: 'Responsible for Xingye & Talkie chat models',
      company: 'Minimax',
      period: '2024 - 2025',
      details: ['Aligned chat models to human preference and product requirements.'],
    },
    {
      role: 'Lead, Reinforcement Learning & RAG Team',
      company: 'Ant Group',
      period: '2018 - 2024',
      details: [
        'Led work across reinforcement learning, RLHF, RAG, and large-scale ranking / decision systems.',
        'Published 10+ papers, including work in RL, RLHF, RAG, and retrieval evaluation.',
        'Worked on large-scale reinforcement learning for marketing budget allocation, saving billions of RMB each year.',
        'Best paper runner-up for large-scale reinforcement learning in marketing.',
      ],
    },
    {
      role: 'Software Engineering Intern',
      company: 'Google Ads',
      period: '2017',
      details: ['Full-stack SWE internship for Ads.'],
    },
  ],
  publications: [
    'FoRAG: Factuality-optimized Retrieval Augmented Generation for Web-enhanced Long-form Question Answering (KDD 2024).',
    'Marketing budget allocation with offline constrained deep reinforcement learning (WSDM 2023 best paper runner-up).',
    'Face4RAG: Factual Consistency Evaluation for Retrieval Augmented Generation in Chinese (KDD 2024).',
    'MiniMax-M1: Scaling Test-Time Compute Efficiently with Lightning Attention.',
    'Model-free Reinforcement Learning with Stochastic Reward Stabilization for Recommender Systems (SIGIR 2023).',
    'Generalizing Consistent Multi-Class Classification (NeurIPS 2022).',
  ],
  skills: [
    'LLMs',
    'RLHF',
    'RAG',
    'Reinforcement learning',
    'Marketing optimization',
    'Agent workflows',
  ],
};

export const interests = [
  'Rowing: national championship finalist and club-division competitor.',
  'Rowing as a training system: rhythm, endurance, teamwork, and clean execution under fatigue.',
];
