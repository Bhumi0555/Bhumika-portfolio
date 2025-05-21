import { motion } from 'framer-motion'
import { GraduationCap, School } from 'lucide-react'

const education = [
  {
    degree: 'Integrated BBA-MBA',
    school: 'Lovely Professional University',
    location: 'Punjab, India',
    duration: '2021 - Present',
    description: 'Currently pursuing an integrated BBA-MBA program with focus on Business Administration and Management.',
    icon: GraduationCap
  },
  {
    degree: 'Higher Secondary Education (12th)',
    school: 'Delhi Public School',
    location: 'Gurgaon, India',
    duration: '2019 - 2021',
    description: 'Completed 12th grade with Commerce stream, focusing on Business Studies, Accountancy, and Economics.',
    icon: School
  },
  {
    degree: 'Secondary Education (10th)',
    school: 'Delhi Public School',
    location: 'Gurgaon, India',
    duration: '2017 - 2019',
    description: 'Completed 10th grade with distinction, focusing on core subjects and developing foundational skills.',
    icon: School
  }
]

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-mystic-50/50 to-jade-50/50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-mystic-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-jade-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-mystic-800 mb-16">
            Education
          </h2>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-mystic-100 flex items-center justify-center flex-shrink-0">
                    <edu.icon className="w-6 h-6 text-mystic-600" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-display font-semibold text-mystic-800 mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-mystic-600 font-medium mb-2">
                      {edu.school}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-mystic-500 rounded-full" />
                        {edu.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-mystic-500 rounded-full" />
                        {edu.duration}
                      </span>
                    </div>
                    <p className="text-gray-700">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education 