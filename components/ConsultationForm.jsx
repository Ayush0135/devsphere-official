"use client";

"use client";

import { useState } from "react";

export default function ConsultationForm({ open, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://formsubmit.co/ajax/devspheresoln@zohomail.in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Consultation Request from ${formData.name}`,
          _template: "table"
        }),
      });

      if (response.ok) {
        setStatus("success");
        setTimeout(() => {
          onClose();
          setStatus("idle");
          setFormData({
            name: "",
            company: "",
            phone: "",
            email: "",
            date: "",
            time: "",
            message: "",
          });
        }, 2000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  return (
    <div
      className="
        fixed inset-0 z-50 bg-black/70
        flex justify-center sm:items-center items-start
        overflow-y-auto
        py-6
      "
    >
      {/* CARD */}
      <div
        className="
          relative w-full max-w-5xl mx-auto
          rounded-2xl bg-white shadow-2xl
          flex flex-col sm:flex-row
        "
      >
        {/* close button */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 rounded-full bg-black/5 px-2 py-1 text-sm text-slate-500 hover:bg-black/10"
        >
          ✕
        </button>

        {/* LEFT SIDE */}
        <div className="w-full sm:w-[40%] bg-[#05060a] p-6 sm:p-8 text-slate-50 flex flex-col justify-between">
          <div>
            <h3 className="text-xs font-semibold tracking-[0.18em] text-pink-300 uppercase">
              Devsphere
            </h3>
            <h2 className="mt-4 text-xl sm:text-2xl font-semibold">
              Simplifying Your Digital Journey
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-slate-300">
              We design and build modern websites, custom software and AI
              solutions that actually support your business goals.
            </p>
            <p className="mt-4 text-xs sm:text-sm text-slate-300">
              Share a few details and we&apos;ll contact you with suggestions,
              timelines and pricing — no obligation.
            </p>
          </div>

          <div className="mt-6">
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Get Connected With Us
            </p>
            <div className="mt-3 flex gap-3 text-lg sm:text-xl opacity-80">
              {/* replace with real icons if needed */}
              <span>🌐</span>
              <span>🐦</span>
              <span>💼</span>
              <span>📸</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE – FORM */}
        <div
          className="
            w-full sm:w-[60%]
            max-h-[80vh] sm:max-h-[90vh]
            overflow-y-auto
            p-6 sm:p-8
            text-slate-900
          "
        >
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
              <div className="text-green-500 text-5xl">✓</div>
              <h3 className="text-2xl font-semibold text-slate-800">Request Sent!</h3>
              <p className="text-slate-600">We'll get back to you shortly.</p>
            </div>
          ) : (
            <>
              <h3 className="text-base sm:text-lg font-semibold">
                We&apos;re here to help you 🙂
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600">
                Book a free call and let&apos;s discuss how we can help you grow.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-medium text-slate-600">
                      Full Name*
                    </label>
                    <input
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text"
                      className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-900"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-slate-600">
                      Company Name
                    </label>
                    <input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      type="text"
                      className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-900"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-medium text-slate-600">
                      Phone Number*
                    </label>
                    <input
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      type="tel"
                      className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-900"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-slate-600">
                      Email*
                    </label>
                    <input
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-900"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-medium text-slate-600">
                      Appointment Date*
                    </label>
                    <input
                      required
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      type="date"
                      className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-900"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-slate-600">
                      Appointment Time*
                    </label>
                    <input
                      required
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      type="text"
                      placeholder="e.g. 10:00 AM"
                      className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-600">
                    How can we help you?
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-900"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-sm">Failed to send. Please try again.</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-4 w-full rounded-full bg-pink-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-pink-600 disabled:opacity-50"
                >
                  {status === "loading" ? "Sending..." : "Book an Appointment"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
