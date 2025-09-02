"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Developer() {
  const router = useRouter();

  return (
    <section className="relative min-h-screen py-20 text-white flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Go Back Button */}
      <button
        onClick={() => router.back()}
        className="cursor-pointer absolute top-6 left-6 bg-white text-gray-800 px-4 py-2 rounded-full shadow-lg font-medium hover:shadow-xl hover:scale-105 transition-all duration-300 z-10"
      >
        ← Go Back
      </button>

      {/* Background Gradient Shape */}
      <div className="absolute inset-x-0 top-10 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl">
        <div
          className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-emerald-500 to-emerald-900 opacity-20"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        />
      </div>

      {/* Developer Card */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative max-w-2xl mx-6"
      >
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12">
          {/* Card Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-32 h-32 mx-auto mb-6"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full p-1">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                  <Image
                    src="/assets/emmanuel.png"
                    alt="Emmanuel Imarhiagbe - Developer of Aspensify"
                    fill
                    priority
                    sizes="8rem"
                    style={{ objectFit: "cover" }}
                    quality={100}
                  />
                </div>
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-spacegrotesk text-3xl md:text-4xl font-bold text-gray-900 mb-2"
            >
              Emmanuel Imarhiagbe
            </motion.h2>

                 <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-inter inline-flex items-center px-4 py-2 text-gray-900 rounded-full text-sm font-medium outline"
            >
              Full Stack Developer
            </motion.div>
          </div>

          {/* Card Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-6"
          >
            <div className="text-center">
              <h3 className="font-spacegrotesk text-xl font-semibold text-gray-900 mb-4 flex items-center justify-center gap-2">
                Hi there! 👋
              </h3>
            </div>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="font-inter">
                  With 3 years of experience as a Data Engineer at General Motors, I discovered 
                  my passion for full-stack development and building products that truly help people. 
                  This journey led me to create <span className="font-bold text-emerald-600">Aspensify</span> — 
                  a smarter, simpler way to take control of your finances.
                </p>
                
                <p className="font-inter">
                  Most budgeting apps felt complicated or impersonal, so I combined my data expertise 
                  with modern development practices to build something that actually adapts to you. 
                  My goal is to make financial clarity accessible to everyone through thoughtfully 
                  designed products.
                </p>
                
                <p className="font-inter">
                  Aspensify isn&apos;t just about tracking numbers — it&apos;s about building 
                  peace of mind and empowering people to reach their goals with 
                  confidence.
                </p>
              </div>

            {/* Stats or Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">💡</div>
                <div className="text-sm text-gray-600 mt-1">Innovation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">🎯</div>
                <div className="text-sm text-gray-600 mt-1">User-Focused</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">🚀</div>
                <div className="text-sm text-gray-600 mt-1">Future-Ready</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full opacity-60"></div>
        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full opacity-60"></div>
      </motion.div>
    </section>
  );
}
 



 