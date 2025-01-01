import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am Shreyan my journey in computer science began with a deep curiosity for problem-solving, which has evolved into a mission to leverage my skills in innovative projects that push the boundaries of what's possible.
I thrive in challenging environments and enjoy tackling complex problems to deliver effective solutions. In addition to my academic pursuits, I actively seek opportunities to explore new technologies and contribute to collaborative projects. I invite you to explore my work and join me on this exciting journey through the world of technology!`;

export const ABOUT_TEXT = `I am a dedicated and versatile computer science student with a passion for competitive programming and a strong focus on data structures and algorithms. Currently in my third year, I have developed proficiency in several programming languages, including C, C++, Java, HTML, CSS, and Python. As an AI and machine learning enthusiast, I am committed to staying at the forefront of these transformative technologies. My journey in computer science started with a deep curiosity for problem-solving, which has evolved into a mission to leverage my skills in projects that push the boundaries of what's possible. I thrive in challenging environments and enjoy tackling complex problems to deliver innovative solutions. Outside of my academic pursuits, I am eager to explore new technologies and contribute to collaborative projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2021 - 2022",
    role: "Frontend Developer",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "React.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Nagrik aur Sambhidhan App",
    image: project2,
    description: "Contributed to developing an application that transforms interactions with the Constitution, making it engaging and accessible. Helped build features that gamify constitutional learning and improve user engagement.",
    technologies: ["React Native CLI", "Bootstrap", "Flask", "MySQL", "Java", "Apache OpenNLP"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Bhubaneswar, Odisha, India",
  phoneNo: "+919827478424 ",
  email: "pandashreyan7@gmail.com",
};
export default CONTACT;