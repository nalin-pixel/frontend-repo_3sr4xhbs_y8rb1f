function Footer() {
  return (
    <footer className="w-full bg-slate-950 text-slate-300 py-12 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h4 className="text-white font-semibold">Shine Studio</h4>
          <p className="text-sm text-slate-400">Open 7 days • 8am – 8pm</p>
        </div>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#booking" className="hover:text-white">Booking</a>
          <a href="#" className="hover:text-white">Contact</a>
        </nav>
        <p className="text-xs text-slate-500">© {new Date().getFullYear()} Shine Studio. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;