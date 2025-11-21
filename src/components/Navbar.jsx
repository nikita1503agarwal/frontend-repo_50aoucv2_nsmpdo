import { Phone, Mail, ArrowRight } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="bg-white/90 backdrop-blur sticky top-0 z-40 border-b border-slate-200">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded bg-[#F5A623]" />
          <span className="font-extrabold text-slate-800" style={{fontFamily:'Montserrat, Poppins, Inter'}}>CONSTRUCTA</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          <a href="#services" className="hover:text-slate-900">Services</a>
          <a href="#projects" className="hover:text-slate-900">Projects</a>
          <a href="#about" className="hover:text-slate-900">About</a>
          <a href="#blog" className="hover:text-slate-900">Blog</a>
        </div>
        <div className="hidden lg:flex items-center gap-5 text-sm">
          <div className="flex items-center gap-1 text-slate-700"><Phone size={16}/> <a href="tel:+6281234567890" className="hover:text-slate-900">+62 812-3456-7890</a></div>
          <div className="flex items-center gap-1 text-slate-700"><Mail size={16}/> <a href="mailto:sales@example.com" className="hover:text-slate-900">sales@example.com</a></div>
          <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#F5A623] text-slate-900 font-semibold hover:bg-amber-400">Request a Quote <ArrowRight size={16}/></a>
        </div>
      </div>
    </header>
  )
}
