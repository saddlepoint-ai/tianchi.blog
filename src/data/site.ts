export const siteConfig = {
  domain: 'tianchi.blog',
  email: 'hello@tianchi.blog',
  social: {
    googleScholar: 'https://scholar.google.com/citations?user=Y9VCVsoAAAAJ&hl=en',
    linkedin: 'https://www.linkedin.com/in/tianchi-cai-76a0b57b/',
  },
};

export const data = {
  en: {
    site: {
      title: 'Tianchi',
      description: 'Notes on LLMs, reinforcement learning, and agent workflows.',
      author: 'Tianchi Cai',
    },
    navItems: [
      { href: '/', label: 'Resume' },
      { href: '/blog/', label: 'Notes' },
    ],
    profile: {
      name: 'Tianchi Cai',
      role: 'Founder & CEO',
      headline: 'LLMs · Reinforcement Learning · RAG · Agent Harnesses',
      location: 'Beijing / Hangzhou',
    },
    resume: {
      summary: 'Founder & CEO at Saddlepoint AI. Previously led RL & RAG at Ant Group and chat-model alignment at MiniMax. 10+ peer-reviewed papers; WSDM 2023 Best Paper Runner-up.',
      current: {
        role: 'Founder & CEO',
        company: 'Saddlepoint AI',
        period: '2025 — Present',
        details: [
          'Saddlepoint: when a direction hits a local max, find a new dimension to optimize. Orthogonal dimension-shifting as our core way to innovate.',
          'Building nodie.ai — a local-first agent workstation for AI-built software, and nodie claw — a desktop multi-agent harness.',
        ],
      },
      experience: [
        {
          role: 'Chat model alignment — Xingye & Talkie',
          company: 'MiniMax',
          period: '2024 – 2025',
          details: ['Led alignment of Xingye and Talkie chat models to human preference and product requirements.'],
        },
        {
          role: 'Lead, RL & RAG team',
          company: 'Ant Group',
          period: '2018 – 2024',
          details: [
            'Led RL, RLHF, RAG, and large-scale ranking / decision systems.',
            'First production-scale RL system for marketing budget allocation. Saved billions of RMB annually.',
            '10+ papers, WSDM 2023 Best Paper Runner-up.',
          ],
        },
        {
          role: 'SWE Intern, Ads',
          company: 'Google',
          period: '2017',
          details: ['Full-stack intern on the Ads team.'],
        },
      ],
      education: [
        {
          school: 'The University of Hong Kong',
          degree: 'B.A. Philosophy → Math & CS track',
          period: '2013 – 2018',
          details: [
            'ACM-ICPC Asia Regional Gold medalist.',
            'Four-year scholarship; LSE summer school in microeconomics.',
          ],
        },
      ],
      publications: [
        { title: 'MiniMax-M1: Scaling Test-Time Compute Efficiently with Lightning Attention', venue: 'MiniMax · 2025', tag: 'tech-report' },
        { title: 'FoRAG: Factuality-optimized Retrieval Augmented Generation for Web-enhanced Long-form QA', venue: 'KDD 2024', tag: 'rag' },
        { title: 'Face4RAG: Factual Consistency Evaluation for Retrieval Augmented Generation in Chinese', venue: 'KDD 2024', tag: 'rag' },
        { title: 'Marketing Budget Allocation with Offline Constrained Deep Reinforcement Learning', venue: 'WSDM 2023 · Best Paper Runner-up', tag: 'rl' },
        { title: 'Model-free RL with Stochastic Reward Stabilization for Recommender Systems', venue: 'SIGIR 2023', tag: 'rl' },
        { title: 'Two-stage Constrained Actor-Critic for Short Video Recommendation', venue: 'WWW 2023', tag: 'rl' },
        { title: 'Reinforcing User Retention in a Billion-scale Short Video Recommender System', venue: 'WWW 2023 (Industry)', tag: 'rl' },
        { title: 'Generalizing Consistent Multi-Class Classification', venue: 'NeurIPS 2022', tag: 'theory' },
        { title: 'A Cooperative-Competitive Multi-Agent Framework for Auto-Bidding in Online Advertising', venue: 'WSDM 2022', tag: 'rl' },
      ],
      skills: ['LLMs', 'RLHF', 'RAG', 'Reinforcement Learning', 'Agent Harnesses', 'Spec-Driven Development'],
    },
    ui: {
      'page.resume.eyebrow': 'Resume',
      'page.resume.current': 'Now',
      'page.resume.experience': 'Experience',
      'page.resume.education': 'Education',
      'page.resume.skills': 'Focus',
      'page.resume.papers': 'Selected Publications',
      'page.blog.eyebrow': 'Notebook',
      'page.blog.title': 'Field notes.',
      'page.blog.lead': 'Memos and research from claude-workspace — agent harnesses, context engineering, spec-driven development.',
      'page.post.contents': 'Contents',
      'footer.copyright': 'All rights reserved.',
    },
  },
  zh: {
    site: {
      title: '天池',
      description: '关于大模型、强化学习与智能体工作流的笔记。',
      author: '蔡天池',
    },
    navItems: [
      { href: '/zh/', label: '简历' },
      { href: '/zh/blog/', label: '笔记' },
    ],
    profile: {
      name: '蔡天池',
      role: '创始人 & CEO',
      headline: '大模型 · 强化学习 · 检索增强 · 智能体引擎',
      location: '北京 / 杭州',
    },
    resume: {
      summary: 'Saddlepoint AI 创始人 & CEO。曾于蚂蚁集团带领强化学习与 RAG 团队，并于 MiniMax 负责聊天模型对齐。十余篇同行评审论文，WSDM 2023 最佳论文亚军。',
      current: {
        role: '创始人 & CEO',
        company: 'Saddlepoint AI',
        period: '2025 — 至今',
        details: [
          'Saddlepoint：在一个方向走到 max 时，去寻找新的维度优化——以"正交换维"作为反内卷与创新的核心方式。',
          '正在做 nodie.ai——面向 AI 自动开发软件的 local-first 多智能体工作站；以及 nodie claw——桌面端多 agent harness。',
        ],
      },
      experience: [
        {
          role: '聊天模型对齐 — 星野 & Talkie',
          company: 'MiniMax',
          period: '2024 – 2025',
          details: ['负责星野与 Talkie 聊天模型与人类偏好/产品需求的对齐。'],
        },
        {
          role: '强化学习与 RAG 团队负责人',
          company: '蚂蚁集团',
          period: '2018 – 2024',
          details: [
            '主导 RL、RLHF、RAG 与大规模排序/决策系统。',
            '首个用于营销预算分配的工业级 RL 系统，每年为公司节省数十亿人民币。',
            '10+ 篇顶会论文，WSDM 2023 最佳论文亚军。',
          ],
        },
        {
          role: '软件工程实习生 · Ads',
          company: 'Google',
          period: '2017',
          details: ['Ads 团队全栈软件工程实习。'],
        },
      ],
      education: [
        {
          school: '香港大学',
          degree: '文学士 (哲学) 转 数学与计算机科学方向',
          period: '2013 – 2018',
          details: [
            'ACM-ICPC 亚洲区金牌得主。',
            '四年全额奖学金；LSE 微观经济学暑期学校。',
          ],
        },
      ],
      publications: [
        { title: 'MiniMax-M1: Scaling Test-Time Compute Efficiently with Lightning Attention', venue: 'MiniMax · 2025', tag: '技术报告' },
        { title: 'FoRAG: Factuality-optimized Retrieval Augmented Generation for Web-enhanced Long-form QA', venue: 'KDD 2024', tag: 'RAG' },
        { title: 'Face4RAG: Factual Consistency Evaluation for Retrieval Augmented Generation in Chinese', venue: 'KDD 2024', tag: 'RAG' },
        { title: 'Marketing Budget Allocation with Offline Constrained Deep RL', venue: 'WSDM 2023 · 最佳论文亚军', tag: 'RL' },
        { title: 'Model-free RL with Stochastic Reward Stabilization for Recommender Systems', venue: 'SIGIR 2023', tag: 'RL' },
        { title: 'Two-stage Constrained Actor-Critic for Short Video Recommendation', venue: 'WWW 2023', tag: 'RL' },
        { title: 'Reinforcing User Retention in a Billion-scale Short Video Recommender System', venue: 'WWW 2023 (Industry)', tag: 'RL' },
        { title: 'Generalizing Consistent Multi-Class Classification', venue: 'NeurIPS 2022', tag: '理论' },
        { title: 'A Cooperative-Competitive Multi-Agent Framework for Auto-Bidding in Online Advertising', venue: 'WSDM 2022', tag: 'RL' },
      ],
      skills: ['大模型 (LLMs)', 'RLHF', 'RAG', '强化学习', '智能体引擎', '基于规范开发'],
    },
    ui: {
      'page.resume.eyebrow': '简历',
      'page.resume.current': '当前',
      'page.resume.experience': '工作经历',
      'page.resume.education': '教育背景',
      'page.resume.skills': '关注方向',
      'page.resume.papers': '精选论文',
      'page.blog.eyebrow': '笔记',
      'page.blog.title': '现场笔记。',
      'page.blog.lead': '来自 claude-workspace 的备忘与调研——智能体 harness、上下文工程、基于规范开发。',
      'page.post.contents': '目录',
      'footer.copyright': '保留所有权利。',
    },
  },
};
