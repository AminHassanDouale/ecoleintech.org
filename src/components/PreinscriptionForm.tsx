'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Upload,
  Check,
  ChevronRight,
  ChevronLeft,
  User,
  FileText,
  Phone,
  GraduationCap,
  AlertCircle,
} from 'lucide-react'

const niveauxOptions = ['Préscolaire', 'Primaire (CP-CM2)', 'Collège (6ème-3ème)', 'Lycée (2nde-Tle)']

type FileKey = 'acteNaissance' | 'photoIdentite' | 'carnetSante' | 'bulletinPrecedent' | 'certificatScolarite'

type FileState = {
  [K in FileKey]: File | null
}

const steps = [
  { id: 1, title: 'Informations Élève', icon: User },
  { id: 2, title: 'Informations Parent', icon: Phone },
  { id: 3, title: 'Niveau & Classe', icon: GraduationCap },
  { id: 4, title: 'Pièces Jointes', icon: FileText },
]

const fileFields: { key: FileKey; label: string; required: boolean; desc: string }[] = [
  { key: 'acteNaissance', label: 'Acte de Naissance *', required: true, desc: 'Copie certifiée conforme' },
  { key: 'photoIdentite', label: "Photo d'Identité *", required: true, desc: 'Format passeport récente' },
  { key: 'carnetSante', label: 'Carnet de Santé', required: false, desc: 'Vaccinations à jour' },
  { key: 'bulletinPrecedent', label: 'Bulletin Scolaire Précédent', required: false, desc: 'Derniers résultats scolaires' },
  { key: 'certificatScolarite', label: 'Certificat de Scolarité', required: false, desc: 'Établissement précédent' },
]

type FormState = {
  nomEleve: string
  prenomEleve: string
  dateNaissance: string
  lieuNaissance: string
  sexe: string
  nomParent: string
  prenomParent: string
  telephone: string
  email: string
  adresse: string
  niveau: string
  anneeScol: string
  besoinsSpeciaux: string
}

