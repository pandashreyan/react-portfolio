import { motion } from "framer-motion";
import logo from "../assets/KEVINLOGO.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const socialLinks = {
  linkedin: "https://www.linkedin.com/in/shreyan-panda-a4a6aa254/",
  github: "https://github.com/pandashreyan",
  instagram: "#", 
  twitter: "#"
};


const Navbar = () => {
  const iconVariants = {
    hover: { scale: 1.2, rotate: 5, transition: { duration: 0.2 } }
  };

  // Create array of icon components with their corresponding links
  const socialIcons = [
    { Icon: FaLinkedin, link: socialLinks.linkedin },
    { Icon: FaGithub, link: socialLinks.github },
    { Icon: FaInstagram, link: socialLinks.instagram },
    { Icon: FaSquareXTwitter, link: socialLinks.twitter }
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
      className="mb-20 flex items-center justify-between py-6"
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
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
