'use client';

import { useState } from 'react';
import TransitionPage from '@/components/transition-page';
import NoteImage from '@/components/note-image';
import ContainerPage from '@/components/container-page';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === '') return;
    // Aquí puedes agregar lógica para enviar el email a backend o API
    setSubmitted(true);
  };

  return (
    <ContainerPage>
      <TransitionPage />
      <NoteImage />

      <section className="flex flex-col items-center justify-center pt-20 h-auto scale-90 mx-auto max-w-lg px-4">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-6 text-[#f5741c]">
          Suscríbete a nuestro boletín
        </h1>
        <p className="text-center text-gray-300 mb-8">
          Recibe las últimas noticias y actualizaciones directamente en tu correo.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="w-full flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow px-4 py-3 rounded-lg border border-gray-600 bg-gray-900 placeholder-gray-500 text-white focus:outline-none focus:border-[#f5741c]"
            />
            <button
              type="submit"
              className="bg-[#f5741c] hover:bg-[#d65f04] px-6 py-3 rounded-lg text-white font-semibold transition"
            >
              Suscribirse
            </button>
          </form>
        ) : (
          <p className="text-green-400 text-center font-semibold">
            ¡Gracias por suscribirte!
          </p>
        )}
      </section>
    </ContainerPage>
  );
};

export default Newsletter;
