'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { X, ZoomIn } from 'lucide-react'
import Image from 'next/image'

const images = [
  { src: '/images/evenmentstest.jpg',    alt: 'Nos élèves en activité' },        // index 0 — row-span-2 (tall)
  { src: '/images/fettesnew.jpg',       alt: 'Fête de fin d\'année' },
  { src: '/images/evenments.jpg',       alt: 'Événements scolaires' },
  { src: '/images/certificates.jpg',    alt: 'Remise de certificats' },
  { src: '/images/directeur.jpg',       alt: 'Direction de l\'établissement' },
  { src: '/images/images parent.jpg',   alt: 'Fêtes & Célébrations inTec' },    // index 5 — row-span-2 (tall)
  { src: '/images/parents.jpg',         alt: 'Rencontre parents-professeurs' },
  { src: '/images/responables.jpg',     alt: 'Équipe pédagogique' },
]

export default function GalerieSection() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <section id="galerie" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
            Galerie Photos
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-800">
            La Vie à <span className="text-gradient">inTec</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelected(img.src)}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group ${
                i === 0 || i === 5 ? 'row-span-2' : ''
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <p className="text-white text-sm font-medium">{img.alt}</p>
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
        >
          <button
            className="absolute top-4 right-4 text-white p-2 glass rounded-full"
            onClick={() => setSelected(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="relative max-w-4xl max-h-full w-full"
            style={{ aspectRatio: '16/9' }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selected}
              alt="Galerie agrandie"
              fill
              className="object-contain rounded-2xl"
              sizes="100vw"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
