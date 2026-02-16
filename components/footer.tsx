"use client";

const Footer = () => {
  return (
    <footer className="mt-10 w-full border-t border-white/20">
      <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold">FrontArt</h2>
          <p className="text-sm text-gray-300">
            © 2024. Todos los derechos reservados.
          </p>
        </div>
        {/* Puedes dejar redes sociales u otros enlaces aquí si los usas */}
      </div>
    </footer>
  );
};

export default Footer;