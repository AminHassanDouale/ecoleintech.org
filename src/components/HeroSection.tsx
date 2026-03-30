'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, BookOpen, Star, Award, Users } from 'lucide-react'

const floatingIcons = [
  { icon: BookOpen, x: '10%', y: '20%', delay: 0 },
  { icon: Star, x: '80%', y: '15%', delay: 0.5 },
  { icon: Award, x: '75%', y: '70%', delay: 1 },
  { icon: Users, x: '15%', y: '75%', delay: 1.5 },
]

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${((i * 37 + 13) % 100)}%`,
  top: `${((i * 53 + 7) % 100)}%`,
  duration: 3 + (i % 4),
  delay: (i % 3) * 0.7,
}))

export default function HeroSection() {
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden flex items-center">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{ left: p.left, top: p.top }}
            animate={{ y: [-20, 20, -20], opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }}
          />
        ))}
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: '1s' }}
      />

      {/* Floating icons */}
      {floatingIcons.map(({ icon: Icon, x, y, delay }, i) => (
        <motion.div
          key={i}
          className="absolute hidden lg:flex items-center justify-center w-12 h-12 glass rounded-2xl text-amber-400"
          style={{ left: x, top: y }}
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, delay }}
        >
          <Icon className="w-6 h-6" />
        </motion.div>
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 w-full">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-amber-400 text-sm font-semibold mb-8"
          >
            <Star className="w-4 h-4 fill-current" />
            Excellence Académique à Djibouti
            <Star className="w-4 h-4 fill-current" />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-black text-white mb-6"
          >
            in<span className="text-gradient">Tec</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-xl sm:text-2xl lg:text-3xl text-blue-200 font-light mb-4">
              Institut Technologique de
            </p>
            <p className="text-2xl sm:text-3xl lg:text-4xl text-white font-bold mb-8">
              Djibouti
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-blue-200/80 max-w-2xl mx-auto mb-12"
          >
            De la Préscolaire au Lycée, nous offrons une éducation d&apos;excellence,
            formant les leaders de demain avec passion et innovation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/preinscription">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-2xl font-bold text-lg shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 animate-gradient"
              >
                S&apos;inscrire Maintenant
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <a href="https://scolapp.com" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-8 py-4 glass text-white rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300"
              >
                Accéder à ScolApp
                <BookOpen className="w-5 h-5 text-amber-400" />
              </motion.button>
            </a>
          </motion.div>

          {/* School levels pills */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap items-center justify-center gap-3 mt-16"
          >
            {['Préscolaire', 'Primaire', 'Collège', 'Lycée'].map((level, i) => (
              <motion.span
                key={level}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + i * 0.1 }}
                className="px-4 py-2 glass rounded-full text-white/80 text-sm font-medium"
              >
                {level}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 80L48 66.7C96 53.3 192 26.7 288 20C384 13.3 480 26.7 576 33.3C672 40 768 40 864 36.7C960 33.3 1056 26.7 1152 26.7C1248 26.7 1344 33.3 1392 36.7L1440 40V80H0Z"
            fill="#f8fafc"
          />
        </svg>
      </div>
    </section>
  )
}
