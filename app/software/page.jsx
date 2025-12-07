"use client";

import Image from "next/image";
import { useState } from "react";
import ConsultationForm from "@/components/ConsultationForm";

export default function SoftwareSolutionsPage() {
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
            src="https://images.unsplash.com/photo-1648459776041-cbeab708f17b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3liZXIlMjBncmlkJTIwZGFyayUyMGFic3RyYWN0fGVufDB8fDB8fHww" // put your own abstract-tech image here
            alt="Software solutions background"
            fill
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Software Solutions
          </h1>
          <p className="mt-4 text-sm md:text-base text-slate-200 max-w-3xl mx-auto">
            Custom web applications, SaaS products and internal tools built to
            automate work, streamline operations and scale your business.
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
              Software Solutions for Real-World Operations
            </h2>
            <p className="mt-4 text-sm md:text-base text-slate-600">
              Devsphere builds software that connects your business processes,
              teams and data. We design systems that remove manual work and help
              you see everything clearly in one place.
            </p>
            <p className="mt-3 text-sm md:text-base text-slate-600">
              From dashboards and portals to full SaaS products, we take care
              of planning, architecture, UI, backend, integrations and
              deployment.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative h-64 w-full max-w-md rounded-3xl bg-slate-200 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1677165472633-2a1586b151d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fHdlYiUyMGFwcCUyMGRhc2hib2FyZCUyMG9uJTIwc2NyZWVufGVufDB8fDB8fHww"
                alt="Software dashboard preview"
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
            Why Choose Our Software Solutions?
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-600 italic max-w-3xl mx-auto">
            We don&apos;t just “code features”. We understand your workflows,
            then build software that supports how you actually run your
            business.
          </p>
        </div>

        <div className="mx-auto mt-10 flex max-w-5xl flex-col gap-10 px-4 md:flex-row md:items-center">
          <div className="md:w-1/2 flex justify-center">
            <div className="relative h-64 w-full max-w-md rounded-3xl bg-slate-200 overflow-hidden">
              <Image
                src="https://plus.unsplash.com/premium_photo-1733259673527-dbf70ab827b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRldmVsb3BlcnMlMjBkaXNjdXNzaW5nJTIwc29mdHdhcmV8ZW58MHx8MHx8fDA%3D"
                alt="Team planning software"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="md:w-1/2">
            <p className="text-sm md:text-base text-slate-600">
              Our software projects are:
            </p>
            <ul className="mt-4 space-y-3 text-sm md:text-base text-slate-700">
              <li>🟣 Tailored to your processes, not generic templates.</li>
              <li>🟡 Built with modern, scalable tech (Next.js / Node / DB).</li>
              <li>🟢 Designed collaboratively with you in short feedback loops.</li>
              <li>🔵 Documented and maintainable for the long term.</li>
              <li>🟠 Backed with support and future feature planning.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* DIFFERENCE BANNER + SECTION */}
      <section className="w-full bg-[#111827] text-white py-12">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            How Are We Different?
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-300 max-w-3xl mx-auto">
            When there are many vendors offering custom software, why work with
            Devsphere? Here&apos;s the key.
          </p>
        </div>
      </section>

      <section className="w-full bg-slate-50 py-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 md:flex-row md:items-center">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold tracking-tight">
              We generate workflow-first, scalable solutions.
            </h3>
            <p className="mt-4 text-sm md:text-base text-slate-600">
              We start from your process: what data you need, who uses it, and
              what decisions must be made. Then we design software that makes
              those tasks easier and faster.
            </p>
            <p className="mt-3 text-sm md:text-base text-slate-600">
              Our systems are built to scale: proper database design, robust
              APIs and future-ready architecture so new features can be added
              without chaos.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative h-64 w-full max-w-md rounded-3xl bg-slate-200 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2VydmVyJTIwcm9vbSUyMHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D"
                alt="Scalable software architecture"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ORANGE STYLE STEPS */}
      <section className="w-full bg-[#F97316] py-16 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            We help your operations grow with the right tools.
          </h2>
          <p className="mt-3 text-sm md:text-base text-orange-100 max-w-3xl mx-auto">
            Our software process focuses on clarity, maintainability and actual
            business impact.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-6 px-4 md:grid-cols-3">
          {[
            "Map your processes and pain points clearly.",
            "Design the right modules, roles & data flows.",
            "Build, test and iterate with your users in the loop.",
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
          This approach gives you software that your team actually uses and
          trusts.
        </p>
      </section>

      {/* EMPOWER BUSINESS */}
      <section className="w-full bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            We Empower Your Business
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-600 max-w-3xl mx-auto">
            Good software doesn&apos;t just save time, it gives you clarity and
            control. We help you see your operations in one place and act
            faster.
          </p>
        </div>

        <div className="mx-auto mt-10 flex max-w-5xl flex-col gap-10 px-4 md:flex-row md:items-center">
          <div className="md:w-1/2 flex justify-center">
            <div className="relative h-64 w-full max-w-md rounded-3xl bg-slate-200 overflow-hidden">
              <Image
                src="https://plus.unsplash.com/premium_photo-1661879491808-880484dddb1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwb3BlbiUyMG9mZmljZSUyMHdvcmtpbmd8ZW58MHx8MHx8fDA%3D"
                alt="Empowering business via software"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="md:w-1/2 text-sm md:text-base text-slate-700">
            <p>We are here to help you with:</p>
            <ul className="mt-4 space-y-3">
              <li>🟣 Internal dashboards & admin panels.</li>
              <li>🟡 Client portals, CRMs and booking systems.</li>
              <li>🟢 Automation of manual spreadsheets & email chains.</li>
              <li>🔵 Integrations with payment gateways & third-party APIs.</li>
              <li>🟠 Role-based access control & secure data handling.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* EXPERTISE (TEAL) */}
      <section className="w-full bg-[#00AEB4] py-16 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Our Software Expertise
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-6 px-4 md:grid-cols-3">
          {[
            "Experience with multi-tenant SaaS & role-based apps.",
            "Full-stack team: UI/UX, frontend, backend & DevOps.",
            "Long-term partnerships for support & new modules.",
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
            "Process & System Consulting",
            "Custom Software Development",
            "Maintenance & Feature Support",
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
              Process & System Consulting includes:
            </h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                "Process mapping workshops",
                "Feature & module prioritisation",
                "Tech stack & architecture planning",
                "Data model & integration strategy",
                "Roadmap & phased delivery plan",
                "Cost & timeline estimation",
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
                src="https://plus.unsplash.com/premium_photo-1661400407813-c21af2b2c111?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29uc3VsdGFudCUyMHNob3dpbmclMjBhbmFseXRpY3MlMjBvbiUyMHNjcmVlbnxlbnwwfHwwfHx8MA%3D%3D"
                alt="Software consulting"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BLACK CTA BAND */}
      <section className="w-full bg-[#111827] py-12 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <p className="text-sm md:text-base text-slate-200">
            Partner with Devsphere to design and build the software backbone of
            your business.
          </p>
          <p className="mt-3 text-sm md:text-base text-[#00AEB4]">
            Contact us to turn your processes into powerful, scalable tools.
          </p>
        </div>
      </section>

      {/* Here you can include your StartCooperationSection with id="contact" */}
      {/* <StartCooperationSection /> */}
    </main>
        <ConsultationForm open={openForm} onClose={() => setOpenForm(false)} />
    </>
  );
}
