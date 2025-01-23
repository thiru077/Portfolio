import project1 from "../assets/projects/project-1.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT ='Motivated and detail-oriented student with a strong passion for learning and applying new technologies. Eager to contribute to meaningful projects while gaining hands-on experience. Committed to putting in focused effort to solve problems, learn new skills, and collaborate effectively within a team. Excited to take on challenges and grow as a developer by actively contributing to innovative and impactful work.'
export const ABOUT_TEXT = 'I’m Thirumalaivasan P, a passionate developer from Krishnagiri, Tamil Nadu, with a strong foundation in programming languages like Java, Python, and C. I thrive on building dynamic, responsive applications that solve real-world problems. Currently pursuing my B.Tech in Artificial Intelligence And Data Science at Sri Eshwar College of Engineering, I have hands-on experience through internships and personal projects, including a weather forecast system, image steganography, and face recognition attendance. My continuous goal is to leverage my technical skills while constantly learning new technologies. I am excited about contributing to impactful projects and collaborating within innovative teams.'
export const EXPERIENCES = [
  {
    year: "July 2024",
    role: "Full Stack Developer Intern",
    company: "RV TechLearn",
    description: `Mastered full-stack web development through an intensive MERN stack internship, showcasing proficiency in
 MongoDB, Express.js, React.js, and Node.js. Developed expertise in database management, server-side scripting,
 and front-end design for dynamic web application creation`,
    technologies: ["Javascript", "React.js", "mongoDB"],
  },
  {
    year: "September 2024",
    role: "AI and Robotics Intern",
    company: "AI and Robotics Company",
    description: `I gained hands-on experience in AI and Robotics, working on optimizing AI models for real-time robotic systems, including computer vision, machine learning, and sensor integration. I contributed to algorithm design for robotic navigation and object detection. This internship enhanced my problem-solving skills and deepened my interest in AI applications in robotics.`,
    technologies: ["Computer Vision", "Machine Learning","Sensor Fusion"],
  }
];

export const PROJECTS = [
  {
    title: "Weather Forecast Application",
    image: project1,
    description:
      "Developed a weather forecasting system using JavaFX and Scene Builder, employing advanced models to predict weather, assess storm impacts, and analyze climate trends.",
    technologies: ["JavaFX", "Scene Builder"],
  },
  
  {
    title: "Image Steganography System",
    image: project3,
    description:
      "Built an image steganography tool using Python and the Stegano library for secure data encoding and decoding within images, ensuring robust performance.",
    technologies: ["Python", "Stegano"],
  },
  {
    title: "Face Recognition Attendance System",
    image: project4,
    description:
      "Designed a face recognition-based attendance system with Python and OpenCV for accurate real-time tracking in classrooms and corporate settings.",
    technologies: ["Python", "OpenCV", "Face Recognition Library"],
  },
];

export const CONTACT = {
  phoneNo: "+91 9025415911 ",
  email: "thirumalaivasan.p2022ai-ds@sece.ac.in",
};
