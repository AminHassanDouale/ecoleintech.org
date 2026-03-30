'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, BookOpen, Award, Building2 } from 'lucide-react'

const stats = [
  { icon: Users, value: 150, suffix: '+', label: 'Élèves', color: 'from-blue-500 to-blue-600' },
  { icon: BookOpen, value: 10, suffix: '+', label: 'Enseignants', color: 'from-amber-500 to-amber-600' },
  { icon: Award, value: 5, suffix: 'ans', label: "D'Excellence", color: 'from-emerald-500 to-emerald-600' },
  { icon: Building2, value: 4, suffix: '', label: 'Niveaux', color: 'from-purple-500 to-purple-600' },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      let start = 0
      const duration = 2000
      const step = (value / duration) * 16
      const timer = setInterval(() => {
        start += step
        if (start >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)
      return () => clearInterval(timer)
    }
  }, [inView, value])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-black text-slate-800 mb-4">
            Notre <span className="text-gradient">Impact</span>
          </h2>
          <p className="text-slate-500 text-lg">Des chiffres qui parlent d&apos;eux-mêmes</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, value, suffix, label, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 text-center group"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-black text-slate-800 mb-2">
                <AnimatedCounter value={value} suffix={suffix} />
              </div>
              <p className="text-slate-500 font-medium">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
