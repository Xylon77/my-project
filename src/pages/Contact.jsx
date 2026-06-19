import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-100">
      <div className="rounded-3xl border border-white/10 bg-slate-900/90 px-8 py-10 shadow-2xl shadow-black/20 text-center">
        <h1 className="mb-4 text-3xl font-semibold">Contact Page</h1>
        <p className="mb-6 text-slate-400">Reach out for project inquiries or questions.</p>
        <Link to="/" className="inline-flex rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default Contact
