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
import { useState } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function App() {
  return (
    <div className="min-h-screen bg-white text-navy-regal flex flex-col lg:h-screen lg:overflow-hidden">
      {/* HEADER */}
      <header className="h-[70px] px-8 flex items-center justify-between border-b border-art-gray shrink-0">
        <div className="flex items-center gap-3">
          {/* Logo Placeholder combining Navy Blue, Green, and Orange */}
          <div className="flex items-center -space-x-2 shrink-0">
            <span className="w-5 h-5 rounded-full bg-[#0F172A] block border-2 border-white shadow-sm" />
            <span className="w-5 h-5 rounded-full bg-[#064E3B] block border-2 border-white shadow-sm" />
            <span className="w-5 h-5 rounded-full bg-[#C2410C] block border-2 border-white shadow-sm" />
          </div>
          <span className="text-xl font-extrabold tracking-tighter text-navy-regal uppercase">
            Naija Diaspora Realtors
          </span>
        </div>
        <div className="hidden md:block text-[10px] opacity-40 uppercase tracking-[0.2em] font-bold">
          <span className="text-emerald-regal">Investment Certainty Bureau</span> • Secure Property Solutions
        </div>
      </header>

      {/* MAIN GRID */}
      <main className="flex-1 flex flex-col lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:grid-rows-[1fr_1fr] overflow-y-auto lg:overflow-hidden">
        
        {/* SECTION 1: HERO (Col 1, Row 1) */}
        <section className="relative p-10 lg:p-12 flex flex-col justify-center border-b lg:border-r border-art-gray bg-[#F1F5F9] overflow-hidden">
          {/* Background Video overlay */}
          <div className="absolute inset-0 opacity-[0.05] mix-blend-multiply overflow-hidden pointer-events-none">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover">
               <source src="https://assets.mixkit.co/videos/preview/mixkit-modern-residence-building-exterior-4340-large.mp4" type="video/mp4" />
            </video>
          </div>
          
          <div className="relative z-10">
            <div className="inline-block bg-emerald-regal text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 mb-6 shadow-sm">
              Established Trust
            </div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl lg:text-5xl xl:text-6xl font-black mb-6 leading-[1] text-balance text-navy-regal"
            >
              Invest in Nigeria.<br />Sleep Soundly Abroad.
            </motion.h1>
            <p className="text-xl text-navy-regal/70 mb-8 font-light italic">
              "We handle the uncertainty. You get the keys."
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center gap-3 bg-orange-regal text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:brightness-110 shadow-lg shadow-orange-regal/20 transition-all active:scale-95"
            >
              Start Your Investment
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* SECTION 2: FOUNDER & ABOUT US (Col 2, Row 1) */}
        <section className="p-10 lg:p-12 border-b border-art-gray flex flex-col justify-start bg-white overflow-y-auto">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-emerald-regal shadow-md shrink-0">
                <img 
                  src="https://picsum.photos/seed/founder-man/800/800"
                  alt="Founder"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy-regal">Chinedu Obi</h3>
                <p className="text-xs font-bold uppercase tracking-wide text-emerald-regal">CEO & Co-Founder</p>
              </div>
            </div>
            <div>
              <p className="text-sm leading-relaxed text-navy-regal/60 mb-3">
                The trust gap shouldn't stop you from building your legacy at home. We bridge that gap with radical transparency and legal verification.
              </p>
              <p className="text-xs italic font-semibold text-emerald-regal border-l-2 border-emerald-regal pl-3 mb-4">
                "I know what it's like to wire money home and worry. We built this so you never have to."
              </p>

              {/* ABOUT US PARAGRAPH SECTION */}
              <div className="pt-4 border-t border-art-gray">
                <h4 className="text-xs font-black uppercase tracking-wider text-orange-regal mb-2">About Us</h4>
                <p className="text-xs leading-relaxed text-navy-regal/75 bg-slate-50 p-3 rounded border border-art-gray/70">
                  [Fill in your custom details here]
                  {"\n\n"}
                  At Naija Diaspora Realtors, we specialize in offering secure property transactions with zero anxiety. Backed by ground-level site inspectors and legal partnerships, we perform complete property auditing so you can invest with bulletproof certainty from anywhere in the world.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: PROBLEM & SOLUTION (Col 1, Row 2) */}
        <section className="grid md:grid-cols-[0.8fr_1.2fr] border-b lg:border-b-0 lg:border-r border-art-gray">
          {/* Problem */}
          <div className="p-10 lg:p-12 border-b md:border-b-0 md:border-r border-art-gray flex flex-col justify-center bg-white">
            <h2 className="text-4xl font-black tracking-tighter text-navy-regal leading-[0.9] mb-6">
              Distance.<br />Doubt.<br />Deception.
            </h2>
            <p className="text-sm text-navy-regal/70 font-light border-l-2 border-orange-regal pl-5">
              Nigerians abroad lose millions to fake listings and unverified agents every year.
            </p>
          </div>
          
          {/* Solution */}
          <div className="p-10 lg:p-12 flex flex-col justify-center space-y-8 bg-off-white">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-emerald-regal">Our Protocol</h4>
            <div className="space-y-6">
              {[
                { icon: MapPin, title: "Physical Verification", sub: "We step on every property before you pay.", color: "emerald-regal" },
                { icon: FileCheck, title: "Legal Protection", sub: "Documentation handled by verified lawyers.", color: "navy-regal" },
                { icon: Video, title: "Progress Updates", sub: "Live video proof sent directly to your phone.", color: "orange-regal" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className={`w-6 h-6 bg-${item.color} shrink-0 mt-1 flex items-center justify-center shadow-sm`}>
                    <item.icon className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <p className={`font-bold text-sm uppercase text-navy-regal`}>{item.title}</p>
                    <p className="text-xs text-navy-regal/50">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: PROOF & CONTACT (Col 2, Row 2) */}
        <section className="flex flex-col h-full overflow-hidden">
          {/* Visual Proof */}
          <div className="flex-1 p-6 lg:p-8 grid grid-cols-3 gap-2 bg-white border-b border-art-gray overflow-y-auto shadow-inner">
            {[
              { loc: "Lekki - Oct 24", id: "p1" },
              { loc: "Abuja - Oct 22", id: "p2" },
              { loc: "Ikeja - Oct 15", id: "p3" },
              { loc: "Ajah - Sept 30", id: "p4" },
              { loc: "Epe - Sept 12", id: "p5" },
              { loc: "Ibadan - Sept 05", id: "p6" },
            ].map((prop) => (
              <div key={prop.id} className="relative aspect-square group overflow-hidden border border-art-gray">
                <img 
                  src={`https://picsum.photos/seed/estate-${prop.id}/400/400`}
                  alt={prop.loc}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-1 left-1 bg-navy-regal text-white px-1 py-0.5 text-[8px] font-bold uppercase opacity-80 group-hover:opacity-100 transition-opacity">
                  {prop.loc}
                </div>
              </div>
            ))}
          </div>

          {/* Contact (Navy Area) */}
          <div id="contact" className="p-8 bg-navy-regal text-white shrink-0">
            <h3 className="text-lg font-bold mb-4 uppercase tracking-tighter">Ready for <span className="text-orange-regal">Certainty?</span></h3>
            <form className="grid grid-cols-2 gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="text" 
                placeholder="Full Name"
                className="bg-white/5 border border-white/10 p-2 text-xs outline-none focus:bg-white/10 focus:border-orange-regal transition-all placeholder:text-white/30"
              />
              <input 
                type="email" 
                placeholder="Email (Abroad)"
                className="bg-white/5 border border-white/10 p-2 text-xs outline-none focus:bg-white/10 focus:border-orange-regal transition-all placeholder:text-white/30"
              />
              <input 
                type="tel" 
                placeholder="Phone Number"
                className="bg-white/5 border border-white/10 p-2 text-xs outline-none focus:bg-white/10 focus:border-orange-regal transition-all col-span-2 md:col-span-1 placeholder:text-white/30"
              />
              <input 
                type="text" 
                placeholder="Investment Type"
                className="bg-white/5 border border-white/10 p-2 text-xs outline-none focus:bg-white/10 focus:border-orange-regal transition-all col-span-2 md:col-span-1 placeholder:text-white/30"
              />
              <button 
                type="submit"
                className="col-span-2 bg-orange-regal text-white py-2 font-bold uppercase text-[10px] tracking-widest hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-orange-regal/10"
              >
                Request Consultation
              </button>
            </form>
            <div className="mt-4 flex flex-col gap-1 opacity-50 text-[9px] uppercase tracking-wider">
              <p><span className="text-emerald-regal">+234 800 000 0000</span> | +44 20 0000 0000</p>
              <p>12b Admiralty Way, Lekki Phase 1, Lagos</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
