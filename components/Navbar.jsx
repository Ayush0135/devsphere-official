"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ConsultationForm from "./ConsultationForm";




export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  const router = useRouter()

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Website Solutions", href: "/website" },
    { name: "Software Solutions", href: "/software" },
    { name: "Custom AI Solutions", href: "/AI" },
    { name: "Digital Marketing", href: "/digital" },
    { name: "Data Analysis", href: "/data" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full z-50 fixed top-0 max-w-screen bg-white/80 backdrop-blur-md px-6 flex items-center justify-between border-b border-gray-200 shadow-md"
      >
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-cyan-600 tracking-wide"
        >
          <div className="w-32 h-16 md:w-40 md:h-20 relative cursor-pointer" onClick={() => router.push("/")}>
            <Image src="/LOGO.png" fill className="object-contain" alt="Logo" priority />
          </div>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              whileHover={{ scale: 1.05 }}
              className="text-gray-800 font-medium hover:text-cyan-600 transition-colors duration-200"
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="hidden md:flex items-center gap-2">
          <Button
            onClick={() => {
              setMenuOpen(false);
              setOpenForm(true);
            }}
            className="bg-cyan-500 hover:bg-cyan-400 text-white font-semibold w-full"
          >
            Enquire Now
          </Button>


        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex gap-4 items-center">
          <Menu
            className="text-gray-800"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute top-[70px] left-0 w-full bg-white/95 backdrop-blur-sm p-4 flex flex-col gap-4 md:hidden z-40 border-t border-gray-200"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-800 text-lg font-medium hover:text-cyan-600 transition"
              >
                {item.name}
              </a>
            ))}
            <Button
              onClick={() => {
                setMenuOpen(false);
                setOpenForm(true);
              }}
              className="bg-cyan-500 hover:bg-cyan-400 text-white font-semibold w-full"
            >
              Enquire Now
            </Button>
          </motion.div>
        )}
      </motion.nav>
      <ConsultationForm open={openForm} onClose={() => setOpenForm(false)} />
    </>
  );

}
