import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-[#1F2937]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10">
        <div className="text-white max-w-xl">
          <p className="text-sm tracking-widest uppercase text-amber-300/90">Konstruksi Profesional</p>
          <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight" style={{fontFamily:'Montserrat, Poppins, Inter, system-ui'}}>
            Solusi Konstruksi Terpercaya untuk Proyek Skala Kecil hingga Besar
          </h1>
          <p className="mt-5 text-slate-200/90 text-lg">
            Dari perencanaan hingga serah terima, kami pastikan ketepatan waktu, mutu, dan keselamatan kerja.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="px-6 py-3 rounded-lg bg-[#F5A623] text-slate-900 font-semibold hover:bg-amber-400 transition">Request a Quote</a>
            <a href="#projects" className="px-6 py-3 rounded-lg border border-white/30 text-white hover:bg-white/10 transition">View Projects</a>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-6 text-center">
            <div>
              <dt className="text-3xl font-extrabold text-amber-300">10+</dt>
              <dd className="text-sm text-slate-200/80">Tahun Pengalaman</dd>
            </div>
            <div>
              <dt className="text-3xl font-extrabold text-amber-300">120+</dt>
              <dd className="text-sm text-slate-200/80">Proyek Selesai</dd>
            </div>
            <div>
              <dt className="text-3xl font-extrabold text-amber-300">100%</dt>
              <dd className="text-sm text-slate-200/80">Komitmen K3</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
