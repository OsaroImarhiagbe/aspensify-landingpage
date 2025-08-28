'use client'
import React, { useState } from 'react';
import { TrendingUp, Users, Baby, Briefcase, Heart, Star } from 'lucide-react';
import Header from '@/components/header';
import Image from 'next/image';

export default function AspensifyLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const lifeSituations = [
    { icon: <Briefcase className="w-4 h-4" />, text: "Job Loss" },
    { icon: <Baby className="w-4 h-4" />, text: "New Baby" },
    { icon: <Heart className="w-4 h-4" />, text: "Wedding Planning" },
    { icon: <Users className="w-4 h-4" />, text: "Couple Budgeting" },
    { icon: <TrendingUp className="w-4 h-4" />, text: "Career Change" },
    { icon: <Star className="w-4 h-4" />, text: "First Home" }
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
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
      {/* Left Wing Bubbles (staggered) */}
      <div className="hidden md:block absolute left-6 top-32 z-10">
        <div className="absolute top-0 left-0 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl">
          <Image src="/assets/budget.png" alt="budget" width={28} height={28} />
        </div>
        <div className="absolute top-32 left-20 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl">
          <Image src="/assets/budget.png" alt="income" width={28} height={28} />
        </div>
        <div className="absolute top-64 left-40 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl">
          <Image src="/assets/budget.png" alt="savings" width={28} height={28} />
        </div>
      </div>

      {/* Right Wing Bubbles (staggered) */}
      <div className="hidden md:block absolute right-6 top-32 z-10">
        <div className="absolute top-0 right-0 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl">
          <Image src="/assets/budget.png" alt="budget" width={28} height={28} />
        </div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl">
          <Image src="/assets/budget.png" alt="income" width={28} height={28} />
        </div>
        <div className="absolute top-64 right-40 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl">
          <Image src="/assets/budget.png" alt="savings" width={28} height={28} />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <span className="inline-block bg-black text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
          🚀 Budget Tracking Reimagined
        </span>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Smart Finance for a Secure and 
          <span className="block">
            Worry Free Future
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-900 mb-8 leading-relaxed max-w-2xl mx-auto">
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

      {/* Phone Mockups */}
      <div className="relative z-20 mt-16 flex flex-col md:flex-row items-center justify-center gap-8">
        {[1, 2, 3].map((phone, index) => (
          <div key={index} className="w-72 h-[560px] bg-gray-900 rounded-[3rem] p-2 transform hover:rotate-0 hover:scale-105 transition-transform duration-500">
            <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
              <div className="h-full flex items-center justify-center">
                <p className="text-gray-400 font-semibold">Phone {phone}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

