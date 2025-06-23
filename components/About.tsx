'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Mail, Phone } from 'lucide-react'

const About = () => {
  const personalInfo = [
    { icon: Calendar, label: 'Birthday', value: 'January 15, 1995' },
    { icon: MapPin, label: 'Location', value: 'Addis Ababa, Ethiopia' },
    { icon: Mail, label: 'Email', value: 'dawit.genetu@example.com' },
    { icon: Phone, label: 'Phone', value: '+251 911 123 456' },
  ]

  const experiences = [
    {
      year: '2022 - Present',
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      description: 'Leading development of web applications using React, Node.js, and cloud technologies.',
    },
    {
      year: '2020 - 2022',
      title: 'Full Stack Developer',
      company: 'Digital Innovations Ltd.',
      description: 'Developed and maintained multiple client projects using modern web technologies.',
    },
    {
      year: '2018 - 2020',
      title: 'Frontend Developer',
      company: 'Web Studio Pro',
      description: 'Created responsive user interfaces and implemented modern design patterns.',
    },
  ]

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm a passionate full-stack developer with over 5 years of experience creating 
            innovative digital solutions. I love turning complex problems into simple, 
            beautiful, and intuitive designs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Personal Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Personal Information
            </h3>
            
            <div className="space-y-4">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
                    <info.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{info.label}</p>
                    <p className="text-gray-600 dark:text-gray-400">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-6">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                My Story
              </h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I started my journey in web development with a curiosity for creating things 
                that live on the internet. My interest in web development started back in 2018 
                when I decided to try editing custom Tumblr themes — turns out hacking together 
                a custom reblog button taught me a lot about HTML & CSS!
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
                Fast-forward to today, and I've had the privilege of building software for an 
                advertising agency, a start-up, a huge corporation, and a student-led design 
                studio. My main focus these days is building accessible, inclusive products 
                and digital experiences for a variety of clients.
              </p>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Experience
            </h3>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l-2 border-primary-200 dark:border-primary-700"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-600 rounded-full"></div>
                  <div className="mb-2">
                    <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                      {exp.year}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {exp.title}
                  </h4>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                    {exp.company}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 