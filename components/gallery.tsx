'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion-transitions';

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const galleryData: GalleryItem[] = [
  {
    id: 1,
    title: 'Obra 1',
    description: 'Descripción de la obra de arte 1',
    imageUrl: '/image.png', // Usa una imagen existente o añade nuevas
  },
  {
    id: 2,
    title: 'Obra 2',
    description: 'Descripción de la obra de arte 2',
    imageUrl: '/circles.png',
  },
  {
    id: 3,
    title: 'Obra 3',
    description: 'Descripción de la obra de arte 3',
    imageUrl: '/bitacora.png',
  },
  {
    id: 4,
    title: 'Obra 4',
    description: 'Descripción de la obra de arte 4',
    imageUrl: '/mav2.png',
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [orientationMap, setOrientationMap] = useState<Record<number, boolean>>({});

  const openModal = (item: GalleryItem) => {
    setSelectedImage(item);
    setCurrentIndex(galleryData.findIndex(img => img.id === item.id));
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  
  const navigateImage = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      const nextIndex = (currentIndex + 1) % galleryData.length;
      setCurrentIndex(nextIndex);
      setSelectedImage(galleryData[nextIndex]);
    } else {
      const prevIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
      setCurrentIndex(prevIndex);
      setSelectedImage(galleryData[prevIndex]);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h2 
        variants={fadeIn('bottom')}
        initial="hidden"
        animate="visible"
        className="text-4xl font-bold text-center mb-12 text-white"
      >
        Galería de Arte
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryData.map((item, index) => (
          <motion.div
            key={item.id}
            variants={fadeIn('right')}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5)"
            }}
            className={`bg-[#1d1d1d] rounded-lg overflow-hidden shadow-lg cursor-pointer ${orientationMap[item.id] ? 'md:col-span-2 lg:col-span-2' : ''}`}
            onClick={() => openModal(item)}
          >
            <div className={`relative w-full group ${orientationMap[item.id] ? 'h-80 md:h-96' : 'h-64'}`}>
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className={`${orientationMap[item.id] ? 'object-cover' : 'object-cover'} transition-all duration-500 group-hover:scale-110`}
                onLoadingComplete={(img) => {
                  const isPortrait = img.naturalHeight > img.naturalWidth;
                  setOrientationMap(prev => ({ ...prev, [item.id]: isPortrait }));
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Ver detalle</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-gray-400 mt-2">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal para vista ampliada */}
      {selectedImage && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
        >
          <div className="relative max-w-4xl w-full bg-[#1d1d1d] rounded-lg overflow-hidden">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-2xl z-10 bg-black bg-opacity-50 w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-70 transition-all"
            >
              &times;
            </button>
            
            {/* Botón de navegación izquierda */}
            <button 
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl z-10 hover:bg-opacity-70 transition-all"
            >
              &lt;
            </button>
            
            {/* Botón de navegación derecha */}
            <button 
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl z-10 hover:bg-opacity-70 transition-all"
            >
              &gt;
            </button>
            
            <div className="relative h-[70vh] w-full">
              <motion.div
                key={selectedImage.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={selectedImage.imageUrl}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white">{selectedImage.title}</h3>
              <p className="text-gray-300 mt-2">{selectedImage.description}</p>
              <p className="text-gray-400 mt-4 text-sm">{currentIndex + 1} / {galleryData.length}</p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}