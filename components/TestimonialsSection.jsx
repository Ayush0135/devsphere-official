"use client";

import { useRef } from "react";

const testimonials = [
  {
    headline: "Absolutely Awesome",
    text: "Devsphere turned our basic idea into a polished web app. Clean UI, smooth performance and they handled every revision calmly.",
    name: "Rohan Mehta",
    role: "Founder, FinEdge Analytics",
  },
  {
    headline: "Professional Team",
    text: "Clear communication from day one. They set timelines, shared progress and shipped exactly what was promised for our company website.",
    name: "Sneha Kulkarni",
    role: "Marketing Lead, Brandora",
  },
  {
    headline: "Excellent Work",
    text: "Our old site was slow and outdated. After the redesign, our leads almost doubled within a month.",
    name: "Amit Verma",
    role: "Director, Verma Logistics",
  },
  {
    headline: "Super Reliable",
    text: "Zero drama, quick updates and proper documentation. They maintain our SaaS dashboard like an in-house team.",
    name: "Priyanka Shah",
    role: "Product Manager, TaskFlow",
  },
  {
    headline: "Great Understanding",
    text: "They understood our non-technical explanation and turned it into a working product with smart flow suggestions.",
    name: "Karan Gupta",
    role: "Co-Founder, EduSpark",
  },
  {
    headline: "Fast Delivery",
    text: "We had a tight launch date. They shipped MVP on time and then scaled it further step by step.",
    name: "Ishita Agarwal",
    role: "Founder, Casa Interiors",
  },
  {
    headline: "Pixel Perfect UI",
    text: "Our clients love the new interface. Smooth, modern and looks premium on every screen.",
    name: "Vikram Sinha",
    role: "CEO, Northbay Advisors",
  },
  {
    headline: "Smooth Collaboration",
    text: "WhatsApp + Loom + weekly calls = no confusion, no delays, no hidden costs.",
    name: "Neha Jain",
    role: "Operations Head, HealthFirst Clinic",
  },
  {
    headline: "Tech + Business Mindset",
    text: "They suggested flows that improved our onboarding conversion. Not just coding, real business thinking.",
    name: "Siddharth Rao",
    role: "Founder, Onboardly",
  },
  {
    headline: "Solid Code Quality",
    text: "Our internal tech team reviewed their work and was impressed with structure & API handling.",
    name: "Rahul Desai",
    role: "CTO, NovaPay",
  },
  {
    headline: "Helpful After Launch",
    text: "Quick tweaks, optimization and analytics setup even after final delivery.",
    name: "Ananya Singh",
    role: "Growth Lead, Bloom Skincare",
  },
  {
    headline: "Clean Modern Design",
    text: "Minimal, fast, mobile-first website exactly what we needed for local business marketing.",
    name: "Mahesh Patil",
    role: "Owner, GoTrip Holidays",
  },
  {
    headline: "Trustworthy Partner",
    text: "We treat Devsphere as our remote tech department now. They handle everything end-to-end.",
    name: "Farhan Ali",
    role: "Managing Partner, LegalDesk Pro",
  },
  {
    headline: "Great For Startups",
    text: "Wireframes to finished product without wasting money or time. Highly recommended for new founders.",
    name: "Divya Reddy",
    role: "Founder, HabitNest India",
  },
  {
    headline: "Value For Money",
    text: "For the quality of UI/UX, code and support we received, the price was more than fair.",
    name: "Yash Malhotra",
    role: "Owner, UrbanFit Studio",
  },
];

export default function TestimonialsSection() {
  const rowRef = useRef(null);

  const scrollByAmount = (amount) => {
    if (!rowRef.current) return;
    rowRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  const handleWheel = (e) => {
    if (!rowRef.current) return;
    // convert vertical wheel into horizontal scroll when hovering
    rowRef.current.scrollLeft += e.deltaY;
  };

  return (
    <section className="w-full bg-[#05060a] py-24 text-slate-100">
      <div className="text-center px-4">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
          Clients Opinion
        </p>
        <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
          What Our Clients Say About Devsphere
        </h2>
      </div>

      <div className="relative mt-12">
        {/* left arrow */}
        <button
          onClick={() => scrollByAmount(-400)}
          className="hidden md:flex absolute left-4 top-1/2 z-10 h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition"
        >
          ‹
        </button>

        {/* right arrow */}
        <button
          onClick={() => scrollByAmount(400)}
          className="hidden md:flex absolute right-4 top-1/2 z-10 h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition"
        >
          ›
        </button>

        {/* FULL-WIDTH ROW – scrollbar hidden */}
        <div
          className="w-full overflow-x-auto overflow-y-hidden scrollbar-hide snap-x snap-mandatory"
          ref={rowRef}
          onWheel={handleWheel}
        >
          <div className="flex gap-8 min-w-max px-8">
            {testimonials.map((t, i) => (
              <article
                key={i}
                className="snap-center w-[320px] md:w-[420px] flex-shrink-0 rounded-3xl border border-white/5 bg-gradient-to-b from-slate-900/80 to-slate-900/30 px-8 py-10 shadow-[0_18px_40px_rgba(0,0,0,0.45)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Clients Opinion
                </p>
                <h3 className="mt-3 text-2xl font-semibold md:text-3xl">
                  {t.headline}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-200/90">
                  {t.text}
                </p>
                <div className="mt-6 text-sm font-medium text-slate-100">
                  {t.name}
                </div>
                <div className="text-xs text-slate-400">{t.role}</div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
