import { useState, useEffect } from "react";

// ==================== TRANSLATIONS ====================
const t = {
  en: {
    nav: { services: "Services", prices: "Prices", locations: "Locations", contact: "Contact", book: "Book Now" },
    hero: {
      title1: "Trend Herren",
      title2: "Friseur",
      subtitle: "Premium Men's Grooming — Berlin's Finest Barbershop",
      cta: "Book Appointment",
      scroll: "Explore",
    },
    about: {
      title: "Where Style Meets Precision",
      p1: "At Trend Herren Friseur, we believe a haircut is more than just a trim — it's an experience. Our master barbers combine traditional techniques with modern trends to deliver impeccable results every time.",
      p2: "From classic cuts to the latest styles, beard sculpting to luxury skincare, every service is tailored to bring out your best. Step in and discover the art of men's grooming.",
    },
    services: {
      title: "Our Services",
      subtitle: "Everything a modern gentleman needs",
      items: [
        { name: "Haircut & Styling", desc: "Precision haircut tailored to your face shape and style preference. Includes consultation, wash & styling.", duration: "45 min", price: "€28" },
        { name: "Beard Trim & Sculpt", desc: "Expert beard shaping with straight razor edge-up, hot towel treatment & beard oil finish.", duration: "30 min", price: "€18" },
        { name: "Haircut + Beard Combo", desc: "The full experience — precision haircut plus beard sculpting. Our most popular package.", duration: "60 min", price: "€40" },
        { name: "Straight Razor Shave", desc: "Luxurious hot towel shave with premium products. The ultimate smooth finish.", duration: "35 min", price: "€22" },
        { name: "Hair Coloring", desc: "Professional men's hair coloring — natural tones, gray coverage, or bold statement looks.", duration: "50 min", price: "€32" },
        { name: "Beard Coloring", desc: "Even out your beard color or cover grays. Natural-looking results with premium dyes.", duration: "25 min", price: "€15" },
        { name: "Steam Facial Care", desc: "Deep cleansing steam treatment that opens pores, hydrates skin & promotes healthy complexion.", duration: "25 min", price: "€20" },
        { name: "Face Mask Treatment", desc: "Rejuvenating face mask tailored to your skin type. Deep nourishment for a fresh, radiant look.", duration: "20 min", price: "€16" },
        { name: "Head Shave", desc: "Clean, smooth head shave with hot towel prep and soothing aftershave balm.", duration: "30 min", price: "€20" },
        { name: "Kids Haircut", desc: "Gentle, patient service for the little gentlemen (up to 12 years).", duration: "25 min", price: "€18" },
      ],
    },
    locations: {
      title: "Two Locations",
      subtitle: "Find us in the heart of Berlin",
      l1: { name: "Lichtenrade", address: "Bahnhofstraße 10, 12305 Berlin", phone: "+49 30 30349596", hours: "Mon–Fri: 09:00–20:00 | Sat: 09:00–18:00" },
      l2: { name: "Tempelhof", address: "Tempelhofer Damm 193, 12099 Berlin", phone: "+49 30 54984780", hours: "Mon–Fri: 09:00–20:00 | Sat: 09:00–18:00" },
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Book your appointment or drop by",
      email: "trendherrenfriseur@hotmail.com",
      phone: "+49 30 54984780",
      instagram: "Follow us on Instagram",
      formName: "Name",
      formEmail: "Email",
      formMsg: "Message",
      formSend: "Send Message",
      formSuccess: "Message sent! We'll get back to you soon.",
    },
    footer: {
      rights: "All rights reserved.",
    },
    langBtn: "DE",
  },
  de: {
    nav: { services: "Leistungen", prices: "Preise", locations: "Standorte", contact: "Kontakt", book: "Jetzt Buchen" },
    hero: {
      title1: "Trend Herren",
      title2: "Friseur",
      subtitle: "Premium Herrenpflege — Berlins bester Barbershop",
      cta: "Termin Buchen",
      scroll: "Entdecken",
    },
    about: {
      title: "Wo Stil auf Präzision trifft",
      p1: "Bei Trend Herren Friseur glauben wir, dass ein Haarschnitt mehr ist als nur ein Schnitt — es ist ein Erlebnis. Unsere Meisterfriseure kombinieren traditionelle Techniken mit modernen Trends für makellose Ergebnisse.",
      p2: "Von klassischen Schnitten bis zu den neuesten Styles, Bartdesign bis hin zu luxuriöser Hautpflege — jeder Service wird auf Sie zugeschnitten. Treten Sie ein und entdecken Sie die Kunst der Herrenpflege.",
    },
    services: {
      title: "Unsere Leistungen",
      subtitle: "Alles, was der moderne Gentleman braucht",
      items: [
        { name: "Haarschnitt & Styling", desc: "Präzisionsschnitt, abgestimmt auf Gesichtsform und Stil. Inkl. Beratung, Wäsche & Styling.", duration: "45 Min.", price: "€28" },
        { name: "Bart Schnitt & Modell", desc: "Professionelles Bartdesign mit Rasiermesser-Konturen, heißem Handtuch & Bartöl-Finish.", duration: "30 Min.", price: "€18" },
        { name: "Haarschnitt + Bart Kombo", desc: "Das volle Erlebnis — Präzisionshaarschnitt plus Bartdesign. Unser beliebtestes Paket.", duration: "60 Min.", price: "€40" },
        { name: "Rasur (Rasiermesser)", desc: "Luxuriöse Heißhandtuch-Rasur mit Premium-Produkten. Das ultimative glatte Finish.", duration: "35 Min.", price: "€22" },
        { name: "Haare Färben", desc: "Professionelles Haarefärben für Männer — natürliche Töne, Grauabdeckung oder Statements.", duration: "50 Min.", price: "€32" },
        { name: "Bart Färben", desc: "Gleichmäßige Bartfarbe oder Grauabdeckung. Natürliche Ergebnisse mit Premium-Farben.", duration: "25 Min.", price: "€15" },
        { name: "Dampf Hautpflege", desc: "Tiefenreinigende Dampfbehandlung, die Poren öffnet, hydratisiert & für gesunden Teint sorgt.", duration: "25 Min.", price: "€20" },
        { name: "Gesichtsmaske", desc: "Verjüngende Gesichtsmaske, abgestimmt auf Ihren Hauttyp. Tiefenpflege für frisches Aussehen.", duration: "20 Min.", price: "€16" },
        { name: "Kopfrasur", desc: "Saubere, glatte Kopfrasur mit Heißhandtuch-Vorbereitung & beruhigendem Aftershave-Balsam.", duration: "30 Min.", price: "€20" },
        { name: "Kinder Haarschnitt", desc: "Sanfter, geduldiger Service für die kleinen Gentlemen (bis 12 Jahre).", duration: "25 Min.", price: "€18" },
      ],
    },
    locations: {
      title: "Zwei Standorte",
      subtitle: "Finden Sie uns im Herzen Berlins",
      l1: { name: "Lichtenrade", address: "Bahnhofstraße 10, 12305 Berlin", phone: "+49 30 30349596", hours: "Mo–Fr: 09:00–20:00 | Sa: 09:00–18:00" },
      l2: { name: "Tempelhof", address: "Tempelhofer Damm 193, 12099 Berlin", phone: "+49 30 54984780", hours: "Mo–Fr: 09:00–20:00 | Sa: 09:00–18:00" },
    },
    contact: {
      title: "Kontaktieren Sie uns",
      subtitle: "Vereinbaren Sie einen Termin oder kommen Sie vorbei",
      email: "trendherrenfriseur@hotmail.com",
      phone: "+49 30 54984780",
      instagram: "Folgen Sie uns auf Instagram",
      formName: "Name",
      formEmail: "E-Mail",
      formMsg: "Nachricht",
      formSend: "Nachricht Senden",
      formSuccess: "Nachricht gesendet! Wir melden uns bald.",
    },
    footer: {
      rights: "Alle Rechte vorbehalten.",
    },
    langBtn: "EN",
  },
};

