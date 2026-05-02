export const siteConfig = {
  domain: 'tianchi.dev',
  email: 'hello@tianchi.dev',
  social: {
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/',
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
      { href: '/blog/', label: 'Blog' },
    ],
    profile: {
      name: 'Tianchi Cai',
      role: 'Founder & CEO',
      headline: 'LLMs · Reinforcement Learning · RAG · Agent Harnesses',
      location: 'Beijing / Hangzhou',
    },
    resume: {
      summary: 'Founder and CEO. Previously led the Reinforcement Learning & RAG team at Ant Group and worked on chat models at Minimax. Hands-on across LLM training, RLHF, retrieval, and large-scale optimization — with 10+ peer-reviewed papers and a Best Paper runner-up.',
      current: {
        role: 'Founder & CEO',
        company: 'Saddlepoint AI',
        period: '2025 – Present',
        details: [
          'Saddlepoint implies seeking new dimensions: when hitting a local max, find a new min to optimize. This orthogonal dimension-shifting is our core way to innovate and avoid involution.',
          'Built nodie.ai for agent workflows, and our crayfish product "nodie claw".',
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
        { title: 'FoRAG: Factuality-optimized Retrieval Augmented Generation for Web-enhanced Long-form Question Answering', venue: 'KDD 2024' },
        { title: 'Marketing budget allocation with offline constrained deep reinforcement learning', venue: 'WSDM 2023 — Best Paper Runner-up' },
        { title: 'Face4RAG: Factual Consistency Evaluation for Retrieval Augmented Generation in Chinese', venue: 'KDD 2024' },
        { title: 'MiniMax-M1: Scaling Test-Time Compute Efficiently with Lightning Attention', venue: 'Minimax (technical report)' },
        { title: 'Model-free Reinforcement Learning with Stochastic Reward Stabilization for Recommender Systems', venue: 'SIGIR 2023' },
        { title: 'Generalizing Consistent Multi-Class Classification', venue: 'NeurIPS 2022' },
      ],
      skills: ['LLMs', 'RLHF', 'RAG', 'Reinforcement learning', 'Marketing optimization', 'Agent workflows', 'Spec-driven development'],
    },
    ui: {
      'page.resume.eyebrow': 'Resume',
      'page.resume.current': 'Current',
      'page.resume.experience': 'Experience',
      'page.resume.education': 'Education',
      'page.resume.skills': 'Skills',
      'page.resume.papers': 'Selected Papers',
      'page.blog.eyebrow': 'Notebook',
      'page.blog.title': 'Signals.',
      'page.blog.lead': 'Field notes on agent harnesses, context engineering, and spec-driven development.',
      'page.post.contents': 'Contents',
      'footer.copyright': 'All rights reserved.',
    }
  },
  zh: {
    site: {
      title: '天池',
      description: '关于大模型、强化学习与智能体工作流的笔记。',
      author: '蔡天池',
    },
    navItems: [
      { href: '/zh/', label: '简历' },
      { href: '/zh/blog/', label: '博客' },
    ],
    profile: {
      name: '蔡天池',
      role: '创始人 & CEO',
      headline: '大模型 · 强化学习 · 检索增强 · 智能体引擎',
      location: '北京 / 杭州',
    },
    resume: {
      summary: '创始人与 CEO。曾于蚂蚁集团带领强化学习与 RAG 团队，并于 Minimax 负责聊天模型对齐。在大模型训练、RLHF、检索增强以及大规模优化等领域拥有丰富的实战经验，发表十余篇同行评审论文，曾获最佳论文亚军。',
      current: {
        role: '创始人 & CEO',
        company: 'Saddlepoint AI',
        period: '2025 – 至今',
        details: [
          'Saddlepoint 曲意在一个方向走到 max 时，寻找新的 min 维度。不断寻找新的维度是创新和反内卷的核心方式。',
          '打造了智能体工作流产品 nodie.ai，以及小龙虾产品 nodie claw。',
        ],
      },
      experience: [
        {
          role: '聊天模型对齐 — 星野 & Talkie',
          company: 'Minimax',
          period: '2024 – 2025',
          details: [
            '负责星野和 Talkie 聊天模型。',
            '将模型与人类偏好及产品需求进行对齐。',
          ],
        },
        {
          role: '强化学习与 RAG 团队负责人',
          company: '蚂蚁集团',
          period: '2018 – 2024',
          details: [
            '主导强化学习、RLHF、RAG 及大规模排序/决策系统的工作。',
            '发表 10+ 篇顶会论文，在 RL、RLHF 和 RAG 领域多次取得 SOTA 结果。',
            '打造了首个用于营销预算分配的大规模 RL 系统。获 WSDM 2023 最佳论文亚军。',
            '每年为公司节省数十亿人民币的营销预算。',
          ],
        },
        {
          role: '软件工程实习生, Ads',
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
            '四年全额奖学金获得者。',
            '伦敦政经学院 (LSE) 微观经济学暑期学校。',
          ],
        },
      ],
      publications: [
        { title: 'FoRAG: Factuality-optimized Retrieval Augmented Generation for Web-enhanced Long-form Question Answering', venue: 'KDD 2024' },
        { title: 'Marketing budget allocation with offline constrained deep reinforcement learning', venue: 'WSDM 2023 — Best Paper Runner-up' },
        { title: 'Face4RAG: Factual Consistency Evaluation for Retrieval Augmented Generation in Chinese', venue: 'KDD 2024' },
        { title: 'MiniMax-M1: Scaling Test-Time Compute Efficiently with Lightning Attention', venue: 'Minimax (technical report)' },
        { title: 'Model-free Reinforcement Learning with Stochastic Reward Stabilization for Recommender Systems', venue: 'SIGIR 2023' },
        { title: 'Generalizing Consistent Multi-Class Classification', venue: 'NeurIPS 2022' },
      ],
      skills: ['大模型 (LLMs)', 'RLHF', 'RAG', '强化学习', '营销优化', '智能体工作流', '基于规范开发'],
    },
    ui: {
      'page.resume.eyebrow': '简历',
      'page.resume.current': '当前',
      'page.resume.experience': '工作经历',
      'page.resume.education': '教育背景',
      'page.resume.skills': '技能与专长',
      'page.resume.papers': '精选论文',
      'page.blog.eyebrow': '笔记',
      'page.blog.title': '信号',
      'page.blog.lead': '关于智能体引擎、上下文工程与基于规范开发的实地笔记。',
      'page.post.contents': '目录',
      'footer.copyright': '保留所有权利。',
    }
  }
};
