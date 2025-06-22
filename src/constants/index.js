import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a interest for crafting robust and scalable web applications. With hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a Student at Sri Shakthi Institute of Engineering & Technology, Information Technology  that is passionate about developing scalable and effective software solutions. I have practical expertise with Web development and have a strong foundation in Java and Full Stack Development. I've developed my problem-solving and teamwork skills through my contributions to open-source projects, which demonstrate my commitment to software development.

I have a proven ability to work effectively in team environments, which has been key to the success of various projects I have been part of, including "Audit Governance Platform","console-based Electricity Bill Management System in Java using Eclipse with PostgreSQL","Portfolio in React". Each of these projects demonstrates my commitment to improving the user experience through innovative technology.

Together with my great technical talents, I also have strong teamwork, time management, leadership, effective communication, and critical thinking abilities. My proficiency in Tamil and English contributes to my adaptability in a variety of different settings.`;

export const PROJECTS = [
  {
    title: "Electricity Bill Management System",
    image: project1,
    description:
      "Developed a console-based Electricity Bill Management System in Javausing Eclipse with PostgreSQL, enabling users to perform CRUD operations efficiently.",
       technologies: ["Java", "PostgreSQL"],
  },
  {
    title: "Audit Governance Platform",
    image: project2,
    description:
      "Developed a web-based platform to streamline auditing processes and improve maintanence of auditor office and employees.",
    technologies: ["REACT", "EXPRESS", "NODE.JS", "MONGODB"],
  },
  {
    title: "SafeRide - Machine Learning-Based Helmet Detection",
    image: project3,
    description:
      "Developed SafeRide, an automated helmet detection system using YOLOv5 and Flask for real-time road safety compliance.",
    technologies: ["Python", "LabelImg", "YOLOv5","Google Colab"],
  }, 
  {
    title: "BMI Calculator",
    image: project4,
    description:
      "Developed a web-based application to calculate Body Mass Index(BMI) and assist users in monitoring their health metrics.",
    technologies: ["React"],
  },
  {
    title: "Portfolio Website",
    image: project5,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["REACT", "TAILWIND CSS", "FRAMER MOTION"],
  },
];

export const CONTACT = {
  phoneNo: "9345309374",
  email: "rsmadhiarasi@gmail.com",
};
