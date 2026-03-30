'use client'
import { motion } from 'framer-motion'
import { Baby, BookOpen, GraduationCap, School } from 'lucide-react'

const niveaux = [
  {
    icon: Baby,
    title: 'Préscolaire',
    age: '3 - 6 ans',
    description:
      'Un environnement bienveillant et stimulant pour les tout-petits, favorisant leur développement global par le jeu et la découverte.',
    color: 'from-pink-400 to-rose-500',
    bgColor: 'bg-pink-50',
    features: ['Développement moteur', 'Éveil artistique', 'Socialisation', 'Langage'],
  },
  {
    icon: BookOpen,
    title: 'Primaire',
    age: '6 - 12 ans',
    description:
      "Les bases solides d'une éducation complète. Lecture, mathématiques, sciences et arts pour forger des esprits curieux.",
    color: 'from-blue-400 to-blue-600',
    bgColor: 'bg-blue-50',
    features: ['Français & Arabe', 'Mathématiques', 'Sciences', 'Informatique'],
  },
  {
    icon: School,
    title: 'Collège',
    age: '12 - 15 ans',
    description:
      "L'approfondissement des connaissances et le développement de l'esprit critique pour préparer l'avenir.",
    color: 'from-violet-400 to-purple-600',
    bgColor: 'bg-violet-50',
    features: ['Sciences avancées', 'Langues étrangères', 'Technologie', 'Sport'],
  },
  {
    icon: GraduationCap,
    title: 'Lycée',
    age: '15 - 18 ans',
    description:
      "Préparation au baccalauréat et à l'enseignement supérieur avec des filières d'excellence.",
    color: 'from-amber-400 to-orange-500',
    bgColor: 'bg-amber-50',
    features: ['Sciences & Maths', 'Littérature', 'Prépa Bac', 'Orientation'],
  },
]

export default function NiveauxSection() {
  return (
    <section id="niveaux" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Nos Niveaux Scolaires
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-800 mb-6">
            Un Parcours <span className="text-gradient">Complet</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            De la maternelle au lycée, inTec accompagne chaque élève dans son épanouissement
            académique et personnel.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {niveaux.map(({ icon: Icon, title, age, description, color, bgColor, features }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className={`${bgColor} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer relative overflow-hidden`}
            >
              {/* Background decoration */}
              <div
                className={`absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br ${color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
              />

              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-2xl font-black text-slate-800 mb-1">{title}</h3>
              <span className="inline-block px-3 py-1 bg-white/60 rounded-full text-sm text-slate-600 font-medium mb-4">
                {age}
              </span>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">{description}</p>

              <div className="space-y-2">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${color}`} />
                    <span className="text-slate-600 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
