"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Developer() {
  return (
    <section className="relative py-20 text-white">
           <div
         className="absolute inset-x-0 top-10 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        >
        <div
            className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-emerald-500 to-emerald-900 opacity-20"
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
          />
        </div>
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-spacegrotesk text-3xl text-gray-600 md:text-5xl font-bold text-center mb-12"
        >
          Meet the Developer
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl border-4 border-white/30">
              <Image
                src="/assets/emmanuel.png" // replace with your photo
                alt="Emmanuel Imarhiagbe - Developer of Aspensify"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* About Developer */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl text-gray-900 d:text-3xl font-semibold">
              Hi, I&apos;m Emmanuel 👋
            </h3>
            <p className="font-sans text-lg text-gray-900 leading-relaxed">
              I created <span className="font-bold">Aspensify</span> because I
              wanted a smarter, simpler way to take control of my finances. Most
              budgeting apps felt complicated or impersonal, so I set out to
              build something that actually adapts to you — whether you’re
              saving for your first apartment, buying a car, or just trying to
              stay on top of bills.
            </p>
            <p className="font-sans text-lg text-gray-900 leading-relaxed">
              My goal is to make financial clarity accessible to everyone.
              Aspensify isn’t just about tracking numbers — it’s about building
              peace of mind and empowering people to reach their goals with
              confidence.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
