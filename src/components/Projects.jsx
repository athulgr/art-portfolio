// components/Projects.jsx
"use client";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="portfolio" className="py-12 px-4 bg-gray-50 dark:bg-gray-800">
      <motion.div 
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8">Projects Showcase</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-700 p-4 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Project Title</h3>
            <p>Brief description of the project.</p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-4 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Project Title</h3>
            <p>Brief description of the project.</p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-4 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Project Title</h3>
            <p>Brief description of the project.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
