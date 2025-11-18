import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Overlays for contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/20 to-slate-950/90" />
      <div className="pointer-events-none absolute inset-0" style={{background: 'radial-gradient(60% 50% at 50% 30%, rgba(239,68,68,0.20) 0%, rgba(15,23,42,0) 60%)'}} />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-24 flex flex-col items-start">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-slate-200 backdrop-blur">
          <span className="inline-block h-2 w-2 rounded-full bg-red-500 animate-pulse" />
          Premium Auto Detailing
        </div>

        <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05]">
          Shine Studio Car Wash
        </h1>
        <p className="mt-4 max-w-2xl text-slate-300 text-lg">
          Experience a showroom finish with ultra-care paint-safe washes, interior refresh, and ceramic protection. Fast, flawless, and eco-friendly.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a href="#booking" className="inline-flex items-center justify-center rounded-xl bg-red-500 px-6 py-3 font-semibold text-white shadow-lg shadow-red-500/30 ring-1 ring-white/10 transition hover:bg-red-600">
            Book Now
          </a>
          <a href="#services" className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 font-semibold text-white ring-1 ring-white/10 backdrop-blur transition hover:bg-white/20">
            View Services
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;