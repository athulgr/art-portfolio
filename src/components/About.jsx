"use client";
import { useEffect, useState } from "react";

export default function AboutSlide() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "About Me";
  const [subDisplayedText, setSubDisplayedText] = useState("");
  const subText =
    "I’m a BFA student with a deep passion for canvas, color, and creative expression.";

  useEffect(() => {
    let mainTimeout, subTimeout;
    let i = 0, j = 0;

    function typeMain() {
      if (i <= fullText.length) {
        setDisplayedText(fullText.slice(0, i));
        i++;
        mainTimeout = setTimeout(typeMain, 120); // slower typing
      } else {
        setTimeout(() => typeSub(), 700); // slightly longer pause before subText
      }
    }

    function typeSub() {
      if (j <= subText.length) {
        setSubDisplayedText(subText.slice(0, j));
        j++;
        subTimeout = setTimeout(typeSub, 45); // slower typing for subText
      }
    }

    typeMain();

    return () => {
      clearTimeout(mainTimeout);
      clearTimeout(subTimeout);
    };
  }, []);

  return (
    <div className="flex flex-col items-center transition-all duration-700 ease-in-out">
      <h1 className="text-5xl font-bold text-white min-h-[60px] transition-all duration-700 ease-in-out">
        {displayedText}
        <span className="animate-pulse text-white">|</span>
      </h1>
      <p className="text-2xl text-white mt-4 max-w-xl text-center min-h-[40px] transition-all duration-700 ease-in-out">
        {subDisplayedText}
      </p>
    </div>
  );
}