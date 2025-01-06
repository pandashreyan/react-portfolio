import { motion } from "framer-motion";
import logo from "../assets/KEVINLOGO.jpg";
import { FaLinkedin, FaGithub, FaTwitter, FaCode } from "react-icons/fa";

const socialLinks = {
  linkedin: "https://www.linkedin.com/in/shreyan-panda-a4a6aa254/",
  github: "https://github.com/pandashreyan",
  leetcode: "https://leetcode.com/u/shreyan1302/",
  twitter: "https://twitter.com/"
};


const Navbar = () => {
  const iconVariants = {
    hover: { 
      scale: 1.2, 
      rotateY: 180,  // 3D flip effect
      transition: { 
        duration: 0.4,
        type: "spring",
        stiffness: 200
      } 
    }
  };

  // Create array of icon components with their corresponding links
  const socialIcons = [
    { Icon: FaLinkedin, link: socialLinks.linkedin },
    { Icon: FaGithub, link: socialLinks.github },
    { Icon: FaCode, link: socialLinks.leetcode },
    { Icon: FaTwitter, link: socialLinks.twitter }
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0, rotateX: -45 }}  // Added 3D rotation
      animate={{ y: 0, opacity: 1, rotateX: 0 }}
      transition={{ 
        duration: 0.8, 
        type: "spring", 
        bounce: 0.4,
        stiffness: 100
      }}
      className="mb-20 flex items-center justify-between py-6"
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        whileHover={{ 
          rotateY: 360,
          transition: {
            duration: 0.8,
            type: "spring",
            stiffness: 150
          }
        }}
        transition={{ 
          delay: 0.3,
          duration: 0.8,
          type: "spring",
          stiffness: 150
        }}
        className="flex flex-shrink-0 items-center"
      >
        <img 
          src={logo} 
          alt="Logo" 
          className="h-16 w-16 lg:h-20 lg:w-20 rounded-full"
        />
      </motion.div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        {socialIcons.map(({ Icon, link }, index) => (
          <motion.a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            whileHover="hover"
            whileTap={{ scale: 0.9 }}
          >
            <Icon />
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
