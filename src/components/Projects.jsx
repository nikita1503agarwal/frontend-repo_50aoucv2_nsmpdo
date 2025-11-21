import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Projects() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`${API}/api/projects`).then(r => r.json()).then(setItems).catch(() => setItems([]))
  }, [])

  return (
    <section id="projects" className="bg-neutral-50 py-16">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900" style={{fontFamily:'Montserrat, Poppins'}}>Proyek Unggulan</h2>
            <p className="mt-2 text-slate-600">Sejumlah proyek yang merefleksikan standar kualitas kami.</p>
          </div>
          <a href="#" className="text-amber-600 hover:text-amber-700">Lihat Semua →</a>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {items.map(p => (
            <article key={p.slug} className="group rounded-xl overflow-hidden bg-white border border-slate-200 hover:shadow-lg transition">
              <div className="aspect-[16/10] bg-slate-200 overflow-hidden">
                <img src={p.cover_image} alt={p.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition" loading="lazy"/>
              </div>
              <div className="p-5">
                <span className="text-xs uppercase tracking-wider text-slate-500">{p.category}</span>
                <h3 className="mt-1 font-semibold text-slate-900">{p.title}</h3>
                <p className="text-sm text-slate-600 line-clamp-2">{p.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
