import { motion } from 'framer-motion'
import { ArrowDown, Mail, Linkedin } from 'lucide-react'
import Typewriter from 'typewriter-effect'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-mystic-50/50 to-jade-50/50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-mystic-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-jade-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-mystic-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-7xl font-display font-bold text-mystic-800 leading-tight"
              >
                <Typewriter
                  options={{
                    strings: ['Bhumika Kajla'],
                    autoStart: true,
                    loop: true,
                    cursor: '|',
                    delay: 90,
                    deleteSpeed: 50,
                  }}
                />
              </motion.div>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-mystic-600 font-medium"
              >
                Integrated BBA-MBA Student at Lovely Professional University
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="btn-primary flex items-center gap-2 group hover:scale-105 transition-transform"
              >
                <Mail size={20} className="group-hover:scale-110 transition-transform" />
                Contact Me
              </a>
              <a
                href="https://www.linkedin.com/in/bhumika-kajla-ab3812258/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2 group hover:scale-105 transition-transform"
              >
                <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                Connect on LinkedIn
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="pt-4"
            >
              <a
                href="#about"
                className="inline-flex items-center gap-2 text-mystic-600 hover:text-mystic-800 transition-colors group"
              >
                <span>Scroll to explore</span>
                <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex justify-center group"
          >
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-mystic-200 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                <img
                  src="/profile.jpg"
                  alt="Bhumika Kajla"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-mystic-100 rounded-full -z-10 animate-pulse group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-mystic-200 rounded-full -z-10 animate-pulse animation-delay-1000 group-hover:scale-110 transition-transform duration-300" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 