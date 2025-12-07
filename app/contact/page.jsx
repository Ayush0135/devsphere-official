"use client";

import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: hook this to your backend / email / API
    alert("Thanks for reaching out! We’ll get back to you soon.");
  };

  return (
    <main className="bg-black text-white min-h-screen pt-24">
      {/* HERO */}
      <section className="relative w-full bg-black">
        <div className="relative mx-auto max-w-6xl px-4 py-16">
          {/* background image */}
          <div className="absolute inset-0 -z-10">
            {/* put a dark abstract image at /public/images/contact-hero-bg.jpg */}
            <Image
              src="/images/contact-hero-bg.jpg"
              alt="Contact background"
              fill
              className="object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/60" />
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl text-sm md:text-base text-gray-200 leading-relaxed">
            Have a project in mind or just exploring options? Drop us a message
            any time. We usually reply within 24 hours on business days and
            would love to discuss how DevSphere can help your business grow.
          </p>
        </div>
      </section>

      {/* CONTENT: INFO + FORM */}
      <section className="w-full bg-[#050711] pb-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col gap-10 md:flex-row md:items-start">
            {/* LEFT: CONTACT DETAILS */}
            <div className="md:w-1/3 space-y-8">
              <div>
                <h2 className="text-lg font-semibold text-white">
                  For General Queries
                </h2>
                <p className="mt-2 flex items-center gap-2 text-sm text-gray-300">
                  <Mail className="h-4 w-4 text-[#00AEB4]" />
                  solndevsphere@gmail.com
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white">
                  For Project / Business Enquiries
                </h2>
                <p className="mt-2 flex items-center gap-2 text-sm text-gray-300">
                  <Mail className="h-4 w-4 text-[#00AEB4]" />
                  devspheresoln@zohomail.in
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white">
                  Call Us Today
                </h2>
                <p className="mt-2 flex items-center gap-2 text-sm text-gray-300">
                  <Phone className="h-4 w-4 text-[#00AEB4]" />
                  +91 87007 27742
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white">Location</h2>
                <p className="mt-2 flex items-center gap-2 text-sm text-gray-300">
                  <MapPin className="h-4 w-4 text-[#00AEB4]" />
                  Remote · Based in Jaipur, Rajasthan, India
                </p>
              </div>
            </div>

            {/* RIGHT: FORM */}
            <div className="md:w-2/3">
              <h2 className="text-lg font-semibold text-white mb-4">
                Send us a message
              </h2>
              <form
                onSubmit={handleSubmit}
                className="space-y-4 bg-[#050814] border border-white/5 rounded-2xl p-5 md:p-6"
              >
                {/* Row 1 */}
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-lg bg-[#0B1020] border border-white/10 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00AEB4]"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full rounded-lg bg-[#0B1020] border border-white/10 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00AEB4]"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full rounded-lg bg-[#0B1020] border border-white/10 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00AEB4]"
                      placeholder="+91 ..."
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">
                      Budget (optional)
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-lg bg-[#0B1020] border border-white/10 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00AEB4]"
                      placeholder="e.g. ₹50k – ₹2L"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    className="w-full rounded-lg bg-[#0B1020] border border-white/10 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00AEB4] resize-none"
                    placeholder="Tell us a bit about your project, goals and timeline."
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-[#00AEB4] px-6 py-2.5 text-sm font-semibold text-black shadow-md hover:bg-[#02c0c6] transition"
                  >
                    Submit Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
