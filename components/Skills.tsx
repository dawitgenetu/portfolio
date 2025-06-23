'use client'

import { motion } from 'framer-motion'
import { Code, Database, Palette, Smartphone, Server, Brain } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Next.js', level: 85 },
      ],
    },
    {
      icon: Server,
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Express.js', level: 90 },
        { name: 'Django', level: 75 },
        { name: 'REST APIs', level: 90 },
      ],
    },
    {
      icon: Database,
      title: 'Database & Cloud',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Firebase', level: 85 },
        { name: 'AWS', level: 70 },
        { name: 'Docker', level: 75 },
      ],
    },
    {
      icon: Palette,
      title: 'Design & Tools',
      skills: [
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Figma', level: 75 },
        { name: 'Git', level: 85 },
        { name: 'VS Code', level: 95 },
        { name: 'Adobe XD', level: 70 },
      ],
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      skills: [
        { name: 'React Native', level: 80 },
        { name: 'Flutter', level: 70 },
        { name: 'Mobile UI/UX', level: 75 },
        { name: 'App Store', level: 80 },
        { name: 'Firebase Mobile', level: 85 },
      ],
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      skills: [
        { name: 'TensorFlow', level: 70 },
        { name: 'Python ML', level: 75 },
        { name: 'NLP', level: 65 },
        { name: 'Data Analysis', level: 80 },
        { name: 'OpenAI API', level: 75 },
      ],
    },
  ]

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I've worked with a variety of technologies and tools to create 
            comprehensive digital solutions. Here's what I bring to the table.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg mr-4">
                  <category.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Other Skills & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Redux', 'GraphQL', 'Webpack', 'Jest', 'Cypress', 'Sass', 'Bootstrap',
              'Material-UI', 'Ant Design', 'Three.js', 'D3.js', 'Socket.io',
              'Redis', 'Elasticsearch', 'Kubernetes', 'Jenkins', 'CI/CD',
              'Agile', 'Scrum', 'JIRA', 'Confluence', 'Postman', 'Swagger'
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-colors duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 