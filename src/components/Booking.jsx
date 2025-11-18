import { useState } from 'react';

function Booking() {
  const [form, setForm] = useState({ name: '', phone: '', package: 'Deluxe Detail', date: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // For now we just simulate success; backend can store bookings later
    setSubmitted(true);
  };

  return (
    <section id="booking" className="relative w-full bg-slate-950 text-white py-20">
      <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Book your shine</h2>
          <p className="mt-2 text-slate-300">Pick a package and time that works for you. We'll confirm instantly.</p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Full name" required className="w-full rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-red-500" />
            <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone number" required className="w-full rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-red-500" />
            <select name="package" value={form.package} onChange={handleChange} className="w-full rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-red-500">
              <option>Express Wash</option>
              <option>Deluxe Detail</option>
              <option>Ceramic Pro</option>
            </select>
            <input type="date" name="date" value={form.date} onChange={handleChange} required className="w-full rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-red-500" />
            <button type="submit" className="w-full rounded-xl bg-red-500 px-4 py-3 font-semibold text-white shadow-lg shadow-red-500/30 ring-1 ring-white/10 transition hover:bg-red-600">Confirm Booking</button>
          </form>

          {submitted && (
            <div className="mt-4 rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-green-200">
              Booking received! We'll text you a confirmation shortly.
            </div>
          )}
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h3 className="text-xl font-semibold">Why choose us</h3>
          <ul className="mt-4 space-y-3 text-slate-300">
            <li className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-500" /> Paint-safe touchless systems</li>
            <li className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-500" /> Eco-friendly water reclaim</li>
            <li className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-500" /> Ceramic-grade protection</li>
            <li className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-500" /> Same-day appointments</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Booking;