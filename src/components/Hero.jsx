import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { HERO_CONTENT } from "../constants";
import profile from "../assets/shreyanProfile.jpg";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Enhanced 3D transform values
  const textY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const textRotateX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 20, 40]);
  const textRotateY = useTransform(scrollYProgress, [0, 0.5, 1], [0, 15, 30]);
  const textZ = useTransform(scrollYProgress, [0, 0.5, 1], [0, -50, -100]);
  const textScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.95, 0.9]);
  
  // Enhanced image transforms
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.9, 0.8]);
  const imageRotateY = useTransform(scrollYProgress, [0, 0.5, 1], [0, -20, -40]);
  const imageRotateX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 15, 30]);
  const imageZ = useTransform(scrollYProgress, [0, 0.5, 1], [0, -100, -200]);
  
  // Opacity and perspective effects
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const perspective = useTransform(scrollYProgress, [0, 1], [1000, 800]);

  return (
    <motion.div 
      ref={containerRef}
      className="relative border-b border-neutral-900 pb-4 lg:mb-35"
      style={{
        opacity,
        perspective,
        transformStyle: "preserve-3d"
      }}
    >
      <div className="flex flex-wrap">
        <motion.div 
          style={{ 
            y: textY,
            rotateX: textRotateX,
            rotateY: textRotateY,
            z: textZ,
            scale: textScale,
            transformStyle: "preserve-3d"
          }}
          className="w-full lg:w-1/2 transform-gpu"
        >
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
              initial={{ opacity: 0, y: -50, rotateX: -30 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 1.2, 
                type: "spring",
                stiffness: 100,
                damping: 10
              }}
              className="pb-16 text-6xl font-thin tracking-tight lg:text-8xl transform-gpu"
            >
              Shreyan Panda
            </motion.h1>
            <motion.span 
              initial={{ opacity: 0, x: -50, rotateY: -30 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ 
                duration: 1.2, 
                delay: 0.2, 
                type: "spring",
                stiffness: 100
              }}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent transform-gpu"
            >
              Welcome to My Portfolio
            </motion.span>
            <motion.p
              initial={{ opacity: 0, y: 50, rotateX: 30 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 1.2, 
                delay: 0.4, 
                type: "spring",
                stiffness: 100
              }}
              className="mt-6 max-w-xl text-lg text-neutral-400 transform-gpu"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </motion.div>

        <motion.div 
          style={{ 
            scale: imageScale,
            rotateY: imageRotateY,
            rotateX: imageRotateX,
            z: imageZ,
            transformStyle: "preserve-3d"
          }}
          className="w-full lg:w-1/2 lg:p-8 lg:mt-20"
        >
          <div className="flex justify-center">
            <motion.img 
              initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ 
                duration: 1.2, 
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              src={profile} 
              alt="Shreyan Panda"
              className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] object-cover rounded-lg shadow-xl transform-gpu"
              whileHover={{ 
                scale: 1.05,
                rotateY: 15,
                rotateX: 5,
                z: 50,
                transition: { 
                  duration: 0.4,
                  type: "spring",
                  stiffness: 300
                }
              }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
