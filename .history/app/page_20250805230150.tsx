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
          {/* Main blobs */}
          <g 
            className="origin-center opacity-70"
            style={{
              animation: 'rotate 25s infinite alternate ease-in-out',
              transformOrigin: '50% 50%'
            }}
          >
            <circle
              cx="600"
              cy="600"
              r="200"
              fill={palette.blob1}
              style={{ 
                filter: 'blur(1rem)',
                animation: 'morph1 8s infinite ease-in-out'
              }}
            />
          </g>

          <g 
            className="origin-center opacity-60"
            style={{
              animation: 'rotate 18s infinite alternate-reverse ease-in-out',
              transformOrigin: '50% 50%'
            }}
          >
            <circle
              cx="600"
              cy="600"
              r="180"
              fill={palette.blob2}
              style={{ 
                filter: 'blur(0.75rem)',
                animation: 'morph2 6s infinite ease-in-out'
              }}
            />
          </g>

          <g 
            className="origin-center opacity-50"
            style={{
              animation: 'rotate 23s infinite alternate ease-in-out',
              transformOrigin: '50% 50%'
            }}
          >
            <circle
              cx="600"
              cy="600"
              r="160"
              fill={palette.blob3}
              style={{ 
                filter: 'blur(0.5rem)',
                animation: 'morph3 7s infinite ease-in-out'
              }}
            />
          </g>

          <g 
            className="origin-center opacity-90"
            style={{
              animation: 'rotate 31s infinite alternate-reverse ease-in-out',
              transformOrigin: '50% 50%'
            }}
          >
            <circle
              cx="600"
              cy="600"
              r="100"
              fill={palette.blob4}
              style={{ 
                filter: 'blur(8rem)',
                animation: 'morph4 10s infinite ease-in-out'
              }}
            />
          </g>

          {/* Additional overlay blobs for complexity */}
          <g 
            className="origin-center opacity-30"
            style={{
              animation: 'rotate 25s infinite alternate-reverse ease-in-out',
              transformOrigin: '50% 50%'
            }}
          >
            <ellipse
              cx="600"
              cy="600"
              rx="150"
              ry="220"
              fill={palette.blob1}
              style={{ 
                filter: 'blur(1.5rem)',
                animation: 'morphEllipse1 9s infinite ease-in-out'
              }}
            />
          </g>

          <g 
            className="origin-center opacity-25"
            style={{
              animation: 'rotate 20s infinite alternate ease-in-out',
              transformOrigin: '50% 50%'
            }}
          >
            <ellipse
              cx="600"
              cy="600"
              rx="220"
              ry="140"
              fill={palette.blob2}
              style={{ 
                filter: 'blur(2rem)',
                animation: 'morphEllipse2 11s infinite ease-in-out'
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
