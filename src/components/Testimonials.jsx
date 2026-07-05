const testimonials = [
  {
    name: "Ryan Foster",
    role: "Founder, Launchpad",
    body: "Metrix replaced three separate tools for us. One dashboard, everything we need. Our team actually looks at data now.",
    initials: "RF",
  },
  {
    name: "Elena Vasquez",
    role: "Head of Growth, Stackly",
    body: "The conversion tracking alone paid for itself in the first week. We found a massive drop-off we never knew existed.",
    initials: "EV",
  },
  {
    name: "James Thornton",
    role: "CTO, Buildfast",
    body: "Setup took 4 minutes. The dashboard is clean and fast. No bloat, no confusion. Exactly what we needed.",
    initials: "JT",
  },
  {
    name: "Amara Diallo",
    role: "Product Manager, Flowdesk",
    body: "Finally an analytics tool that does not require a data scientist to understand. Our whole team uses it daily.",
    initials: "AD",
  },
  {
    name: "Noah Christiansen",
    role: "Indie Maker",
    body: "I run 4 side projects and Metrix tracks all of them from one place. The free plan is genuinely generous.",
    initials: "NC",
  },
  {
    name: "Sophie Laurent",
    role: "CEO, Creatify",
    body: "We switched from a much more expensive tool and honestly Metrix is better in every way that matters to us.",
    initials: "SL",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#0a0f1e] py-24 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">

        <div className="max-w-xl mb-16">
          <p className="text-blue-400 text-sm uppercase tracking-widest mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Trusted by teams worldwide.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition flex flex-col gap-6">
              <p className="text-white/60 text-sm leading-relaxed">"{t.body}"</p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-9 h-9 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-300 text-xs font-medium flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{t.name}</p>
                  <p className="text-white/30 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}