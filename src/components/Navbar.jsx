import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
  
    <header className="w-full bg-[#030712]">
      
      <div className="mx-auto max-w-6xl px-6 py-6 sm:px-8 flex items-center justify-between">
        
        <div>
          <p className="text-xl font-semibold tracking-wide bg-linear-to-r from-[#00cc7d] to-[#046a67] bg-clip-text text-transparent">
            Tahamid Hassan Portfolio
          </p>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
          <Link to="/" className="transition hover:text-white">Home</Link>
          <Link to="/projects" className="transition hover:text-white">Projects</Link>
          <Link to="/skills" className="transition hover:text-white">Skills</Link>
          <Link to="/about" className="transition hover:text-white">About</Link>
          <Link to="/contact" className="transition hover:text-white">Contact</Link>
          <Link to="/login" className="transition hover:text-white">Login</Link>
          <Link to="/signup" className="transition hover:text-white">Signup</Link>
        </nav>

      </div>
    </header>
  )
}

export default Navbar