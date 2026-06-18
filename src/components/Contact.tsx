import React, { useState } from 'react';
import horizontalImg from '../assets/Horizontal.jpg';

const Contact = () => {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
  };

  return (
    <section id="contact" className="relative px-6 py-20 md:px-16 md:py-32 overflow-hidden min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={horizontalImg} 
          alt="Contact Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center w-full">
        <div className="text-white">
          <span className="text-[0.62rem] font-light tracking-[0.28em] uppercase text-white/70 mb-6 block">
            Contacto
          </span>
          <h2 className="font-serif text-[clamp(2.5rem,4vw,3.8rem)] font-light leading-[1.12] text-white mt-4 mb-6">
            ¿Hablamos sobre<br /><em className="italic text-[#D8B7B0]">tu próximo proyecto?</em>
          </h2>
          <p className="text-[1rem] font-light leading-[1.8] text-white/80 max-w-[42ch] mb-10">
            Cuéntame tu idea y buscaremos la mejor forma de llevarla a cabo. Respondo en menos de 24 horas.
          </p>

          <div className="flex flex-col gap-8 mt-12">
            <div className="text-[0.9rem] font-light text-white/70 tracking-[0.05em]">
              <strong className="text-white font-normal block mb-1 text-[0.68rem] tracking-[0.18em] uppercase opacity-50">
                Email
              </strong>
              <a href="mailto:melisaquiroga@gmail.com" className="hover:text-[#D8B7B0] transition-colors text-lg">melisaquiroga@gmail.com</a>
            </div>
            <div className="text-[0.9rem] font-light text-white/70 tracking-[0.05em]">
              <strong className="text-white font-normal block mb-1 text-[0.68rem] tracking-[0.18em] uppercase opacity-50">
                WhatsApp
              </strong>
              <a href="https://wa.me/yournumber" target="_blank" rel="noopener noreferrer" className="hover:text-[#D8B7B0] transition-colors text-lg">+54 9 11 XXXX-XXXX</a>
            </div>
          </div>

          {/* Redes sociales con el efecto de hover solicitado */}
          <div className="flex flex-wrap gap-3 mt-12">
            {[
              {
                href: 'https://instagram.com/melisaquiroga',
                label: 'Instagram',
                color: 'bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888]'
              },
              {
                href: 'https://tiktok.com/@melisaquiroga',
                label: 'TikTok',
                color: 'bg-[#010101]'
              },
              {
                href: 'https://facebook.com/melisaquiroga',
                label: 'Facebook',
                color: 'bg-[#1877f2]'
              },
            ].map(({ href, label, color }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="group relative flex items-center gap-2.5 px-7 py-3 border border-white/20 overflow-hidden rounded-full
                  text-[0.65rem] font-light tracking-[0.22em] uppercase transition-all duration-300"
              >
                {/* Background wipe effect */}
                <span className={`absolute inset-0 transition-transform duration-[380ms] ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover:translate-y-0 ${color}`} />

                <span className="relative z-10 text-white group-hover:text-white transition-colors duration-300">{label}</span>
                <span className="relative z-10 text-white text-[0.7rem] opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 delay-75">↗</span>
              </a>
            ))}
          </div>
        </div>

        <form className="flex flex-col gap-8 bg-white/10 backdrop-blur-md p-8 md:p-12 border border-white/10 shadow-2xl" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2 group">
              <label className="text-[0.62rem] font-medium tracking-[0.2em] uppercase text-white/60 transition-colors group-focus-within:text-[#D8B7B0]">Nombre</label>
              <input 
                type="text" 
                placeholder="Tu nombre completo"
                className="bg-transparent border-b border-white/20 py-2.5 font-sans text-[0.9rem] font-light text-white outline-none transition-all focus:border-[#D8B7B0] placeholder:text-white/20" 
              />
            </div>
            <div className="flex flex-col gap-2 group">
              <label className="text-[0.62rem] font-medium tracking-[0.2em] uppercase text-white/60 transition-colors group-focus-within:text-[#D8B7B0]">Email</label>
              <input 
                type="email" 
                placeholder="tu@email.com"
                className="bg-transparent border-b border-white/20 py-2.5 font-sans text-[0.9rem] font-light text-white outline-none transition-all focus:border-[#D8B7B0] placeholder:text-white/20" 
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-2 group relative">
            <label className="text-[0.62rem] font-medium tracking-[0.2em] uppercase text-white/60 transition-colors group-focus-within:text-[#D8B7B0]">Tipo de Proyecto</label>
            <div className="relative">
              <select className="w-full bg-transparent border-b border-white/20 py-2.5 font-sans text-[0.9rem] font-light text-white outline-none focus:border-[#D8B7B0] appearance-none rounded-none cursor-pointer">
                <option value="" className="bg-[#1a1a1a]">Selecciona una opción...</option>
                <option className="bg-[#1a1a1a]">Edición de Reels</option>
                <option className="bg-[#1a1a1a]">Video Institucional / Storytelling</option>
                <option className="bg-[#1a1a1a]">Drone Work</option>
                <option className="bg-[#1a1a1a]">Fotografía</option>
                <option className="bg-[#1a1a1a]">Otro</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-2 group">
            <label className="text-[0.62rem] font-medium tracking-[0.2em] uppercase text-white/60 transition-colors group-focus-within:text-[#D8B7B0]">Mensaje</label>
            <textarea 
              placeholder="¿En qué puedo ayudarte?"
              className="bg-transparent border-b border-white/20 py-2.5 font-sans text-[0.9rem] font-light text-white outline-none transition-all focus:border-[#D8B7B0] resize-none min-h-[100px] placeholder:text-white/20" 
            />
          </div>

          <button 
            type="submit" 
            className={`group relative overflow-hidden font-sans text-[0.7rem] font-medium tracking-[0.25em] uppercase px-12 py-4 transition-all duration-500 self-start mt-4 ${
              isSent ? 'bg-[#D8B7B0] text-black' : 'bg-white text-black hover:bg-[#D8B7B0]'
            }`}
            disabled={isSent}
          >
            <span className="relative z-10">{isSent ? 'Mensaje Enviado ✓' : 'Enviar Mensaje'}</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
