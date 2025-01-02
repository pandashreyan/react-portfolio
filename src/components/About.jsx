import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { ABOUT_TEXT } from "../constants";
import aboutImg from "../assets/ABOU.jpg";

const About = () => {
  const componentRef = useRef(null);
  const headingRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  // Setup scroll progress tracking
  const { scrollYProgress } = useScroll({
    target: componentRef,
    offset: ["start end", "end start"]
  });

  // Create scroll-based transforms
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [30, 0, -30]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-20, 0, 20]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // View detection for initial animations
  const isHeadingInView = useInView(headingRef, { 
    margin: "-100px",
    amount: 0.5
  });
  const isImageInView = useInView(imageRef, { 
    margin: "-100px",
    amount: 0.5
  });
  const isTextInView = useInView(textRef, { 
    margin: "-100px",
    amount: 0.5
  });

  return (
    <motion.div 
      ref={componentRef}
      className="border-b border-neutral-800 pb-24 perspective-1000"
      style={{
        opacity,
        scale,
      }}
    >
      <motion.h1 
        ref={headingRef}
        initial={{ opacity: 0, y: -50, rotateX: 45 }}
        animate={isHeadingInView ? 
          { opacity: 1, y: 0, rotateX: 0 } : 
          { opacity: 0, y: -50, rotateX: 45 }
        }
        transition={{ 
          duration: 1,
          type: "spring",
          stiffness: 100,
          damping: 15
        }}
        className="my-20 text-center text-4xl transform-gpu"
      >
        About Me
      </motion.h1>

      <div className="flex flex-wrap items-center gap-8">
        <motion.div 
          ref={imageRef}
          initial={{ opacity: 0, x: -100 }}
          animate={isImageInView ? 
            { opacity: 1, x: 0 } : 
            { opacity: 0, x: -100 }
          }
          style={{ 
            rotateY,
            transformStyle: "preserve-3d"
          }}
          transition={{ 
            duration: 1,
            type: "spring",
            bounce: 0.4
          }}
          className="w-full lg:w-[45%] perspective-1000"
        >
          <motion.img 
            whileHover={{ 
              scale: 1.05, 
              rotateY: 5,
              z: 50
            }}
            transition={{ 
              duration: 0.4,
              type: "spring",
              stiffness: 300
            }}
            src={aboutImg} 
            alt="About Me" 
            className="w-full rounded-2xl object-cover shadow-lg transform-gpu"
          />
        </motion.div>

        <motion.div 
          ref={textRef}
          initial={{ opacity: 0, x: 100 }}
          animate={isTextInView ? 
            { opacity: 1, x: 0 } : 
            { opacity: 0, x: 100 }
          }
          style={{ 
            rotateX,
            transformStyle: "preserve-3d"
          }}
          transition={{ 
            duration: 1,
            type: "spring",
            bounce: 0.4
          }}
          className="w-full lg:w-[45%] perspective-1000"
        >
          <motion.p 
            className="text-lg text-neutral-400 transform-gpu"
          >
            {ABOUT_TEXT}
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
