import {
  SiReact, SiNodedotjs, SiExpress, SiMongodb, SiRedis,
  SiStripe, SiRazorpay, SiJsonwebtokens, SiNextdotjs, SiTypescript,
  SiSupabase, SiGooglegemini
} from 'react-icons/si';

// Colors match each brand's real mark. All icons verified to exist in the
// installed react-icons/si package before use — see build notes.
export const TECH = {
  react: { icon: SiReact, label: 'React', color: '#61DAFB' },
  node: { icon: SiNodedotjs, label: 'Node.js', color: '#3C873A' },
  express: { icon: SiExpress, label: 'Express', color: '#EBE6DE' },
  mongodb: { icon: SiMongodb, label: 'MongoDB', color: '#47A248' },
  redis: { icon: SiRedis, label: 'Redis', color: '#DC382D' },
  jwt: { icon: SiJsonwebtokens, label: 'JWT', color: '#EBE6DE' },
  stripe: { icon: SiStripe, label: 'Stripe', color: '#635BFF' },
  razorpay: { icon: SiRazorpay, label: 'Razorpay', color: '#0C2451' },
  nextjs: { icon: SiNextdotjs, label: 'Next.js', color: '#EBE6DE' },
  typescript: { icon: SiTypescript, label: 'TypeScript', color: '#3178C6' },
  supabase: { icon: SiSupabase, label: 'Supabase', color: '#3ECF8E' },
  gemini: { icon: SiGooglegemini, label: 'Gemini API', color: '#8E75B2' }
};

export const PROJECTS = {
  ecommerce: {
    id: 'ecommerce',
    index: '01',
    title: 'E-commerce platform',
    framing: 'A full-stack storefront with a separate authenticated admin system — not a static catalog with a checkout bolted on.',
    demoUrl: 'https://ecommerce-project-frontend-two.vercel.app/',
    sourceUrl: 'https://github.com/Shivam6050/ecommerce-project',
    status: 'live',
    stack: ['react', 'node', 'express', 'mongodb', 'redis', 'jwt', 'stripe', 'razorpay'],
    claims: [
      {
        label: 'Backend architecture',
        text: 'Product and order management run through a dedicated admin panel with full CRUD operations — add, edit, and remove listings, track order status — separated from the customer-facing app and gated behind its own login.',
        shotAlt: 'Admin panel showing product list with add, edit, and delete actions',
        shotSrc: '/assets/screenshots/admin.png',
        urlLabel: 'admin panel'
      },
      {
        label: 'Secure payment flow',
        text: "Checkout integrates two payment gateways, Stripe and Razorpay, alongside a cash-on-delivery option, with card payments routed through Stripe's hosted checkout in sandbox mode — payment data never touches the app's own servers.",
        shotAlt: 'Stripe hosted checkout screen',
        shotSrc: '/assets/screenshots/checkout.png',
        urlLabel: 'checkout.stripe.com'
      },
      {
        label: 'Query and data handling',
        text: 'Category and type filters query and sort the product set server-side rather than filtering a pre-loaded array client-side, so the catalog can scale past what fits in a single page load.',
        shotAlt: 'Product collection page with category and type filters applied',
        shotSrc: '/assets/screenshots/filters.png',
        urlLabel: '/collection'
      }
    ]
  },
  learningMap: {
    id: 'learning-map',
    index: '02',
    title: 'Learning map builder',
    framing: "A hybrid human-AI tool for building learning maps — structured graphs of concepts and dependencies, co-authored by a person and Google's Gemini model rather than generated wholesale or built entirely by hand. Built on Next.js and Supabase rather than the MERN stack used elsewhere — a deliberate second stack, not a substitute.",
    demoUrl: 'https://learning-map-provider-bice.vercel.app/',
    sourceUrl: 'https://github.com/Shivam6050/learning-map-provider',
    status: 'live',
    stack: ['nextjs', 'typescript', 'supabase', 'gemini'],
    claims: [
      {
        label: 'AI-personalized generation',
        text: "Gemini generates three distinct roadmap options per request — full-budget, moderate, and free — each with genuinely different curated resources and real cost totals, driven by the learner's stated budget, weekly hours, and a five-question skill calibration check. The output changes with the input; it isn't a fixed roadmap with a budget label attached.",
        shotAlt: 'Three AI-generated roadmap options at different budget levels, with curated resources and cost totals',
        shotSrc: '/assets/screenshots/lm-roadmap-select.png',
        urlLabel: 'onboarding/select'
      },
      {
        label: 'Structured, non-linear output',
        text: 'The generated path renders as a connected node graph rather than a flat list — each stage sequenced and linked to the ones before and after it, matching the underlying graph structure the tool is actually built on, not just a visual flourish over an array.',
        shotAlt: 'Interactive node-based path map showing sequenced learning stages',
        shotSrc: '/assets/screenshots/lm-path-map.png',
        urlLabel: 'paths/:id'
      },
      {
        label: 'Persistent progress tracking',
        text: 'Each stage carries real state — not started, resources with source and cost, a practice task with a submission field that saves back to Supabase. Progress persists across sessions rather than resetting on reload, and stage detail is generated per-topic, not templated.',
        shotAlt: 'Stage detail view showing curated resources, a practice task, and a submission field',
        shotSrc: '/assets/screenshots/lm-stage-detail.png',
        urlLabel: 'stage detail'
      }
    ]
  }
};

export const SKILL_MATRIX = [
  { group: 'Frontend', items: ['React', 'Next.js', 'TypeScript'] },
  { group: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'Supabase'] },
  { group: 'Infra & auth', items: ['Redis', 'JWT', 'Gemini API'] }
];
