function Services() {
  const tiers = [
    {
      name: 'Express Wash',
      price: '$15',
      features: ['Touchless pre-soak', 'pH-balanced foam', 'Spot-free rinse', 'Quick air dry'],
      highlight: false,
    },
    {
      name: 'Deluxe Detail',
      price: '$45',
      features: ['Hand wash & dry', 'Wheel & tire shine', 'Interior vacuum', 'Windows & mirrors'],
      highlight: true,
    },
    {
      name: 'Ceramic Pro',
      price: '$199',
      features: ['2-stage paint decon', 'Machine-applied sealant', '6-month hydrophobic layer', 'Interior protectant'],
      highlight: false,
    },
  ];

  return (
    <section id="services" className="relative w-full bg-slate-950 text-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Packages</h2>
          <p className="mt-2 text-slate-300">Transparent pricing, premium care</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-2xl border ${t.highlight ? 'border-red-500/40 bg-red-500/5' : 'border-white/10 bg-white/5'} p-6 backdrop-blur shadow-xl` }>
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold">{t.name}</h3>
                <span className="text-2xl font-bold text-red-400">{t.price}</span>
              </div>
              <ul className="mt-4 space-y-2 text-slate-300">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-red-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#booking" className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-white/10 px-4 py-2 font-medium ring-1 ring-white/10 transition hover:bg-white/20">Choose</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;