export default function PreinscriptionForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [dossierNum] = useState(() => Math.floor(Math.random() * 90000) + 10000)
  const [files, setFiles] = useState<FileState>({
    acteNaissance: null,
    photoIdentite: null,
    carnetSante: null,
    bulletinPrecedent: null,
    certificatScolarite: null,
  })

  const [form, setForm] = useState<FormState>({
    nomEleve: '',
    prenomEleve: '',
    dateNaissance: '',
    lieuNaissance: '',
    sexe: '',
    nomParent: '',
    prenomParent: '',
    telephone: '',
    email: '',
    adresse: '',
    niveau: '',
    anneeScol: '2025-2026',
    besoinsSpeciaux: '',
  })

  const handleFileChange = (key: FileKey, file: File | null) => {
    setFiles((prev) => ({ ...prev, [key]: file }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-20"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl"
        >
          <Check className="w-12 h-12 text-white" />
        </motion.div>
        <h2 className="text-3xl font-black text-slate-800 mb-4">Demande Envoyée !</h2>
        <p className="text-slate-500 text-lg max-w-md mx-auto mb-8">
          Votre demande de préinscription a été soumise avec succès. Notre équipe vous contactera
          dans les 48 heures.
        </p>
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-50 text-blue-700 rounded-2xl text-sm font-medium">
          <AlertCircle className="w-4 h-4" />
          Numéro de dossier: <strong>INS-{dossierNum}</strong>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Steps indicator */}
      <div className="flex items-center justify-between mb-12 relative">
        <div className="absolute left-0 right-0 top-5 h-0.5 bg-slate-200 z-0" />
        <div
          className="absolute left-0 top-5 h-0.5 bg-gradient-to-r from-blue-500 to-amber-500 z-0 transition-all duration-500"
          style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
        />
        {steps.map(({ id, title, icon: Icon }) => (
          <div key={id} className="flex flex-col items-center z-10">
            <motion.div
              animate={{
                scale: currentStep >= id ? 1 : 0.8,
                backgroundColor:
                  currentStep > id ? '#10b981' : currentStep === id ? '#3b82f6' : '#e2e8f0',
              }}
              className="w-10 h-10 rounded-full flex items-center justify-center shadow-md"
            >
              {currentStep > id ? (
                <Check className="w-5 h-5 text-white" />
              ) : (
                <Icon className={`w-5 h-5 ${currentStep === id ? 'text-white' : 'text-slate-400'}`} />
              )}
            </motion.div>
            <span
              className={`text-xs mt-2 font-medium hidden sm:block ${
                currentStep === id ? 'text-blue-600' : 'text-slate-400'
              }`}
            >
              {title}
            </span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-black text-slate-800 mb-6">
                Informations de l&apos;Élève
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Nom *</label>
                  <input
                    required
                    value={form.nomEleve}
                    onChange={(e) => setForm((p) => ({ ...p, nomEleve: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                    placeholder="Nom de famille"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Prénom *</label>
                  <input
                    required
                    value={form.prenomEleve}
                    onChange={(e) => setForm((p) => ({ ...p, prenomEleve: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                    placeholder="Prénom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Date de Naissance *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="JJ/MM/AAAA"
                    pattern="\d{1,2}/\d{1,2}/\d{4}"
                    value={form.dateNaissance}
                    onChange={(e) => setForm((p) => ({ ...p, dateNaissance: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Lieu de Naissance *
                  </label>
                  <input
                    required
                    value={form.lieuNaissance}
                    onChange={(e) => setForm((p) => ({ ...p, lieuNaissance: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                    placeholder="Djibouti"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Sexe *</label>
                  <div className="flex gap-4">
                    {['Masculin', 'Féminin'].map((s) => (
                      <label key={s} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="sexe"
                          value={s}
                          checked={form.sexe === s}
                          onChange={(e) => setForm((p) => ({ ...p, sexe: e.target.value }))}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span className="text-slate-700">{s}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-black text-slate-800 mb-6">
                Informations du Parent/Tuteur
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Nom *</label>
                  <input
                    required
                    value={form.nomParent}
                    onChange={(e) => setForm((p) => ({ ...p, nomParent: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                    placeholder="Nom de famille"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Prénom *</label>
                  <input
                    required
                    value={form.prenomParent}
                    onChange={(e) => setForm((p) => ({ ...p, prenomParent: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                    placeholder="Prénom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Téléphone *
                  </label>
                  <input
                    required
                    type="tel"
                    value={form.telephone}
                    onChange={(e) => setForm((p) => ({ ...p, telephone: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                    placeholder="+253 XX XX XX XX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                    placeholder="email@example.com"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Adresse *</label>
                  <textarea
                    required
                    value={form.adresse}
                    onChange={(e) => setForm((p) => ({ ...p, adresse: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                    rows={3}
                    placeholder="Adresse complète à Djibouti"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-black text-slate-800 mb-6">Niveau Scolaire Demandé</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    Niveau souhaité *
                  </label>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {niveauxOptions.map((n) => (
                      <label
                        key={n}
                        className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                          form.niveau === n
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-slate-200 hover:border-blue-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="niveau"
                          value={n}
                          checked={form.niveau === n}
                          onChange={(e) => setForm((p) => ({ ...p, niveau: e.target.value }))}
                          className="sr-only"
                        />
                        <div
                          className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                            form.niveau === n ? 'border-blue-500' : 'border-slate-300'
                          }`}
                        >
                          {form.niveau === n && (
                            <div className="w-2 h-2 rounded-full bg-blue-500" />
                          )}
                        </div>
                        <span className="font-medium text-sm">{n}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Année Scolaire *
                  </label>
                  <select
                    value={form.anneeScol}
                    onChange={(e) => setForm((p) => ({ ...p, anneeScol: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 outline-none"
                  >
                    <option>2025-2026</option>
                    <option>2026-2027</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Besoins particuliers
                  </label>
                  <textarea
                    value={form.besoinsSpeciaux}
                    onChange={(e) => setForm((p) => ({ ...p, besoinsSpeciaux: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 outline-none"
                    rows={3}
                    placeholder="Allergies, handicap, accompagnement spécial..."
                  />
                </div>
              </div>
            </motion.div>
          )}

          {currentStep === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-black text-slate-800 mb-2">Pièces Jointes</h3>
              <p className="text-slate-500 text-sm mb-6">
                Veuillez joindre les documents requis (PDF, JPG, PNG — max 5MB par fichier)
              </p>

              <div className="space-y-4">
                {fileFields.map(({ key, label, required, desc }) => (
                  <div
                    key={key}
                    className={`relative border-2 border-dashed rounded-2xl p-5 transition-all duration-200 ${
                      files[key]
                        ? 'border-emerald-400 bg-emerald-50'
                        : 'border-slate-200 hover:border-blue-400 hover:bg-blue-50/50'
                    }`}
                  >
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      required={required}
                      onChange={(e) => handleFileChange(key, e.target.files?.[0] ?? null)}
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    />
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                          files[key] ? 'bg-emerald-100' : 'bg-slate-100'
                        }`}
                      >
                        {files[key] ? (
                          <Check className="w-6 h-6 text-emerald-600" />
                        ) : (
                          <Upload className="w-6 h-6 text-slate-400" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-slate-800 text-sm">{label}</p>
                        <p className="text-xs text-slate-500">
                          {files[key] ? files[key]!.name : desc}
                        </p>
                      </div>
                      {required && !files[key] && (
                        <span className="text-xs text-red-500 font-medium">Requis</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-between mt-10 pt-6 border-t border-slate-100">
          {currentStep > 1 ? (
            <motion.button
              type="button"
              whileHover={{ x: -4 }}
              onClick={() => setCurrentStep((s) => s - 1)}
              className="flex items-center gap-2 px-6 py-3 text-slate-600 font-semibold hover:text-slate-800 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" /> Précédent
            </motion.button>
          ) : (
            <div />
          )}

          {currentStep < steps.length ? (
            <motion.button
              type="button"
              whileHover={{ x: 4 }}
              onClick={() => setCurrentStep((s) => s + 1)}
              className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-blue-500/30 transition-all"
            >
              Suivant <ChevronRight className="w-5 h-5" />
            </motion.button>
          ) : (
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-emerald-500/30 transition-all"
            >
              <Check className="w-5 h-5" /> Soumettre la Demande
            </motion.button>
          )}
        </div>
      </form>
    </div>
  )
}
