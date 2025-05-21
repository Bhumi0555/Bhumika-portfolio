import { motion } from 'framer-motion'
import { 
  BarChart3, 
  Users, 
  Target, 
  Lightbulb, 
  LineChart, 
  Presentation 
} from 'lucide-react'

const skills = [
  {
    category: 'Business Analysis',
    icon: BarChart3,
    items: ['Financial Analysis', 'Market Research', 'Data Interpretation']
  },
  {
    category: 'Leadership',
    icon: Users,
    items: ['Team Management', 'Strategic Planning', 'Decision Making']
  },
  {
    category: 'Project Management',
    icon: Target,
    items: ['Agile Methodology', 'Risk Management', 'Resource Planning']
  },
  {
    category: 'Problem Solving',
    icon: Lightbulb,
    items: ['Critical Thinking', 'Innovation', 'Strategic Analysis']
  },
  {
    category: 'Financial Management',
    icon: LineChart,
    items: ['Budgeting', 'Financial Planning', 'Investment Analysis']
  },
  {
    category: 'Communication',
    icon: Presentation,
    items: ['Public Speaking', 'Report Writing', 'Stakeholder Management']
  }
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-mystic-50/50 to-jade-50/50 relative overflow-hidden">
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
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-mystic-800 mb-16">
            Skills & Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-mystic-100 flex items-center justify-center">
                    <skill.icon className="w-6 h-6 text-mystic-600" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-mystic-800">
                    {skill.category}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <span className="w-1.5 h-1.5 bg-mystic-500 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 