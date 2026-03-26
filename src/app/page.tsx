"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Target,
  Sparkles,
  Funnel,
  CheckCircle,
  AlertTriangle,
  Terminal,
  GraduationCap,
  Shield,
  X,
  Lock,
} from "lucide-react";
import GrowthSystemSection from "@/components/GrowthSystemSection";
import DetailedProposalSection from "@/components/DetailedProposalSection";

/** Placeholder ad creatives for Section 4 masonry gallery */
const AESTHETIC_GALLERY_ITEMS = [
  { src: "/ad-mockup-1.png", alt: "Corporate Security Guard", className: "md:col-span-2 md:row-span-1" },
  { src: "/ad-mockup-9.png", alt: "B2B Threat Audit Ad", className: "md:col-span-1 md:row-span-1" },
  { src: "/ad-mockup-10.png", alt: "Academy Recruitment Ad", className: "md:col-span-1 md:row-span-1" },
  { src: "/ad-mockup-7.png", alt: "Executive VIP Protection", className: "md:col-span-1 md:row-span-2" },
  { src: "/ad-mockup-12.png", alt: "Event Security Commander", className: "md:col-span-2 md:row-span-1" },
  { src: "/ad-mockup-11.png", alt: "Secure Chauffeur Services", className: "md:col-span-1 md:row-span-1" },
  { src: "/ad-mockup-3.png", alt: "Tactical Training Academy", className: "md:col-span-2 md:row-span-1" },
  { src: "/ad-mockup-8.png", alt: "Threat Diagnostic Scorecard", className: "md:col-span-1 md:row-span-1" },
] as const;

