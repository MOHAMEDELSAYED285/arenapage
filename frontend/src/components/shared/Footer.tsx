'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Instagram, Linkedin, Youtube, MapPin, Mail } from 'lucide-react'

const Footer = () => {
  const contactInfo = [
    { icon: MapPin, text: "London, United Kingdom" },
    { icon: Mail, text: "contact@joinarena.co.uk" }
  ]

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/joinarena/", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/thearenaapp/", label: "LinkedIn" },
    { icon: Youtube, href: "https://www.youtube.com/@join-arena", label: "YouTube" }
  ]

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Logo and Contact */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <Link href="/" className="inline-block mb-6">
            <h2 className="text-3xl font-black">ARENA</h2>
          </Link>
          <div className="space-y-4">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-center justify-center gap-3 text-gray-600">
                <item.icon className="h-5 w-5 text-[#F5A524]" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center pt-8 border-t border-gray-200 space-y-6">
          <div className="flex gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-gray-600 hover:text-[#F5A524] transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Arena. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer