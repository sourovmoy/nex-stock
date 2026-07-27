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

import {
  CheckCircle2,
  ShoppingCart,
  Package,
  CreditCard,
  BarChart3,
  Users,
  Heart,
  Receipt,
  Tag,
  Cloud,
  Smartphone,
  Printer,
  ScanLine,
  Building2,
  FileSpreadsheet,
  FileText,
  MessageSquare,
  MessageCircle,
} from "lucide-react";

export const STATS = [
  { value: "5,000+", label: "Active businesses" },
  { value: "3 sec", label: "Average transaction time" },
  { value: "99.9%", label: "Service uptime" },
];

export const FEATURES = [
  {
    icon: ShoppingCart,
    title: "Fast Checkout",
    description:
      "Barcode scan or product search — complete a sale in seconds. Supports both touchscreen and keyboard.",
  },
  {
    icon: Package,
    title: "Inventory Management",
    description:
      "Real-time stock updates. Get low-stock alerts, track supplier orders, and manage multiple warehouses.",
  },
  {
    icon: CreditCard,
    title: "Multiple Payment Methods",
    description:
      "Cash, card, and mobile payments — accept every payment type in one unified system.",
  },
  {
    icon: BarChart3,
    title: "Sales Reports & Analytics",
    description:
      "Daily, weekly, and monthly reports. See top-selling products and peak sales hours at a glance.",
  },
  {
    icon: Users,
    title: "Staff Management",
    description:
      "Individual logins per employee, commission tracking, and shift management. See who sold what.",
  },
  {
    icon: Heart,
    title: "Customer CRM",
    description:
      "Purchase history, loyalty points, and birthday offers — keep your regulars coming back.",
  },
  {
    icon: Receipt,
    title: "Digital Receipts",
    description:
      "Send receipts via SMS or email. Print support included. Add your logo and custom branding.",
  },
  {
    icon: Tag,
    title: "Discounts & Promotions",
    description:
      "Fixed or percentage discounts, coupon codes, and bundle deals — drive sales strategically.",
  },
  {
    icon: Cloud,
    title: "Cloud Backup",
    description:
      "All data automatically secured in the cloud. Works offline too — syncs when reconnected.",
  },
];

export const MOCK_ITEMS = [
  { name: "Wheat Flour 1 kg", price: "$2.40" },
  { name: "Soybean Oil 1 L", price: "$5.80" },
  { name: "Sugar 500 g", price: "$1.65" },
];

export const CHECKOUT_METHODS = ["Cash", "Card", "Mobile Pay"];

export const SALE_CHECKS = [
  "Barcode scanner or manual search",
  "Keep multiple customer carts open at once",
  "Split payment support",
  "Easy returns and exchanges",
];

export const REPORT_BARS = [
  { label: "Oil", width: "92%", value: "$46,000" },
  { label: "Rice", width: "75%", value: "$37,500" },
  { label: "Sugar", width: "54%", value: "$27,000" },
  { label: "Lentils", width: "38%", value: "$19,000" },
  { label: "Salt", width: "22%", value: "$11,000" },
];

export const REPORT_CHECKS = [
  "Daily / weekly / monthly reports",
  "Profit & loss breakdown",
  "Top-selling products list",
  "Export to Excel & PDF",
];

export const INTEGRATIONS = [
  { icon: Smartphone, label: "Mobile Payments" },
  { icon: Printer, label: "Thermal Printer" },
  { icon: ScanLine, label: "Barcode Scanner" },
  { icon: Building2, label: "Bank Cards" },
  { icon: FileSpreadsheet, label: "Excel Export" },
  { icon: FileText, label: "PDF Reports" },
  { icon: MessageSquare, label: "SMS Gateway" },
  { icon: MessageCircle, label: "WhatsApp Alerts" },
];

export { CheckCircle2 };

