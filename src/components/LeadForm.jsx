import { useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function LeadForm(){
  const [status, setStatus] = useState(null)

  async function onSubmit(e){
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    payload.newsletter_optin = form.get('newsletter_optin') === 'on'

    // basic client-side validation
    if(!payload.full_name || !payload.email){
      setStatus({type:'error', msg:'Nama dan email wajib diisi'})
      return
    }

    try{
      const res = await fetch(`${API}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if(res.ok){
        setStatus({type:'ok', msg:'Terima kasih! Tim kami akan menghubungi Anda.'})
        e.currentTarget.reset()
        window.dispatchEvent(new CustomEvent('ga_event', {detail: {category:'Lead', action:'Submit', label:'Quote Form'}}))
      }else{
        setStatus({type:'error', msg: data.detail || 'Gagal mengirim. Coba lagi.'})
      }
    }catch(err){
      setStatus({type:'error', msg:'Terjadi kesalahan jaringan'})
    }
  }

  return (
    <section id="contact" className="bg-neutral-50 py-16">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900" style={{fontFamily:'Montserrat, Poppins'}}>Hubungi Kami</h2>
          <p className="mt-2 text-slate-600">Butuh penawaran untuk proyek Anda? Isi formulir berikut dan kami akan merespons dalam 1x24 jam.</p>
          <div className="mt-6 aspect-video rounded-xl overflow-hidden border border-slate-200">
            <iframe title="Map" className="w-full h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.639977671983!2d106.816666!3d-6.180000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTAnNDguMCJTIDEwNsKwNDknMDAuMCJF!5e0!3m2!1sen!2sid!4v1700000000000"></iframe>
          </div>
        </div>

        <form onSubmit={onSubmit} className="bg-white rounded-xl border border-slate-200 p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className="text-sm text-slate-700">Nama Lengkap</label>
            <input name="full_name" className="mt-1 w-full rounded-md border-slate-300 focus:border-amber-500 focus:ring-amber-500" placeholder="Nama Anda"/>
          </div>
          <div>
            <label className="text-sm text-slate-700">Email</label>
            <input name="email" type="email" className="mt-1 w-full rounded-md border-slate-300 focus:border-amber-500 focus:ring-amber-500" placeholder="email@perusahaan.com"/>
          </div>
          <div>
            <label className="text-sm text-slate-700">Telepon</label>
            <input name="phone" className="mt-1 w-full rounded-md border-slate-300 focus:border-amber-500 focus:ring-amber-500" placeholder="08xxxxxxxxxx"/>
          </div>
          <div>
            <label className="text-sm text-slate-700">Perusahaan</label>
            <input name="company" className="mt-1 w-full rounded-md border-slate-300 focus:border-amber-500 focus:ring-amber-500" placeholder="PT ...."/>
          </div>
          <div>
            <label className="text-sm text-slate-700">Lokasi Proyek</label>
            <input name="project_location" className="mt-1 w-full rounded-md border-slate-300 focus:border-amber-500 focus:ring-amber-500" placeholder="Kota/Kabupaten"/>
          </div>
          <div>
            <label className="text-sm text-slate-700">Tipe Proyek</label>
            <select name="project_type" className="mt-1 w-full rounded-md border-slate-300 focus:border-amber-500 focus:ring-amber-500">
              <option>Residential</option>
              <option>Commercial</option>
              <option>Industrial</option>
              <option>Infrastructure</option>
              <option>Renovation</option>
              <option>Civil Works</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-slate-700">Estimasi Budget</label>
            <input name="budget_estimate" className="mt-1 w-full rounded-md border-slate-300 focus:border-amber-500 focus:ring-amber-500" placeholder="contoh: 2-5 M"/>
          </div>
          <div>
            <label className="text-sm text-slate-700">Rencana Mulai</label>
            <input name="desired_start_date" type="date" className="mt-1 w-full rounded-md border-slate-300 focus:border-amber-500 focus:ring-amber-500"/>
          </div>
          <div className="sm:col-span-2">
            <label className="text-sm text-slate-700">Pesan</label>
            <textarea name="message" rows="4" className="mt-1 w-full rounded-md border-slate-300 focus:border-amber-500 focus:ring-amber-500" placeholder="Ceritakan kebutuhan proyek Anda"></textarea>
          </div>
          <label className="sm:col-span-2 inline-flex items-center gap-2 text-sm text-slate-700">
            <input name="newsletter_optin" type="checkbox" className="rounded text-amber-600"/>
            Berlangganan insight & update proyek kami
          </label>

          <button className="sm:col-span-2 mt-2 inline-flex justify-center px-5 py-3 rounded-md bg-[#F5A623] text-slate-900 font-semibold hover:bg-amber-400">Kirim</button>
          {status && (
            <p className={`sm:col-span-2 text-sm ${status.type==='ok' ? 'text-green-600' : 'text-red-600'}`}>{status.msg}</p>
          )}
          <p className="sm:col-span-2 text-xs text-slate-500">Dengan mengirimkan formulir ini Anda menyetujui kebijakan privasi kami.</p>
        </form>
      </div>
    </section>
  )
}
