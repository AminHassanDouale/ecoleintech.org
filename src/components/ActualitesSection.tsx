'use client'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight, Tag } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const actualites = [
  {
    id: 1,
    title: 'Résultats Exceptionnels au Baccalauréat 2024',
    excerpt:
      'Nos lycéens ont brillé avec un taux de réussite de 98% au baccalauréat. Une fierté pour toute la communauté inTec.',
    date: '15/03/2025',
    category: 'Résultats',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80',
    color: 'from-emerald-400 to-teal-500',
  },
  {
    id: 2,
    title: 'Inauguration du Nouveau Laboratoire Informatique',
    excerpt:
      'Un laboratoire moderne équipé de 50 postes informatiques dernier cri pour préparer nos élèves au monde numérique.',
    date: '28/02/2025',
    category: 'Infrastructure',
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&q=80',
    color: 'from-blue-400 to-indigo-500',
  },
  {
    id: 3,
    title: 'Journée Portes Ouvertes - Préinscriptions 2025',
    excerpt:
      'Venez découvrir notre établissement lors de notre journée portes ouvertes. Rencontrez nos enseignants et visitez nos installations.',
    date: '10/02/2025',
    category: 'Événement',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80',
    color: 'from-amber-400 to-orange-500',
  },
]

export default function ActualitesSection() {
  return (
    <section id="actualites" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-16"
        >
          <div>
            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
              Actualités
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-800">
              Dernières <span className="text-gradient">Nouvelles</span>
            </h2>
          </div>
          <Link
            href="/actualites"
            className="hidden sm:flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition-all duration-300"
          >
            Voir tout <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {actualites.map((article, i) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  unoptimized
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${article.color} opacity-40`} />
                <span
                  className={`absolute top-4 left-4 flex items-center gap-1 px-3 py-1 bg-gradient-to-r ${article.color} text-white text-xs font-bold rounded-full`}
                >
                  <Tag className="w-3 h-3" />
                  {article.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  {article.date}
                </div>
                <h3 className="font-black text-slate-800 text-lg mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-4">
                  {article.excerpt}
                </p>
                <button className="flex items-center gap-2 text-blue-600 font-semibold text-sm hover:gap-4 transition-all duration-300">
                  Lire plus <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
