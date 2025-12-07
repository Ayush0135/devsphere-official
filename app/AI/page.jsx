"use client";

import Image from "next/image";
import ConsultationForm from "@/components/ConsultationForm";
import { useState } from "react";


export default function AISolutionsPage() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

    const [openForm, setOpenForm] = useState(false);

  return (
    <>
    <main className="bg-white text-slate-900 mt-24">
      {/* HERO */}
      <section className="relative w-full bg-[#020617] text-white py-20 md:py-24">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
            alt="AI abstract background"
            fill
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40" />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
            AI Solutions
          </h1>
          <p className="mt-4 text-sm md:text-base text-slate-200 max-w-3xl mx-auto">
            Custom AI agents, chatbots and automation that connect with your
            existing tools and workflows to save time and improve decisions.
          </p>
          <button
            onClick={()=>{
                setOpenForm(true)
            }}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#EAC21B] px-6 py-3 text-sm font-semibold text-[#020617] shadow-md hover:bg-yellow-300 cursor-pointer"
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
              Practical AI for Your Business
            </h2>
            <p className="mt-4 text-sm md:text-base text-slate-600">
              Devsphere builds AI experiences designed around your data, your
              team and your customers. No buzzword projects — only systems that
              actually reduce workload or improve outcomes.
            </p>
            <p className="mt-3 text-sm md:text-base text-slate-600">
              From lead-qualifying chatbots to internal AI assistants and
              document analyzers, we build solutions using modern LLM and ML
              tools, integrated with your apps.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative h-64 w-full max-w-md rounded-3xl bg-slate-200 overflow-hidden">
              <Image
                src="https://plus.unsplash.com/premium_photo-1726666269043-fb16e54646d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWklMjBhc3Npc3RhbnQlMjBpbnRlcmZhY2V8ZW58MHx8MHx8fDA%3D"
                alt="AI assistant interface"
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
            Why Choose Our AI Solutions?
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-600 italic max-w-3xl mx-auto">
            AI is powerful, but only if used in the right place. We help you
            pick high-impact use-cases, then deliver reliable solutions around
            them.
          </p>
        </div>

        <div className="mx-auto mt-10 flex max-w-5xl flex-col gap-10 px-4 md:flex-row md:items-center">
          <div className="md:w-1/2 flex justify-center">
            <div className="relative h-64 w-full max-w-md rounded-3xl bg-slate-200 overflow-hidden">
              <Image
                src="https://plus.unsplash.com/premium_photo-1664474559614-74d16c1c6f6f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJ1c2luZXNzJTIwZGF0YSUyMGRpc2N1c3Npb258ZW58MHx8MHx8fDA%3D"
                alt="AI concept visualization"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="md:w-1/2">
            <p className="text-sm md:text-base text-slate-600">
              We focus on AI that is:
            </p>
            <ul className="mt-4 space-y-3 text-sm md:text-base text-slate-700">
              <li>🟣 Tied to clear business outcomes.</li>
              <li>🟡 Grounded in your real data and docs.</li>
              <li>🟢 Safe, with permission and access controls.</li>
              <li>🔵 Integrated with tools you already use (CRM, Slack, etc.).</li>
              <li>🟠 Maintainable, with clear monitoring and fallback flows.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* DIFFERENT */}
      <section className="w-full bg-[#020617] text-white py-12">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            How Are We Different?
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-300 max-w-3xl mx-auto">
            Instead of “AI for the sake of AI”, we build small, focused
            automations that you can trust and measure.
          </p>
        </div>
      </section>

      <section className="w-full bg-slate-50 py-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 md:flex-row md:items-center">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold tracking-tight">
              We create explainable, controllable AI assistants.
            </h3>
            <p className="mt-4 text-sm md:text-base text-slate-600">
              We design every AI workflow with human review in mind, clear
              boundaries and logs so you always know what&apos;s happening.
            </p>
            <p className="mt-3 text-sm md:text-base text-slate-600">
              We leverage providers like OpenAI, Anthropic or open-source
              models depending on your budget, privacy and control needs.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative h-64 w-full max-w-md rounded-3xl bg-slate-200 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1614064642578-7faacdc6336e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGN5YmVyc2VjdXJpdHklMjBkYXRhJTIwYWNjZXNzfGVufDB8fDB8fHww"
                alt="Controllable AI system"
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
            How We Implement AI in Your Business
          </h2>
          <p className="mt-3 text-sm md:text-base text-orange-100 max-w-3xl mx-auto">
            A simple, low-risk path to testing and scaling AI in daily work.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-6 px-4 md:grid-cols-3">
          {[
            "Identify 1–2 high ROI use-cases with you.",
            "Prototype a small AI assistant with limited scope.",
            "Integrate, monitor and then scale to more workflows.",
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
          This keeps projects focused, measurable and safe.
        </p>
      </section>

      {/* EMPOWER */}
      <section className="w-full bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            We Empower Your Team with AI
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-600 max-w-3xl mx-auto">
            AI should make your team faster and happier, not confused. We design
            assistants that feel like smart teammates, not black boxes.
          </p>
        </div>

        <div className="mx-auto mt-10 flex max-w-5xl flex-col gap-10 px-4 md:flex-row md:items-center">
          <div className="md:w-1/2 flex justify-center">
            <div className="relative h-64 w-full max-w-md rounded-3xl bg-slate-200 overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/16094046/pexels-photo-16094046.jpeg"
                alt="Team using AI tools"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="md:w-1/2 text-sm md:text-base text-slate-700">
            <p>We can help you with:</p>
            <ul className="mt-4 space-y-3">
              <li>🟣 AI chatbots for website & WhatsApp leads.</li>
              <li>🟡 Internal AI knowledge assistants for docs & SOPs.</li>
              <li>🟢 Email & support reply suggestion tools.</li>
              <li>🔵 Data summarisation & report generation.</li>
              <li>🟠 AI-powered task automation in CRM / project tools.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="w-full bg-[#00AEB4] py-16 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Our AI Expertise
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-6 px-4 md:grid-cols-3">
          {[
            "Hands-on experience with LLM-based agents & tools.",
            "Combining AI with solid engineering & UX practice.",
            "Ongoing tuning & support as models evolve.",
          ].map((text, i) => (
            <div
              key={i}
              className="rounded-3xl bg-[#020617] px-6 py-8 text-center shadow-lg"
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
            "AI Strategy & Use-Case Discovery",
            "AI Assistant / Agent Development",
            "Monitoring, Tuning & Support",
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
              AI Strategy & Discovery includes:
            </h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                "Workshop to understand your processes",
                "Identify top 3–5 AI opportunities",
                "Risk & feasibility assessment",
                "Data & integration requirements",
                "MVP scope & success metrics",
                "Roadmap for rollout & scaling",
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
                src="https://images.pexels.com/photos/8761527/pexels-photo-8761527.jpeg"
                alt="AI consulting"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="w-full bg-[#020617] py-12 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <p className="text-sm md:text-base text-slate-200">
            Ready to experiment with AI safely and strategically?
          </p>
          <p className="mt-3 text-sm md:text-base text-[#00AEB4]">
            Contact Devsphere to design your first AI assistant or automation.
          </p>
        </div>
      </section>
      {/* <StartCooperationSection /> */}
    </main>
     <ConsultationForm open={openForm} onClose={() => setOpenForm(false)} />
    </>
  );
}
