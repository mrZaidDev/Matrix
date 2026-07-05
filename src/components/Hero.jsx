const stats = [
  { value: "2.4B+", label: "Events tracked" },
  { value: "12k+", label: "Companies" },
  { value: "99.9%", label: "Uptime" },
];

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#0a0f1e] flex items-center justify-center px-6 pt-24 pb-16">
      <div className="max-w-4xl mx-auto text-center">

        <div className="inline-flex items-center gap-2 border border-blue-500/30 rounded-full px-4 py-1.5 mb-8 bg-blue-500/10">
          <span className="w-2 h-2 rounded-full bg-blue-400 inline-block"></span>
          <span className="text-blue-300 text-sm">Real-time analytics for modern teams</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
          Know your numbers.{" "}
          <span className="text-blue-400">Grow your</span>{" "}
          business.
        </h1>

        <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Metrix gives you powerful, real-time analytics so you always know
          what is working, what is not, and where to focus next.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="#" className="w-full sm:w-auto bg-blue-500 text-white px-8 py-3.5 rounded-full font-medium text-sm hover:bg-blue-400 transition">
            Start for free
          </a>
          <a href="#howitworks" className="w-full sm:w-auto border border-white/10 text-white/60 px-8 py-3.5 rounded-full text-sm hover:border-white/30 hover:text-white transition">
            See how it works →
          </a>
        </div>

        <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto mb-16">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-white text-2xl font-bold">{stat.value}</p>
              <p className="text-white/30 text-xs mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="border border-white/10 rounded-2xl bg-white/5 p-6 text-left">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-white/20"></div>
              <div className="w-3 h-3 rounded-full bg-white/20"></div>
              <div className="w-3 h-3 rounded-full bg-white/20"></div>
            </div>
            <div className="h-3 bg-white/10 rounded-full w-24"></div>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {["Total Users", "Revenue", "Conversion"].map((label, i) => (
              <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/10">
                <p className="text-white/30 text-xs mb-2">{label}</p>
                <div className="h-4 bg-blue-500/30 rounded-full w-3/4"></div>
              </div>
            ))}
          </div>
          <div className="flex items-end gap-1 h-16">
            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-blue-500/30 rounded-t-sm"
                style={{ height: `${h}%` }}
              ></div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}