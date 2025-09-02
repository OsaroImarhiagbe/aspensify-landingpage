'use client'
import Image from "next/image";
import {motion} from 'motion/react'
import { problem } from "@/utils/data";

export default function Walkthrough() {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
        <motion.h2
          className="font-spacegrotesk text-2xl text-gray-900 md:text-3xl font-bold mb-8 md:mb-10 px-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
         Your Money&apos;s New Wingman - Intelligent Budgets Made Effortless
        </motion.h2>
           
            <div className='mt-8 md:mt-12 columns-1 md:columns-2 gap-4 md:gap-6 px-2 md:px-20'>
        {problem.map((item, index) => (
          <motion.div
            key={index}
            className="cursor-pointer mb-4 md:mb-6 break-inside-avoid rounded-xl bg-gray-100 overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative p-4">
              <Image
                src={item.img}
                alt={item.name}
                width={item.width}
                height={item.height}
                style={{ width: '100%', height: 'auto' }} 
                priority
                quality={100}
                className="w-full h-auto object-cover mx-auto"
              />

              {/* Floating cards only for the pie chart */}
              {item.name === "AI-Tailored Budgets & Goals" && (
                <>
                  <div className="absolute top-4 left-4 p-2 bg-white rounded-lg shadow-lg w-24 text-center">
                    <p className="font-inter text-xs font-semibold text-gray-800">Credit</p>
                    <p className="font-inter text-sm text-gray-500">45%</p>
                  </div>
                  <div className="absolute top-1/3 right-4 p-2 bg-white rounded-lg shadow-lg w-24 text-center">
                    <p className="font-inter text-xs font-semibold text-gray-800">Debit</p>
                    <p className="font-inter text-sm text-gray-500">55%</p>
                  </div>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 p-2 bg-white rounded-lg shadow-lg w-28 text-center">
                    <p className="font-inter text-xs font-semibold text-gray-800">Savings</p>
                    <p className="font-inter text-sm text-gray-500">20%</p>
                  </div>
                </>
              )}
            </div>

            <div className="p-4 md:p-6 text-left">
              <h4 className="font-spacegrotesk text-center text-gray-900 text-lg md:text-xl font-semibold mb-2 leading-tight">
                {item.name}
              </h4>
              <p className="font-inter text-gray-900 text-sm md:text-base leading-relaxed">
                {item.subtitle}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      </div>
    </section>
  );
}