import {
  ShoppingBag,
  UtensilsCrossed,
  Pill,
  Scissors,
  Shirt,
  Dumbbell,
  BookOpen,
  Truck,
  XCircle,
  TrendingUp,
  Clock,
  ShieldCheck,
  BarChart,
  Zap,
} from "lucide-react";

// ─── Industries ───────────────────────────────────────────
export const INDUSTRIES = [
  {
    icon: ShoppingBag,
    name: "Retail & Grocery",
    tagline: "Move faster at the counter",
    description:
      "Handle high-volume sales with barcode scanning, real-time stock tracking, and multi-cashier support — all without slowdowns.",
    highlights: [
      "Barcode & QR scan",
      "Low-stock alerts",
      "Multi-cashier support",
      "Daily P&L report",
    ],
    color: "blue",
  },
  {
    icon: UtensilsCrossed,
    name: "Restaurants & Cafés",
    tagline: "From order to table, seamlessly",
    description:
      "Table management, kitchen order tickets, split bills, and tips — everything a food-service business needs in one screen.",
    highlights: [
      "Table & order management",
      "Kitchen display tickets",
      "Split bill & tip",
      "Menu modifier support",
    ],
    color: "orange",
  },
  {
    icon: Pill,
    name: "Pharmacy",
    tagline: "Accuracy you can count on",
    description:
      "Manage drug inventory with expiry tracking, prescription records, and supplier reorder automation to stay compliant.",
    highlights: [
      "Expiry date tracking",
      "Prescription records",
      "Supplier reorder alerts",
      "Batch management",
    ],
    color: "green",
  },
  {
    icon: Scissors,
    name: "Salons & Spas",
    tagline: "Book, serve, and retain clients",
    description:
      "Appointment scheduling, staff commissions, service packages, and loyalty rewards — built for service-first businesses.",
    highlights: [
      "Appointment booking",
      "Staff commissions",
      "Service packages",
      "Loyalty rewards",
    ],
    color: "purple",
  },
  {
    icon: Shirt,
    name: "Clothing & Apparel",
    tagline: "Variants, sizes, and colours — sorted",
    description:
      "Manage product variants (size, colour, style), run seasonal promotions, and sync inventory across multiple outlets.",
    highlights: [
      "Size & colour variants",
      "Seasonal promotions",
      "Multi-outlet sync",
      "Exchange & return flow",
    ],
    color: "pink",
  },
  {
    icon: Dumbbell,
    name: "Gyms & Fitness",
    tagline: "Memberships on autopilot",
    description:
      "Sell memberships, track attendance, manage personal trainers, and auto-renew subscriptions without manual follow-up.",
    highlights: [
      "Membership plans",
      "Attendance tracking",
      "Trainer management",
      "Auto-renewal billing",
    ],
    color: "red",
  },
  {
    icon: BookOpen,
    name: "Bookshops & Stationery",
    tagline: "Every ISBN, always in stock",
    description:
      "Search by ISBN or title, manage publisher returns, and handle wholesale vs retail pricing from a single dashboard.",
    highlights: [
      "ISBN search",
      "Publisher returns",
      "Wholesale pricing",
      "Bundle offers",
    ],
    color: "yellow",
  },
  {
    icon: Truck,
    name: "Wholesale & Distribution",
    tagline: "Built for bulk, built for scale",
    description:
      "Issue quotations, manage bulk discounts, track deliveries, and run multi-warehouse operations from one account.",
    highlights: [
      "Quotation management",
      "Bulk discounts",
      "Delivery tracking",
      "Multi-warehouse",
    ],
    color: "slate",
  },
];

// ─── Problem → Solution pairs ─────────────────────────────
export const PROBLEMS = [
  {
    problem: "Manual stock counting wastes hours every week",
    solution: "Real-time inventory updates on every sale — stock counts itself",
  },
  {
    problem: "End-of-day cash reconciliation takes too long",
    solution: "Automated daily reports close the books in under 2 minutes",
  },
  {
    problem: "No visibility into which products actually make money",
    solution: "Profit-per-product analytics surfaced automatically",
  },
  {
    problem: "Staff mistakes on discounts and pricing",
    solution:
      "Price rules enforced at checkout — no overrides without approval",
  },
  {
    problem: "Customer data scattered across notebooks and spreadsheets",
    solution: "Unified CRM: purchase history, preferences, loyalty points",
  },
  {
    problem: "Running multiple branches feels like running separate businesses",
    solution: "One dashboard for all locations — compare, transfer, and report",
  },
];