export default function Home() {
  const [lightboxAsset, setLightboxAsset] = useState<{ src: string; alt: string } | null>(null);

  const closeLightbox = useCallback(() => setLightboxAsset(null), []);

  useEffect(() => {
    if (!lightboxAsset) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxAsset, closeLightbox]);

  return (
    <div className="flex min-w-0 w-full flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center overflow-hidden py-20">
        {/* Subtle Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2A2A2A_1px,transparent_1px),linear-gradient(to_bottom,#2A2A2A_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto">
          
          {/* Animated Logo Container */}
          <motion.div 
            initial={false}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative mb-12"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
              {/* Subtle pulse effect behind logo */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
                className="absolute inset-0 bg-metallic rounded-full blur-3xl"
              />
              
              <Image 
                src="/millenium-logo.png" 
                alt="Millenium Security Logo" 
                fill
                className="object-contain drop-shadow-[0_0_15px_rgba(192,192,192,0.2)]"
                priority
              />

              {/* Scanning line effect */}
              <motion.div
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-[2px] bg-metallic/50 shadow-[0_0_8px_rgba(192,192,192,0.8)] z-20"
              />
            </div>
          </motion.div>

          <motion.h1 
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-crisp mb-6 leading-tight"
          >
            Bridging the Gap Between Physical Authority and{" "}
            <span className="text-metallic">Digital Reality</span>.
          </motion.h1>

          <motion.p 
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-metallic/80 max-w-3xl mb-12 leading-relaxed"
          >
            You dominate Charlottesville in the field. Couture House Co. is here to ensure you
            dominate it online. This is the master digital strategy to position The{" "}
            <span className="text-crisp font-medium">Millenium Corp</span> as Central Virginia&apos;s
            undisputed premium security authority.
          </motion.p>

          {/* Feature Highlights */}
          <motion.div 
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl"
          >
            {[
              {
                icon: Target,
                title: "Digital Dominance",
                desc: "Hyper-targeted B2B lead generation.",
              },
              {
                icon: Sparkles,
                title: "Visual Authority",
                desc: "Elite AI-driven brand aesthetic.",
              },
              {
                icon: Funnel,
                title: "Frictionless Funnels",
                desc: "Automated academy enrollment & recruitment.",
              },
            ].map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center p-6 bg-gunmetal/30 border border-gunmetal rounded-lg backdrop-blur-sm">
                <feature.icon className="w-8 h-8 text-metallic mb-4" />
                <h3 className="text-crisp font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-metallic/70 text-center">{feature.desc}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* Section 2: Vulnerability Assessment */}
      <section className="relative py-24 bg-obsidian border-t border-gunmetal overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Descriptive Text */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-crisp mb-6 leading-tight">
                The Charlottesville <br />
                <span className="text-metallic">Vulnerability Assessment</span>
              </h2>
              <div className="space-y-6 text-lg text-metallic/80">
                <p>
                  The Millenium Corp possesses the raw assets of an elite regional authority: over two decades in the security industry,{" "}
                  <span className="text-metallic font-semibold">officially BBB Accredited with an A+ rating</span>{" "}
                  (Millenium Security Company LLC), locally owned and operated in Charlottesville, dual Virginia DCJS registration, and active UVA Finance supplier status. However, your digital reflection is fractured.
                </p>
                <p>
                  <strong className="text-crisp tracking-wide">The Gap:</strong> Your current online footprint—featuring dormant social profiles and fragmented web funnels—is actively suppressing B2B lead generation and accelerating costly employee turnover.
                </p>
                <p>
                  <strong className="text-crisp tracking-wide">The Pivot:</strong> Couture House Co. will transition your digital presence from a perceived &quot;commodity guard&quot; provider to the definitive <span className="text-metallic font-semibold">&quot;Premium Local Authority&quot;</span> of Central Virginia.
                </p>
              </div>
            </motion.div>

            {/* Right Column: Diagnostic Terminal */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Glowing Border Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-gunmetal via-metallic/20 to-gunmetal rounded-xl blur opacity-50" />
              
              <div className="relative bg-[#111111] rounded-xl border border-gunmetal shadow-[0_0_30px_rgba(192,192,192,0.05)] overflow-hidden font-mono">
                {/* Terminal Header */}
                <div className="flex items-center px-4 py-3 border-b border-gunmetal bg-[#1A1A1A]">
                  <Terminal className="w-4 h-4 text-metallic mr-2" />
                  <span className="text-xs text-metallic/70 tracking-wider">SYS.DIAGNOSTIC_TERMINAL // STATUS: SCANNING</span>
                </div>

                <div className="p-6 sm:p-8 space-y-8">
                  {/* List A: Physical Reality */}
                  <div>
                    <h3 className="text-sm font-semibold text-crisp mb-4 tracking-widest uppercase flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                      Physical Reality
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "20+ Years Proven Depth",
                        "BBB Accredited • A+ Rated",
                        "Dual Virginia DCJS Registration",
                        "Active UVA Supplier",
                      ].map((item, i) => (
                        <li key={i} className="flex items-center text-sm sm:text-base text-metallic/90">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Divider */}
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-gunmetal to-transparent" />

                  {/* List B: Digital Vulnerability */}
                  <div>
                    <h3 className="text-sm font-semibold text-crisp mb-4 tracking-widest uppercase flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse" />
                      Digital Vulnerability
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Dormant Social Proof",
                        "Fragmented Web Funnels",
                        "Employer Brand Leaks"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center text-sm sm:text-base text-metallic/90">
                          <AlertTriangle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Section 3: The Synergy Flywheel Architecture */}
      <section className="relative py-24 bg-obsidian overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-metallic/30 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-crisp mb-6">
              The Synergy <span className="text-metallic">Flywheel Architecture</span>
            </h2>
            <p className="text-lg text-metallic/80">
              We will deploy high-converting funnels, AI-generated creatives, and targeted ad campaigns to unify your three distinct divisions into one revenue-generating machine. The narrative is deliberate:{" "}
              <span className="text-crisp font-medium">an owned academy elevates the caliber of officer you deploy</span>
              —a defensible story premium competitors cannot copy overnight.
            </p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-metallic/70">
              Strategic priority: Security contracts lead · Academy builds authority &amp; recruiting · Transportation stays a selective supporting offer
            </p>
          </motion.div>

          {/* The Website Mandate — foundation before division flywheel cards */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.7 }}
            className="relative mb-16 rounded-xl border border-zinc-500 bg-[#1A1A1A] p-8 sm:p-10 shadow-[0_0_24px_rgba(0,0,0,0.4)] transition-shadow duration-300 hover:shadow-[0_0_28px_rgba(192,192,192,0.08)]"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-metallic/90">
              The Website Mandate
            </p>
            <h3 className="text-xl sm:text-2xl font-bold text-crisp mb-6 leading-snug">
              The Foundation:{" "}
              <span className="text-metallic">Conversion-Optimized Web Architecture</span>
            </h3>
            <div className="space-y-4 text-base sm:text-lg text-metallic/90 leading-relaxed">
              <p>
                Driving elite traffic to a fragmented website is a mathematical liability. Right
                now, visible placeholder text, broken navigation, and thin service pages are
                actively destroying the trust you&apos;ve built over 30 years in the field.
              </p>
              <p>
                Before we scale your ads, Couture House Co. will execute a complete top-to-bottom
                remodel of{" "}
                <a
                  href="https://themilleniumcorp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-metallic underline decoration-metallic/40 underline-offset-4 transition-colors hover:text-crisp hover:decoration-crisp"
                >
                  themilleniumcorp.com
                </a>
                . We don&apos;t build digital brochures; we build high-performance, intent-based
                routing engines designed to convert Central Virginia property managers into
                high-ticket contracts.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: B2B Contracts */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative bg-[#1A1A1A] rounded-xl p-8 border border-zinc-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(192,192,192,0.15)] hover:-translate-y-1"
            >
              <Target className="w-10 h-10 text-metallic mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-crisp mb-4">Millenium Security <br/><span className="text-sm text-metallic/70 font-normal uppercase tracking-wider">(B2B Contracts)</span></h3>
              <p className="text-metallic/80 leading-relaxed">
                We will build the <span className="italic text-metallic font-medium">Facility Threat Diagnostic Scorecard</span> lead magnet and run exact-match Google Ads targeting Central Virginia property managers to drive high-ticket commercial consultations.
              </p>
            </motion.div>

            {/* Card 2: Training Academy */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative bg-[#1A1A1A] rounded-xl p-8 border border-zinc-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(192,192,192,0.15)] hover:-translate-y-1"
            >
              <GraduationCap className="w-10 h-10 text-metallic mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-crisp mb-4">Training Academy <br/><span className="text-sm text-metallic/70 font-normal uppercase tracking-wider">(MSTA)</span></h3>
              <p className="text-metallic/80 leading-relaxed">
                We will replace confusing PDFs with a frictionless digital enrollment funnel and the <span className="italic text-metallic font-medium">Official Virginia DCJS Career Roadmap</span>, driving direct registrations and fueling your internal guard recruitment pipeline.
              </p>
            </motion.div>

            {/* Card 3: Secure Transportation */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="group relative bg-[#1A1A1A] rounded-xl p-8 border border-zinc-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(192,192,192,0.15)] hover:-translate-y-1"
            >
              <Shield className="w-10 h-10 text-metallic mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-crisp mb-4">Secure Transportation <br/><span className="text-sm text-metallic/70 font-normal uppercase tracking-wider">(Executive Detail)</span></h3>
              <p className="text-metallic/80 leading-relaxed">
                We will design high-end, discreet AI visual assets and &quot;white-label&quot; brochures targeting UHNWIs and corporate executives—and deploy the{" "}
                <span className="italic text-metallic font-medium">Corporate Executive Travel Risk Checklist</span>{" "}
                for assistants and travel planners—marketing the <span className="italic text-metallic font-medium">Invisible Veil of Professionalism</span>.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <GrowthSystemSection />

      {/* Section 4: The 30-Day Aesthetic Takeover */}
      <section className="relative py-24 bg-obsidian border-t border-gunmetal overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-crisp mb-6">
              The 30-Day <span className="text-metallic">Aesthetic Takeover</span>.
            </h2>
            <p className="text-lg text-metallic/80">
              An exclusive preview of the visual authority, high-retention video assets, and elite brand aesthetic we will deploy to dominate the Central Virginia market.
            </p>
          </motion.div>

          {/* Dynamic Image Gallery — full-size preview via lightbox */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px] md:auto-rows-[350px]">
            {AESTHETIC_GALLERY_ITEMS.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`group relative overflow-hidden rounded-xl border border-zinc-700 bg-[#111111] ${img.className}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />

                {/* Mobile: overlay always visible so "View Asset" is tappable; desktop: show on hover */}
                <div className="pointer-events-auto absolute inset-0 flex items-center justify-center bg-obsidian/60 opacity-100 backdrop-blur-sm transition-opacity duration-300 md:pointer-events-none md:opacity-0 md:group-hover:pointer-events-auto md:group-hover:opacity-100">
                  <button
                    type="button"
                    aria-label={`View full size: ${img.alt}`}
                    className="pointer-events-auto px-6 py-3 bg-gradient-to-r from-zinc-800 to-zinc-700 text-metallic font-semibold tracking-wide rounded-md border border-zinc-500 shadow-[0_0_15px_rgba(192,192,192,0.2)] hover:text-crisp transition-colors focus:outline-none focus:ring-2 focus:ring-metallic"
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightboxAsset({ src: img.src, alt: img.alt });
                    }}
                  >
                    View Asset
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Section 5: Command the Market (Pricing/Proposal) */}
      <section className="relative py-32 bg-obsidian overflow-hidden border-t border-gunmetal">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-crisp mb-6 uppercase tracking-tight">
              Command the <span className="text-metallic">Market.</span>
            </h2>
            <p className="text-lg sm:text-xl text-metallic/80 leading-relaxed">
              Elite problems require elite solutions. Partnering with Couture House Co. means plugging your firm into a vertically integrated digital growth engine. Once our partnership is finalized, your secure Client Terminal will be unlocked, granting you direct access to your new web architecture, deployed assets, and lead generation analytics.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative bg-gunmetal border border-zinc-500 p-8 sm:p-12 shadow-[0_0_40px_rgba(192,192,192,0.1)] mx-auto max-w-4xl"
          >
            {/* Brutalist Corner Accents */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-metallic" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-metallic" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-metallic" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-metallic" />

            <div className="space-y-6 mb-12">
              {[
                "Complete Conversion-Optimized Website Overhaul",
                "30-Day Instagram Grid & Social Proof Launch",
                "The Facility Threat Scorecard B2B Lead Funnel",
                "High-Fidelity AI Ad Creatives & Video Production",
                "Google Business Profile + Local SEO & Citation Alignment",
                "Ethical Review Acquisition System & Lead KPI Instrumentation",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start bg-[#1A1A1A] p-4 border border-zinc-700/50 hover:border-metallic/50 transition-colors duration-300">
                  <CheckCircle className="w-6 h-6 text-metallic mr-4 flex-shrink-0 mt-0.5" />
                  <span className="text-lg sm:text-xl text-crisp font-medium tracking-wide">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center mt-12 pt-10 border-t border-zinc-700">
              <button className="w-full sm:w-auto px-10 py-5 bg-crisp text-obsidian font-bold text-lg sm:text-xl uppercase tracking-widest transition-all duration-300 hover:bg-metallic hover:shadow-[0_0_20px_rgba(192,192,192,0.4)] focus:outline-none focus:ring-2 focus:ring-metallic focus:ring-offset-2 focus:ring-offset-obsidian flex items-center justify-center gap-3">
                <span>Initiate Partnership Protocol</span>
                <Lock className="w-5 h-5" />
              </button>
              <p className="mt-6 text-sm sm:text-base text-metallic/60 tracking-wider uppercase font-semibold">
                Unlocks immediate access to the Secure Client Terminal
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      <DetailedProposalSection />

      {/* Lightbox: full-bleed asset view */}
      <AnimatePresence>
        {lightboxAsset ? (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={lightboxAsset.alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex max-h-[100dvh] w-full max-w-[100vw] items-center justify-center overflow-y-auto p-4 sm:p-8"
          >
            <button
              type="button"
              aria-label="Close preview"
              className="absolute inset-0 bg-obsidian/90 backdrop-blur-sm cursor-default"
              onClick={closeLightbox}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-[101] flex max-h-[92vh] max-w-[min(95vw,1400px)] flex-col rounded-xl border border-zinc-500 bg-[#111111] shadow-[0_0_40px_rgba(192,192,192,0.12)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-4 border-b border-zinc-700 px-4 py-3">
                <p className="truncate text-sm font-medium text-metallic">{lightboxAsset.alt}</p>
                <button
                  type="button"
                  aria-label="Close"
                  onClick={closeLightbox}
                  className="flex-shrink-0 rounded-md p-2 text-metallic transition-colors hover:bg-zinc-800 hover:text-crisp focus:outline-none focus:ring-2 focus:ring-metallic"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="relative min-h-0 flex-1 overflow-auto p-2 sm:p-4">
                {/* eslint-disable-next-line @next/next/no-img-element -- lightbox needs intrinsic dimensions for object-contain */}
                <img
                  src={lightboxAsset.src}
                  alt={lightboxAsset.alt}
                  className="mx-auto block max-h-[calc(92vh-5rem)] w-auto max-w-full object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
