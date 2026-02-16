"use client";

import { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import Particles, { initParticlesEngine } from "@tsparticles/react";

export const CoverParticles = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    init && (
      <div className="particles-container">
        <Particles
          id="tsparticles"
          options={{
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "bubble",
                },
                
              },
              modes: {
                bubble: {
                  distance: 120,
                  duration: 2,
                  size: 8,
                  opacity: 0.6,
                },
              },
            },
            particles: {
              number: {
                value: 50,
                density: {
                  enable: true,
                  
                },
              },
              color: {
                value: ["#D42A38", "#ffffff", "#38BDF8"], // rojo, blanco y azul celeste
              },
              shape: {
                type: "circle",
              },
              opacity: {
                value: 0.4,
                
              },
              size: {
                value: { min: 2, max: 6 },
                
              },
              move: {
                enable: true,
                speed: 0.6,
                direction: "none",
                outModes: {
                  default: "out",
                },
              },
              links: {
                enable: false,
              },
            },
            detectRetina: true,
            background: {
              color: "transparent",
            },
            
          }}
        />
      </div>
    )
  );
};
