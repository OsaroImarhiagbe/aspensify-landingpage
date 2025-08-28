'use client'
import Image from "next/image";
import {motion} from 'motion/react'
export default function Walkthrough() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl font-bold mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          A peek inside Aspensify
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Image
            src="/images/dashboard.png"
            alt="Dashboard"
            width={500}
            height={400}
            className="rounded-xl shadow"
          />
          <Image
            src="/images/couples.png"
            alt="Couples Board"
            width={500}
            height={400}
            className="rounded-xl shadow"
          />
          <Image
            src="/images/budget.png"
            alt="Budget Screen"
            width={500}
            height={400}
            className="rounded-xl shadow"
          />
          <Image
            src="/images/life-events.png"
            alt="Life Events"
            width={500}
            height={400}
            className="rounded-xl shadow"
          />
        </div>
      </div>
    </section>
  );
}
