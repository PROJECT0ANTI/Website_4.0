import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, Users, ArrowUpRight } from 'lucide-react'
import Reveal, { RevealLines } from '../components/Reveal.jsx'
import SectionLabel from '../components/SectionLabel.jsx'
import { supabase } from '../lib/supabase.js'

const channels = [
  { icon: Phone, label: 'Phone 1', value: '+91 91166 65513', href: 'tel:+919116665513' },
  { icon: Phone, label: 'Phone 2', value: '+91 93588 94622', href: 'tel:+919358894622' },
  { icon: Mail, label: 'Business Ideas', value: 'hello@antiai.ltd', href: 'mailto:hello@antiai.ltd' },
  { icon: Mail, label: 'Press & Media', value: 'support@antiai.ltd', href: 'mailto:support@antiai.ltd' },
  { icon: Users, label: 'Human Resource', value: 'antiai.hr@gmail.com', href: 'mailto:antiai.hr@gmail.com' },
]

function Field({ label, children }) {
  return (
    <div className="border-b border-white/10 pb-4">
      <label className="font-mono-tech text-[10px] uppercase tracking-[0.22em] text-[#9E9E9E]">{label}</label>
      {children}
    </div>
  )
}

export default function Collaborate() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', work: '', brief: '', email: '', phone: '', agree: false })

  const onChange = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!supabase) {
      setSubmitted(true)
      return
    }

    setSubmitting(true)
    const { error: insertError } = await supabase.from('contact_us').insert({
      full_name: form.name,
      company: form.work,
      message: form.brief,
      email: form.email,
      phone: form.phone || null,
    })
    setSubmitting(false)

    if (insertError) {
      setError('Something went wrong sending your transmission. Please try again or reach out directly below.')
      return
    }
    setSubmitted(true)
  }

  return (
    <main className="relative">
      <section className="bg-blueprint px-6 pb-24 pt-44 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal className="flex items-center gap-4">
            <span className="font-mono-tech text-[11px] tracking-[0.25em] text-[#D62828]">COM</span>
            <span className="h-px w-10 bg-[#D62828]/50" />
            <span className="font-mono-tech text-[11px] uppercase tracking-[0.25em] text-[#9E9E9E]">Collaborate</span>
          </Reveal>
          <RevealLines
            tag="h1"
            className="mt-10 font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-[#F5F5F5] sm:text-6xl lg:text-8xl"
            lines={['START THE', 'TRANSMISSION.']}
          />
        </div>
      </section>

      <section className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-[3fr_2fr]">
            {/* FORM */}
            <Reveal>
              {submitted ? (
                <div className="border border-[#D62828]/40 bg-[#0A0A0A] p-10">
                  <h2 className="font-display text-2xl font-extrabold uppercase tracking-tight text-[#F5F5F5]">
                    Transmission Received.
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-[#9E9E9E]">
                    Every transmission is reviewed by a human. Expect a response within 48 hours on business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-8">
                  <Field label="My Name Is">
                    <input
                      required
                      type="text"
                      placeholder="Full name"
                      value={form.name}
                      onChange={onChange('name')}
                      className="mt-3 w-full bg-transparent font-display text-xl text-[#F5F5F5] placeholder:text-[#9E9E9E]/40 focus:outline-none"
                    />
                  </Field>
                  <Field label="And I Work In">
                    <input
                      required
                      type="text"
                      placeholder="Company / industry"
                      value={form.work}
                      onChange={onChange('work')}
                      className="mt-3 w-full bg-transparent font-display text-xl text-[#F5F5F5] placeholder:text-[#9E9E9E]/40 focus:outline-none"
                    />
                  </Field>
                  <Field label="Here's My Brief">
                    <textarea
                      required
                      rows={3}
                      placeholder="Tell us about the mission..."
                      value={form.brief}
                      onChange={onChange('brief')}
                      className="mt-3 w-full resize-none bg-transparent text-base text-[#EDEDED] placeholder:text-[#9E9E9E]/40 focus:outline-none"
                    />
                  </Field>
                  <div className="grid gap-8 sm:grid-cols-2">
                    <Field label="Reach Me by Email">
                      <input
                        required
                        type="email"
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={onChange('email')}
                        className="mt-3 w-full bg-transparent text-base text-[#EDEDED] placeholder:text-[#9E9E9E]/40 focus:outline-none"
                      />
                    </Field>
                    <Field label="Or by Phone">
                      <input
                        type="text"
                        placeholder="+91 ..."
                        value={form.phone}
                        onChange={onChange('phone')}
                        className="mt-3 w-full bg-transparent text-base text-[#EDEDED] placeholder:text-[#9E9E9E]/40 focus:outline-none"
                      />
                    </Field>
                  </div>
                  <label className="flex items-start gap-3 text-sm text-[#9E9E9E]">
                    <input
                      required
                      type="checkbox"
                      checked={form.agree}
                      onChange={onChange('agree')}
                      className="mt-1 h-4 w-4 accent-[#D62828]"
                    />
                    I agree to the{' '}
                    <Link to="/privacy" className="link-sweep text-[#EDEDED]">
                      Privacy Policy
                    </Link>{' '}
                    and{' '}
                    <Link to="/terms" className="link-sweep text-[#EDEDED]">
                      Terms &amp; Conditions
                    </Link>
                    .
                  </label>
                  {error && (
                    <p className="text-sm text-[#D62828]">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="group inline-flex items-center gap-3 bg-[#D62828] px-8 py-4 font-mono-tech text-xs uppercase tracking-[0.22em] text-white transition-colors duration-300 hover:bg-[#A31D1D] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {submitting ? 'Sending…' : 'Send Transmission'}
                    <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </form>
              )}
            </Reveal>

            {/* CHANNELS */}
            <Reveal delay={0.1}>
              <SectionLabel index="—" text="Direct Channels" />
              <ul className="mt-8 space-y-6">
                {channels.map((c) => (
                  <li key={c.label} className="flex items-start gap-4 border-b border-white/[0.06] pb-6">
                    <c.icon size={18} className="mt-1 shrink-0 text-[#D62828]" />
                    <div>
                      <div className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-[#9E9E9E]">{c.label}</div>
                      <a href={c.href} className="link-sweep mt-1 block text-base text-[#EDEDED]">
                        {c.value}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-10 border border-white/[0.06] p-6">
                <div className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-[#D62828]">Response Protocol</div>
                <p className="mt-3 text-sm leading-relaxed text-[#9E9E9E]">
                  Every transmission is reviewed by a human. Expect a response within 48 hours on business days.
                </p>
              </div>
              <div className="mt-10 font-display text-lg text-[#EDEDED]">
                अन्ते सत्यं विजयते।{' '}
                <span className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[#D62828]">
                  The Truth Prevails.
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}
