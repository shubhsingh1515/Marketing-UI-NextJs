"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronsLeftRight } from "lucide-react";

type ImageComparisonProps = {
  img: string;
  alt: string;
  className?: string;
};

const ImageComparison = ({ img, alt, className = "" }: ImageComparisonProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMove = useCallback((event: MouseEvent | TouchEvent | any) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const clientX =
      "touches" in event ? event.touches[0].clientX : event.clientX;

    const x = clientX - rect.left;
    const width = rect.width;
    const newPosition = Math.max(0, Math.min(100, (x / width) * 100));

    setSliderPosition(newPosition);
  }, []);

  // Global drag handling
  useEffect(() => {
    if (!isDragging) return;

    const handleUp = () => setIsDragging(false);
    const handleMoveGlobal = (e: MouseEvent | TouchEvent) => handleMove(e);

    window.addEventListener("mousemove", handleMoveGlobal);
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("touchmove", handleMoveGlobal);
    window.addEventListener("touchend", handleUp);

    return () => {
      window.removeEventListener("mousemove", handleMoveGlobal);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("touchmove", handleMoveGlobal);
      window.removeEventListener("touchend", handleUp);
    };
  }, [isDragging, handleMove]);

  return (
    <div
      ref={containerRef}
      className={`relative select-none group overflow-hidden cursor-ew-resize ${className}`}
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
      onClick={handleMove}
    >
      {/* AFTER IMAGE (FULL COLOR) */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay z-10 pointer-events-none" />

        <Image
          src={img}
          alt={`After ${alt}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        <div className="absolute top-4 right-4 z-20 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
          <span className="text-[10px] font-bold text-white uppercase tracking-wider">
            After
          </span>
        </div>
      </div>

      {/* BEFORE IMAGE (GRAYSCALE – CLIPPED) */}
      <div
        className="absolute inset-0 overflow-hidden border-r-2 border-white"
        style={{ width: `${sliderPosition}%` }}
      >
        <div className="absolute inset-0 bg-gray-900/80 z-10 pointer-events-none mix-blend-saturation" />
        <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />

        <Image
          src={img}
          alt={`Before ${alt}`}
          fill
          className="object-cover grayscale brightness-75"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
            Before
          </span>
        </div>
      </div>

      {/* SLIDER HANDLE */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white z-30 flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)]"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg -ml-[1px] transition-transform group-active:scale-110">
          <ChevronsLeftRight className="w-4 h-4 text-gray-900" />
        </div>
      </div>
    </div>
  );
};

export default ImageComparison;
