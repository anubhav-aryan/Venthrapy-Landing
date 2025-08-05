'use client';

import { useState, useEffect } from 'react';

const features = [
  "Personalized Therapy Sessions",
  "24/7 Mental Health Support", 
  "Expert Licensed Therapists",
  "Secure & Private Platform",
  "Flexible Scheduling"
];

const SiriAnimation = () => {
  const [waveData, setWaveData] = useState<number[]>([]);

  useEffect(() => {
    const generateWave = () => {
      const data = Array.from({ length: 50 }, (_, i) => {
        const time = Date.now() / 1000;
        const x = (i / 50) * Math.PI * 4;
        return Math.sin(x + time) * Math.sin(x * 0.5 + time * 0.7) * 40 + 40;
      });
      setWaveData(data);
    };

    generateWave();
    const interval = setInterval(generateWave, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-end justify-center gap-1 h-24">
      {waveData.map((height, index) => (
        <div
          key={index}
          className="bg-gray-500 rounded-full transition-all duration-75 ease-linear"
          style={{
            width: '3px',
            height: `${height}px`,
            opacity: 0.7 + (height / 80) * 0.3
          }}
        />
      ))}
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

        {/* Siri-like Animation */}
        <div className="py-8">
          <h3 className="text-sm text-gray-400 mb-4 uppercase tracking-wider">
            Preparing Something Amazing
          </h3>
          <SiriAnimation />
        </div>
      </div>
    </div>
  );
}
