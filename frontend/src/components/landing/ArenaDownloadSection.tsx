import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Instagram, Linkedin } from 'lucide-react'
import NewsletterSignup from '../newsletter/NewsletterSignup'
import WaitlistModal from '../modals/WaitlistModal'

const ArenaDownloadSection = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Download CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-tight mb-8">
            GET IN THE GAME,
            <br />
            ANYTIME, ANYWHERE
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button
              onClick={() => setIsWaitlistOpen(true)}
              className="bg-[#F5A524] hover:bg-[#F5A524]/90 text-white font-bold text-lg px-12 py-4 rounded-lg transition-colors shadow-lg hover:shadow-xl"
            >
              JOIN WAITLIST
            </button>
          </motion.div>
        </motion.div>

        {/* Newsletter and Contact Section */}
        <div className="bg-[#F5A524] rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-8 md:p-12 lg:p-16">
            <div className="max-w-3xl mx-auto">
              {/* Newsletter Form */}
              <div className="mb-16">
                <h3 className="text-black font-bold text-2xl mb-6">
                  SIGN UP FOR OUR NEWSLETTER
                </h3>
                <NewsletterSignup />
              </div>

              {/* Contact and Social Links */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div>
                  <h3 className="text-black font-bold text-lg mb-4">CONTACT US</h3>
                  <div className="space-y-2">
                    <a 
                      href="mailto:contact@joinarena.co.uk" 
                      className="flex items-center gap-2 text-black/80 hover:text-black transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      contact@joinarena.co.uk
                    </a>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-black font-bold text-lg mb-4">FOLLOW US</h3>
                  <div className="flex gap-4">
                    <a 
                      href="https://www.instagram.com/joinarena/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black/80 hover:text-black transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/company/thearenaapp/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black/80 hover:text-black transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Logo */}
              <div className="text-center">
                <h2 className="text-black text-5xl font-black tracking-tight inline-block border-t-4 border-black pt-6">
                  ARENA
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Waitlist Modal */}
      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
    </section>
  )
}

export default ArenaDownloadSection