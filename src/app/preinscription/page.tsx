import type { Metadata } from 'next'
import PreinscriptionForm from '@/components/PreinscriptionForm'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Préinscription 2025-2026',
  description:
    'Inscrivez votre enfant à inTec Djibouti pour l\'année scolaire 2025-2026. Formulaire en ligne pour Préscolaire, Primaire, Collège et Lycée. Joignez les pièces requises (acte de naissance, photo d\'identité).',
  alternates: { canonical: '/preinscription' },
  openGraph: {
    title: 'Préinscription 2025-2026 — inTec Djibouti',
    description: 'Inscrivez votre enfant en ligne. Formulaire simple et rapide.',
    url: '/preinscription',
  },
}

export default function PreinscriptionPage() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              Dossier d&apos;Inscription
            </span>
            <h1 className="text-4xl lg:text-5xl font-black text-slate-800 mb-4">
              Préinscription{' '}
              <span className="bg-gradient-to-r from-blue-600 to-amber-500 bg-clip-text text-transparent">
                2025-2026
              </span>
            </h1>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Remplissez ce formulaire pour inscrire votre enfant à inTec. Notre équipe vous
              contactera pour confirmer votre dossier.
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
            <PreinscriptionForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
