import { Building2, Hammer, PenTool, Wrench, ClipboardList, Road } from 'lucide-react'

const services = [
  { icon: PenTool, title: 'Design & Planning', blurb: 'Perencanaan arsitektur & struktur yang efisien dan aman.' },
  { icon: Building2, title: 'Construction', blurb: 'Konstruksi turnkey dari pondasi hingga finishing.' },
  { icon: Hammer, title: 'Renovation', blurb: 'Renovasi dan retrofit bangunan eksisting.' },
  { icon: Road, title: 'Civil Works', blurb: 'Pekerjaan sipil: jalan, drainase, jembatan kecil.' },
  { icon: ClipboardList, title: 'Project Management', blurb: 'Manajemen proyek on-time & on-budget.' },
  { icon: Wrench, title: 'Maintenance', blurb: 'Perawatan berkala untuk aset Anda.' },
]

export default function Services() {
  return (
    <section id="services" className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900" style={{fontFamily:'Montserrat, Poppins'}}>Layanan Kami</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">Solusi menyeluruh dari desain hingga pemeliharaan. Kami fokus pada keselamatan, kualitas, dan ketepatan waktu.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({icon:Icon, title, blurb}) => (
            <div key={title} className="group rounded-xl border border-slate-200 p-6 hover:shadow-lg transition bg-white">
              <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600"><Icon/></div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-1 text-sm text-slate-600">{blurb}</p>
              <a href="#contact" className="mt-4 inline-block text-sm font-medium text-amber-600 hover:text-amber-700">Pelajari lebih lanjut →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
