'use client'
import { Menu, X,} from 'lucide-react';
import React, { useState, useEffect,useCallback } from 'react';
import {header} from '@/utils/data'
import { useRouter } from "next/navigation"
import Link from 'next/link';
import Image from 'next/image';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
      const [nav, setNav] = useState(false);
    const router = useRouter();

    const Navhandler = useCallback(() => {
      setNav(!nav) 
    },[nav]);


    const handleNav = useCallback(() => {
        router.push('/#CTA')
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
            <h1 className="text-black md:text-sm sm:text-base md:text-lg lg:text-xl font-medium">Aspensify</h1>
            </div>
            {/*Links */}
           <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                 {
                  header.map((item,idx) => {
                    return (
                      <ul key={idx}>
                        <li>
                          <Link href='#' className="text-black hover:text-purple-600 transition-colors font-medium">{item.name}</Link>
                        </li>
                      </ul>
                    );
                  })
                }
              </div>
            </div>
            <div className="px-8 py-2 lex flex-row">
              <div className="hidden md:block">
              <button className="shadow-xl cursor-pointer bg-gradient-to-t from-emerald-600 to-white text-white px-6 py-2 rounded-full font-semibold hover:scale-110 duration-700 easeIn">
                Watch Demo hello
              </button>
            </div>
             <div onClick={Navhandler} className="block cursor-pointer md:hidden">
             <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
            </div>  
            </div>
            </div>
           {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#features" className="block px-3 py-2 text-black hover:text-purple-600 font-medium">
                  Features
                </a>
                <a href="#how-it-works" className="block px-3 py-2 text-black hover:text-purple-600 font-medium">
                  How it Works
                </a>
                <a href="#pricing" className="block px-3 py-2 text-black hover:text-purple-600 font-medium">
                  Pricing
                </a>
                <a href="#about" className="block px-3 py-2 text-black hover:text-purple-600 font-medium">
                  About
                </a>
                <button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full font-semibold">
                  Get Started Free
                </button>
              </div>
            </div>
          )}
    </header>
    );
}

export default Header;
                    
   