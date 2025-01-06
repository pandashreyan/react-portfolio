import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import Scene from './Scene3D';
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaPython } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiDocker } from "react-icons/si";

const IntroPage = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-screen w-screen bg-white text-black flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Text Section */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-center z-10 mb-4 mt-8"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-2">
          Hi, I am Shreyan 👋
        </h1>
        <motion.h2 
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-2xl md:text-4xl text-gray-700"
        >
          Developer
        </motion.h2>
      </motion.div>

      {/* 3D Scene */}
      <div className="w-full h-[40vh] md:h-[60vh] relative overflow-hidden">
        <Scene />
      </div>

      {/* Enter Button and Icons Section */}
      <div className="flex flex-col items-center mt-4">
        <motion.button
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/portfolio')}
          className="px-8 py-3 bg-black text-white rounded-full font-bold text-lg mb-4 hover:bg-gray-800 transition-colors"
        >
          Enter Portfolio
        </motion.button>

        <div className="flex flex-wrap justify-center space-x-4 overflow-x-auto">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10 }}
          >
            <RiReactjsLine className="text-7xl" />
          </motion.div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10 }}
          >
            <TbBrandNextjs className="text-7xl" />
          </motion.div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10 }}
          >
            <SiMongodb className="text-7xl" />
          </motion.div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10 }}
          >
            <DiRedis className="text-7xl" />
          </motion.div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10 }}
          >
            <FaNodeJs className="text-7xl" />
          </motion.div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10 }}
          >
            <BiLogoPostgresql className="text-7xl" />
          </motion.div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10 }}
          >
            <FaPython className="text-7xl" />
          </motion.div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10 }}
          >
            <SiDjango className="text-7xl" />
          </motion.div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10 }}
          >
            <SiPostman className="text-7xl" />
          </motion.div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10 }}
          >
            <SiDocker className="text-7xl" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default IntroPage;
