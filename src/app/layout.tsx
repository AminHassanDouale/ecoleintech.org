import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

const BASE_URL = 'https://intec-djibouti.dj'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'inTec Djibouti — Institut Technologique | Préscolaire, Primaire, Collège, Lycée',
    template: '%s | inTec Djibouti',
  },
  description:
    "inTec est l'établissement scolaire de référence à Djibouti, offrant une éducation d'excellence du Préscolaire au Lycée. Préinscriptions ouvertes pour l'année 2025-2026.",
  keywords: [
    'inTec Djibouti',
    'école Djibouti',
    'inscription scolaire Djibouti',
    'lycée Djibouti',
    'collège Djibouti',
    'primaire Djibouti',
    'préscolaire Djibouti',
    'baccalauréat Djibouti',
    'meilleure école Djibouti',
    'ScolApp',
  ],
  authors: [{ name: 'inTec Djibouti', url: BASE_URL }],
  creator: 'inTec Djibouti',
  publisher: 'inTec Djibouti',
  alternates: {
    canonical: BASE_URL,
    languages: { fr: BASE_URL },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_DJ',
    url: BASE_URL,
    siteName: 'inTec Djibouti',
    title: 'inTec Djibouti — Institut Technologique',
    description:
      "L'établissement scolaire d'excellence à Djibouti. Du Préscolaire au Lycée, inTec forme les leaders de demain.",
    images: [
      {
        url: '/images/in_tech.png',
        width: 1200,
        height: 630,
        alt: 'inTec Djibouti — Institut Technologique',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'inTec Djibouti — Institut Technologique',
    description:
      "L'établissement scolaire d'excellence à Djibouti. Du Préscolaire au Lycée.",
    images: ['/images/in_tech.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  category: 'education',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'School',
  name: 'inTec Djibouti',
  description:
    "Institut Technologique de Djibouti — établissement scolaire d'excellence du Préscolaire au Lycée.",
  url: BASE_URL,
  logo: `${BASE_URL}/images/in_tech.png`,
  image: `${BASE_URL}/images/in_tech.png`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Boulevard de la République',
    addressLocality: 'Djibouti Ville',
    addressCountry: 'DJ',
  },
  telephone: '+253-XX-XX-XX-XX',
  email: 'contact@intec-djibouti.dj',
  foundingDate: '2000',
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 150 },
  educationalLevel: ['Préscolaire', 'Primaire', 'Collège', 'Lycée'],
  sameAs: [],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
