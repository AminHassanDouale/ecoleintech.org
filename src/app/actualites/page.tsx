import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import { Calendar, Tag, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Actualités',
  description:
    'Restez informé des dernières nouvelles d\'inTec Djibouti : résultats scolaires, événements, inaugurations, compétitions et partenariats internationaux.',
  alternates: { canonical: '/actualites' },
  openGraph: {
    title: 'Actualités — inTec Djibouti',
    description: 'Dernières nouvelles et événements de l\'école inTec à Djibouti.',
    url: '/actualites',
  },
}

const allActualites = [
  {
    id: 1,
    title: 'Résultats Exceptionnels au Baccalauréat 2024',
    excerpt:
      "Nos lycéens ont brillé avec un taux de réussite de 98% au baccalauréat session 2024. Une fierté immense pour toute la communauté inTec qui témoigne de l'excellence de notre enseignement.",
    date: '15/03/2025',
    category: 'Résultats',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
    color: 'from-emerald-400 to-teal-500',
  },
  {
    id: 2,
    title: 'Inauguration du Nouveau Laboratoire Informatique',
    excerpt:
      'Un laboratoire moderne équipé de 50 postes informatiques dernier cri pour préparer nos élèves au monde numérique de demain.',
    date: '28/02/2025',
    category: 'Infrastructure',
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&q=80',
    color: 'from-blue-400 to-indigo-500',
  },
  {
    id: 3,
    title: 'Journée Portes Ouvertes - Préinscriptions 2025',
    excerpt:
      'Venez découvrir notre établissement lors de notre journée portes ouvertes. Rencontrez nos enseignants et visitez nos installations.',
    date: '10/02/2025',
    category: 'Événement',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80',
    color: 'from-amber-400 to-orange-500',
  },
  {
    id: 4,
    title: 'Compétition Nationale de Mathématiques',
    excerpt:
      'Les élèves de inTec remportent la 1ère place à la compétition nationale de mathématiques. Félicitations à nos champions!',
    date: '05/01/2025',
    category: 'Compétition',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80',
    color: 'from-violet-400 to-purple-500',
  },
  {
    id: 5,
    title: 'Partenariat avec des Universités Internationales',
    excerpt:
      "inTec signe des accords de partenariat avec plusieurs universités françaises et canadiennes pour faciliter l'orientation de nos bacheliers.",
    date: '20/12/2024',
    category: 'International',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80',
    color: 'from-pink-400 to-rose-500',
  },
  {
    id: 6,
    title: 'Festival Culturel inTec 2024',
    excerpt:
      "Un festival haut en couleurs célébrant la diversité culturelle djiboutienne et l'ouverture sur le monde.",
    date: '05/12/2024',
    category: 'Culture',
    image: 'https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?w=800&q=80',
    color: 'from-amber-400 to-yellow-500',
  },
]

export default function ActualitesPage() {
  return (
    <>
      <main className="min-h-screen bg-slate-50 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
              Actualités
            </span>
            <h1 className="text-4xl lg:text-5xl font-black text-slate-800 mb-4">
              Toutes les{' '}
              <span className="bg-gradient-to-r from-blue-600 to-amber-500 bg-clip-text text-transparent">
                Nouvelles
              </span>
            </h1>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allActualites.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    unoptimized
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${article.color} opacity-30`}
                  />
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
                  <h2 className="font-black text-slate-800 text-lg mb-3 line-clamp-2">
                    {article.title}
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-4">
                    {article.excerpt}
                  </p>
                  <button className="flex items-center gap-2 text-blue-600 font-semibold text-sm hover:gap-4 transition-all duration-300">
                    Lire l&apos;article <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
