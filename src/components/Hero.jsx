"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import AboutSlide from "./About";

function HeroSlide() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Hello, I'm Alan";
  const [subDisplayedText, setSubDisplayedText] = useState("");
  const subText = "A Creative Professional";

  useEffect(() => {
    let mainTimeout, subTimeout;
    let i = 0, j = 0;

    function typeMain() {
      if (i <= fullText.length) {
        setDisplayedText(fullText.slice(0, i));
        i++;
        mainTimeout = setTimeout(typeMain, 80);
      } else {
        setTimeout(() => typeSub(), 500);
      }
    }

    function typeSub() {
      if (j <= subText.length) {
        setSubDisplayedText(subText.slice(0, j));
        j++;
        subTimeout = setTimeout(typeSub, 60);
      } else {
        setTimeout(() => {
          setDisplayedText("");
          setSubDisplayedText("");
          i = 0;
          j = 0;
          typeMain();
        }, 1200);
      }
    }

    typeMain();

    return () => {
      clearTimeout(mainTimeout);
      clearTimeout(subTimeout);
    };
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-5xl font-bold text-white min-h-[60px] text-center">
        {displayedText}
        <span className="animate-pulse text-white">|</span>
      </h1>
      <p className="text-2xl text-white mt-4 min-h-[40px] text-center">
        {subDisplayedText}
      </p>
    </div>
  );
}

const slides = [
  () => <HeroSlide key="hero" />,
  () => <AboutSlide key="about" />,
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center">
      {/* Background image */}
      <Image
        src="/images/image.jpg"
        alt="Background"
        fill
        className="object-cover z-0"
        quality={100}
        priority
        style={{ opacity: 0.9 }}
      />
      <div className="relative z-20 flex flex-row items-center w-full max-w-4xl justify-between">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="text-white text-3xl px-4 hover:scale-125 transition select-none"
        >
          &#8592;
        </button>
        {/* Slide Content */}
        <div className="flex-1 flex flex-col items-center">
          {slides[current]()}
        </div>
        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="text-white text-3xl px-4 hover:scale-125 transition select-none"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
}