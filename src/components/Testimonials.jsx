import { useEffect, useState } from 'react'

const testimonials = [
  { quote: 'Proyek selesai tepat waktu dengan kualitas memuaskan.', name: 'Andi Pratama', title: 'Project Director, PT Properti Sejahtera' },
  { quote: 'Tim sangat responsif dan profesional.', name: 'Maya Kartika', title: 'Facility Manager, PT Teknologi Nusantara' },
  { quote: 'Dokumentasi K3 sangat rapi dan disiplin.', name: 'Budi Santoso', title: 'Owner Representative' },
]

export default function Testimonials(){
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i+1) % testimonials.length), 4000)
    return () => clearInterval(id)
  }, [])

  const t = testimonials[index]

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900" style={{fontFamily:'Montserrat, Poppins'}}>Apa Kata Klien</h2>
        <p className="mt-8 text-xl text-slate-700 max-w-3xl mx-auto">“{t.quote}”</p>
        <p className="mt-3 text-sm text-slate-500">{t.name} — {t.title}</p>
        <div className="mt-6 flex items-center justify-center gap-2">
          {testimonials.map((_, i) => (
            <span key={i} className={`w-2 h-2 rounded-full ${i===index ? 'bg-amber-500' : 'bg-slate-300'}`}/>
          ))}
        </div>
      </div>
    </section>
  )
}
