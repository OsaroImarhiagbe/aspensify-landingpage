'use client'
import {motion } from 'motion/react'
import { features } from '@/utils/data';
import Image from 'next/image';
export default function CoreFeatures() {
  return (
    <section id='features' className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
         {features.map((item,i) => {
          return (
             <motion.div
              key={i}
              className='flex flex-col items-center'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <div className='mb-2 rounded-full bg-gradient-to-t from-emerald-500 to-white w-20 h-20 items-center flex justify-center'>
                <Image src={item.img} alt={item.desc} width={40} height={40} priority/>
              </div>
              <h3 className="font-spacegrotesk text-xl font-semibold mb-2 text-center">{item.title}</h3>
              <p className="font-inter text-gray-600 text-center text-md">{item.desc}</p>
            </motion.div>
          );
         })}
        </div>
      </div>
    </section>
  );
}