// components/StartCooperationSection.tsx
"use client"
import { useState } from "react";
import ConsultationForm from "./ConsultationForm";

export default function StartCooperationSection() {
     const [open, setOpen] = useState(false);
  return (
    <>
    <section className="w-full bg-[#05060a] py-20 text-slate-50">
      {/* Top CTA row */}
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-pink-300">Let&apos;s Talk</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
            Start Collaboration with Devsphere
          </h2>
          <p className="mt-3 max-w-xl text-sm text-slate-400">
            Tell us about your idea, and we&apos;ll help you plan, design and
            build the right website or software solution for your business.
          </p>
        </div>

  <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center rounded-full border border-slate-200 px-7 py-3 text-sm font-medium text-slate-50 shadow-sm transition hover:bg-slate-50 hover:text-black"
          >
            Free Consultation
          </button>
      </div>

      {/* Services columns */}
      <div className="mx-auto mt-12 max-w-6xl border-t border-white/5 px-4 pt-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 */}
          <div>
            <h3 className="text-sm font-semibold text-slate-100">
              Website Solutions
            </h3>
            <div className="mt-2 h-0.5 w-10 rounded-full bg-slate-500" />
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>Business & Portfolio Websites</li>
              <li>Landing Pages for Campaigns</li>
              <li>E-commerce & Booking Sites</li>
              <li>Fast, Mobile-First UI/UX</li>
              <li>SEO-Friendly Structure</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-sm font-semibold text-slate-100">
              Software &amp; AI Solutions
            </h3>
            <div className="mt-2 h-0.5 w-10 rounded-full bg-slate-500" />
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>Custom Web Applications</li>
              <li>SaaS Product Development</li>
              <li>Internal Tools & Dashboards</li>
              <li>AI Assistants & Automation</li>
              <li>API Integrations & Workflows</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-sm font-semibold text-slate-100">
              Growth &amp; Digital Marketing
            </h3>
            <div className="mt-2 h-0.5 w-10 rounded-full bg-slate-500" />
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>Conversion-Focused Landing Pages</li>
              <li>Basic SEO Setup</li>
              <li>Tracking & Analytics Integration</li>
              <li>Funnel & Lead Form Optimization</li>
              <li>Performance Review & Iterations</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-sm font-semibold text-slate-100">
              Data &amp; Cybersecurity
            </h3>
            <div className="mt-2 h-0.5 w-10 rounded-full bg-slate-500" />
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>Analytics & Reporting Dashboards</li>
              <li>Business Insights from Data</li>
              <li>Security Best-Practice Setup</li>
              <li>Basic Vulnerability Checks</li>
              <li>Ongoing Monitoring & Support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
      <ConsultationForm open={open} onClose={() => setOpen(false)} />
    </>
  );
}
