'use client'

import { AlertCircle, Clock, CreditCard, BarChart2 } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ProblemSection() {
  const problems = [
    {
      icon: <AlertCircle className="w-10 h-10 text-emerald-600" />,
      title: "Unclear Spending",
      description:
        "Many people struggle to understand where their money is going, leading to stress and overspending.",
    },
    {
      icon: <Clock className="w-10 h-10 text-emerald-600" />,
      title: "Time-Consuming Budgeting",
      description:
        "Tracking every expense manually takes hours every week and is prone to mistakes.",
    },
    {
      icon: <CreditCard className="w-10 h-10 text-emerald-600" />,
      title: "Debt Management",
      description:
        "Users often lose track of bills and debt payments, risking late fees and high interest.",
    },
    {
      icon: <BarChart2 className="w-10 h-10 text-emerald-600" />,
      title: "Lack of Insight",
      description:
        "Even with tracking, people don’t get actionable advice based on their unique financial situation.",
    },
  ]

  return (
    <section id='problem' className="py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-spacegrotesk text-3xl md:text-4xl font-bold text-gray-900 mb-6"
        >
          The Problems We Solve
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-inter text-gray-900 text-lg mb-12"
        >
          Managing personal finances can be confusing, time-consuming, and stressful. Aspensify simplifies it.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg cursor-pointer"
            >
              <div className="mb-4 flex justify-center">{problem.icon}</div>
              <h3 className="font-spacegrotesk text-xl font-semibold text-gray-900 mb-2">{problem.title}</h3>
              <p className="font-inter text-gray-600 text-md">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
