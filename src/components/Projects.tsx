import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Business Strategy Analysis',
    description: 'Comprehensive analysis of market trends and competitive landscape for a retail business.',
    tags: ['Market Research', 'Strategy', 'Analysis']
  },
  {
    title: 'Financial Management System',
    description: 'Developed a system for tracking expenses, revenue, and financial metrics.',
    tags: ['Finance', 'Management', 'System']
  },
  {
    title: 'Community Outreach Program',
    description: 'Organized and managed a community development initiative focusing on education.',
    tags: ['Community', 'Education', 'Management']
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-mystic-50/50 to-jade-50/50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-mystic-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-jade-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000" />
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
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-display font-semibold text-mystic-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-mystic-100 text-mystic-700 rounded-full text-sm hover:bg-mystic-200 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 