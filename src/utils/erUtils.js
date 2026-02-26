// ER Formulas
export const FORMULAS = {
  standard: {
    id: 'standard',
    name: 'Standard ER',
    description: 'ER = (Likes + Comments) / Followers × 100',
    calculate: ({ likes, comments, followers }) =>
      followers > 0 ? ((likes + comments) / followers) * 100 : 0,
  },
  reach: {
    id: 'reach',
    name: 'ER by Reach',
    description: 'ER = (Likes + Comments) / Reach × 100',
    calculate: ({ likes, comments, reach }) =>
      reach > 0 ? ((likes + comments) / reach) * 100 : 0,
  },
  full: {
    id: 'full',
    name: 'Full ER',
    description: 'ER = (Likes + Comments + Shares + Saves) / Followers × 100',
    calculate: ({ likes, comments, shares, saves, followers }) =>
      followers > 0 ? ((likes + comments + (shares || 0) + (saves || 0)) / followers) * 100 : 0,
  },
};

// Benchmark data by platform + industry
// ER% ranges: [poor, belowAvg, avg, good, excellent]
export const BENCHMARKS = {
  instagram: {
    name: 'Instagram',
    industries: {
      retail: { name: 'Retail / E-commerce', benchmarks: [0.5, 1.0, 1.5, 3.0, 5.0] },
      food: { name: 'Food & Restaurant', benchmarks: [0.8, 1.5, 2.5, 4.0, 6.0] },
      fitness: { name: 'Health & Fitness', benchmarks: [1.0, 2.0, 3.5, 5.0, 8.0] },
      realestate: { name: 'Real Estate', benchmarks: [0.3, 0.7, 1.2, 2.5, 4.0] },
      professional: { name: 'Professional Services', benchmarks: [0.3, 0.6, 1.0, 2.0, 3.5] },
      nonprofit: { name: 'Non-Profit', benchmarks: [0.8, 1.5, 2.5, 4.0, 6.0] },
      beauty: { name: 'Beauty & Fashion', benchmarks: [0.8, 1.5, 2.5, 4.5, 7.0] },
      tech: { name: 'Tech / SaaS', benchmarks: [0.3, 0.6, 1.0, 2.0, 3.0] },
    },
  },
  tiktok: {
    name: 'TikTok',
    industries: {
      retail: { name: 'Retail / E-commerce', benchmarks: [2.0, 4.0, 6.0, 10.0, 15.0] },
      food: { name: 'Food & Restaurant', benchmarks: [3.0, 5.0, 8.0, 12.0, 18.0] },
      fitness: { name: 'Health & Fitness', benchmarks: [3.0, 6.0, 10.0, 15.0, 20.0] },
      realestate: { name: 'Real Estate', benchmarks: [1.5, 3.0, 5.0, 8.0, 12.0] },
      professional: { name: 'Professional Services', benchmarks: [1.5, 3.0, 5.0, 8.0, 12.0] },
      nonprofit: { name: 'Non-Profit', benchmarks: [2.0, 4.0, 6.0, 10.0, 15.0] },
      beauty: { name: 'Beauty & Fashion', benchmarks: [3.0, 6.0, 9.0, 14.0, 20.0] },
      tech: { name: 'Tech / SaaS', benchmarks: [1.5, 3.0, 5.0, 8.0, 12.0] },
    },
  },
  linkedin: {
    name: 'LinkedIn',
    industries: {
      retail: { name: 'Retail / E-commerce', benchmarks: [0.3, 0.6, 1.0, 2.0, 3.5] },
      food: { name: 'Food & Restaurant', benchmarks: [0.4, 0.8, 1.5, 2.5, 4.0] },
      fitness: { name: 'Health & Fitness', benchmarks: [0.5, 1.0, 1.8, 3.0, 5.0] },
      realestate: { name: 'Real Estate', benchmarks: [0.3, 0.7, 1.2, 2.0, 3.5] },
      professional: { name: 'Professional Services', benchmarks: [0.4, 0.8, 1.5, 2.5, 4.0] },
      nonprofit: { name: 'Non-Profit', benchmarks: [0.5, 1.0, 2.0, 3.5, 5.0] },
      beauty: { name: 'Beauty & Fashion', benchmarks: [0.3, 0.6, 1.0, 2.0, 3.0] },
      tech: { name: 'Tech / SaaS', benchmarks: [0.4, 0.8, 1.5, 2.5, 4.0] },
    },
  },
  facebook: {
    name: 'Facebook',
    industries: {
      retail: { name: 'Retail / E-commerce', benchmarks: [0.1, 0.2, 0.4, 0.8, 1.5] },
      food: { name: 'Food & Restaurant', benchmarks: [0.2, 0.4, 0.7, 1.2, 2.0] },
      fitness: { name: 'Health & Fitness', benchmarks: [0.2, 0.5, 0.9, 1.5, 2.5] },
      realestate: { name: 'Real Estate', benchmarks: [0.1, 0.2, 0.4, 0.8, 1.5] },
      professional: { name: 'Professional Services', benchmarks: [0.1, 0.2, 0.4, 0.8, 1.2] },
      nonprofit: { name: 'Non-Profit', benchmarks: [0.2, 0.4, 0.8, 1.5, 2.5] },
      beauty: { name: 'Beauty & Fashion', benchmarks: [0.2, 0.4, 0.8, 1.5, 2.5] },
      tech: { name: 'Tech / SaaS', benchmarks: [0.1, 0.2, 0.3, 0.6, 1.0] },
    },
  },
  twitter: {
    name: 'X / Twitter',
    industries: {
      retail: { name: 'Retail / E-commerce', benchmarks: [0.02, 0.05, 0.09, 0.2, 0.5] },
      food: { name: 'Food & Restaurant', benchmarks: [0.03, 0.06, 0.12, 0.25, 0.6] },
      fitness: { name: 'Health & Fitness', benchmarks: [0.04, 0.08, 0.15, 0.3, 0.7] },
      realestate: { name: 'Real Estate', benchmarks: [0.02, 0.04, 0.08, 0.15, 0.4] },
      professional: { name: 'Professional Services', benchmarks: [0.02, 0.05, 0.09, 0.2, 0.5] },
      nonprofit: { name: 'Non-Profit', benchmarks: [0.03, 0.07, 0.12, 0.25, 0.6] },
      beauty: { name: 'Beauty & Fashion', benchmarks: [0.03, 0.07, 0.12, 0.25, 0.6] },
      tech: { name: 'Tech / SaaS', benchmarks: [0.02, 0.05, 0.10, 0.2, 0.5] },
    },
  },
};

