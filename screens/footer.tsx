'use client'
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from 'next/link'
import { header } from "@/utils/data";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter()
  return (
    <footer className="bg-gradient-to-b from-white to-emerald-500 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h2 className="font-spacegrotesk text-2xl font-bold text-gray-600">Aspensify</h2>
            {/* <p className="mt-2 text-sm text-gray-600">
              Smart Budgeting
            </p> */}
          </div>

          {/* Navigation */}
          <div className="flex flex-col space-y-3">
            <h3 className="font-spacegrotesk text-lg text-gray-600 font-semibold">Quick Links</h3>
            {
                  header.map((item,idx) => {
                    return (
                      <ul key={idx}>
                        <li>
                         {
                            item.link === '/developer' ? <button onClick={() => router.push('/developer')} className='cursor-pointer text-black font-spacegrotesk hover:text-emerald-600 transition-colors font-medium'>{item.name}</button> : 
                            <Link href={item.link} className="font-spacegrotesk  text-black hover:text-emerald-600 transition-colors font-medium">{item.name}</Link>
                          }
                        </li>
                      </ul>
                    );
                  })
                }
          </div>


          {/* Social */}
          <div>
            <h3 className="font-spacegrotesk text-lg text-gray-600 font-semibold">Follow Us</h3>
            <div className="flex space-x-4 mt-3">
              <Link href="https://twitter.com" target="_blank">
                <FaTwitter className="w-5 h-5 text-gray-600" />
              </Link>
              <Link href="https://linkedin.com" target="_blank">
                <FaLinkedin className="w-5 h-5 text-gray-600" />
              </Link>
              <Link href="https://www.instagram.com/aspensify?igsh=MWhrMDI4dmJjMGh0dg%3D%3D&utm_source=qr" target="_blank">
                <FaInstagram className="w-5 h-5 text-gray-600" />
              </Link>
            </div>
          </div>
        </div>

      {/* Divider */}
      <div className="font-inter border-t border-emerald-500 mt-10 pt-6 text-center text-sm text-gray-900">
        © {new Date().getFullYear()} Aspensify. All rights reserved. <br />
        <button onClick={() => router.push('/privacy-policy')} className="cursor-pointer underline hover:text-emerald-600 transition-colors">
          Privacy Policy
        </button>{" "}
        |{" "}
        <button className="underline hover:text-emerald-600 transition-colors">
          Cookie Policy
        </button>
      </div>
      </div>
    </footer>
  )
}
