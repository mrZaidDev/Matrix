export default function CTA() {
  return (
    <section className="bg-blue-500 py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Start making data-driven decisions today.
        </h2>

        <p className="text-blue-100 text-lg mb-10 leading-relaxed">
          Join 12,000+ teams who use Metrix to understand their growth and
          make smarter decisions every day.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#" className="w-full sm:w-auto bg-white text-blue-500 px-8 py-3.5 rounded-full font-medium text-sm hover:bg-blue-50 transition">
            Get started for free
          </a>
          <a href="#pricing" className="w-full sm:w-auto border border-white/30 text-white px-8 py-3.5 rounded-full text-sm hover:border-white hover:text-white transition">
            See pricing →
          </a>
        </div>

        <p className="text-blue-200 text-xs mt-8">
          No credit card required. Free plan available forever.
        </p>

      </div>
    </section>
  );
}