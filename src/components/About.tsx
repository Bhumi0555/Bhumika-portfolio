import { motion } from 'framer-motion'
import { BookOpen, Target, Users } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-mystic-50/50 to-jade-50/50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-mystic-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-jade-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-mystic-800 mb-16">
            About Me
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <BookOpen className="w-12 h-12 text-mystic-600 mb-4" />
              <h3 className="text-xl font-display font-semibold text-mystic-800 mb-2">
                Education
              </h3>
              <p className="text-gray-700">
                Integrated BBA-MBA student at Lovely Professional University, focusing on business administration and management.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <Target className="w-12 h-12 text-mystic-600 mb-4" />
              <h3 className="text-xl font-display font-semibold text-mystic-800 mb-2">
                Goals
              </h3>
              <p className="text-gray-700">
                Aspiring to become a successful business professional and make a positive impact in the corporate world.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <Users className="w-12 h-12 text-mystic-600 mb-4" />
              <h3 className="text-xl font-display font-semibold text-mystic-800 mb-2">
                Interests
              </h3>
              <p className="text-gray-700">
                Passionate about business strategy, leadership, and building meaningful professional relationships.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
          >
            <p className="text-lg text-gray-700 mb-6">
              I am a dedicated and ambitious Integrated BBA-MBA student at Lovely Professional University, 
              with a strong foundation in business administration and management. My academic journey has 
              equipped me with comprehensive knowledge in various business domains, including finance, 
              marketing, fashion and strategic management.
            </p>
            
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 