// components/OurBusinessSection.tsx
import Image from "next/image";

export function OurBusinessSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Top text */}
        <p className="text-center text-xs font-semibold tracking-[0.25em] text-indigo-500">
          WE HANDLE YOUR DIGITAL NEEDS
        </p>
        <h2 className="mt-4 text-center text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
          Our Business Is To Grow Yours
        </h2>
        <p className="mt-3 text-center text-sm md:text-base text-slate-600 max-w-3xl mx-auto">
          At Devsphere we design and build high-performing websites and custom web
          apps that help you get more leads, automate work, and look professional online.
        </p>

        {/* Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <div className="relative overflow-hidden rounded-3xl bg-black text-white">
            <Image
              src="https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="UI design on screen"
              width={800}
              height={900}
              className="h-full w-full object-cover opacity-70"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/30" />
            <div className="absolute inset-0 flex flex-col justify-between p-6">
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-slate-200">
                  WEB DEVELOPMENT
                </p>
                <h3 className="mt-3 text-xl font-semibold leading-snug md:text-2xl">
                  Crafting Powerful <br /> Business Websites
                </h3>
              </div>
              <p className="mt-4 text-sm text-slate-100/90">
                Conversion-focused landing pages, portfolio sites, and full business
                websites built with modern tech like Next.js and Tailwind — fast, secure,
                and mobile-friendly.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative overflow-hidden rounded-3xl bg-black text-white">
            <Image
              src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Team working on software"
              width={800}
              height={900}
              className="h-full w-full object-cover opacity-70"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/30" />
            <div className="absolute inset-0 flex flex-col justify-between p-6">
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-slate-200">
                  CUSTOM SOFTWARE &amp; SAAS
                </p>
                <h3 className="mt-3 text-xl font-semibold leading-snug md:text-2xl">
                  We Power Your <br /> Business Operations
                </h3>
              </div>
              <p className="mt-4 text-sm text-slate-100/90">
                Dashboards, internal tools, and SaaS platforms tailored to your workflow.
                We integrate APIs, automate tasks, and make your data easy to use.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative overflow-hidden rounded-3xl bg-black text-white">
            <Image
              src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Team discussing marketing"
              width={800}
              height={900}
              className="h-full w-full object-cover opacity-70"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/30" />
            <div className="absolute inset-0 flex flex-col justify-between p-6">
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-slate-200">
                  SUPPORT &amp; GROWTH
                </p>
                <h3 className="mt-3 text-xl font-semibold leading-snug md:text-2xl">
                  Build Trust &amp; <br /> Grow With Confidence
                </h3>
              </div>
              <p className="mt-4 text-sm text-slate-100/90">
                Ongoing maintenance, performance optimization, SEO basics, and small
                feature updates so your site stays fast, secure, and always ready to sell.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
