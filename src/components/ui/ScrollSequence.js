'use client';
import { useEffect, useRef, useState } from 'react';

const frameCount = 40;

export default function ScrollSequence({ children }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [percent, setPercent] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const imagesRef = useRef([]);

  // Load images
  useEffect(() => {
    let loadedCount = 0;
    const imgs = [];

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = `/frames/ezgif-frame-${i.toString().padStart(3, '0')}.jpg`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          setImagesLoaded(true);
        }
      };
      img.onerror = (e) => console.error(`Failed to load frame ${i}`, e);
      imgs.push(img);
    }

    imagesRef.current = imgs;
  }, []);

  // Handle scroll (Percent tracking)
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollHeight = height - windowHeight;

      let p = -top / scrollHeight;
      p = Math.max(0, Math.min(1, p));
      setPercent(p);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Draw to Canvas
  useEffect(() => {
    if (!imagesRef.current.length) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Determine frame
    const frameIndex = Math.min(
      frameCount - 1,
      Math.floor(percent * (frameCount - 1))
    );

    const currentImg = imagesRef.current[frameIndex];
    if (!currentImg) return;

    const draw = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Scale to cover
      const scale = Math.max(canvas.width / currentImg.width, canvas.height / currentImg.height);
      const x = (canvas.width / 2) - (currentImg.width / 2) * scale;
      const y = (canvas.height / 2) - (currentImg.height / 2) * scale;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(currentImg, x, y, currentImg.width * scale, currentImg.height * scale);
    };

    if (currentImg.complete && currentImg.naturalWidth > 0) {
      draw();
    } else {
      currentImg.onload = draw;
    }

  }, [percent, imagesLoaded]); // Re-run when images match loaded state to ensure initial frame draws

  return (
    <div ref={containerRef} style={{ height: '115vh', position: 'relative', background: '#050505', zIndex: 1 }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>
        <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }} />

        {/* Overlay Content (Hero Text) */}
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 10,
          opacity: Math.max(0, 1 - percent * 1.5),
          transition: 'opacity 0.1s ease-out'
        }}>
          {children}
        </div>
      </div>
    </div>
  );
}
