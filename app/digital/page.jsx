"use client";

import Image from "next/image";
import { useState } from "react";
import ConsultationForm from "@/components/ConsultationForm";

export default function DigitalSolutionPage() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

   const [openForm, setOpenForm] = useState(false);

  return (
    <>
    <main className="bg-white text-slate-900 mt-24">
      {/* HERO */}
      <section className="relative w-full bg-[#111827] text-white py-20 md:py-24">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5hbHl0aWNzJTIwZGFzaGJvYXJkJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Digital marketing background"
            fill
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/40" />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Digital Marketing Solutions
          </h1>
          <p className="mt-4 text-sm md:text-base text-slate-200 max-w-3xl mx-auto">
            Landing pages, funnels, SEO basics and tracking setup to turn your
            website into a consistent lead generation engine.
          </p>
          <button
            onClick={()=>{
              setOpenForm(true)
            }}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#EAC21B] px-6 py-3 text-sm font-semibold text-[#111827] shadow-md hover:bg-yellow-300 cursor-pointer"
          >
            Book a Free Consultation →
          </button>
        </div>
      </section>

      {/* INTRO */}
      <section className="w-full bg-slate-50 py-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 md:flex-row md:items-center">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Make Your Website Work Like a Salesperson
            </h2>
            <p className="mt-4 text-sm md:text-base text-slate-600">
              Devsphere helps you turn traffic into leads by aligning your
              website structure, content, CTAs and tracking with your marketing
              goals.
            </p>
            <p className="mt-3 text-sm md:text-base text-slate-600">
              We focus on the foundations: clear messaging, conversion-focused
              layouts, and proper analytics so you know which campaigns bring
              results.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative h-64 w-full max-w-md rounded-3xl bg-slate-200 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1657727534685-36b09f84e193?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2Vic2l0ZSUyMGFuYWx5dGljcyUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Marketing analytics dashboard"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="w-full bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Why Choose Our Digital Marketing Support?
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-600 italic max-w-3xl mx-auto">
            We bridge the gap between design, development and marketing — so
            your website and campaigns are coordinated, not separate.
          </p>
        </div>

        <div className="mx-auto mt-10 flex max-w-5xl flex-col gap-10 px-4 md:flex-row md:items-center">
          <div className="md:w-1/2 flex justify-center">
            <div className="relative h-64 w-full max-w-md rounded-3xl bg-slate-200 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1622258415358-f4893ac9384b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHV4JTIwZGVzaWduJTIwbWVldGluZyUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Team looking at marketing reports"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="md:w-1/2">
            <p className="text-sm md:text-base text-slate-600">
              With Devsphere, you get:
            </p>
            <ul className="mt-4 space-y-3 text-sm md:text-base text-slate-700">
              <li>🟣 Landing pages built specifically for campaigns.</li>
              <li>🟡 Clear CTAs connected to forms, WhatsApp or bookings.</li>
              <li>🟢 On-page SEO basics so you don&apos;t start from zero.</li>
              <li>🔵 Analytics & conversion tracking correctly implemented.</li>
              <li>🟠 Regular review and optimization suggestions.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* DIFFERENT */}
      <section className="w-full bg-[#111827] text-white py-12">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            How Are We Different?
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-300 max-w-3xl mx-auto">
            We build marketing-ready websites and pages from day one — not
            separate “dev” and “marketing” pieces that don&apos;t fit.
          </p>
        </div>
      </section>

      <section className="w-full bg-slate-50 py-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 md:flex-row md:items-center">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold tracking-tight">
              We generate search- & conversion-friendly experiences.
            </h3>
            <p className="mt-4 text-sm md:text-base text-slate-600">
              Clean structure, fast loading, and messaging aligned with your
              offer — so campaigns don&apos;t leak clicks on confusing pages.
            </p>
            <p className="mt-3 text-sm md:text-base text-slate-600">
              We ensure pages are ready for Google, Meta and other ad platforms
              with proper tags, pixels and events.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative h-64 w-full max-w-md rounded-3xl bg-slate-200 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z29vZ2xlJTIwYW5hbHl0aWNzJTIwc2NyZWVufGVufDB8fDB8fHww"
                alt="SEO and marketing workflow"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ORANGE STEPS */}
      <section className="w-full bg-[#F97316] py-16 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            We help your business grow at every funnel stage.
          </h2>
          <p className="mt-3 text-sm md:text-base text-orange-100 max-w-3xl mx-auto">
            From first impression to enquiry, we take care of the full journey.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-6 px-4 md:grid-cols-3">
          {[
            "Set up clear, focused landing pages for your campaigns.",
            "Connect forms, WhatsApp & CRM so leads are captured cleanly.",
            "Track events, analyse results and improve each iteration.",
          ].map((text, i) => (
            <div
              key={i}
              className="rounded-3xl bg-black/85 px-6 py-8 text-center shadow-lg"
            >
              <div className="text-3xl font-semibold">{i + 1}</div>
              <p className="mt-4 text-sm text-slate-100">{text}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs md:text-sm text-orange-100">
          This gives you a marketing system you can measure and improve.
        </p>
      </section>

      {/* EMPOWER */}
      <section className="w-full bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            We Empower Your Marketing Team
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-600 max-w-3xl mx-auto">
            We give your team the technical base they need: pages, tracking and
            reports that are ready for experiments.
          </p>
        </div>

        <div className="mx-auto mt-10 flex max-w-5xl flex-col gap-10 px-4 md:flex-row md:items-center">
          <div className="md:w-1/2 flex justify-center">
            <div className="relative h-64 w-full max-w-md rounded-3xl bg-slate-200 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1569653402334-2e98fbaa80ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbXB1dGVyJTIwdHJhaW5pbmclMjBzZXNzaW9ufGVufDB8fDB8fHww"
                alt="Marketing team working"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="md:w-1/2 text-sm md:text-base text-slate-700">
            <p>We support you with:</p>
            <ul className="mt-4 space-y-3">
              <li>🟣 Campaign-specific landing pages & thank-you pages.</li>
              <li>🟡 On-page SEO & basic technical SEO hygiene.</li>
              <li>🟢 Pixel, tag & event tracking setup (GA4, Meta etc.).</li>
              <li>🔵 Simple dashboards for key funnel metrics.</li>
              <li>🟠 Suggestions based on performance and user behaviour.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="w-full bg-[#00AEB4] py-16 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Our Marketing Tech Expertise
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-6 px-4 md:grid-cols-3">
          {[
            "Landing page & funnel design for service businesses.",
            "Technical tracking & integration with marketing tools.",
            "Close collaboration with your marketing partners / team.",
          ].map((text, i) => (
            <div
              key={i}
              className="rounded-3xl bg-[#111827] px-6 py-8 text-center shadow-lg"
            >
              <div className="text-3xl font-semibold">{i + 1}</div>
              <p className="mt-4 text-sm text-slate-100">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PLANS */}
      <section className="w-full bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Consider Your Plans
          </h2>
        </div>

        <div className="mx-auto mt-8 flex max-w-5xl flex-wrap justify-center gap-4 px-4">
          {[
            "Website & Landing Page Audit",
            "Landing Page & Funnel Setup",
            "Tracking, Reports & Optimization",
          ].map((label, idx) => (
            <div
              key={label}
              className={`min-w-[220px] rounded-2xl border px-5 py-4 text-sm font-medium shadow-sm ${
                idx === 0
                  ? "border-[#00AEB4] bg-[#E0F7F8] text-[#006970]"
                  : "border-slate-200 bg-white text-slate-700"
              }`}
            >
              {label}
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-5xl flex-col gap-10 px-4 md:flex-row md:items-start">
          <div className="md:w-1/2 text-sm md:text-base text-slate-700">
            <h3 className="text-lg font-semibold">
              Website & Landing Page Audit includes:
            </h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                "Current funnel & UX review",
                "Copy & messaging suggestions",
                "Speed & technical SEO checks",
                "Lead capture & follow-up analysis",
                "Tracking & events verification",
                "Prioritized improvement roadmap",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 text-xs text-slate-700 border border-slate-200"
                >
                  <span className="text-[#00AEB4] text-lg">»</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative h-64 w-full max-w-md rounded-3xl bg-slate-200 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFya2V0aW5nJTIwYXVkaXQlMjBsYXB0b3AlMjBjaGFydHN8ZW58MHx8MHx8fDA%3D"
                alt="Marketing consulting"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="w-full bg-[#111827] py-12 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <p className="text-sm md:text-base text-slate-200">
            Want a website and funnel that supports your marketing, not blocks
            it?
          </p>
          <p className="mt-3 text-sm md:text-base text-[#00AEB4]">
            Contact Devsphere to align your website, tracking and campaigns.
          </p>
        </div>
      </section>

      {/* <StartCooperationSection /> */}
    </main>
 <ConsultationForm open={openForm} onClose={() => setOpenForm(false)} />
    </>
  );
}
