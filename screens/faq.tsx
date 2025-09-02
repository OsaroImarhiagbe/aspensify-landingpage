"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Aspensify?",
    answer:
      "Aspensify is an intelligent budgeting app that adapts to your life circumstances. Unlike traditional budgeting tools that just track numbers, Aspensify helps you budget according to what's happening in your life and the world around you—whether you're unemployed, expecting a baby, or navigating major life changes.",
  },
  {
    question: "Is Aspensify free to use?",
    answer:
      "Yes! Aspensify offers a free version with powerful contextual budgeting features. Premium plans unlock advanced life-stage analytics, detailed financial breakdowns for couples, and personalized insights based on your unique situation.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply sign up with your email and tell us about your current life situation. Aspensify will create a personalized budget that adapts to your circumstances, whether you're connecting accounts or manually tracking expenses.",
  },
  {
    question: "How is Aspensify different from other budgeting apps?",
    answer:
      "Aspensify goes beyond basic expense tracking by understanding your life context. Planning for a baby? Recently unemployed? Starting a new relationship? Aspensify adjusts your budget recommendations and provides insights tailored to your specific life stage and external factors affecting your finances.",
  },
  {
    question: "Can Aspensify help with couple's finances?",
    answer:
      "Absolutely! Aspensify provides detailed financial breakdowns that help couples understand exactly how to split expenses fairly. Our upcoming features will eliminate financial arguments by giving you transparent, data-driven insights into shared spending and individual contributions.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id='faq' className="py-20 px-6 max-w-3xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-spacegrotesk text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-900"
      >
        Frequently Asked Questions ❓
      </motion.h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white p-5 rounded-2xl shadow-md"
          >
            <button
              className="w-full flex justify-between items-center text-left"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-spacegrotesk font-medium text-gray-900">{faq.question}</span>
              <ChevronDown
                className={`cursor-pointer w-5 h-5 text-gray-600 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="font-inter mt-3 text-gray-600"
              >
                {faq.answer}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
