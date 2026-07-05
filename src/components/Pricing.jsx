const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    description: "Perfect for indie makers and side projects.",
    features: ["10k events per month", "1 website", "7 day data history", "Basic dashboard", "Email support"],
    cta: "Get started free",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "per month",
    description: "For startups that are serious about growth.",
    features: ["5M events per month", "10 websites", "1 year data history", "Advanced dashboard", "Conversion tracking", "Revenue analytics", "Priority support"],
    cta: "Start Pro trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "per month",
    description: "For scaling teams that need full control.",
    features: ["Unlimited events", "Unlimited websites", "Unlimited history", "Custom dashboards", "SSO and SAML", "Dedicated support", "SLA guarantee"],
    cta: "Contact sales",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#0a0f1e] py-24 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">

        <div className="max-w-xl mb-16">
          <p className="text-blue-400 text-sm uppercase tracking-widest mb-4">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Simple pricing, no surprises.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div key={i} className={`rounded-2xl p-8 flex flex-col gap-6 border transition ${plan.highlight ? "bg-blue-500 border-blue-400" : "bg-transparent border-white/10 hover:border-white/20"}`}>

              <div>
                <p className={`text-sm font-medium mb-1 ${plan.highlight ? "text-blue-100" : "text-white/40"}`}>
                  {plan.name}
                </p>
                <div className="flex items-end gap-1">
                  <span className={`text-4xl font-bold ${plan.highlight ? "text-white" : "text-white"}`}>{plan.price}</span>
                  <span className={`text-sm mb-1 ${plan.highlight ? "text-blue-100" : "text-white/40"}`}>/{plan.period}</span>
                </div>
                <p className={`text-sm mt-2 ${plan.highlight ? "text-blue-100" : "text-white/40"}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm">
                    <svg className={`w-4 h-4 flex-shrink-0 ${plan.highlight ? "text-white" : "text-blue-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={plan.highlight ? "text-white" : "text-white/60"}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="#" className={`text-center text-sm font-medium px-6 py-3 rounded-full transition ${plan.highlight ? "bg-white text-blue-500 hover:bg-blue-50" : "border border-white/10 text-white hover:border-blue-500/50 hover:text-blue-400"}`}>
                {plan.cta}
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}