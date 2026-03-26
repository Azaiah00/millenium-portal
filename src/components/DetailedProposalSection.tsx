"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  FileText, 
  Target, 
  Settings, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck,
  Calendar,
  Clock,
  Smartphone
} from "lucide-react";

export default function DetailedProposalSection() {
  const sections = [
    {
      title: "1. One-Time Website Revamp",
      investment: "$500 Setup Fee",
      icon: Settings,
      items: [
        "Refreshing the look and feel of the website",
        "Improving layout and visual presentation",
        "Updating key pages for clearer messaging",
        "Strengthening calls to action (CTAs)",
        "Mobile & Desktop UX optimization",
        "Better positioning for Security, Academy, and Transport"
      ],
      goals: ["Build trust faster", "Present as established/professional", "Encourage more inquiries"]
    },
    {
      title: "2. Monthly Social & Google Ad Management",
      investment: "$1,000 / Month",
      icon: Smartphone,
      items: [
        "Complete content strategy & planning",
        "Graphic design & branded post creation",
        "Caption writing, posting & scheduling",
        "Hashtag strategy & profile optimization",
        "Reels/Story content implementation",
        "Instagram campaign management for Academy & Transport",
        "Google Ad management: account structure, keywords, and ongoing optimization",
        "Search campaigns aligned with Training Academy & Transportation lead goals",
        "Ad performance reviews tied to monthly reporting"
      ],
      focus: ["Training Academy leads", "Transportation inquiries", "Brand awareness"]
    },
    {
      title: "3. Maintenance, SEO & Reporting",
      investment: "Included in Monthly Fee",
      icon: TrendingUp,
      items: [
        "Routine website updates & content edits",
        "On-page SEO & structure optimization",
        "Search-friendly content updates",
        "Analytics tracking (Traffic, Behavior, Leads)",
        "Landing-page and conversion signals to support Google Ads & SEO",
        "Monthly performance data reports"
      ]
    }
  ];

  return (
    <section className="relative border-t border-gunmetal bg-[#050505] py-32 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-metallic/20 bg-metallic/5 mb-6">
            <FileText className="w-4 h-4 text-metallic" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-metallic">Official Proposal</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-crisp uppercase tracking-tight mb-6">
            Digital Marketing & <span className="text-metallic">Website Services</span>
          </h2>
          <p className="text-lg text-metallic/70 max-w-2xl mx-auto">
            Prepared for <span className="text-crisp font-semibold">The Millenium Corp</span> · Charlottesville & Central Virginia
          </p>
        </motion.div>

        {/* Overview & Objective */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            className="bg-gunmetal/20 border border-zinc-800 p-8 rounded-xl"
          >
            <h3 className="text-xl font-bold text-crisp mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-metallic" />
              Proposal Overview
            </h3>
            <p className="text-metallic/80 leading-relaxed text-sm sm:text-base">
              The main opportunity now is to build a stronger digital presence that reflects the professionalism of the company and helps turn online visitors into real customers. This proposal creates a connected system where the website, Instagram,{" "}
              <span className="text-crisp font-medium">Google Ad management</span>, content, SEO, and reporting all work together.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            className="bg-gunmetal/20 border border-zinc-800 p-8 rounded-xl"
          >
            <h3 className="text-xl font-bold text-crisp mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-metallic" />
              Primary Objective
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-metallic/80">
              {[
                "Improve online image",
                "Modernize the website",
                "Active Instagram presence",
                "Google Ad management for high-intent leads",
                "Increase Academy awareness",
                "Generate Transport leads",
                "Implement strong SEO"
              ].map((obj, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-metallic/50" />
                  {obj}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 mb-24">
          {sections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-[#0A0A0A] border border-zinc-800 p-8 sm:p-10 hover:border-metallic/30 transition-all duration-500"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-gunmetal rounded-lg text-metallic group-hover:scale-110 transition-transform duration-500">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-crisp">{section.title}</h3>
                    </div>
                    <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-metallic/70">
                          <CheckCircle2 className="w-4 h-4 text-metallic mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:text-right flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-zinc-800 pt-8 lg:pt-0 lg:pl-12">
                    <p className="text-xs font-bold uppercase tracking-widest text-metallic/50 mb-1">Investment</p>
                    <p className="text-3xl font-black text-crisp">{section.investment}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Why This Strategy */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gunmetal border border-zinc-500 p-10 sm:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-metallic/50 to-transparent" />
          <h3 className="text-2xl sm:text-3xl font-bold text-crisp mb-8">
            Why this strategy makes sense for <span className="text-metallic">The Millenium Corp</span>
          </h3>
          <p className="text-metallic/80 max-w-4xl mx-auto mb-12 leading-relaxed">
            The Millenium Corp already has the foundation of a strong business. Rather than offering isolated services, this proposal creates a connected system where your website, social presence,{" "}
            <span className="text-metallic font-semibold">Google Ad management</span>, and data-driven decisions all compound to build local dominance.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left max-w-5xl mx-auto">
            {[
              { icon: Clock, label: "Momentum", desc: "Build long-term visibility" },
              { icon: TrendingUp, label: "Data-Driven", desc: "Guide future growth" },
              { icon: ShieldCheck, label: "Professional", desc: "Reflect your strength" },
              { icon: Calendar, label: "Consistent", desc: "Relevant & active online" }
            ].map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.label} className="flex flex-col gap-2">
                  <Icon className="w-5 h-5 text-metallic" />
                  <p className="text-crisp font-bold text-sm uppercase tracking-wider">{feature.label}</p>
                  <p className="text-xs text-metallic/60">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Agency Branding & Term of Service Footer */}
        <div className="mt-24 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Image 
              src="/couture-house-logo.png" 
              alt="Couture House Co. Logo" 
              width={140} 
              height={140} 
              className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </motion.div>

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-metallic/40 mb-4">Term of Service</p>
          <p className="text-sm text-metallic/60 max-w-2xl mx-auto italic">
            A monthly service structure is recommended to allow enough time to build momentum, improve visibility, gather performance data, and strengthen results over time.
          </p>
        </div>

      </div>
    </section>
  );
}
