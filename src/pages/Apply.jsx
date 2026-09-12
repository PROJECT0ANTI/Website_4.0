import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowUpRight, UploadCloud, CheckCircle2 } from 'lucide-react'
import Reveal, { RevealLines } from '../components/Reveal.jsx'
import { supabase } from '../lib/supabase.js'

const whyWorkWithUs = [
  'Build AI systems that are accountable and human-governed',
  'Work on real security and AI safety problems',
  'High ownership, low bureaucracy',
  'Remote-first, outcome-driven culture',
  'Engineering, research, and ethics move together',
]

export default function Apply() {
  const { jobId } = useParams()
  const [job, setJob] = useState(null)
  const [jobLoading, setJobLoading] = useState(true)

  const [form, setForm] = useState({ name: '', email: '', phone: '', cover: '' })
  const [resumeFile, setResumeFile] = useState(null)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!supabase || !jobId) {
      setJobLoading(false)
      return
    }
    let active = true
    supabase
      .from('jobs')
      .select('id, title, department, location')
      .eq('id', jobId)
      .maybeSingle()
      .then(({ data }) => {
        if (!active) return
        if (data) setJob(data)
        setJobLoading(false)
      })
    return () => {
      active = false
    }
  }, [jobId])

  const onChange = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!supabase) {
      setSubmitted(true)
      return
    }

    setSubmitting(true)
    try {
      let resumeUrl = null
      if (resumeFile) {
        const ext = resumeFile.name.split('.').pop()
        const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`
        const { error: uploadError } = await supabase.storage.from('resumes').upload(path, resumeFile)
        if (uploadError) throw uploadError
        const { data: pub } = supabase.storage.from('resumes').getPublicUrl(path)
        resumeUrl = pub?.publicUrl || null
      }

      const { error: insertError } = await supabase.from('applications').insert({
        job_id: jobId || null,
        name: form.name,
        applicant_name: form.name,
        email: form.email,
        phone: form.phone || null,
        resume_url: resumeUrl,
        cover_letter: form.cover || null,
      })
      if (insertError) throw insertError

      setSubmitted(true)
    } catch (err) {
      setError('Something went wrong submitting your application. Please try again or email antiai.hr@gmail.com directly.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="relative">
      <section className="bg-blueprint px-6 pb-24 pt-44 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal className="flex items-center gap-4">
            <span className="font-mono-tech text-[11px] tracking-[0.25em] text-[#D62828]">APP</span>
            <span className="h-px w-10 bg-[#D62828]/50" />
            <span className="font-mono-tech text-[11px] uppercase tracking-[0.25em] text-[#9E9E9E]">Open Role</span>
          </Reveal>
          <RevealLines
            tag="h1"
            className="mt-10 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-[#F5F5F5] sm:text-5xl lg:text-7xl"
            lines={[jobLoading ? 'Loading…' : job?.title || 'Open Role']}
          />
          {!jobLoading && (
            <Reveal delay={0.1} className="mt-6 font-mono-tech text-[11px] uppercase tracking-[0.2em] text-[#9E9E9E]">
              {[job?.department, job?.location].filter(Boolean).join(' · ') || 'Details unavailable'}
            </Reveal>
          )}
        </div>
      </section>

      <section className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-[2fr_3fr]">
            {/* WHY WORK WITH US */}
            <Reveal>
              <h2 className="font-display text-2xl font-extrabold uppercase tracking-tight text-[#F5F5F5] sm:text-3xl">
                Why work with us?
              </h2>
              <ul className="mt-8 space-y-4">
                {whyWorkWithUs.map((w) => (
                  <li key={w} className="flex items-start gap-3 text-sm leading-relaxed text-[#9E9E9E] sm:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D62828]" />
                    {w}
                  </li>
                ))}
              </ul>
              <Link
                to="/careers"
                className="link-sweep mt-10 inline-flex items-center gap-2 font-mono-tech text-[11px] uppercase tracking-[0.22em] text-[#EDEDED]"
              >
                ← Back to Open Positions
              </Link>
            </Reveal>

            {/* APPLICATION FORM */}
            <Reveal delay={0.1} className="border border-white/[0.06] bg-[#0A0A0A] p-8 sm:p-10">
              {submitted ? (
                <div className="flex flex-col items-start gap-4">
                  <CheckCircle2 size={32} className="text-[#D62828]" />
                  <h2 className="font-display text-2xl font-extrabold uppercase tracking-tight text-[#F5F5F5]">
                    Application Received.
                  </h2>
                  <p className="max-w-md text-sm leading-relaxed text-[#9E9E9E]">
                    Thanks for applying. Our team reviews every application and will reach out if there's a fit.
                  </p>
                  <Link
                    to="/careers"
                    className="group mt-4 inline-flex items-center gap-3 bg-[#D62828] px-6 py-3 font-mono-tech text-xs uppercase tracking-[0.22em] text-white transition-colors duration-300 hover:bg-[#A31D1D]"
                  >
                    Back to Open Positions
                    <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-6">
                  <h2 className="font-display text-xl font-extrabold uppercase tracking-tight text-[#F5F5F5] sm:text-2xl">
                    Apply for this role
                  </h2>
                  <input
                    required
                    type="text"
                    placeholder="Full name"
                    value={form.name}
                    onChange={onChange('name')}
                    className="w-full border border-white/10 bg-transparent px-4 py-3 text-sm text-[#EDEDED] placeholder:text-[#9E9E9E]/50 focus:border-[#D62828]/60 focus:outline-none"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email address"
                    value={form.email}
                    onChange={onChange('email')}
                    className="w-full border border-white/10 bg-transparent px-4 py-3 text-sm text-[#EDEDED] placeholder:text-[#9E9E9E]/50 focus:border-[#D62828]/60 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Mobile number"
                    value={form.phone}
                    onChange={onChange('phone')}
                    className="w-full border border-white/10 bg-transparent px-4 py-3 text-sm text-[#EDEDED] placeholder:text-[#9E9E9E]/50 focus:border-[#D62828]/60 focus:outline-none"
                  />
                  <label className="flex cursor-pointer items-center justify-center gap-3 border border-dashed border-white/15 px-4 py-4 text-center font-mono-tech text-[11px] uppercase tracking-[0.18em] text-[#9E9E9E] transition-colors duration-300 hover:border-[#D62828]/50 hover:text-[#EDEDED]">
                    <UploadCloud size={16} className="text-[#D62828]" />
                    {resumeFile ? resumeFile.name : 'Upload resume (PDF / DOC / DOCX)'}
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
                    />
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Cover letter (optional)"
                    value={form.cover}
                    onChange={onChange('cover')}
                    className="w-full resize-none border border-white/10 bg-transparent px-4 py-3 text-sm text-[#EDEDED] placeholder:text-[#9E9E9E]/50 focus:border-[#D62828]/60 focus:outline-none"
                  />
                  {error && <p className="text-sm text-[#D62828]">{error}</p>}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="group inline-flex w-full items-center justify-center gap-3 bg-[#D62828] px-8 py-4 font-mono-tech text-xs uppercase tracking-[0.22em] text-white transition-colors duration-300 hover:bg-[#A31D1D] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {submitting ? 'Submitting…' : 'Submit Application'}
                    <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}
