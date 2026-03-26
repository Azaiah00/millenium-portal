"use client";

import { motion } from "framer-motion";
import {
  Building2,
  GraduationCap,
  Car,
  MapPin,
  Search,
  Megaphone,
  BarChart3,
  Scale,
  CheckCircle2,
  Smartphone,
} from "lucide-react";

/**
 * Maps the full Millenium strategy doc to on-page proof:
 * conversion spine, local/Google, reviews, paid order, 90-day phases, KPIs, DCJS compliance.
 */
export default function GrowthSystemSection() {
  return (
    <section className="relative border-t border-gunmetal bg-obsidian py-24 overflow-hidden">
      <div className="absolute left-0 top-1/2 h-px w-full max-w-md bg-gradient-to-r from-metallic/40 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-crisp sm:text-4xl">
            The <span className="text-metallic">Complete Growth System</span>
          </h2>
          <p className="text-lg leading-relaxed text-metallic/85">
            The site overhaul and flywheel are the foundation. This layer is how we turn credibility
            into <span className="text-crisp font-medium">predictable demand</span>—Google dominance,
            ethical review velocity, paid search in the right order, and metrics your leadership can
            trust.
          </p>
        </motion.div>

        {/* Brand attributes — doc §3 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-wrap justify-center gap-3"
        >
          {["Professional", "Prepared", "Trusted", "Local"].map((attr) => (
            <span
              key={attr}
              className="border border-zinc-600 bg-[#1A1A1A] px-5 py-2 text-sm font-semibold uppercase tracking-widest text-metallic"
            >
              {attr}
            </span>
          ))}
        </motion.div>

        {/* Three outcomes — doc §5 website strategy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65 }}
          className="mb-16"
        >
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-metallic/80">
            Conversion Spine — Every Page Routes to One of Three Outcomes
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                icon: Building2,
                title: "Get a Security Quote",
                desc: "Commercial, residential, events, executive detail—high-intent B2B capture.",
              },
              {
                icon: GraduationCap,
                title: "Register for Training",
                desc: "Class calendar, pathways, and checkout—direct revenue + recruiting leverage.",
              },
              {
                icon: Car,
                title: "Book Transportation",
                desc: "Selective executive and airport inquiries—discreet, premium positioning.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col border border-zinc-600 bg-[#1A1A1A] p-6 transition-colors hover:border-metallic/40"
              >
                <item.icon className="mb-4 h-8 w-8 text-metallic" />
                <h3 className="mb-2 text-lg font-bold text-crisp">{item.title}</h3>
                <p className="text-sm leading-relaxed text-metallic/75">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Local + Google + reviews */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65 }}
            className="border border-zinc-600 bg-[#141414] p-8"
          >
            <div className="mb-4 flex items-center gap-2 text-metallic">
              <MapPin className="h-5 w-5" />
              <h3 className="text-xl font-bold text-crisp">Local Search &amp; Reputation</h3>
            </div>
            <p className="mb-6 text-metallic/80">
              Charlottesville and Central Virginia intent is winnable fast—we standardize NAP, own the
              narrative on your profile, and make reviews a disciplined habit (no incentives—just
              process).
            </p>
            <ul className="space-y-3 text-sm text-metallic/90">
              {[
                "Google Business Profile: services order—security first, academy second, transport third",
                "Weekly posts: classes, hiring, security updates, transport where appropriate",
                "Citation cleanup: one brand name, one URL, one hours story across directories",
                "Keyword clusters: armed / event / executive security; DCJS training; executive transport",
                "B2B extension: LinkedIn-first outreach to facility & property leadership where it fits the budget",
                "Transport growth: concierge handoffs—hotels, FBOs, travel desks—with discreet white-label kits",
              ].map((line, i) => (
                <li key={i} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-metallic" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Paid media order */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65 }}
            className="border border-zinc-600 bg-[#141414] p-8"
          >
            <div className="mb-4 flex items-center gap-2 text-metallic">
              <Search className="h-5 w-5" />
              <h3 className="text-xl font-bold text-crisp">Paid Media — Correct Sequence</h3>
            </div>
            <p className="mb-6 text-metallic/80">
              Budget follows proof. We do not flood cold traffic into a leaky site.
            </p>
            <ol className="space-y-4">
              {[
                { n: "1", title: "Conversion-ready website + forms", icon: Building2 },
                { n: "2", title: "Google Business Profile + local SEO", icon: MapPin },
                { n: "3", title: "Google Ads — segmented: Security | Academy | Transport", icon: Megaphone },
                { n: "4", title: "Meta / IG — class promo, retargeting, recruiting support", icon: Smartphone },
              ].map((step) => (
                <li key={step.n} className="flex gap-4 border-l-2 border-metallic/30 pl-4">
                  <span className="font-mono text-metallic">{step.n}</span>
                  <div>
                    <step.icon className="mb-1 inline h-4 w-4 text-metallic/70" />
                    <p className="font-medium text-crisp">{step.title}</p>
                  </div>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>

        {/* 90-day phases */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="mt-16"
        >
          <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-metallic/80">
            90-Day Implementation Arc
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                phase: "Foundation",
                days: "Days 1–30",
                win: "Immediate credibility: brand spine, site cleanup, GBP, analytics, review system, Instagram ignition.",
              },
              {
                phase: "Visibility",
                days: "Days 31–60",
                win: "Authority in motion: content cadence, local pages, Google posts, class promotion, richer proof assets.",
              },
              {
                phase: "Leads",
                days: "Days 61–90",
                win: "Demand acceleration: Google Ads, retargeting, landing refinement, CTA optimization by service line.",
              },
            ].map((row) => (
              <div key={row.phase} className="border border-zinc-600 bg-gunmetal/40 p-6">
                <p className="mb-1 text-xs font-bold uppercase tracking-widest text-metallic">{row.phase}</p>
                <p className="mb-3 font-mono text-sm text-crisp">{row.days}</p>
                <p className="text-sm leading-relaxed text-metallic/80">{row.win}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* KPIs + compliance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.65 }}
          className="mt-16 grid gap-8 border border-zinc-700 bg-[#0d0d0d] p-8 lg:grid-cols-2"
        >
          <div>
            <div className="mb-4 flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-metallic" />
              <h3 className="text-lg font-bold text-crisp">What Gets Measured</h3>
            </div>
            <ul className="grid gap-2 text-sm text-metallic/85 sm:grid-cols-1">
              {[
                "Security quote requests & call volume (site + GBP)",
                "Academy registrations & waitlist",
                "Transportation inquiries (qualified)",
                "Review count & velocity",
                "GBP actions, IG profile visits, cost-per-lead by line",
              ].map((kpi) => (
                <li key={kpi} className="flex gap-2 border-b border-zinc-800 py-2 last:border-0">
                  <span className="text-metallic">—</span>
                  {kpi}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-center border-t border-zinc-800 pt-8 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <div className="mb-3 flex items-center gap-2 text-metallic">
              <Scale className="h-5 w-5" />
              <h3 className="text-lg font-bold text-crisp">Virginia DCJS &amp; Advertising</h3>
            </div>
            <p className="text-sm leading-relaxed text-metallic/80">
              Virginia expects DCJS license numbers on business advertising material—including websites,
              social profiles, and digital ads. Couture House Co. bakes compliance into footers, bios,
              and creative templates so{" "}
              <span className="text-crisp font-medium">premium creative never trades away due diligence</span>.
            </p>
          </div>
        </motion.div>

        {/* Employer brand alignment — framed as partnership, not attack */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-12 max-w-3xl text-center text-sm leading-relaxed text-metallic/65"
        >
          <span className="text-metallic/90 font-semibold">Internal–external alignment.</span> Public
          marketing compounds when operations and employer brand keep pace. We recommend pairing this
          build with transparent scheduling tools, visible career pathways through MSTA, and recognition
          content—so the story prospects see matches the experience your team lives.
        </motion.p>
      </div>
    </section>
  );
}