// ─── Key benefits ─────────────────────────────────────────
export const BENEFITS = [
  {
    icon: Zap,
    title: "Up and running in a day",
    description:
      "Import your existing product list, set up staff accounts, and start selling — our onboarding team walks you through it in under 60 minutes.",
  },
  {
    icon: TrendingUp,
    title: "Sales go up, errors go down",
    description:
      "Businesses switching to our POS report a 23% reduction in stock discrepancies and a 17% increase in checkout speed within the first month.",
  },
  {
    icon: Clock,
    title: "Save 8+ hours every week",
    description:
      "Automated reports, stock alerts, and receipt sending eliminate the manual admin that eats into your evenings and weekends.",
  },
  {
    icon: ShieldCheck,
    title: "Your data, always protected",
    description:
      "SSL encryption, daily cloud backups, and role-based access control keep your business data safe and your staff accountable.",
  },
  {
    icon: BarChart,
    title: "Decisions backed by data",
    description:
      "Know your best-selling products, busiest hours, and most valuable customers — without opening a spreadsheet.",
  },
  {
    icon: Users,
    title: "Built for your whole team",
    description:
      "Cashier, manager, and owner roles ship out of the box. Every employee sees exactly what they need — nothing more.",
  },
];

// ─── Testimonials ─────────────────────────────────────────
export const TESTIMONIALS = [
  {
    quote:
      "We used to spend two hours every night reconciling cash. Now it takes ten minutes and I actually trust the numbers.",
    name: "Arif Hossain",
    role: "Owner, Fresh Mart Grocery — Dhaka",
    initials: "AH",
    color: "blue",
  },
  {
    quote:
      "Managing three restaurant branches from one screen changed everything. I can see today's sales across all locations before my morning coffee.",
    name: "Priya Menon",
    role: "Co-founder, Spice Route Restaurants — Chittagong",
    initials: "PM",
    color: "orange",
  },
  {
    quote:
      "Stock expiry alerts alone saved us from a major compliance issue. The pharmacy module understands how we actually work.",
    name: "Dr. Tanvir Ahmed",
    role: "Managing Director, MedPlus Pharmacy — Sylhet",
    initials: "TA",
    color: "green",
  },
];

// ─── Re-exports ───────────────────────────────────────────
export { XCircle };

// Color map for Tailwind (must be full strings, not dynamic)
export const COLOR_MAP = {
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-100",
    icon: "bg-blue-100",
  },
  orange: {
    bg: "bg-orange-50",
    text: "text-orange-600",
    border: "border-orange-100",
    icon: "bg-orange-100",
  },
  green: {
    bg: "bg-green-50",
    text: "text-green-600",
    border: "border-green-100",
    icon: "bg-green-100",
  },
  purple: {
    bg: "bg-purple-50",
    text: "text-purple-600",
    border: "border-purple-100",
    icon: "bg-purple-100",
  },
  pink: {
    bg: "bg-pink-50",
    text: "text-pink-600",
    border: "border-pink-100",
    icon: "bg-pink-100",
  },
  red: {
    bg: "bg-red-50",
    text: "text-red-600",
    border: "border-red-100",
    icon: "bg-red-100",
  },
  yellow: {
    bg: "bg-yellow-50",
    text: "text-yellow-600",
    border: "border-yellow-100",
    icon: "bg-yellow-100",
  },
  slate: {
    bg: "bg-slate-50",
    text: "text-slate-600",
    border: "border-slate-100",
    icon: "bg-slate-100",
  },
};