export default function App() {
  const [lang, setLang] = useState<"en" | "de">("en");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [formSent, setFormSent] = useState(false);

  const tx = t[lang];

  const toggleLang = () => setLang((l) => (l === "en" ? "de" : "en"));

  const scrollTo = (id: string) => {
    setMobileMenu(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleForm = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => setFormSent(false), 4000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("animate-fade-up");
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-[#e5e5e5] font-sans">
      {/* ========== NAV ========== */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d0d0d]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <button onClick={() => scrollTo("hero")} className="flex items-center gap-2">
            <span className="text-2xl">✂️</span>
            <span className="font-serif text-lg font-semibold gold-text tracking-wide">TREND</span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {(["services", "locations", "contact"] as const).map((k) => (
              <button key={k} onClick={() => scrollTo(k)} className="text-sm uppercase tracking-widest text-gray-400 hover:text-[#c8a45c] transition-colors">
                {tx.nav[k]}
              </button>
            ))}
            <button onClick={toggleLang} className="ml-2 px-3 py-1.5 text-xs font-semibold tracking-wider uppercase border border-[#c8a45c]/40 text-[#c8a45c] rounded hover:bg-[#c8a45c]/10 transition-colors">
              {tx.langBtn}
            </button>
            <button onClick={() => scrollTo("contact")} className="px-5 py-2 text-sm font-semibold uppercase tracking-wider bg-[#c8a45c] text-black rounded hover:bg-[#e0c87d] transition-colors">
              {tx.nav.book}
            </button>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden p-2 text-gray-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">{mobileMenu ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}</svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenu && (
          <div className="md:hidden bg-[#0d0d0d]/95 backdrop-blur-md border-b border-white/5">
            <div className="px-4 py-4 space-y-3">
              {(["services", "locations", "contact"] as const).map((k) => (
                <button key={k} onClick={() => scrollTo(k)} className="block w-full text-left text-sm uppercase tracking-widest text-gray-400 hover:text-[#c8a45c] py-2 transition-colors">
                  {tx.nav[k]}
                </button>
              ))}
              <div className="flex gap-3 pt-2">
                <button onClick={toggleLang} className="px-3 py-1.5 text-xs font-semibold tracking-wider uppercase border border-[#c8a45c]/40 text-[#c8a45c] rounded hover:bg-[#c8a45c]/10 transition-colors">{tx.langBtn}</button>
                <button onClick={() => scrollTo("contact")} className="px-5 py-2 text-sm font-semibold uppercase tracking-wider bg-[#c8a45c] text-black rounded hover:bg-[#e0c87d] transition-colors">{tx.nav.book}</button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* ========== HERO ========== */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/hero-bg.jpg" alt="Barbershop" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d]/85 via-[#0d0d0d]/70 to-[#0d0d0d]" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="reveal opacity-0">
            <p className="text-[#c8a45c] text-sm sm:text-base uppercase tracking-[0.3em] mb-4 font-medium">{tx.hero.subtitle}</p>
            <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-bold text-white mb-4 leading-tight">
              {tx.hero.title1} <br />
              <span className="gold-text">{tx.hero.title2}</span>
            </h1>
            <hr className="gold-line w-48 mx-auto my-8" />
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <button onClick={() => scrollTo("contact")} className="px-8 py-4 bg-[#c8a45c] text-black font-semibold uppercase tracking-wider text-sm rounded hover:bg-[#e0c87d] transition-all hover:scale-105 shadow-lg shadow-[#c8a45c]/20">
                {tx.hero.cta}
              </button>
              <button onClick={() => scrollTo("about")} className="px-8 py-4 border border-white/30 text-white font-semibold uppercase tracking-wider text-sm rounded hover:border-[#c8a45c] hover:text-[#c8a45c] transition-all">
                {tx.hero.scroll}
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button onClick={() => scrollTo("about")} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce text-white/50 hover:text-[#c8a45c] transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </button>
      </section>

      {/* ========== ABOUT ========== */}
      <section id="about" className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center reveal opacity-0">
          <p className="text-[#c8a45c] text-sm uppercase tracking-[0.25em] mb-3">Trend Herren Friseur</p>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-8">{tx.about.title}</h2>
          <hr className="gold-line w-24 mx-auto mb-10" />
          <div className="grid sm:grid-cols-2 gap-8 text-left">
            <p className="text-gray-400 leading-relaxed text-base sm:text-lg">{tx.about.p1}</p>
            <p className="text-gray-400 leading-relaxed text-base sm:text-lg">{tx.about.p2}</p>
          </div>
        </div>
      </section>

      {/* ========== SERVICES ========== */}
      <section id="services" className="py-24 px-4 bg-[#111]">
        <div className="max-w-5xl mx-auto reveal opacity-0">
          <div className="text-center mb-16">
            <p className="text-[#c8a45c] text-sm uppercase tracking-[0.25em] mb-3">{tx.services.subtitle}</p>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">{tx.services.title}</h2>
            <hr className="gold-line w-24 mx-auto mt-8" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tx.services.items.map((s, i) => (
              <div key={i} className="group bg-[#1a1a1a] border border-white/5 rounded-xl p-6 hover:border-[#c8a45c]/30 hover:bg-[#1e1e1e] transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-serif text-lg font-semibold text-white group-hover:text-[#c8a45c] transition-colors">{s.name}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 min-h-[3rem]">{s.desc}</p>
                <div className="flex items-center justify-between pt-3 border-t border-white/5">
                  <span className="text-xs text-gray-600 uppercase tracking-wider">{s.duration}</span>
                  <span className="text-lg font-bold gold-text">{s.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== LOCATIONS ========== */}
      <section id="locations" className="py-24 px-4">
        <div className="max-w-5xl mx-auto reveal opacity-0">
          <div className="text-center mb-16">
            <p className="text-[#c8a45c] text-sm uppercase tracking-[0.25em] mb-3">{tx.locations.subtitle}</p>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">{tx.locations.title}</h2>
            <hr className="gold-line w-24 mx-auto mt-8" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[tx.locations.l1, tx.locations.l2].map((loc, i) => (
              <div key={i} className="bg-[#1a1a1a] border border-white/5 rounded-xl overflow-hidden hover:border-[#c8a45c]/30 transition-all duration-300">
                <div className="aspect-[16/7] bg-[#222] relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-12 h-12 text-[#c8a45c]/40 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      <p className="text-xs uppercase tracking-widest text-gray-600">{loc.name}</p>
                    </div>
                  </div>
                  {/* Embedded Map */}
                  <iframe
                    className="absolute inset-0 w-full h-full opacity-40 hover:opacity-100 transition-opacity duration-500"
                    src={i === 0
                      ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2431.13379083295!2d13.3999!3d52.4113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBahnhofstraße+10%2C+12305+Berlin!5e0!3m2!1sen!2sde!4v1"
                      : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2430.2619999999997!2d13.394!3d52.464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sTempelhofer+Damm+193%2C+12099+Berlin!5e0!3m2!1sen!2sde!4v1"}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map - ${loc.name}`}
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="font-serif text-xl font-semibold text-white">{loc.name}</h3>
                  <div className="space-y-2 text-sm text-gray-400">
                    <p className="flex items-center gap-2"><span className="text-[#c8a45c]">📍</span> {loc.address}</p>
                    <p className="flex items-center gap-2"><span className="text-[#c8a45c]">📞</span> {loc.phone}</p>
                    <p className="flex items-center gap-2"><span className="text-[#c8a45c]">🕐</span> {loc.hours}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CONTACT ========== */}
      <section id="contact" className="py-24 px-4 bg-[#111]">
        <div className="max-w-5xl mx-auto reveal opacity-0">
          <div className="text-center mb-16">
            <p className="text-[#c8a45c] text-sm uppercase tracking-[0.25em] mb-3">{tx.contact.subtitle}</p>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">{tx.contact.title}</h2>
            <hr className="gold-line w-24 mx-auto mt-8" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <a href={`tel:${tx.contact.phone.replace(/\s/g, "")}`} className="flex items-center gap-4 p-4 bg-[#1a1a1a] rounded-xl border border-white/5 hover:border-[#c8a45c]/30 transition-all group">
                  <span className="text-3xl">📞</span>
                  <div>
                    <p className="text-xs text-gray-600 uppercase tracking-wider mb-1">{lang === "en" ? "Phone" : "Telefon"}</p>
                    <p className="text-white font-semibold group-hover:text-[#c8a45c] transition-colors">{tx.contact.phone}</p>
                  </div>
                </a>
                <a href={`mailto:${tx.contact.email}`} className="flex items-center gap-4 p-4 bg-[#1a1a1a] rounded-xl border border-white/5 hover:border-[#c8a45c]/30 transition-all group">
                  <span className="text-3xl">✉️</span>
                  <div>
                    <p className="text-xs text-gray-600 uppercase tracking-wider mb-1">Email</p>
                    <p className="text-white font-semibold group-hover:text-[#c8a45c] transition-colors break-all">{tx.contact.email}</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-4 bg-[#1a1a1a] rounded-xl border border-white/5">
                  <span className="text-3xl">📸</span>
                  <div>
                    <p className="text-xs text-gray-600 uppercase tracking-wider mb-1">Instagram</p>
                    <div className="flex flex-wrap gap-3 mt-1">
                      <a href="https://instagram.com/trend_herren_friseur1" target="_blank" rel="noreferrer" className="text-[#c8a45c] hover:text-[#e0c87d] text-sm font-medium transition-colors">@trend_herren_friseur1</a>
                      <a href="https://instagram.com/trend_friseur" target="_blank" rel="noreferrer" className="text-[#c8a45c] hover:text-[#e0c87d] text-sm font-medium transition-colors">@trend_friseur</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick CTA */}
              <a href={`tel:${tx.contact.phone.replace(/\s/g, "")}`} className="block w-full text-center py-4 bg-[#c8a45c] text-black font-bold uppercase tracking-wider text-sm rounded-xl hover:bg-[#e0c87d] transition-all shadow-lg shadow-[#c8a45c]/10">
                📞 {lang === "en" ? "Call Now" : "Jetzt Anrufen"}
              </a>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleForm} className="bg-[#1a1a1a] border border-white/5 rounded-xl p-6 space-y-4">
              <input required type="text" placeholder={tx.contact.formName} className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#c8a45c]/50 transition-colors" />
              <input required type="email" placeholder={tx.contact.formEmail} className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#c8a45c]/50 transition-colors" />
              <textarea required rows={4} placeholder={tx.contact.formMsg} className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#c8a45c]/50 transition-colors resize-none" />
              <button type="submit" className="w-full py-4 bg-[#c8a45c] text-black font-bold uppercase tracking-wider text-sm rounded-xl hover:bg-[#e0c87d] transition-all">{tx.contact.formSend}</button>
              {formSent && <p className="text-green-400 text-sm text-center animate-fade-up">{tx.contact.formSuccess}</p>}
            </form>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="py-10 px-4 border-t border-white/5">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <span className="text-lg">✂️</span>
            <span className="font-serif gold-text font-semibold">Trend Herren Friseur</span>
          </div>
          <p>&copy; {new Date().getFullYear()} — {tx.footer.rights}</p>
          <div className="flex gap-4">
            <a href="https://instagram.com/trend_herren_friseur1" target="_blank" rel="noreferrer" className="hover:text-[#c8a45c] transition-colors">@trend_herren_friseur1</a>
            <a href="https://instagram.com/trend_friseur" target="_blank" rel="noreferrer" className="hover:text-[#c8a45c] transition-colors">@trend_friseur</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
