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
  Smartphone,
  BarChart3,
  Sparkles,
  Layers,
} from "lucide-react";

/** Strikethrough row for the retired $1k tier — keeps the anchor visible for a future upsell. */
function RetiredTierRow({ children }: { children: React.ReactNode }) {
  return (
    <li className="relative flex items-start gap-3 text-sm text-metallic/35 line-through decoration-metallic/40 decoration-2">
      <CheckCircle2 className="w-4 h-4 text-metallic/25 mt-0.5 flex-shrink-0" />
      <span>{children}</span>
    </li>
  );
}

export default function DetailedProposalSection() {
  return (
    <section className="relative border-t border-gunmetal bg-[#050505] py-32 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header — revised proposal framing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-metallic/20 bg-metallic/5 px-3 py-1">
              <FileText className="h-4 w-4 text-metallic" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-metallic">
                Revised proposal
              </span>
            </div>
            <span className="rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-green-400/90">
              Active offer · $500 / mo
            </span>
          </div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-metallic/60">
            The Millenium Corp
          </p>
          <h2 className="mb-4 text-3xl font-black uppercase tracking-tight text-crisp sm:text-4xl md:text-5xl">
            Digital Marketing &{" "}
            <span className="text-metallic">Website Support</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-metallic/70">
            Prepared for{" "}
            <span className="font-semibold text-crisp">The Millenium Corp</span> · Charlottesville
            &amp; Central Virginia
          </p>
        </motion.div>

        {/* Investment snapshot — hero numbers */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          className="mb-20 grid gap-4 sm:grid-cols-2"
        >
          <div className="rounded-xl border border-zinc-700 bg-gradient-to-br from-[#111] to-[#0a0a0a] p-8 text-center shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-metallic/50">
              One-time
            </p>
            <p className="mb-1 font-mono text-4xl font-black text-crisp sm:text-5xl">$500</p>
            <p className="text-sm text-metallic/70">Website revamp</p>
          </div>
          <div className="relative overflow-hidden rounded-xl border border-metallic/30 bg-gradient-to-br from-metallic/10 to-[#0a0a0a] p-8 text-center ring-1 ring-metallic/20">
            <div className="absolute right-0 top-0 rounded-bl-lg bg-metallic/15 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-metallic">
              Monthly
            </div>
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-metallic/60">
              Ongoing
            </p>
            <p className="mb-1 font-mono text-4xl font-black text-crisp sm:text-5xl">$500</p>
            <p className="text-sm text-metallic/80">Digital marketing &amp; website support / mo</p>
          </div>
        </motion.div>

        {/* Summary + goals */}
        <div className="mb-20 grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            className="rounded-xl border border-zinc-800 bg-gunmetal/20 p-8"
          >
            <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-crisp">
              <Target className="h-5 w-5 text-metallic" />
              Proposal summary
            </h3>
            <p className="text-sm leading-relaxed text-metallic/80 sm:text-base">
              A streamlined package: one-time website revamp plus an affordable monthly system
              focused on Instagram growth, Training Academy promotion, Transportation promotion,
              website maintenance, and basic analytics—without replacing your existing Google Ads
              (we complement what you already run).
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            className="rounded-xl border border-zinc-800 bg-gunmetal/20 p-8"
          >
            <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-crisp">
              <ShieldCheck className="h-5 w-5 text-metallic" />
              Primary goals
            </h3>
            <ul className="grid grid-cols-1 gap-3 text-sm text-metallic/80 sm:grid-cols-2">
              {[
                "Present Millenium more professionally online",
                "Improve site appearance, structure, and CTAs",
                "Keep Instagram active, branded, and consistent",
                "Promote Academy classes with ongoing content & campaigns",
                "Promote Transportation with stronger visibility",
                "Monthly site maintenance + simple reporting",
              ].map((obj, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-metallic/50" />
                  {obj}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Executive overview */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          className="mb-20 rounded-xl border border-zinc-700/80 bg-[#0c0c0c] p-8 sm:p-10"
        >
          <div className="mb-4 flex items-center gap-2 text-metallic">
            <Sparkles className="h-5 w-5" />
            <span className="text-xs font-bold uppercase tracking-[0.2em]">Executive overview</span>
          </div>
          <p className="mb-6 text-base leading-relaxed text-metallic/85 sm:text-lg">
            Thank you again for the opportunity. This revised proposal is a practical,
            budget-conscious solution that still delivers meaningful value each month: strengthen
            digital presence, present the brand more professionally, and create consistent
            promotional support for the Training Academy and Transportation—built around{" "}
            <span className="font-semibold text-crisp">two parts</span>: a one-time website revamp
            and a focused monthly package (Instagram, content, maintenance, analytics, reporting).
          </p>
          <p className="border-l-2 border-metallic/40 pl-4 text-sm italic text-metallic/70">
            <span className="font-semibold not-italic text-metallic">Recommended positioning:</span>{" "}
            Professional, trusted, locally established across Charlottesville and Central Virginia.
            Security remains the lead line; Academy and Transport are supported through ongoing
            digital promotion and brand visibility.
          </p>
        </motion.div>

        {/* 1. Website revamp */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          className="group relative mb-8 border border-zinc-800 bg-[#0A0A0A] p-8 sm:p-10 transition-all duration-500 hover:border-metallic/30"
        >
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-start">
            <div className="max-w-3xl">
              <div className="mb-6 flex items-center gap-4">
                <div className="rounded-lg bg-gunmetal p-3 text-metallic transition-transform duration-500 group-hover:scale-110">
                  <Settings className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-crisp">One-time website revamp</h3>
                  <p className="text-sm text-metallic/60">Investment · $500 one-time</p>
                </div>
              </div>
              <p className="mb-6 text-sm leading-relaxed text-metallic/75">
                Stronger first impression, clearer services, easier actions—a polished site that
                reflects quality and supports future marketing.
              </p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {[
                  "Refreshed layout and visual presentation",
                  "Improved page structure and navigation",
                  "Stronger messaging and calls to action",
                  "Clearer Security, Academy, and Transportation presentation",
                  "Cleaner UX + mobile-friendly improvements",
                  "Basic lead-focused improvements for inquiries",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-metallic/70">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-metallic" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-center border-t border-zinc-800 pt-8 text-center lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0 lg:text-right">
              <p className="mb-1 text-xs font-bold uppercase tracking-widest text-metallic/50">
                Investment
              </p>
              <p className="font-mono text-3xl font-black text-crisp sm:text-4xl">$500</p>
              <p className="mt-1 text-xs text-metallic/50">one-time</p>
            </div>
          </div>
        </motion.div>

        {/* 2. Monthly $500 — active package */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ delay: 0.05 }}
          className="group relative mb-16 border border-metallic/25 bg-gradient-to-b from-[#101010] to-[#0a0a0a] p-8 sm:p-10 ring-1 ring-metallic/10"
        >
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-start">
            <div className="max-w-3xl flex-1">
              <div className="mb-6 flex flex-wrap items-center gap-4">
                <div className="rounded-lg bg-metallic/10 p-3 text-metallic">
                  <Smartphone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-crisp">
                    Monthly digital marketing &amp; website support
                  </h3>
                  <p className="text-sm text-metallic/60">Investment · $500 per month</p>
                </div>
              </div>
              <p className="mb-6 text-sm leading-relaxed text-metallic/75">
                Instagram management, <span className="font-semibold text-crisp">12 branded posts</span>{" "}
                per month, campaign support for Academy &amp; Transportation, website maintenance,
                basic analytics, and monthly reporting.
              </p>
              <div className="grid gap-8 lg:grid-cols-2">
                <div>
                  <p className="mb-3 text-xs font-bold uppercase tracking-wider text-metallic">
                    Instagram &amp; content
                  </p>
                  <ul className="space-y-2 text-sm text-metallic/70">
                    {[
                      "Ongoing account management + profile optimization",
                      "Scheduling, captions, hashtag strategy",
                      "12 branded posts / mo — Academy & Transport focus",
                      "Credibility and brand-awareness content",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-metallic/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-3 text-xs font-bold uppercase tracking-wider text-metallic">
                    Campaigns, site &amp; data
                  </p>
                  <ul className="space-y-2 text-sm text-metallic/70">
                    {[
                      "Campaign support for classes, transport, and key pushes",
                      "Routine upkeep + minor text/image updates",
                      "Basic analytics: traffic, activity, key page trends",
                      "Monthly report: IG summary, site highlights, recommendations",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-metallic/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="mt-8 flex items-start gap-2 rounded-lg border border-zinc-800 bg-black/40 p-4 text-xs text-metallic/65">
                <BarChart3 className="mt-0.5 h-4 w-4 flex-shrink-0 text-metallic/50" />
                Because you already run Google Ads, this monthly scope is built to{" "}
                <span className="font-medium text-metallic">complement</span> those efforts—organic
                presence, brand consistency, Academy/Transport promotion, and a professional site +
                Instagram layer—not replace your paid search.
              </p>
            </div>
            <div className="flex flex-col justify-center border-t border-zinc-800 pt-8 text-center lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0 lg:text-right">
              <p className="mb-1 text-xs font-bold uppercase tracking-widest text-metallic/50">
                Investment
              </p>
              <p className="font-mono text-3xl font-black text-crisp sm:text-4xl">$500</p>
              <p className="mt-1 text-xs text-metallic/50">per month</p>
            </div>
          </div>
        </motion.div>

        {/* Retired $1k tier — crossed out, upgrade path */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          className="relative mb-20 overflow-hidden rounded-xl border border-dashed border-zinc-600 bg-[#080808] p-8 sm:p-10"
        >
          <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(-12deg,transparent,transparent_8px,rgba(255,255,255,0.03)_8px,rgba(255,255,255,0.03)_9px)]" />
          <div className="absolute right-4 top-4 rotate-6 select-none rounded border border-metallic/20 bg-obsidian/90 px-2 py-1 text-[10px] font-black uppercase tracking-widest text-metallic/50">
            Archived quote
          </div>
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <div className="mb-2 flex items-center gap-2 text-metallic/50">
                <Layers className="h-5 w-5" />
                <span className="text-xs font-bold uppercase tracking-[0.2em]">
                  Full-stack tier — parked, not deleted
                </span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-metallic/40 line-through decoration-metallic/30 decoration-2 sm:text-2xl">
                Monthly social + Google Ad management
              </h3>
              <p className="mb-6 max-w-2xl text-sm text-metallic/40 line-through">
                The original $1,000/mo scope included hands-on Google Ads management, deeper SEO
                cadence, and heavier paid-search alignment—still on the table when you decide to
                scale spend and delegate paid search fully to us.
              </p>
              <ul className="grid gap-2 sm:grid-cols-2">
                <RetiredTierRow>Complete content strategy &amp; planning</RetiredTierRow>
                <RetiredTierRow>Graphic design &amp; branded posts + Reels/Stories</RetiredTierRow>
                <RetiredTierRow>Instagram campaign management (Academy &amp; Transport)</RetiredTierRow>
                <RetiredTierRow>Google Ad management &amp; keyword optimization</RetiredTierRow>
                <RetiredTierRow>Search campaigns aligned with Academy &amp; Transport</RetiredTierRow>
                <RetiredTierRow>Ad performance reviews in monthly reporting</RetiredTierRow>
                <RetiredTierRow>Heavier SEO + landing signals bundled in monthly</RetiredTierRow>
              </ul>
            </div>
            <div className="flex shrink-0 flex-col items-center justify-center lg:pl-8">
              <p className="mb-1 text-xs font-bold uppercase tracking-widest text-metallic/30">
                Was
              </p>
              <p className="relative font-mono text-3xl font-black text-metallic/25 sm:text-4xl">
                <span className="relative">
                  $1,000
                  <span className="absolute left-0 top-1/2 h-0.5 w-full -rotate-6 bg-metallic/50" />
                </span>
              </p>
              <p className="mt-2 max-w-[200px] text-center text-[11px] leading-snug text-metallic/45">
                Want this back? Say the word—we flip the switch and widen the retainer.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Why revised + final summary */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.12 }}
          className="relative mb-16 overflow-hidden border border-zinc-500 bg-gunmetal p-10 text-center sm:p-16"
        >
          <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-metallic/50 to-transparent" />
          <h3 className="mb-6 text-2xl font-bold text-crisp sm:text-3xl">
            Why this <span className="text-metallic">revised package</span> works
          </h3>
          <ul className="mx-auto mb-10 max-w-3xl space-y-3 text-left text-sm text-metallic/80 sm:text-base">
            {[
              "Keeps the highest-impact pieces while fitting a tighter monthly number",
              "One clean monthly figure — Instagram + campaigns + site care + reporting",
              "Website maintenance inside the monthly fee = more perceived value",
              "Supports your existing ad spend with stronger brand, content, and presentation",
              "Room to expand later as the business grows",
            ].map((line, i) => (
              <li key={i} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-metallic" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <div className="mx-auto max-w-lg rounded-lg border border-zinc-700 bg-[#0a0a0a] p-6 text-left">
            <p className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-metallic/50">
              Final investment summary
            </p>
            <div className="flex justify-between border-b border-zinc-800 py-3 text-crisp">
              <span>Website revamp</span>
              <span className="font-mono font-bold">$500 one-time</span>
            </div>
            <div className="flex justify-between py-3 text-crisp">
              <span className="pr-4">Monthly digital marketing &amp; website support</span>
              <span className="shrink-0 font-mono font-bold">$500/mo</span>
            </div>
            <p className="mt-3 text-center text-xs text-metallic/55">
              Includes Instagram (12 posts/mo), campaign support, maintenance, analytics, reporting.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          className="mb-20 rounded-xl border border-zinc-800 bg-gunmetal/10 p-8 text-center"
        >
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-metallic/50">
            Approval
          </p>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-metallic/80">
            If approved, work can begin with revamp planning, Instagram content planning, branding
            alignment, analytics setup, and the monthly rollout of Training Academy and
            Transportation promotions.
          </p>
          <p className="mt-8 text-xs text-metallic/45">
            Prepared by{" "}
            <span className="font-semibold text-metallic/70">
              Frederick Sales &amp; Azaiah Wood · Couture House Co.
            </span>
          </p>
        </motion.div>

        {/* Closing conviction */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden border border-zinc-500 bg-gunmetal p-10 text-center sm:p-16"
        >
          <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-metallic/50 to-transparent" />
          <h3 className="mb-8 text-2xl font-bold text-crisp sm:text-3xl">
            Why this still makes sense for{" "}
            <span className="text-metallic">The Millenium Corp</span>
          </h3>
          <p className="mx-auto mb-12 max-w-4xl leading-relaxed text-metallic/80">
            You already have momentum in the field. This revised stack keeps digital disciplined:
            a credible site, consistent Instagram, Academy and Transport air cover, and clear
            numbers each month—without forcing a larger retainer before you&apos;re ready.
          </p>
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 text-left md:grid-cols-4">
            {[
              { icon: Clock, label: "Momentum", desc: "Long-term visibility on your terms" },
              { icon: TrendingUp, label: "Data-aware", desc: "Simple reporting, smarter calls" },
              { icon: ShieldCheck, label: "Professional", desc: "Presentation matches the brand" },
              { icon: Calendar, label: "Consistent", desc: "Monthly rhythm, not one-off spikes" },
            ].map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.label} className="flex flex-col gap-2">
                  <Icon className="h-5 w-5 text-metallic" />
                  <p className="text-sm font-bold uppercase tracking-wider text-crisp">{feature.label}</p>
                  <p className="text-xs text-metallic/60">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Agency + terms */}
        <div className="mt-24 flex flex-col items-center text-center">
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
              className="object-contain opacity-80 transition-opacity duration-300 hover:opacity-100"
            />
          </motion.div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-metallic/40">
            Term of Service
          </p>
          <p className="mx-auto max-w-2xl text-sm italic text-metallic/60">
            A monthly structure is recommended so we can build momentum, improve visibility, gather
            performance data, and strengthen results over time.
          </p>
        </div>
      </div>
    </section>
  );
}
