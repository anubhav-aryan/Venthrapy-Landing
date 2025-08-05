'use client';

import { useState, useEffect } from 'react';

const features = [
  "Personalized Therapy Sessions",
  "24/7 Mental Health Support", 
  "Expert Licensed Therapists",
  "Secure & Private Platform",
  "Flexible Scheduling"
];

const BlobAnimation = () => {
  const [currentPalette, setCurrentPalette] = useState(1);

  const palettes = {
    1: {
      bg0: '#f5f5f5',
      bg1: '#ffffff',
      blob1: '#d1d5db',
      blob2: '#9ca3af',
      blob3: '#6b7280',
      blob4: '#374151'
    },
    2: {
      bg0: '#f9fafb',
      bg1: '#f3f4f6',
      blob1: '#e5e7eb',
      blob2: '#d1d5db',
      blob3: '#9ca3af',
      blob4: '#6b7280'
    },
    3: {
      bg0: '#ffffff',
      bg1: '#f8fafc',
      blob1: '#f1f5f9',
      blob2: '#e2e8f0',
      blob3: '#cbd5e1',
      blob4: '#94a3b8'
    }
  };

  const shapes = {
    shape1: "M 100 600 q 0 -500, 500 -500 t 500 500 t -500 500 T 100 600 z",
    shape2: "M 100 600 q -50 -400, 500 -500 t 450 550 t -500 500 T 100 600 z",
    shape3: "M 100 600 q 0 -400, 500 -500 t 400 500 t -500 500 T 100 600 z",
    shape4: "M 150 600 q 0 -600, 500 -500 t 500 550 t -500 500 T 150 600 z",
    shape5: "M 150 600 q 0 -600, 500 -500 t 500 550 t -500 500 T 150 600 z",
    shape6: "M 100 600 q 100 -600, 500 -500 t 400 500 t -500 500 T 100 600 z"
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPalette(prev => prev === 3 ? 1 : prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const palette = palettes[currentPalette as keyof typeof palettes];

  return (
    <div className="relative w-full h-64 flex items-center justify-center overflow-hidden">
      {/* Background blur */}
      <div 
        className="absolute w-48 h-48 rounded-full transition-all duration-500 ease-in-out"
        style={{
          background: palette.bg0,
          filter: 'blur(10rem)'
        }}
      />
      
      {/* Blob container */}
      <div className="relative w-60 h-60 max-w-full max-h-full">
        <svg 
          viewBox="0 0 1200 1200" 
          className="w-full h-full relative z-10"
        >
          {/* Blob 1 */}
          <g className="animate-[rotate_25s_infinite_alternate_ease-in-out] origin-center opacity-70">
            <path
              d={shapes.shape1}
              fill={palette.blob1}
              style={{ 
                filter: 'blur(1rem)',
                transformOrigin: '50% 50%',
                transform: 'scale(0.8)',
                animation: 'blobAnim1 5s infinite alternate cubic-bezier(0.45, 0.2, 0.55, 0.8)'
              }}
            />
          </g>

          {/* Blob 2 */}
          <g className="animate-[rotate_18s_infinite_alternate-reverse_ease-in-out] origin-center opacity-70">
            <path
              d={shapes.shape3}
              fill={palette.blob2}
              style={{ 
                filter: 'blur(0.75rem)',
                transformOrigin: '50% 50%',
                transform: 'scale(0.78)',
                animation: 'blobAnim2 7s infinite alternate cubic-bezier(0.45, 0.2, 0.55, 0.8)'
              }}
            />
          </g>

          {/* Blob 3 */}
          <g className="animate-[rotate_23s_infinite_alternate_ease-in-out] origin-center opacity-70">
            <path
              d={shapes.shape2}
              fill={palette.blob3}
              style={{ 
                filter: 'blur(0.5rem)',
                transformOrigin: '50% 50%',
                transform: 'scale(0.76)',
                animation: 'blobAnim3 6s infinite alternate cubic-bezier(0.45, 0.2, 0.55, 0.8)'
              }}
            />
          </g>

          {/* Blob 4 */}
          <g className="animate-[rotate_31s_infinite_alternate-reverse_ease-in-out] origin-center opacity-90">
            <path
              d={shapes.shape4}
              fill={palette.blob4}
              style={{ 
                filter: 'blur(10rem)',
                transformOrigin: '50% 50%',
                transform: 'scale(0.5)',
                animation: 'blobAnim4 10s infinite alternate cubic-bezier(0.45, 0.2, 0.55, 0.8)'
              }}
            />
          </g>

          {/* Alt blobs for more complexity */}
          <g className="animate-[rotate_25s_infinite_alternate-reverse_ease-in-out] origin-center opacity-30">
            <path
              d={shapes.shape1}
              fill={palette.blob1}
              style={{ 
                filter: 'blur(1rem)',
                transformOrigin: '50% 50%',
                transform: 'scale(0.8)',
                animation: 'blobAnim1 5s infinite alternate cubic-bezier(0.45, 0.2, 0.55, 0.8)'
              }}
            />
          </g>

          <g className="animate-[rotate_18s_infinite_alternate_ease-in-out] origin-center opacity-30">
            <path
              d={shapes.shape3}
              fill={palette.blob2}
              style={{ 
                filter: 'blur(0.75rem)',
                transformOrigin: '50% 50%',
                transform: 'scale(0.78)',
                animation: 'blobAnim2 7s infinite alternate cubic-bezier(0.45, 0.2, 0.55, 0.8)'
              }}
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

const FeatureSlider = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-16 flex items-center justify-center">
      <div
        className={`text-xl md:text-2xl text-gray-600 transition-all duration-500 transform ${
          isVisible 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 translate-x-8'
        }`}
      >
        {features[currentFeature]}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center p-8">
      <div className="text-center space-y-12 max-w-4xl mx-auto">
        {/* Coming Soon Title */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 tracking-tight">
            COMING
          </h1>
          <h1 className="text-6xl md:text-8xl font-bold text-gray-500 tracking-tight">
            SOON
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 font-light">
          Your mental wellness journey starts here
        </p>

        {/* Feature Slider */}
        <div className="py-8">
          <h2 className="text-lg text-gray-400 mb-6 uppercase tracking-wider">
            What's Coming
          </h2>
          <FeatureSlider />
        </div>

        {/* Blob Animation */}
        <div className="py-8">
          <h3 className="text-sm text-gray-400 mb-4 uppercase tracking-wider">
            Preparing Something Amazing
          </h3>
          <BlobAnimation />
        </div>
      </div>
    </div>
  );
}
