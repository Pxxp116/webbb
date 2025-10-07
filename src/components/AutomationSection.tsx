import React from "react";

const AutomationSection = () => {
  return (
    <section className="py-20 bg-white flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Automatiza tareas repetitivas
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mb-10">
        Deja que la inteligencia artificial se encargue de responder mensajes,
        gestionar reservas o procesar pagos, mientras tú te enfocas en hacer
        crecer tu negocio.
      </p>

      {/* 🎥 Video principal */}
      <div className="w-full max-w-3xl rounded-2xl shadow-lg overflow-hidden">
        <video
          className="w-full h-auto rounded-2xl"
          controls
          autoPlay
          muted
          loop
          playsInline
        >
          {/* ⚠️ Ruta corregida */}
          <source src="/assets/FluxoAD.mp4" type="video/mp4" />
          Tu navegador no soporta la reproducción de video.
        </video>
      </div>
    </section>
  );
};

export default AutomationSection;
