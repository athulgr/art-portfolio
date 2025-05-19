// components/Header.jsx
"use client";
import { useState, useEffect } from "react";

export default function Header() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header className="p-4 flex justify-between items-center bg-white dark:bg-gray-900">
      <div className="text-2xl font-bold text-gray-800 dark:text-white">
        My Portfolio
      </div>
      <nav className="hidden md:flex space-x-6">
  {[
    { href: "#", label: "Home" },
   // { href: "#about", label: "About" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ].map((item) => (
    <a
      key={item.href}
      href={item.href}
      className="relative text-gray-700 dark:text-gray-300 transition-colors duration-300
        after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5
        after:bg-gray-700 dark:after:bg-gray-300 after:scale-x-0 after:opacity-0
        hover:after:scale-x-100 hover:after:opacity-100 after:transition-all after:duration-300"
    >
      {item.label}
    </a>
  ))}
</nav>
      <div>
        <button
          onClick={() => setDark(!dark)}
          className="px-4 py-2 rounded border text-gray-700 dark:text-gray-300"
        >
          {dark ? "🌞 Light" : "🌙 Dark"}
        </button>
      </div>
    </header>
  );
}
