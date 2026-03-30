'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Check, AlertCircle, MapPin, Phone, Mail, Clock } from 'lucide-react'

const sujets = [
  'Demande d\'information',
  'Préinscription',
  'Visite de l\'établissement',
  'Partenariat',
  'Autre',
]

export default function ContactSection() {
  const [form, setForm] = useState({ nom: '', email: '', telephone: '', sujet: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm({ nom: '', email: '', telephone: '', sujet: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-amber-500/20 text-amber-400 rounded-full text-sm font-semibold mb-4">
            Contactez-nous
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Nous Sommes à <span className="text-gradient">Votre Écoute</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Une question sur nos formations, une visite à planifier ? Écrivez-nous, notre équipe répond sous 24h.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {[
              {
                icon: MapPin,
                title: 'Adresse',
                content: 'Boulevard de la République\nDjibouti Ville, Djibouti',
                color: 'from-blue-500 to-blue-600',
              },
              {
                icon: Phone,
                title: 'Téléphone',
                content: 'Tél: +253 21 34 18 90\nMob: +253 77 81 02 11',
                color: 'from-amber-500 to-amber-600',
              },
              {
                icon: Mail,
                title: 'Email',
                content: 'mahamoud.ali.hared@gmail.com',
                color: 'from-emerald-500 to-emerald-600',
              },
              {
                icon: Clock,
                title: 'Horaires',
                content: 'Lun – Ven : 7h30 – 17h00\nSam : 8h00 – 12h00',
                color: 'from-purple-500 to-purple-600',
              },
            ].map(({ icon: Icon, title, content, color }) => (
              <motion.div
                key={title}
                whileHover={{ x: 6 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/30 transition-all duration-300"
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-amber-400 font-semibold text-sm mb-1">{title}</p>
                  <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line">{content}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Nom complet *</label>
                  <input
                    required
                    value={form.nom}
                    onChange={e => setForm(p => ({ ...p, nom: e.target.value }))}
                    placeholder="Votre nom"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-500 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Email *</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                    placeholder="votre@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-500 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition-all text-sm"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Téléphone</label>
                  <input
                    type="tel"
                    value={form.telephone}
                    onChange={e => setForm(p => ({ ...p, telephone: e.target.value }))}
                    placeholder="+253 XX XX XX XX"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-500 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Sujet</label>
                  <select
                    value={form.sujet}
                    onChange={e => setForm(p => ({ ...p, sujet: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-white/20 text-white focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition-all text-sm"
                  >
                    <option value="">Choisir un sujet</option>
                    {sujets.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Message *</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                  placeholder="Écrivez votre message ici..."
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-500 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition-all text-sm resize-none"
                />
              </div>

              {/* Status messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 px-4 py-3 bg-emerald-500/20 border border-emerald-500/30 rounded-xl text-emerald-400 text-sm"
                >
                  <Check className="w-5 h-5 flex-shrink-0" />
                  Message envoyé avec succès ! Nous vous répondrons dans les 24h.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 px-4 py-3 bg-red-500/20 border border-red-500/30 rounded-xl text-red-400 text-sm"
                >
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  Une erreur est survenue. Veuillez réessayer ou nous contacter directement par téléphone.
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-bold text-base shadow-xl hover:shadow-amber-500/30 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Envoyer le Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
