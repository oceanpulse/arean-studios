"use client";
import React, { useEffect, useRef, useState, memo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SparklesCore } from "./sparkles";
import { IconDotsVertical } from "@tabler/icons-react";

export const ImageTextReveal = ({
  text,
  revealText,
  firstImage,
  secondImage,
  firstImageClassName,
  secondImageClassName,
  className,
  children,
  showHandlebar = true,
}: {
  text: string;
  revealText: string;
  firstImage: string;
  secondImage: string;
  firstImageClassName?: string;
  secondImageClassName?: string;
  className?: string;
  children?: React.ReactNode;
  showHandlebar?: boolean;
}) => {
  const [sliderXPercent, setSliderXPercent] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);

  const mouseEnterHandler = () => {
    setIsMouseOver(true);
  };

  const mouseLeaveHandler = () => {
    setIsMouseOver(false);
    setSliderXPercent(0);
  };

  const handleStart = (clientX: number) => {
    setIsDragging(true);
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percent = (x / rect.width) * 100;
      setSliderXPercent(Math.max(0, Math.min(100, percent)));
    }
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  const handleMove = (clientX: number) => {
    if (isDragging && sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percent = (x / rect.width) * 100;
      requestAnimationFrame(() => {
        setSliderXPercent(Math.max(0, Math.min(100, percent)));
      });
    } else if (isMouseOver && sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percent = (x / rect.width) * 100;
      requestAnimationFrame(() => {
        setSliderXPercent(Math.max(0, Math.min(100, percent)));
      });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => handleStart(e.clientX);
  const handleMouseUp = () => handleEnd();
  const handleMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);

  const handleTouchStart = (e: React.TouchEvent) => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const rotateDeg = (sliderXPercent - 50) * 0.1;

  return (
    <div className="pl-10 ">
      {children}

      {/* Text Reveal Section - Moved to appear above the image comparison */}
      <div className="h-20 relative flex items-center overflow-hidden">
        <motion.div
          style={{
            width: "100%",
          }}
          animate={{
            opacity: sliderXPercent > 0 ? 1 : 0,
            clipPath: `inset(0 ${100 - sliderXPercent}% 0 0)`,
          }}
          transition={{ duration: 0 }}
          className="absolute bg-[#1d1c20] z-20 will-change-transform"
        >
          <p
            style={{
              textShadow: "4px 4px 15px rgba(0,0,0,0.5)",
            }}
            className="text-base sm:text-[2rem] py-10 font-bold text-white bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300"
          >
            {revealText}
          </p>
        </motion.div>
        <motion.div
          animate={{
            left: `${sliderXPercent}%`,
            rotate: `${rotateDeg}deg`,
            opacity: sliderXPercent > 0 ? 1 : 0,
          }}
          transition={{ duration: 0 }}
          className="h-40 w-[8px] bg-gradient-to-b from-transparent via-neutral-800 to-transparent absolute z-50 will-change-transform"
        ></motion.div>

        <div className="overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]">
          <p className="text-base sm:text-[3rem] py-10 font-bold bg-clip-text text-transparent bg-[#323238]">
            {text}
          </p>
          <MemoizedStars />
        </div>
      </div>

      {/* Image Comparison Section */}
      <div
        ref={sliderRef}
        className={cn(
          "w-[400px] h-[400px] overflow-hidden mx-auto relative"
        )}
        style={{
          cursor: "col-resize",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={mouseLeaveHandler}
        onMouseEnter={mouseEnterHandler}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
      >
        <AnimatePresence initial={false}>
          <motion.div
            className="h-full w-px absolute top-0 m-auto z-30 bg-gradient-to-b from-transparent from-[5%] to-[95%] via-indigo-500 to-transparent"
            style={{
              left: `${sliderXPercent}%`,
              top: "0",
              zIndex: 40,
            }}
            transition={{ duration: 0 }}
          >
            <div className="w-36 h-full [mask-image:radial-gradient(100px_at_left,white,transparent)] absolute top-1/2 -translate-y-1/2 left-0 bg-gradient-to-r from-indigo-400 via-transparent to-transparent z-20 opacity-50" />
            <div className="w-10 h-1/2 [mask-image:radial-gradient(50px_at_left,white,transparent)] absolute top-1/2 -translate-y-1/2 left-0 bg-gradient-to-r from-cyan-400 via-transparent to-transparent z-10 opacity-100" />
            <div className="w-10 h-3/4 top-1/2 -translate-y-1/2 absolute -right-10 [mask-image:radial-gradient(100px_at_left,white,transparent)]">
              <MemoizedSparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={1200}
                className="w-full h-full"
                particleColor="#FFFFFF"
              />
            </div>
            {showHandlebar && (
              <div className="h-5 w-5 rounded-md top-1/2 -translate-y-1/2 bg-white z-30 -right-2.5 absolute flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF40]">
                <IconDotsVertical className="h-4 w-4 text-black" />
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="overflow-hidden w-full h-full relative z-20 pointer-events-none rounded-2xl">
          <AnimatePresence initial={false}>
            {firstImage ? (
              <motion.div
                className={cn(
                  "absolute inset-0 z-20 rounded-2xl flex-shrink-0 w-full h-full select-none overflow-hidden",
                  firstImageClassName
                )}
                style={{
                  clipPath: `inset(0 ${100 - sliderXPercent}% 0 0)`,
                }}
                transition={{ duration: 0 }}
              >
                <img
                  alt="first image"
                  src={firstImage}
                  className={cn(
                    "absolute inset-0 z-20 rounded-2xl flex-shrink-0 w-full h-full select-none",
                    firstImageClassName
                  )}
                  draggable={false}
                />
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>

        <AnimatePresence initial={false}>
          {secondImage ? (
            <motion.img
              className={cn(
                "absolute top-0 left-0 z-[19] rounded-2xl w-full h-full select-none",
                secondImageClassName
              )}
              alt="second image"
              src={secondImage}
              draggable={false}
            />
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
};

export const ImageTextRevealTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2 className={cn("text-white text-lg mb-2", className)}>{children}</h2>
  );
};

export const ImageTextRevealDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <p className={cn("text-[#a9a9a9] text-sm", className)}>{children}</p>;
};

const Stars = () => {
  const randomMove = () => Math.random() * 4 - 2;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  return (
    <div className="absolute inset-0">
      {[...Array(80)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 10 + 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            backgroundColor: "white",
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block"
        ></motion.span>
      ))}
    </div>
  );
};

const MemoizedStars = memo(Stars);

const MemoizedSparklesCore = React.memo(SparklesCore);