export const BANDS = ['Poor', 'Below Average', 'Average', 'Good', 'Excellent'];
export const BAND_COLORS = ['text-coral', 'text-tangerine', 'text-cloudy', 'text-turtle', 'text-turtle'];
export const BAND_BG = ['bg-coral/10 border-coral/30', 'bg-tangerine/10 border-tangerine/30', 'bg-metal/20 border-metal/30', 'bg-turtle/10 border-turtle/30', 'bg-turtle/10 border-turtle/30'];

export function getBand(er, benchmarks) {
  const [poor, belowAvg, avg, good] = benchmarks;
  if (er < poor) return 0;
  if (er < belowAvg) return 1;
  if (er < avg) return 2;
  if (er < good) return 3;
  return 4;
}

export const ACTIONS = {
  0: [ // Poor
    'Post at your audience\'s peak activity times — check when your followers are most online in your platform analytics.',
    'Switch content formats: if you\'ve been posting static images, try video or carousel posts for 2 weeks and compare.',
    'End every post with a direct question to your audience — questions drive comments, which boost algorithmic reach.',
  ],
  1: [ // Below Average
    'Respond to every comment within the first hour of posting — early engagement signals boost algorithmic distribution.',
    'Add a clear call-to-action to every post: "Save this for later," "Tag someone who needs this," or "Drop a ✅ if you agree."',
    'Test shorter captions — most high-ER posts lead with a hook in the first line that stops the scroll.',
  ],
  2: [ // Average
    'Identify your top 3 performing posts and reverse-engineer what made them work: format, topic, hook, or timing.',
    'Experiment with Stories and Reels/Shorts — interactive formats consistently outperform static posts for engagement.',
    'Collaborate with a complementary brand or creator for a joint post — shared audiences produce engagement spikes.',
  ],
  3: [ // Good
    'Document what\'s working: build a content template from your highest-ER posts so you can replicate the formula.',
    'Test posting frequency — if you\'re posting daily, try every other day with higher-quality content and track ER impact.',
    'Use your best-performing content as the basis for paid promotion — high organic ER predicts strong paid performance.',
  ],
  4: [ // Excellent
    'Analyze the specific content pillars driving your top ER — double down on those topics and formats.',
    'Consider a content repurposing workflow: take your highest-ER posts and adapt them for other platforms.',
    'Your audience is highly engaged — this is the right time to survey them or ask for UGC (user-generated content).',
  ],
};
