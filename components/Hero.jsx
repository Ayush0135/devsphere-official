"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { ImagesSlider } from "./ui/image-slider";

export function Hero() {
  const images = [
    "https://media.istockphoto.com/id/2227840023/photo/abstract-futuristic-data-torus-from-color-dots-in-circles-grid-with-defocus-big-data-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=7OpS7PHyQ0VU_fTTtOwpL-JrDTXNWGbBnnJiXkpHOA0=",
    "https://plus.unsplash.com/premium_photo-1661963874418-df1110ee39c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c29mdHdhcmV8ZW58MHx8MHx8fDA%3D",
  ];

const texts = [
    {
      title: (
        <>
          Build Your <br /> Next-Level Website
        </>
      ),
      description: (
        <>
          We design and develop fast, conversion-focused websites tailored to
          your brand. From landing pages to full business sites, we handle
          everything end-to-end so you can focus on growth.
        </>
      ),
      align: "items-end text-right pr-12",
    },
    {
      title: (
        <>
          Custom Software &amp; <br /> Scalable SaaS Solutions
        </>
      ),
      description: (
        <>
          Automate your workflows, manage customers, and scale your business
          with modern web apps built using Next.js, Node.js, and cloud-first
          architecture—secure, reliable, and made for your use case.
        </>
      ),
      align: "items-start text-left pl-12",
    },
  ];

  const [index, setIndex] = useState(0);

    const handleExploreClick = () => {
    const el = document.getElementById("pricing");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Sync index with autoplay duration
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ImagesSlider images={images}>
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`z-50 absolute w-full h-full flex flex-col justify-center ${texts[index].align}`}>
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-md">
          {texts[index].title}
        </h1>
        <p className="text-lg md:text-2xl text-white mt-2 max-w-xl leading-relaxed">
          {texts[index].description}
        </p>
        <button onClick={handleExploreClick} className="px-4 cursor-pointer py-2 backdrop-blur-sm border bg-white/10 border-white/30 text-white text-center rounded-full mt-6">
          Explore Now →
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
