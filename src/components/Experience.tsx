import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    title: 'Accounting Intern',
    company: 'DYP JAIN AND COMPANY',
    location: 'Sikar',
    period: 'Jun 2023 - Aug 2023',
    description: [
      'Prepared and filed GST returns for multiple clients',
      'Managed bookkeeping and financial records',
      'Computed income tax returns',
      'Performed account reconciliation'
    ]
  },
  {
    title: 'Community Development Intern',
    company: 'Ek khwahish Education Foundation',
    location: 'Remote',
    period: 'Jun 2024 - Aug 2024',
    description: [
      'Collaborated with local communities and NGOs',
      'Implemented education-focused initiatives',
      'Coordinated awareness campaigns',
      'Contributed to fundraising programs'
    ]
  }
]

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-mystic-50/50 to-jade-50/50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-mystic-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-jade-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-mystic-800 mb-12">
            Professional Experience
          </h2>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-mystic-500"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-mystic-500 rounded-full" />
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-display font-semibold text-mystic-800">
                        {experience.title}
                      </h3>
                      <p className="text-mystic-600">
                        {experience.company}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-mystic-600">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{experience.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {experience.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-700"
                      >
                        <span className="w-2 h-2 bg-mystic-500 rounded-full mt-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience 