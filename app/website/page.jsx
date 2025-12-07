"use client";

import Image from "next/image";
import ConsultationForm from "@/components/ConsultationForm";
import { useState } from "react";


export default function WebsiteSolutionsPage() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

    const [openForm, setOpenForm] = useState(false);

  return (
    <>
    <main className="bg-white text-slate-900 mt-24">
      {/* HERO */}
      <section className="relative w-full bg-black text-white py-20 md:py-24">
        <div className="absolute inset-0">
          {/* Replace this with your own hero background image */}
          <Image
            src="https://images.pexels.com/photos/4424355/pexels-photo-4424355.jpeg"
            alt="Abstract web design background"
            fill
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Website Solutions
          </h1>
          <p className="mt-4 text-sm md:text-base text-slate-200 max-w-2xl mx-auto">
            Modern, fast and conversion-focused websites for businesses that want
            to look professional and turn visitors into real leads.
          </p>
          <button
            onClick={()=>{
                 setOpenForm(true);
            }}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow-md hover:bg-slate-100 cursor-pointer"
          >
            Book a Free Consultation →
          </button>
        </div>
      </section>

      {/* WEBSITE SOLUTIONS INTRO (like first white section) */}
      <section className="w-full bg-slate-50 py-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 md:flex-row md:items-center">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Website Solutions
            </h2>
            <p className="mt-4 text-sm md:text-base text-slate-600">
              Want to make your online presence actually work for your business?
              Devsphere builds websites that are designed to convert, not just
              look good. We focus on clarity, speed and user experience so your
              visitors understand your offer in seconds.
            </p>
            <p className="mt-3 text-sm md:text-base text-slate-600">
              Whether you&apos;re launching a new brand or upgrading an outdated
              site, we handle everything from structure and content flow to
              responsive design, integrations and basic SEO.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center">
            {/* Replace with your own image */}
            <div className="relative h-64 w-full max-w-md rounded-3xl bg-slate-200 overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3585001/pexels-photo-3585001.jpeg"
                alt="Website solutions preview"
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
            Why Choose Us?
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-600 italic max-w-3xl mx-auto">
            Since we started, we&apos;ve helped businesses of different sizes
            launch and redesign websites that actually support their sales,
            marketing and branding goals.
          </p>
        </div>

        <div className="mx-auto mt-10 flex max-w-5xl flex-col gap-10 px-4 md:flex-row md:items-center">
          <div className="md:w-1/2 flex justify-center">
            <div className="relative h-64 w-full max-w-md rounded-3xl bg-slate-200 overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/6476257/pexels-photo-6476257.jpeg"
                alt="Why choose Devsphere"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="md:w-1/2">
            <p className="text-sm md:text-base text-slate-600">
              We deliver website solutions that are:
            </p>
            <ul className="mt-4 space-y-3 text-sm md:text-base text-slate-700">
              <li>🟣 Budget-friendly</li>
              <li>🟡 Delivered on time</li>
              <li>🟢 Built to generate leads & enquiries</li>
              <li>🔵 SEO-friendly & technically sound</li>
              <li>🟠 Scalable for future features</li>
              <li>🔴 Goal-driven and aligned with your business</li>
            </ul>
          </div>
        </div>
      </section>

      {/* HOW ARE WE DIFFERENT - black band + white content */}
      <section className="w-full bg-black text-white py-12">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            How Are We Different?
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-300 max-w-3xl mx-auto">
            There are hundreds of agencies offering websites. Here&apos;s what
            makes Devsphere a better fit for serious businesses.
          </p>
        </div>
      </section>

      <section className="w-full bg-slate-50 py-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 md:flex-row md:items-center">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold tracking-tight">
              We build search-engine-friendly websites.
            </h3>
            <p className="mt-4 text-sm md:text-base text-slate-600">
              We follow clean HTML structure, performance best-practices and basic
              SEO guidelines so your site is easy for search engines to crawl and
              index.
            </p>
            <p className="mt-3 text-sm md:text-base text-slate-600">
              We make sure your pages are error-free, responsive and optimised
              for speed, helping your site rank better and retain visitors.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative h-64 w-full max-w-md rounded-3xl bg-slate-200 overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/12969403/pexels-photo-12969403.jpeg"
                alt="SEO friendly website"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ORANGE SEO STEPS SECTION */}
      <section className="w-full bg-orange-500 py-16 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            We help your website perform at every level.
          </h2>
          <p className="mt-3 text-sm md:text-base text-orange-100 max-w-3xl mx-auto">
            Our process ensures your website isn&apos;t just live, but actually
            ready for search engines and real users.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-6 px-4 md:grid-cols-3">
          {[
            {
              num: 1,
              text: "We write unique titles & meta tags for key pages.",
            },
            {
              num: 2,
              text: "We use clean URLs & file names that are SEO-friendly.",
            },
            {
              num: 3,
              text: "We add keyword-aware alt text and headings where needed.",
            },
          ].map((card) => (
            <div
              key={card.num}
              className="rounded-3xl bg-black/85 px-6 py-8 text-center shadow-lg"
            >
              <div className="text-3xl font-semibold">{card.num}</div>
              <p className="mt-4 text-sm text-slate-100">{card.text}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs md:text-sm text-orange-100">
          These steps help you get a better search presence and more of the right
          visitors to your website.
        </p>
      </section>

      {/* WE EMPOWER YOUR BUSINESS */}
      <section className="w-full bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            We Empower Your Business
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-600 max-w-3xl mx-auto">
            A good website supports your sales, operations and customer
            experience. We think beyond just design and help your digital
            presence work strategically.
          </p>
        </div>

        <div className="mx-auto mt-10 flex max-w-5xl flex-col gap-10 px-4 md:flex-row md:items-center">
          <div className="md:w-1/2 flex justify-center">
            <div className="relative h-64 w-full max-w-md rounded-3xl bg-slate-200 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1507099985932-87a4520ed1d5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Empowering business"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="md:w-1/2 text-sm md:text-base text-slate-700">
            <p>We are here to help you with:</p>
            <ul className="mt-4 space-y-3">
              <li>🟣 Structuring pages around your ideal customers.</li>
              <li>🟡 Creating content that explains your services clearly.</li>
              <li>🟢 Integrating enquiry forms, chat & WhatsApp flows.</li>
              <li>🔵 Connecting analytics so you can track what works.</li>
              <li>🟠 Supporting you with updates & small iterations.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* OUR EXPERTISE (TEAL SECTION) */}
      <section className="w-full bg-[#00b3aa] py-16 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Our Expertise
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-6 px-4 md:grid-cols-3">
          {[
            "Years of experience in building modern web experiences.",
            "Team skilled in design, frontend, backend & deployment.",
            "Reliable support & continuous improvement after launch.",
          ].map((text, i) => (
            <div
              key={i}
              className="rounded-3xl bg-black/90 px-6 py-8 text-center shadow-lg"
            >
              <div className="text-3xl font-semibold">{i + 1}</div>
              <p className="mt-4 text-sm text-slate-100">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONSIDER YOUR PLANS */}
      <section className="w-full bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Consider Your Plans
          </h2>
        </div>

        {/* top "tabs" style cards */}
        <div className="mx-auto mt-8 flex max-w-5xl flex-wrap justify-center gap-4 px-4">
          {[
            "Website Strategy & Consulting",
            "Website Design & Development",
            "Maintenance & Support",
          ].map((label, idx) => (
            <div
              key={label}
              className={`min-w-[220px] rounded-2xl border px-5 py-4 text-sm font-medium shadow-sm ${
                idx === 0
                  ? "border-cyan-500 bg-cyan-50 text-cyan-700"
                  : "border-slate-200 bg-white text-slate-700"
              }`}
            >
              {label}
            </div>
          ))}
        </div>

        {/* content row */}
        <div className="mx-auto mt-10 flex max-w-5xl flex-col gap-10 px-4 md:flex-row md:items-start">
          <div className="md:w-1/2 text-sm md:text-base text-slate-700">
            <h3 className="text-lg font-semibold">
              Website Strategy & Consulting Services include:
            </h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                "Market & competitor review",
                "Information architecture planning",
                "Homepage & landing page strategy",
                "Basic SEO & content guidance",
                "Lead-gen & enquiry flow planning",
                "Tech stack & hosting suggestions",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 text-xs text-slate-700 border border-slate-200"
                >
                  <span className="text-cyan-500 text-lg">»</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            {/* Replace with illustration / graphic */}
            <div className="relative h-64 w-full max-w-md rounded-3xl bg-slate-200 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29uc3VsdGluZ3xlbnwwfHwwfHx8MA%3D%3D"
                alt="Consulting illustration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BLACK CTA BAND ABOVE YOUR EXISTING "START COOPERATION" SECTION */}
      <section className="w-full bg-black py-12 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <p className="text-sm md:text-base text-slate-200">
            Partnering with Devsphere can help you solve your website challenges
            with clarity and confidence. We handle the tech and design while you
            focus on your business.
          </p>
          <p className="mt-3 text-sm md:text-base text-cyan-300">
            Contact us to make your online presence actually work for you.
          </p>
        </div>
      </section>

      {/* Here you can render your existing StartCooperationSection with id="contact" */}
      {/* <StartCooperationSection /> */}
    </main>
    <ConsultationForm open={openForm} onClose={() => setOpenForm(false)} />
    </>
  );
}
