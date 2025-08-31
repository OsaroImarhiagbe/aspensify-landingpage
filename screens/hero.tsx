'use client'
import React from 'react';
import { TrendingUp, Users, Baby, Briefcase, Heart, Star } from 'lucide-react';
import Header from '@/components/header';
import Image from 'next/image';
import {motion} from 'motion/react'
export default function AspensifyLanding() {

  const lifeSituations = [
    { icon: <Briefcase className="w-4 h-4" />, text: "Job Loss" },
    { icon: <Baby className="w-4 h-4" />, text: "New Baby" },
    { icon: <Heart className="w-4 h-4" />, text: "Wedding Planning" },
    { icon: <Users className="w-4 h-4" />, text: "Couple Budgeting" },
    { icon: <TrendingUp className="w-4 h-4" />, text: "Career Change" },
    { icon: <Star className="w-4 h-4" />, text: "First Home" }
  ];

  return (
    <section id='home' className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
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
      
      <Header />


      {/* Hero Content */}
      <div className="relative z-20 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <span className="inline-block bg-black text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
          🚀 Budget Tracking Reimagined
        </span>

        <h1 className="font-spacegrotesk font-bold text-4xl md:text-6xl text-gray-900 mb-6 leading-tight">
         Smart Budgeting for
          <span className="block">
            Life&apos;s Big Changes
          </span>
        </h1>

        <p className="font-sans text-lg md:text-xl text-gray-900 mb-8 leading-relaxed max-w-2xl mx-auto">
          Finally, a budget app that adapts to your actual life situations. Whether you&apos;re unemployed, 
          having a baby, or planning a wedding — Aspensify helps you budget with context that matters.
        </p>

        {/* Life Situations Tags */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {lifeSituations.map((situation, index) => (
            <div 
              key={index}
              className="cursor-pointer flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-emerald-200 
                        px-3 py-2 rounded-full text-sm font-medium text-gray-700 
                        hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-200 
                        hover:scale-105 cursor-default shadow-sm"
            >
              {situation.icon}
              {situation.text}
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-full flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src="/assets/Aspensify.png"
          alt="phone"
          height={600}
          width={300}
          className="relative"
        />
      </motion.div>

      {/* Floating Cards - Improved positioning and wider cards */}
      <motion.div
        className="absolute top-10 left-[5%] sm:left-[12%] md:left-[25%] lg:left-[30%] xl:left-[35%] w-36 sm:w-44 md:w-40 p-3 bg-white rounded-2xl shadow-2xl z-0"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{opacity:1,x:0}}
        transition={{ duration: 0.8, ease: "easeInOut",}}
      >
        <p className="text-sm sm:text-base font-medium text-gray-700 whitespace-nowrap">💳 Track Spending</p>
      </motion.div>

      <motion.div
        className="absolute bottom-12 right-[5%] sm:right-[12%] md:right-[25%] lg:right-[30%] xl:right-[35%] w-36 sm:w-44 md:w-40 p-3 bg-white rounded-2xl shadow-2xl z-0"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{opacity:1,x:0}}
        transition={{ duration: 0.8, ease: "easeInOut",}}
      >
        <p className="text-sm sm:text-base font-medium text-gray-700 whitespace-nowrap">📈 Smart Insights</p>
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-[3%] sm:right-[8%] md:right-[20%] lg:right-[25%] xl:right-[30%] w-40 sm:w-48 md:w-44 p-3 bg-white rounded-2xl shadow-2xl z-0"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{opacity:1,x:0}}
        transition={{ duration: 0.8, ease: "easeInOut",}}
      >
        <p className="text-sm sm:text-base font-medium text-gray-700 whitespace-nowrap">👫 Couple Budgeting</p>
      </motion.div>

      <motion.div
        className="absolute top-2/3 left-[3%] sm:left-[8%] md:left-[20%] lg:left-[25%] xl:left-[30%] w-36 sm:w-44 md:w-40 p-3 bg-white rounded-2xl shadow-2xl z-0"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{opacity:1,x:0}}
        transition={{ duration: 0.8, ease: "easeInOut",}}
      >
        <p className="text-sm sm:text-base font-medium text-gray-700 whitespace-nowrap">🏡 Save for Goals</p>
      </motion.div>
      </div>
    </section>
  );
}
