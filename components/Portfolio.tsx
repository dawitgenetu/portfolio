'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Eye } from 'lucide-react'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, payment integration, and admin dashboard.',
      image: '/api/placeholder/400/300',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/api/placeholder/400/300',
      category: 'web',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard that displays current weather conditions, forecasts, and interactive maps using weather APIs.',
      image: '/api/placeholder/400/300',
      category: 'web',
      technologies: ['JavaScript', 'Weather API', 'Chart.js'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 4,
      title: 'Mobile Fitness App',
      description: 'A cross-platform mobile application for tracking workouts, nutrition, and fitness goals with social features.',
      image: '/api/placeholder/400/300',
      category: 'mobile',
      technologies: ['React Native', 'Redux', 'Firebase'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 5,
      title: 'AI Chat Assistant',
      description: 'An intelligent chatbot powered by machine learning that provides customer support and answers queries in real-time.',
      image: '/api/placeholder/400/300',
      category: 'ai',
      technologies: ['Python', 'TensorFlow', 'Flask', 'NLP'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring dark mode and smooth animations.',
      image: '/api/placeholder/400/300',
      category: 'web',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
  ]

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'ai', name: 'AI/ML' },
  ]

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' ? true : project.category === activeFilter
  )

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Portfolio
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project represents 
            a unique challenge and learning experience.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${
                activeFilter === filter.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {filter.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary-400 to-primary-600 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-4xl font-bold text-white opacity-20">
                      {project.title.split(' ').map(word => word[0]).join('')}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors duration-300"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors duration-300"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-300"
                    >
                      <Eye className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio 