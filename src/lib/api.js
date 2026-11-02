// Backend for jobs, applications and contact messages (the HRMS server on AWS).
// Set VITE_API_BASE_URL to the https address of the HRMS, for example https://hrms.antiai.ltd
const base = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/+$/, '')

export const apiReady = Boolean(base)

async function call(path, options) {
  const res = await fetch(`${base}/api/public${path}`, options)
  let body = null
  try {
    body = await res.json()
  } catch (_) {
    /* non JSON error page */
  }
  if (!res.ok || !body?.ok) throw new Error(body?.error || `Request failed (${res.status})`)
  return body
}

export const getJobs = () => call('/jobs').then((b) => b.jobs)
export const getJob = (id) => call(`/jobs/${encodeURIComponent(id)}`).then((b) => b.job)
export const submitApplication = (formData) => call('/apply', { method: 'POST', body: formData })
export const submitContact = (payload) =>
  call('/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
