'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { X, ZoomIn } from 'lucide-react'
import Image from 'next/image'

const images = [
  { src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80', alt: 'Salle de classe moderne' },
  { src: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80', alt: 'Bibliothèque' },
  { src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80', alt: 'Élèves en cours' },
  { src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80', alt: 'Laboratoire' },
  { src: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=80', alt: 'Sport et activités' },
  { src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80', alt: 'Terrain de sport' },
  { src: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80', alt: 'Arts et créativité' },
  { src: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&q=80', alt: 'Remise de diplômes' },
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
                unoptimized
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
              unoptimized
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
