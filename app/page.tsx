'use client';

import { useState, useEffect } from 'react';

const features = [
  "Culturally-Aware Therapists",
  "Meditation Library", 
  "Mood Trackers",
  "Coping Tools",
  "Informative Blogs"
];

const BlobAnimation = () => {
  const [currentPalette, setCurrentPalette] = useState(1);

  const palettes = {
    1: {
      bg0: '#527FC3',
      bg1: '#F7F6F4',
      blob1: '#527FC3',
      blob2: '#7A9BD6',
      blob3: '#A3B8E1',
      blob4: '#BCC9E8'
    },
    2: {
      bg0: '#6B8FD0',
      bg1: '#F7F6F4',
      blob1: '#527FC3',
      blob2: '#8DA6DA',
      blob3: '#B5C7E5',
      blob4: '#D4DBEE'
    },
    3: {
      bg0: '#4A71B8',
      bg1: '#F7F6F4',
      blob1: '#527FC3',
      blob2: '#708CD4',
      blob3: '#9BB4DE',
      blob4: '#C8D3EA'
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
    <div className="relative w-full h-96 flex items-center justify-center">
      {/* Background blur */}
      <div 
        className="absolute w-80 h-80 rounded-full transition-all duration-500 ease-in-out"
        style={{
          background: palette.bg0,
          filter: 'blur(15rem)',
          opacity: 0.3
        }}
      />
      
      {/* Blob container - now invisible and larger */}
      <div className="relative w-full h-full max-w-none max-h-none">
        <svg 
          viewBox="0 0 1200 1200" 
          className="w-full h-full absolute inset-0"
          style={{ overflow: 'visible' }}
        >
          {/* Main blobs */}
          <g 
            className="origin-center opacity-60"
            style={{
              animation: 'rotate 25s infinite alternate ease-in-out',
              transformOrigin: '50% 50%'
            }}
          >
            <circle
              cx="600"
              cy="600"
              r="250"
              fill={palette.blob1}
              style={{ 
                filter: 'blur(1.5rem)',
                animation: 'morph1 8s infinite ease-in-out'
              }}
            />
          </g>

          <g 
            className="origin-center opacity-50"
            style={{
              animation: 'rotate 18s infinite alternate-reverse ease-in-out',
              transformOrigin: '50% 50%'
            }}
          >
            <circle
              cx="600"
              cy="600"
              r="220"
              fill={palette.blob2}
              style={{ 
                filter: 'blur(1rem)',
                animation: 'morph2 6s infinite ease-in-out'
              }}
            />
          </g>

          <g 
            className="origin-center opacity-40"
            style={{
              animation: 'rotate 23s infinite alternate ease-in-out',
              transformOrigin: '50% 50%'
            }}
          >
            <circle
              cx="600"
              cy="600"
              r="190"
              fill={palette.blob3}
              style={{ 
                filter: 'blur(0.8rem)',
                animation: 'morph3 7s infinite ease-in-out'
              }}
            />
          </g>

          <g 
            className="origin-center opacity-70"
            style={{
              animation: 'rotate 31s infinite alternate-reverse ease-in-out',
              transformOrigin: '50% 50%'
            }}
          >
            <circle
              cx="600"
              cy="600"
              r="140"
              fill={palette.blob4}
              style={{ 
                filter: 'blur(12rem)',
                animation: 'morph4 10s infinite ease-in-out'
              }}
            />
          </g>

          {/* Additional overlay blobs for complexity */}
          <g 
            className="origin-center opacity-25"
            style={{
              animation: 'rotate 25s infinite alternate-reverse ease-in-out',
              transformOrigin: '50% 50%'
            }}
          >
            <ellipse
              cx="600"
              cy="600"
              rx="180"
              ry="280"
              fill={palette.blob1}
              style={{ 
                filter: 'blur(2rem)',
                animation: 'morphEllipse1 9s infinite ease-in-out'
              }}
            />
          </g>

          <g 
            className="origin-center opacity-20"
            style={{
              animation: 'rotate 20s infinite alternate ease-in-out',
              transformOrigin: '50% 50%'
            }}
          >
            <ellipse
              cx="600"
              cy="600"
              rx="280"
              ry="170"
              fill={palette.blob2}
              style={{ 
                filter: 'blur(2.5rem)',
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
    <div className="h-12 flex items-center justify-center">
      <div
        className={`text-2xl md:text-3xl font-bold transition-all duration-500 transform ${
          isVisible 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 translate-x-8'
        }`}
        style={{ color: '#527FC3' }}
      >
        {features[currentFeature]}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8" style={{ background: '#F7F6F4', color: '#527FC3' }}>
      <div className="text-center space-y-8 max-w-4xl mx-auto">
        {/* Brand Name */}
        <div className="mb-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight" style={{ color: '#527FC3' }}>
            VENTHRAPY
          </h1>
        </div>

        {/* Coming Soon Title */}
        <div className="space-y-2">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight" style={{ color: '#527FC3' }}>
            COMING SOON
          </h2>
        </div>

        {/* Blob Animation - Main Focus */}
        <div className="py-4">
          <BlobAnimation />
        </div>

        {/* Feature Slider - Compact */}
        <div className="py-4">
          <FeatureSlider />
        </div>
      </div>
    </div>
  );
}
