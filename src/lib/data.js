export const PLANS = [
  {
    name: "Starter",
    monthlyPrice: 29,
    yearlyPrice: 23,
    description: "Perfect for a single shop or solo operator.",
    cta: "Start for free",
    featured: false,
    features: [
      { label: "1 outlet / branch", included: true },
      { label: "Unlimited products", included: true },
      { label: "Daily sales reports", included: true },
      { label: "Barcode scanner support", included: true },
      { label: "2 staff accounts", included: true },
      { label: "SMS receipts (500/mo)", included: true },
      { label: "Multi-branch management", included: false },
      { label: "Advanced analytics", included: false },
      { label: "API access", included: false },
    ],
  },
  {
    name: "Pro",
    monthlyPrice: 79,
    yearlyPrice: 63,
    description: "Built for growing businesses and multi-location teams.",
    cta: "Start 30-day free trial",
    featured: true,
    features: [
      { label: "5 outlets / branches", included: true },
      { label: "Unlimited products", included: true },
      { label: "Advanced analytics", included: true },
      { label: "Staff commission tracking", included: true },
      { label: "15 staff accounts", included: true },
      { label: "SMS receipts (2,000/mo)", included: true },
      { label: "Loyalty points system", included: true },
      { label: "Excel / PDF export", included: true },
      { label: "API access", included: false },
    ],
  },
  {
    name: "Enterprise",
    monthlyPrice: null,
    yearlyPrice: null,
    description: "Custom pricing for large chains and corporate accounts.",
    cta: "Talk to sales",
    featured: false,
    features: [
      { label: "Unlimited outlets", included: true },
      { label: "Unlimited products & staff", included: true },
      { label: "Custom reports & dashboards", included: true },
      { label: "Dedicated support manager", included: true },
      { label: "Unlimited SMS", included: true },
      { label: "API access & webhooks", included: true },
      { label: "Custom integrations", included: true },
      { label: "99.9% SLA guarantee", included: true },
      { label: "On-site training", included: true },
    ],
  },
];

export const COMPARE_ROWS = [
  { feature: "Outlets", starter: "1", pro: "5", enterprise: "Unlimited" },
  {
    feature: "Staff accounts",
    starter: "2",
    pro: "15",
    enterprise: "Unlimited",
  },
  {
    feature: "Products",
    starter: "Unlimited",
    pro: "Unlimited",
    enterprise: "Unlimited",
  },
  { feature: "Barcode scanner", starter: true, pro: true, enterprise: true },
  { feature: "Advanced reports", starter: false, pro: true, enterprise: true },
  { feature: "Loyalty system", starter: false, pro: true, enterprise: true },
  { feature: "API access", starter: false, pro: false, enterprise: true },
  {
    feature: "Dedicated support",
    starter: false,
    pro: false,
    enterprise: true,
  },
  { feature: "Offline mode", starter: true, pro: true, enterprise: true },
];

export const FAQS = [
  {
    q: "Will I be charged automatically after the trial?",
    a: "No. The 30-day trial is completely free and requires no credit card to start. When the trial ends, you decide whether to continue — no automatic charges.",
  },
  {
    q: "Can I change my plan later?",
    a: "Upgrade or downgrade any time. Upgrades take effect immediately. Downgrades apply at the start of your next billing cycle.",
  },
  {
    q: "How is my data protected?",
    a: "All data is encrypted with SSL and backed up automatically every day. If you ever leave, you can export everything to Excel.",
  },
  {
    q: "Does it work without internet?",
    a: "Yes. Offline mode is available on every plan. Sales continue uninterrupted — everything syncs automatically when you reconnect.",
  },
  {
    q: "What kind of support is included?",
    a: "Starter and Pro include email and live chat support. Enterprise adds a dedicated account manager and 24/7 phone support.",
  },
];
