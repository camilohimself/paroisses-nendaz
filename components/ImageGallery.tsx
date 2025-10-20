'use client';

/**
 * Composant Galerie d'images pour les pages paroisses
 * Affiche une grille d'images miniatures avec lightbox cliquable
 * Support WebP + JPEG fallback, responsive, lazy loading
 */

import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface ImageGalleryProps {
  paroisseId: string;
  paroisseName: string;
  galleryCount: number; // Nombre d'images dans la galerie
}

export default function ImageGallery({ paroisseId, paroisseName, galleryCount }: ImageGalleryProps) {
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Chemins des images
  const basePath = `/images/paroisses/${paroisseId}`;

  // Générer les slides pour le lightbox : Hero + Galerie
  const slides = [
    // Image hero en premier
    {
      src: `${basePath}/hero-desktop.jpg`,
      alt: `${paroisseName} - Vue principale`,
      width: 1920,
      height: 800
    },
    // Images galerie ensuite
    ...Array.from({ length: galleryCount }, (_, i) => ({
      src: `${basePath}/gallery-${i + 1}.jpg`,
      alt: `${paroisseName} - Photo ${i + 1}`,
      width: 600,
      height: 400
    }))
  ];

  return (
    <>
      {/* Grille d'images : Hero + Galerie */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Image Hero comme première miniature */}
        <button
          onClick={() => {
            setPhotoIndex(0);
            setOpen(true);
          }}
          className="group relative overflow-hidden rounded-lg aspect-[3/2] bg-gray-100 hover:shadow-xl transition-all duration-300"
        >
          <picture>
            <source
              srcSet={`${basePath}/hero-desktop.webp`}
              type="image/webp"
            />
            <img
              src={`${basePath}/hero-desktop.jpg`}
              alt={`${paroisseName} - Vue principale`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
          </picture>

          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
            <svg
              className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
              />
            </svg>
          </div>
        </button>

        {/* Images galerie */}
        {Array.from({ length: galleryCount }, (_, i) => (
          <button
            key={i}
            onClick={() => {
              setPhotoIndex(i + 1); // +1 car hero est à l'index 0
              setOpen(true);
            }}
            className="group relative overflow-hidden rounded-lg aspect-[3/2] bg-gray-100 hover:shadow-xl transition-all duration-300"
          >
            <picture>
              <source
                srcSet={`${basePath}/gallery-${i + 1}.webp`}
                type="image/webp"
              />
              <img
                src={`${basePath}/gallery-${i + 1}.jpg`}
                alt={`${paroisseName} - Photo ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
            </picture>

            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
              <svg
                className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                />
              </svg>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={photoIndex}
        styles={{
          container: { backgroundColor: 'rgba(0, 0, 0, 0.95)' }
        }}
        controller={{ closeOnBackdropClick: true }}
      />
    </>
  );
}
