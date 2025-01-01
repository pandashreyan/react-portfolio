import { motion } from "framer-motion";
import { ABOUT_TEXT } from "../constants";
import aboutImg from "../assets/ABOU.jpg";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="border-b border-neutral-800 pb-24"
    >
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        About Me
      </motion.h1>
      <div className="flex flex-wrap items-center gap-8">
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="w-full lg:w-[45%]"
        >
          <img 
            src={aboutImg} 
            alt="About Me" 
            className="w-full rounded-2xl object-cover shadow-lg"
          />
        </motion.div>
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="w-full lg:w-[45%]"
        >
          <p className="text-lg text-neutral-400">
            {ABOUT_TEXT}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
