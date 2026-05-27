/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ShieldCheck, 
  MapPin, 
  FileCheck, 
  Video, 
  Phone, 
  Mail, 
  User, 
  ArrowRight,
  Menu,
  X
} from "lucide-react";
import { useState, FormEvent } from "react";

// ==========================================
// AUDIT REGISTRY CONFIGURATION
// ==========================================
// You can easily change the picture URLs, locations, and status tags here.
const AUDIT_REGISTRY_ITEMS = [
  {
    id: "p1",
    loc: "",
    // Replace the URL inside the quotes with your custom image link
    image: "https://ik.imagekit.io/019999great/image1.jpg",
    status: ""
  },
  {
    id: "p2",
    loc: "",
    // Replace the URL inside the quotes with your custom image link
    image: "https://ik.imagekit.io/019999great/image2.jpg",
    status: ""
  },
  {
    id: "p3",
    loc: "",
    // Replace the URL inside the quotes with your custom image link
    image: "https://ik.imagekit.io/019999great/pic1.jpg",
    status: ""
  },
  {
    id: "p4",
    loc: "",
    // Replace the URL inside the quotes with your custom image link
    image: "https://ik.imagekit.io/019999great/pic2.jpg",
    status: ""
  },
  {
    id: "p5",
    loc: "",
    // Replace the URL inside the quotes with your custom image link
    image: "https://ik.imagekit.io/019999great/pic3.jpg",
    status: ""
  },
  {
    id: "p6",
    loc: "",
    // Replace the URL inside the quotes with your custom image link
    image: "https://ik.imagekit.io/019999great/image1.jpg",
    status: ""
  }
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: ""
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Consultation Request: Property Investment");
    const body = encodeURIComponent(
      `Hello Naija Diaspora Realtors Team,\n\nI want to request a property investment consultation.\n\nInvestment Profile:\n- Name: ${formData.name}\n- Email: ${formData.email}\n- Phone: ${formData.phone}\n- Desired Investment Type: ${formData.type}\n\nPlease contact me at your earliest convenience.`
    );
    window.location.href = `mailto:naijadiasporarealtors@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-white text-navy-regal flex flex-col selection:bg-orange-regal selection:text-white">
      {/* HEADER */}
      <header className="h-[70px] w-full px-6 md:px-12 flex items-center justify-between border-b border-art-gray bg-white shrink-0 sticky top-0 z-50 shadow-sm/50">
        <div className="flex items-center gap-3">
          {/* Logo Placeholder combining Navy Blue, Green, and Orange */}
          <div className="flex items-center shrink-0">
           <img 
             src="https://res.cloudinary.com/dtkluxukm/image/upload/v1779594136/logo_m4xkrv.jpg" 
             alt="Naija Diaspora Realtors Logo"
             className="h-11 w-auto object-contain rounded"
             referrerPolicy="no-referrer"
           />
          </div>
          <span className="text-xl font-extrabold tracking-tighter text-navy-regal uppercase">
            Naija Diaspora Realtors
          </span>
        </div>
        <div className="hidden md:block text-[10px] opacity-40 uppercase tracking-[0.2em] font-bold">
          <span className="text-emerald-regal">Investment Certainty Bureau</span> • Secure Property Solutions
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="w-full">
        
        {/* SECTION 1: HERO (100% width block) */}
        <section className="relative w-full min-h-[70vh] md:min-h-[80vh] flex flex-col justify-center border-b border-art-gray bg-[#F1F5F9] py-24 px-6 md:px-12 overflow-hidden">
          {/* Background Video overlay */}
          <div className="absolute inset-0 opacity-[0.05] mix-blend-multiply overflow-hidden pointer-events-none">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover">
               <source src="https://assets.mixkit.co/videos/preview/mixkit-modern-residence-building-exterior-4340-large.mp4" type="video/mp4" />
            </video>
          </div>
          
          <div className="max-w-7xl mx-auto w-full relative z-10">
            <div className="inline-block bg-emerald-regal text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 mb-6 shadow-sm">
              Established Trust
            </div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-6xl xl:text-7xl font-black mb-6 leading-[1.05] text-balance text-navy-regal tracking-tight"
            >
              Invest in Nigeria.<br />Sleep Soundly Abroad.
            </motion.h1>
            <p className="text-lg md:text-2xl text-navy-regal/75 mb-10 font-light italic max-w-2xl leading-relaxed">
              "We handle the uncertainty. You get the keys."
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center gap-3 bg-orange-regal text-white px-8 py-4 font-bold uppercase tracking-widest text-xs hover:brightness-110 shadow-lg shadow-orange-regal/20 transition-all active:scale-95"
            >
              Start Your Investment
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* SECTION 2: FOUNDER & ABOUT US (100% width block) */}
        <section className="w-full py-20 md:py-28 px-6 md:px-12 border-b border-art-gray bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">
            
            {/* Founder column */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-emerald-regal shadow-md shrink-0">
                  <img 
                    src="https://ik.imagekit.io/019999great/user-02.jpg"
                    alt="Founder"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-regal">Vivian Ekanem</h3>
                  <p className="text-xs font-bold uppercase tracking-wide text-emerald-regal">CEO & Co-Founder</p>
                </div>
              </div>
              <div>
                <p className="text-sm md:text-base leading-relaxed text-navy-regal/70 mb-4 font-light">
                  Vivian Ekanem is the founder of Naija Diaspora Realtors, a real estate brand dedicated to helping Nigerians in the diaspora invest safely and confidently in property back home.
                </p>
                <p className="text-sm md:text-base italic font-semibold text-emerald-regal border-l-2 border-emerald-regal pl-4">
                  Trusted for helping Nigerians in the diaspora invest safely and confidently in property back home.
                </p>
              </div>
            </div>

            {/* About Us column */}
            <div className="flex flex-col h-full bg-[#F8FAFC] p-8 md:p-10 border border-art-gray rounded-lg shadow-sm/50">
              <h4 className="text-xs font-black uppercase tracking-widest text-orange-regal mb-4 relative flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-regal inline-block" />
                About Our Firm
              </h4>
              <p className="text-sm leading-relaxed text-navy-regal/80">
                At Naija Diaspora Realtors, we specialize in offering secure property transactions with zero anxiety. Backed by ground-level site inspectors and professional legal partnerships, we perform complete property auditing so you can invest with bulletproof certainty from anywhere in the world.
              </p>
              <div className="mt-6 pt-6 border-t border-art-gray/70 grid grid-cols-2 gap-4 text-xs font-medium text-navy-regal/60">
                <div>
                  <span className="block text-emerald-regal font-black">100% verified</span> on-site physical check
                </div>
                <div>
                  <span className="block text-orange-regal font-black">Verified records</span> certified by elite lawyers
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 3: THE PROBLEM & THE SOLUTION (100% width block) */}
        <section className="w-full py-20 md:py-28 px-6 md:px-12 border-b border-art-gray bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.90fr_1.1fr] gap-12 lg:gap-20 items-center">
            
            {/* Left side problem description */}
            <div className="flex flex-col justify-center">
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-navy-regal leading-[0.95] mb-6">
                Distance.<br />Doubt.<br />Deception.
              </h2>
              <p className="text-sm md:text-base text-navy-regal/70 font-light border-l-2 border-orange-regal pl-5 max-w-md leading-relaxed">
                Nigerians abroad lose millions to fake listings, unconfirmed land titles, and ghost agents every year. We are here to dismantle this cycle.
              </p>
            </div>
            
            {/* Right side solutions list */}
            <div className="bg-white p-8 md:p-10 border border-art-gray rounded-lg shadow-sm flex flex-col justify-center space-y-8">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-emerald-regal">Our Core Verification Protocol</h4>
              <div className="space-y-6">
                {[
                  { icon: MapPin, title: "Physical Verification", sub: "We stand on every block, document coordinate surveys, and walk the perimeter before you commit a single dollar.", color: "emerald-regal" },
                  { icon: FileCheck, title: "Legal Protection", sub: "Title verification, survey matching, and contract documentation managed by trusted, certified lawyers on ground.", color: "navy-regal" },
                  { icon: Video, title: "Progress Updates", sub: "Live raw video proof, drone feeds, and timestamps sent straight to your phone so you feel present every step of the way.", color: "orange-regal" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className={`w-8 h-8 rounded shrink-0 bg-[#F1F5F9] border border-art-gray mt-1 flex items-center justify-center shadow-sm`}>
                      <item.icon className={`w-4 h-4 text-${item.color}`} />
                    </div>
                    <div>
                      <p className="font-bold text-sm uppercase text-navy-regal tracking-tight">{item.title}</p>
                      <p className="text-xs text-navy-regal/60 mt-0.5 leading-relaxed">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 4: VERIFIED INVESTMENTS PROOF (100% width block) */}
        <section className="w-full py-20 md:py-28 px-6 md:px-12 border-b border-art-gray bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center md:text-left mb-12">
              <div className="inline-block bg-[#F1F5F9] text-emerald-regal text-[10px] font-bold uppercase tracking-widest px-3 py-1 mb-3 rounded-full border border-art-gray">
                Audit Registry
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy-regal tracking-tight">
                Verified On-Ground Investments
              </h2>
              <p className="text-sm text-navy-regal/50 mt-2 max-w-xl">
                Real properties successfully audited, surveyed, verified, and secured for Nigerians living in the diaspora.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {AUDIT_REGISTRY_ITEMS.map((prop) => (
                <div key={prop.id} className="relative group overflow-hidden border border-art-gray rounded-lg shadow-sm bg-[#F8FAFC]">
                  <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <img 
                      src={prop.image}
                      alt={prop.loc}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-4 bg-white flex items-center justify-between border-t border-art-gray">
                    <span className="text-xs font-bold text-navy-regal tracking-tight uppercase">{prop.loc}</span>
                    <span className="text-[9px] bg-[#E0F2FE] text-[#0369A1] font-bold px-2 py-0.5 rounded-full uppercase">{prop.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: CONTACT & INQUIRY FORM (100% width block) */}
        <section id="contact" className="w-full py-20 md:py-28 px-6 md:px-12 bg-[#0F172A] text-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            {/* Contact details text */}
            <div className="flex flex-col justify-center h-full">
              <div className="inline-block bg-[#1E293B] text-orange-regal text-[10px] font-bold uppercase tracking-widest px-3 py-1 mb-4 rounded border border-white/5 w-fit">
                Consultation Request
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
                Ready for <span className="text-orange-regal block md:inline">Certainty?</span>
              </h2>
              <p className="text-white/75 text-sm md:text-base leading-relaxed font-light mb-8 max-w-md">
                Don't let distance compromise your hard-earned wealth. Reach out today for a prompt, verified initial assessment call.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/10 text-xs">
                <div>
                  <span className="block text-orange-regal font-bold uppercase tracking-wider mb-1">Direct Lines</span>
                  <p className="text-white/80">09064468706</p>
                  <p className="text-white/60">07071969997</p>
                  <span className="block text-emerald-regal font-bold uppercase tracking-wider mt-3 mb-1">Email Info</span>
                  <p className="text-white/80">naijadiasporarealtors@gmail.com</p>
                </div>
                <div>
                  <span className="block text-emerald-regal font-bold uppercase tracking-wider mb-1">Office Location</span>
                  <p className="text-white/80">63, Ogunlana Drive,</p>
                  <p className="text-white/60">Surulere, Lagos, Nigeria</p>
                </div>
              </div>
            </div>
            
            {/* Contact Form area */}
            <div className="bg-[#1E293B] p-8 md:p-10 rounded-lg border border-white/5 shadow-2xl">
              <h3 className="text-lg font-bold mb-6 uppercase tracking-tight text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-regal animate-pulse" />
                Investment Inquiry Panel
              </h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-white/40">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full bg-white/5 border border-white/10 p-3 rounded text-sm text-white outline-none focus:bg-white/10 focus:border-orange-regal transition-all placeholder:text-white/20"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-white/40">Email (Abroad)</label>
                    <input 
                      type="email" 
                      placeholder="email@address.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full bg-white/5 border border-white/10 p-3 rounded text-sm text-white outline-none focus:bg-white/10 focus:border-orange-regal transition-all placeholder:text-white/20"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-white/40">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+1 / +44 / +234..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="w-full bg-white/5 border border-white/10 p-3 rounded text-sm text-white outline-none focus:bg-white/10 focus:border-orange-regal transition-all placeholder:text-white/20"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-white/40">Investment Type</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Land, Residential"
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      required
                      className="w-full bg-white/5 border border-white/10 p-3 rounded text-sm text-white outline-none focus:bg-white/10 focus:border-orange-regal transition-all placeholder:text-white/20"
                    />
                  </div>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-orange-regal text-white py-3.5 rounded font-bold uppercase text-xs tracking-widest hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-orange-regal/10 mt-4"
                >
                  Request Consultation Call
                </button>
              </form>
            </div>

          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="py-8 border-t border-art-gray bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-navy-regal/40 text-xs gap-4 font-light">
          <p>© 2026 Naija Diaspora Realtors. All Rights Reserved.</p>
          <p className="uppercase tracking-[0.2em] font-medium text-[10px] text-emerald-regal">Integrity • Presence • Peace of mind</p>
        </div>
      </footer>
    </div>
  );
}

