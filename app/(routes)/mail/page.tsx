'use client';

import { useState } from 'react';
import TransitionPage from '@/components/transition-page';
import NoteImage from '@/components/note-image';
import ContainerPage from '@/components/container-page';

const Mail = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { nombre, correo, mensaje } = formData;

    if (!nombre.trim() || !correo.trim() || !mensaje.trim()) return;

    try {
      const res = await fetch('/api/sendMail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        console.error('Error enviando correo');
        alert('Error al enviar el correo. Por favor intenta más tarde.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Ocurrió un error enviando el correo.');
    }
  };

  return (
    <ContainerPage>
      <TransitionPage />
      <NoteImage />

      <section className="flex flex-col items-center justify-center pt-20 h-auto scale-90 mx-auto max-w-md px-4">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-6 text-[#f5741c]">
          Contáctame
        </h1>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-900 placeholder-gray-500 text-white focus:outline-none focus:border-[#f5741c]"
            />
            <input
              type="email"
              name="correo"
              placeholder="Correo electrónico"
              value={formData.correo}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-900 placeholder-gray-500 text-white focus:outline-none focus:border-[#f5741c]"
            />
            <textarea
              name="mensaje"
              placeholder="Mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-900 placeholder-gray-500 text-white focus:outline-none focus:border-[#f5741c] resize-none"
            />
            <button
              type="submit"
              className="bg-[#f5741c] hover:bg-[#d65f04] px-6 py-3 rounded-lg text-white font-semibold transition"
            >
              Enviar
            </button>
          </form>  
        ) : (
          <p className="text-green-400 text-center font-semibold">
            ¡Gracias por contactarme! Responderé lo antes posible.
          </p>
        )}
      </section>
    </ContainerPage>
  );
};

export default Mail;
