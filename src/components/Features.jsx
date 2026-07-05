const features = [
  {
    icon: "📊",
    title: "Real-time dashboard",
    description: "Watch your data update live. No refreshing, no delays — just instant insights as they happen.",
  },
  {
    icon: "🎯",
    title: "Conversion tracking",
    description: "Track every funnel step and see exactly where users drop off so you can fix it fast.",
  },
  {
    icon: "👥",
    title: "User analytics",
    description: "Understand who your users are, where they come from, and how they behave on your product.",
  },
  {
    icon: "💰",
    title: "Revenue analytics",
    description: "Connect Stripe and track MRR, churn, LTV, and every revenue metric that matters.",
  },
  {
    icon: "🔔",
    title: "Smart alerts",
    description: "Get notified when traffic spikes, revenue drops, or any metric crosses a threshold you set.",
  },
  {
    icon: "🔗",
    title: "50+ integrations",
    description: "Connect with Stripe, Shopify, Slack, Notion, and 46 more tools with one click.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-[#0a0f1e] py-24 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">

        <div className="max-w-xl mb-16">
          <p className="text-blue-400 text-sm uppercase tracking-widest mb-4">Features</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Everything you need to understand your growth.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition">
              <div className="text-3xl mb-5">{feature.icon}</div>
              <h3 className="text-white font-semibold text-base mb-2">{feature.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}