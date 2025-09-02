'use client'
import { Menu, X,} from 'lucide-react';
import React, { useState,useCallback } from 'react';
import {header} from '@/utils/data'
import { useRouter } from "next/navigation"
import Link from 'next/link';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();




    const handleNav = useCallback(() => {
        router.push('/developer')
    },[router])
    const handleWait = useCallback(() => {
      setIsMenuOpen((prev) => !prev)
      router.push('/#cta')
    },[router])
    return (
      
           
      <header className="p-4 z-50 fixed w-full h-20 top-0 backdrop-blur-sm md:flex justify-center items-center">
            {/* Navigation Sections */}
            <div className="flex items-center flex-row justify-between rounded-full w-full">
            {/*Logo */}
            <div className="flex flex-row items-center justify-center md:p-1">
            <div className="py-2 px-2">
            {/* <Image src={icon} alt="app icon" width={50} height={50}/> */}
            </div>
            <h1 className="font-spacegrotesk text-lg text-black md:text-sm sm:text-base md:text-xl lg:text-2xl font-medium">Aspensify</h1>
            </div>
            {/*Links */}
           <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                 {
                  header.map((item,idx) => {
                    return (
                      <ul key={idx}>
                        <li>
                          {
                            item.link === '/developer' ? <button onClick={handleNav} className='cursor-pointer text-black font-spacegrotesk hover:text-emerald-600 transition-colors font-medium'>{item.name}</button> : 
                            <Link href={item.link} className="font-spacegrotesk  text-black hover:text-emerald-600 transition-colors font-medium">{item.name}</Link>
                          }
                        </li>
                      </ul>
                    );
                  })
                }
              </div>
            </div>
            <div className="px-8 py-2 lex flex-row">
              <div className="hidden md:block">
              <button onClick={handleWait} className="font-spacegrotesk shadow-xl cursor-pointer bg-emerald-500 text-white px-6 py-2 rounded-full font-bold hover:scale-110 duration-700 easeIn">
                Join the Waitlist
              </button>
            </div>
             <div className="block cursor-pointer md:hidden">
             <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                {isMenuOpen ? <X className="cursor-pointer h-6 w-6" /> : <Menu className="cursor-pointer h-6 w-6" />}
              </button>
            </div>
            </div>  
            </div>
            </div>
           {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
              <div className="px-2 pt-2 pb-3 space-y-1">
                   {
                  header.map((item,idx) => {
                    return (
                      <ul key={idx}>
                        <li className='px-3 py-2'>
                         {
                            item.link === '/developer' ? <button onClick={handleNav} className='cursor-pointer text-black font-spacegrotesk hover:text-emerald-600 transition-colors font-medium'>{item.name}</button> : 
                            <Link href={item.link} className="font-spacegrotesk  text-black hover:text-emerald-600 transition-colors font-medium">{item.name}</Link>
                          }
                        </li>
                      </ul>
                    );
                  })
                }
                <button onClick={handleWait} className="w-full mt-4 bg-emerald-500 text-white px-6 py-2 rounded-full font-bold shadow-2xl">
                  Join the Waitlist
                </button>
              </div>
            </div>
          )}
    </header>
    );
}

export default Header;
                    
   