import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import LeadForm from './components/LeadForm'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <main>
        <Services />
        <Projects />
        <section className="bg-white py-16">
          <div id="about" className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900" style={{fontFamily:'Montserrat, Poppins'}}>Tentang Perusahaan</h2>
              <p className="mt-3 text-slate-700">Kami adalah perusahaan konstruksi yang berfokus pada kualitas, keselamatan, dan ketepatan waktu. Sejak berdiri, kami telah menyelesaikan beragam proyek mulai dari residensial, komersial, hingga industri dan infrastruktur. Tim kami terdiri dari profesional berpengalaman dengan sertifikasi dan standar prosedur yang ketat.</p>
              <ul className="mt-4 space-y-2 text-slate-700 list-disc list-inside">
                <li>Tepat waktu & transparan</li>
                <li>Prioritas keselamatan (K3)</li>
                <li>Tenaga ahli bersertifikat</li>
                <li>Garansi pekerjaan</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 p-6 bg-neutral-50">
              <dl className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <dt className="text-4xl font-extrabold text-[#F5A623]">10+</dt>
                  <dd className="text-sm text-slate-600">Tahun beroperasi</dd>
                </div>
                <div>
                  <dt className="text-4xl font-extrabold text-[#F5A623]">120+</dt>
                  <dd className="text-sm text-slate-600">Proyek selesai</dd>
                </div>
                <div>
                  <dt className="text-4xl font-extrabold text-[#F5A623]">50+</dt>
                  <dd className="text-sm text-slate-600">Klien B2B</dd>
                </div>
                <div>
                  <dt className="text-4xl font-extrabold text-[#F5A623]">100%</dt>
                  <dd className="text-sm text-slate-600">Komitmen K3</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
        <Testimonials />
        <LeadForm />
      </main>
      <footer className="bg-[#1F2937] text-slate-200">
        <div className="container mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
          <div>
            <div className="w-10 h-10 rounded bg-[#F5A623]" />
            <p className="mt-3 text-sm text-slate-300">Perusahaan konstruksi terpercaya untuk residensial, komersial, industri, dan infrastruktur.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white">Perusahaan</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#about" className="hover:text-white">Tentang</a></li>
              <li><a href="#services" className="hover:text-white">Layanan</a></li>
              <li><a href="#projects" className="hover:text-white">Proyek</a></li>
              <li><a href="#blog" className="hover:text-white">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Kontak</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>sales@example.com</li>
              <li>+62 812-3456-7890</li>
              <li>Jakarta, Indonesia</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Aksi</h4>
            <a href="#contact" className="mt-3 inline-flex px-4 py-2 rounded-md bg-[#F5A623] text-slate-900 font-semibold hover:bg-amber-400">Request a Quote</a>
          </div>
        </div>
        <div className="border-t border-white/10 py-4 text-center text-xs text-slate-400">© {new Date().getFullYear()} Constructa. All rights reserved.</div>
      </footer>
    </div>
  )
}

export default App
