import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import SEO from '../components/SEO.jsx'

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you were looking for doesn't exist. Return to ANTI.AI — human-governed artificial intelligence."
        canonical="/404"
      />
      <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="font-mono-tech text-[120px] font-bold leading-none text-[#D62828]/20 sm:text-[200px]">
          404
        </div>
        <h1 className="mt-4 font-display text-3xl font-extrabold uppercase tracking-tight text-[#F5F5F5] sm:text-4xl">
          Signal Lost.
        </h1>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-[#9E9E9E]">
          The page you're looking for doesn't exist or may have been moved. Return to base.
        </p>
        <Link
          to="/"
          className="group mt-10 inline-flex items-center gap-3 bg-[#D62828] px-8 py-4 font-mono-tech text-xs uppercase tracking-[0.22em] text-white transition-colors duration-300 hover:bg-[#A31D1D]"
        >
          Return to Base
          <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </main>
    </>
  )
}
