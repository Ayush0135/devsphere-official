"use client";

import Image from "next/image";
import { useState } from "react";
import ConsultationForm from "@/components/ConsultationForm";

export default function DataAnalysisPage() {
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
            src="https://images.unsplash.com/photo-1688872073226-d78c1e09a429?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnV0dXJpc3RpYyUyMGRhdGElMjBhbmFseXRpY3MlMjBibHVlfGVufDB8fDB8fHww"
            alt="Data analysis abstract"
            fill
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Data Analytics & BI Solutions
          </h1>
          <p className="mt-4 text-sm md:text-base text-slate-200 max-w-3xl mx-auto">
            Turn your business data into dashboards, reports and insights that drive growth and decision-making.
          </p>

          <button
            onClick={()=>{
                setOpenForm(true)
            }}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#EAC21B] px-6 py-3 text-sm font-semibold text-[#111827] shadow-md hover:bg-yellow-300"
          >
            Book a Free Consultation →
          </button>
        </div>
      </section>

      {/* INTRO */}
      <section className="w-full bg-slate-50 py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:flex-row md:items-center">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Data That Helps You Decide, Not Guess
            </h2>
            <p className="mt-4 text-sm md:text-base text-slate-600">
              Devsphere delivers data solutions built around your business goals. We unify and clean your information from different tools, then present it clearly in dashboards that leaders and teams can trust.
            </p>
            <p className="mt-3 text-sm md:text-base text-slate-600">
              We help you see trends, track performance, measure revenue, analyze marketing results and predict demand using real-time data pipelines.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative h-64 w-full max-w-md rounded-3xl overflow-hidden bg-white">
              <Image
                src="https://images.unsplash.com/photo-1712904322016-9c8f5aef351f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvd2VyJTIwYmklMjBsYXB0b3AlMjByZXBvcnR8ZW58MHx8MHx8fDA%3D"
                alt="Business dashboard analytics"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="w-full bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Why Choose Our Data Services?
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-600 italic max-w-3xl mx-auto">
            We don’t just make dashboards — we simplify your data so you can act faster and smarter with confidence.
          </p>
        </div>

        <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-10 px-4 md:flex-row md:items-center">
          <div className="md:w-1/2 flex justify-center">
            <div className="relative h-64 w-full max-w-md rounded-3xl bg-slate-200 overflow-hidden">
              <Image
                src="https://plus.unsplash.com/premium_photo-1661587943486-dc3839dd316d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hcmtldGVycyUyMHJldmlld2luZyUyMGFuYWx5dGljc3xlbnwwfHwwfHx8MA%3D%3D"
                alt="Team analyzing data"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="md:w-1/2">
            <ul className="space-y-3 text-sm md:text-base text-slate-700">
              <li>🟣 Data collected from CRM, Ads, Finance, Inventory, Website & Sales.</li>
              <li>🟡 Clean, accurate data that eliminates manual reporting.</li>
              <li>🟢 Real-time dashboards for management and teams.</li>
              <li>🔵 Predictive insights using AI & forecasting tools.</li>
              <li>🟠 Visual storytelling to highlight business opportunities.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* DIFFERENCE */}
      <section className="w-full bg-[#111827] text-white py-12">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            How Are We Different?
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-300 max-w-3xl mx-auto">
            We build dashboards that drive decisions — not charts that look pretty but don’t solve real problems.
          </p>
        </div>
      </section>

      <section className="w-full bg-slate-50 py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:flex-row md:items-center">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold tracking-tight">
              We deliver problem-first, insight-driven systems.
            </h3>
            <p className="mt-4 text-sm md:text-base text-slate-600">
              Before building dashboards, we understand your business model, KPIs, departments, bottlenecks and conversion processes. We identify what metrics truly matter.
            </p>
            <p className="mt-3 text-sm md:text-base text-slate-600">
              This helps leadership, marketing, sales and finance work together using one source of truth.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative h-64 w-full max-w-md rounded-3xl overflow-hidden bg-slate-200">
              <Image
                src="https://plus.unsplash.com/premium_photo-1664476447358-15cf80c77511?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbGxhYm9yYXRpb24lMjBvbiUyMGFuYWx5dGljcyUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Data insights strategy"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ORANGE STEPS */}
      <section className="w-full bg-[#F97316] py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Our Process For Smarter Reporting
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-6 px-4 md:grid-cols-3">
          {[
            "Identify KPIs, data sources & reporting goals.",
            "Clean, unify & automate your data pipelines.",
            "Build dashboards & reports that drive decisions.",
          ].map((text, i) => (
            <div
              key={i}
              className="rounded-3xl bg-black/85 px-6 py-8 text-center shadow-lg"
            >
              <div className="text-3xl font-semibold">{i + 1}</div>
              <p className="mt-4 text-sm text-orange-100">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EMPOWER BUSINESS */}
      <section className="w-full bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            We Empower Your Business Teams
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-600 max-w-3xl mx-auto">
            We give every department the data they need to reach goals faster, without Excel chaos or guesswork.
          </p>
        </div>

        <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-10 px-4 md:flex-row md:items-center">
          <div className="md:w-1/2 flex justify-center">
            <div className="relative h-64 w-full max-w-md rounded-3xl overflow-hidden bg-slate-200">
              <Image
                src="https://images.unsplash.com/photo-1620365744528-88da1e08ac96?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YW5hbHl0aWNzJTIwc2NyZWVuJTIwY2xvc2V1cHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Business dashboard teamwork"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="md:w-1/2 text-sm md:text-base text-slate-700">
            <p>We support teams with:</p>
            <ul className="mt-4 space-y-3">
              <li>🟣 Marketing analytics & lead source quality tracking.</li>
              <li>🟡 Sales funnel metrics & forecasting.</li>
              <li>🟢 Finance dashboards for revenue & cost tracking.</li>
              <li>🔵 Operations & inventory reporting.</li>
              <li>🟠 Management KPIs for quick decisions.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* EXPERTISE (TEAL) */}
      <section className="w-full bg-[#00AEB4] py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Our Data Expertise
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-6 px-4 md:grid-cols-3">
          {[
            "Power BI / Tableau / Looker Studio Solutions",
            "Data Warehousing & ETL Automation",
            "AI-driven Forecasting & Business Insights",
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
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Consider Your Plans
          </h2>
        </div>

        <div className="mx-auto mt-8 flex max-w-6xl flex-wrap justify-center gap-4 px-4">
          {[
            "Data Audit & Strategy",
            "Dashboards & BI Development",
            "Automation & Support",
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

        {/* PLAN DETAILS */}
        <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-10 px-4 md:flex-row md:items-start">
          <div className="md:w-1/2 text-sm md:text-base text-slate-700">
            <h3 className="text-lg font-semibold">
              Data Audit & Strategy includes:
            </h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                "Data source mapping",
                "KPI & metric planning",
                "Data quality assessment",
                "Tech stack recommendation",
                "Dashboard goals & user needs",
                "Rollout roadmap & forecasting",
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
                src="https://images.unsplash.com/photo-1758518727707-729d9bef1a16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2plY3QlMjBwbGFubmluZyUyMGFuYWx5dGljc3xlbnwwfHwwfHx8MA%3D%3D"
                alt="Data consulting"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="w-full bg-[#111827] py-12 text-white">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <p className="text-sm md:text-base text-slate-200">
            Struggling with scattered reports & confusing Excel sheets?
          </p>
          <p className="mt-3 text-sm md:text-base text-[#00AEB4]">
            Contact Devsphere to build clear, automated data systems for smarter decisions.
          </p>
        </div>
      </section>
    </main>
     <ConsultationForm open={openForm} onClose={() => setOpenForm(false)} />
    </>
  );
}
