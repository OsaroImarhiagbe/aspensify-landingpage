"use client";

import { motion } from "motion/react";
import Image from "next/image";
// import { Button } from "@/components/ui/button";

// === Problem/Solution Section ===
export default function ProblemSolution() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center px-6">
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Budgeting shouldn&apos;t feel stressful
        </motion.h2>
        <p className="text-lg text-gray-600 mb-8">
          Most apps are rigid and overwhelming. Aspensify adapts with you—job
          change, moving, or growing a family—so you can stay financially clear
          without the stress.
        </p>
        <button>See how it works</button>
      </div>
    </section>
  );
}