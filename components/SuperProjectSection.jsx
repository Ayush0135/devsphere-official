"use client"
import Image from "next/image";

export function SuperProjectsSection() {
  return (
    <section className="w-full bg-slate-50 py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 md:flex-row md:items-center md:gap-16">
        {/* Left side – images + experience */}
        <div className="flex-1">
          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
              <Image
                src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="UI design and wireframes"
                width={600}
                height={500}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
                <Image
                  src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Code and development"
                  width={600}
                  height={240}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
                <Image
                  src="https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Team discussing product"
                  width={600}
                  height={200}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-10">
            <p className="text-4xl font-semibold tracking-tight text-slate-900">
              10+
            </p>
            <p className="mt-1 text-sm uppercase tracking-[0.25em] text-slate-500">
              Projects Delivered
            </p>
            <p className="mt-2 max-w-sm text-sm text-slate-600">
              From landing pages to full SaaS platforms, we help businesses
              launch, scale, and look professional online.
            </p>
          </div>
        </div>

        {/* Right side – text content */}
        <div className="flex-1">
          <h2 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            Super Projects.
            <br />
            Simple Process.
          </h2>

          <p className="mt-6 text-base leading-relaxed text-slate-600">
            We are your dedicated team for modern websites, web apps, and custom
            software. From idea to deployment, we take care of UI/UX, frontend,
            backend, integrations, and performance so you can focus on growing
            your business.
          </p>

          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Whether you&apos;re a startup, agency, or local business, we build
            digital experiences that actually support your goals — leads, sales,
            automation, and brand trust.
          </p>

          <ul className="mt-6 space-y-3 text-sm text-slate-700">
            <li>• Tailor-made strategy and design for each client.</li>
            <li>• We work as your remote tech & product team.</li>
            <li>• Flexible pricing and packages for every stage.</li>
            <li>• Clear communication over WhatsApp, Zoom, and email.</li>
            <li>• Post-launch support, updates, and new features.</li>
          </ul>

          <button
            onClick={() => {
              const el = document.getElementById("pricing");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-8 inline-flex items-center justify-center rounded-full border border-slate-900 px-6 py-3 text-sm font-medium text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-900 hover:text-white"
          >
            Checkout Our Services →
          </button>
        </div>
      </div>
    </section>
  );
}
