"use client";

import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0E1624] text-white pt-16 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div>
          <div className="relative h-14 w-40 mb-4">
            <Image src="/LOGO.png" alt="Devsphere Logo" fill className="object-contain"/>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            We craft scalable software, high-performing websites, strategic AI solutions and marketing-focused systems designed to grow your business.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-[#EAC21B] mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/" className="hover:text-[#EAC21B]">Home</Link></li>
            <li><Link href="/website-solutions" className="hover:text-[#EAC21B]">Website Solutions</Link></li>
            <li><Link href="/software-solutions" className="hover:text-[#EAC21B]">Software Solutions</Link></li>
            <li><Link href="/ai-solutions" className="hover:text-[#EAC21B]">AI Solutions</Link></li>
            <li><Link href="/digital-marketing" className="hover:text-[#EAC21B]">Digital Marketing</Link></li>
            <li><Link href="/contact" className="hover:text-[#EAC21B]">Contact Us</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-[#EAC21B] mb-3">Our Services</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Custom Websites</li>
            <li>Software & SaaS Development</li>
            <li>AI Bots & Automation</li>
            <li>Digital Marketing & SEO</li>
            <li>Data Analytics & Dashboards</li>
            <li>Cybersecurity Planning</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-[#EAC21B] mb-3">Contact Us</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex gap-2"><Phone className="w-4 h-4 text-[#00AEB4]" /> +91 8700727742</li>
            <li className="flex gap-2"><Mail className="w-4 h-4 text-[#00AEB4]" /> solndevsphere@gmail.com</li>
            <li className="flex gap-2"><MapPin className="w-4 h-4 text-[#00AEB4]" /> Jaipur, Rajasthan, India</li>
          </ul>

          {/* Social */}
          <div className="flex gap-4 mt-5">
            <Link href="https://www.facebook.com/profile.php?id=61584869301149"><Facebook className="w-5 h-5 hover:text-[#EAC21B]" /></Link>
            <Link href="https://www.instagram.com/devspheresoln?igsh=dmFrdDAxNGZtdHQy" ><Instagram className="w-5 h-5 hover:text-[#EAC21B]" /></Link>
            <Link href="#" ><Linkedin className="w-5 h-5 hover:text-[#EAC21B]" /></Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 mt-10 pt-5 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} <span className="text-[#EAC21B] font-semibold">Devsphere</span>. All rights reserved.
      </div>
    </footer>
  );
}
