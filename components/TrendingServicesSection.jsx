"use client";

import React, { useState } from "react";

const services = [
  {
    title: "Website Development",
    short: "Modern, responsive business websites.",
    details:
      "Landing pages, portfolio sites, and full business websites built with Next.js, Tailwind and SEO-friendly structure.",
    image:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Software Development",
    short: "Custom web apps & tools.",
    details:
      "Dashboards, internal tools and SaaS platforms tailored to your workflow, with clean UI and scalable backend.",
    image:
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Custom AI Solutions",
    short: "AI agents & automation for your business.",
    details:
      "Chatbots, AI assistants, process automation and data-driven decision systems integrated into your existing tools.",
    image:
      "https://images.pexels.com/photos/8867435/pexels-photo-8867435.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Digital Marketing",
    short: "Performance-focused online growth.",
    details:
      "Landing pages, funnels, basic SEO, campaigns support and tracking setup so your website actually converts.",
    image:
      "https://images.pexels.com/photos/6476584/pexels-photo-6476584.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Data Analysis",
    short: "Turn your data into decisions.",
    details:
      "Dashboards, reporting, and insights so you always know what’s working and where to improve.",
    image:
      "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Cybersecurity",
    short: "Secure & protect your digital assets.",
    details:
      "Security best practices, audits and basic protection layers so your apps and data stay safe.",
    image:
      "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

function ServiceCard({ service }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="group h-64 w-full cursor-pointer [perspective:1200px]"
      onClick={() => setFlipped((prev) => !prev)}
    >
      <div
        className="relative h-full w-full rounded-3xl shadow-lg transition-transform duration-500 [transform-style:preserve-3d]"
        style={{
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-3xl bg-cover bg-center p-6 text-white [backface-visibility:hidden]"
          style={{ backgroundImage: `url(${service.image})` }}
        >
          <div className="flex h-full flex-col justify-end bg-gradient-to-t from-black/80 via-black/40 to-black/10 rounded-3xl -m-6 p-6">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-slate-200">
              Service
            </p>
            <h3 className="mt-2 text-xl font-semibold leading-snug">
              {service.title}
            </h3>
            <p className="mt-2 text-sm text-slate-100/90">{service.short}</p>
            <p className="mt-3 text-xs text-slate-200/80">
              Tap / click card to flip →
            </p>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 rounded-3xl bg-slate-900 p-6 text-slate-50 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <h3 className="text-lg font-semibold">{service.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-100/90">
            {service.details}
          </p>
          <div className="mt-4 inline-flex rounded-full bg-slate-800/80 px-3 py-1 text-xs text-slate-200">
            Project-ready • Customised for your business
          </div>
          <p className="mt-4 text-xs text-slate-400">Click again to flip back</p>
        </div>
      </div>
    </div>
  );
}

export default function TrendingServicesSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-center text-xs font-semibold tracking-[0.25em] text-indigo-500">
          IMPROVE & INNOVATE WITH MODERN TECH
        </p>
        <h2 className="mt-4 text-center text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
          We create a difference by providing
          <br />
          era&apos;s trending digital services
        </h2>
        <p className="mt-3 max-w-3xl mx-auto text-center text-sm md:text-base text-slate-600">
          From websites and custom software to AI solutions and security, we
          help you build a strong digital presence that actually supports your
          business goals.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
