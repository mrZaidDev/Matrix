const steps = [
  {
    number: "01",
    title: "Connect your data",
    description: "Install our lightweight script or connect via API. Works with any website, app, or platform in minutes.",
  },
  {
    number: "02",
    title: "Track everything",
    description: "Metrix automatically tracks users, events, revenue, and conversions in real time with zero configuration.",
  },
  {
    number: "03",
    title: "Make better decisions",
    description: "Use your dashboard to spot trends, understand users, and make data-driven decisions that actually grow your business.",
  },
];

export default function HowItWorks() {
  return (
    <section id="howitworks" className="bg-[#0a0f1e] py-24 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">

        <div className="max-w-xl mb-16">
          <p className="text-blue-400 text-sm uppercase tracking-widest mb-4">How it works</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Up and running in minutes.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition">
              <p className="text-blue-500/40 text-4xl font-bold mb-6">{step.number}</p>
              <h3 className="text-white text-lg font-semibold mb-3">{step.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}