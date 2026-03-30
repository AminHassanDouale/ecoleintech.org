'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import {
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Globe,
  MessageCircle,
  Share2,
} from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image
                src="/images/in tech.jpg"
                alt="inTec Djibouti"
                width={140}
                height={56}
                className="h-14 object-contain"
                style={{ width: 'auto' }}
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              Depuis plus de 25 ans, inTec forme les jeunes djiboutiens avec excellence, du
              préscolaire au lycée, en préparant les leaders de demain.
            </p>
            <motion.a
              href="https://scolapp.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-semibold text-sm shadow-lg hover:shadow-amber-500/30 transition-shadow"
            >
              <ExternalLink className="w-4 h-4" />
              Accéder à ScolApp
            </motion.a>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Navigation</h4>
            <ul className="space-y-3">
              {[
                { href: '/#niveaux', label: 'Nos Niveaux' },
                { href: '/preinscription', label: 'Préinscription' },
                { href: '/#actualites', label: 'Actualités' },
                { href: '/#galerie', label: 'Galerie' },
                { href: '/#contact', label: 'Contact' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-slate-400 hover:text-amber-400 transition-colors text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-amber-400 flex-shrink-0" />
                <span>
                  Boulevard de la République
                  <br />
                  Djibouti Ville, Djibouti
                </span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <Phone className="w-4 h-4 text-amber-400" />
                <span>+253 XX XX XX XX</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail className="w-4 h-4 text-amber-400" />
                <span>contact@intec-djibouti.dj</span>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              {[Globe, MessageCircle, Share2].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:bg-slate-700 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
          <p>&copy; 2025 inTec Djibouti. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-amber-400 transition-colors">
              Confidentialité
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors">
              Mentions légales
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
