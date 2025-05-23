import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Movie Dekho",
    image: "c.jpg",
    description: "A seamless movie ticket booking platform using PHP, MySQL & Tailwind CSS.",
    demoLink : "https://github.com/vaishnavee1424/MOVIE-DEKHO"
  },
  {
    title: "Device Tracking",
    image: "dd.jpg",
    description: "This project is a real-time location tracking application using Node.js, Express.js, Socket.io, and EJS as the templating engine. The application allows users to share their live locations in real-time.",
    demoLink:"https://github.com/diyabhargava27/Tracking_Project"
  },
  {
    title: "Chess Game",
    image: "cc.jpg",
    description: "This is a Chess Game built using Node.js, Express, Socket.io, and EJS. The project allows players to engage in real-time multiplayer chess over the web.",
    demoLink: "https://chess-ij9y.onrender.com"
  },
  {
    title: "Budgit Fit",
    image: "coin.jpg",
    description: "Budgit Fit is a personal finance tracking app built using the MERN stack. It helps users manage expenses, set budgets, and analyze spending habits for smarter financial decisions.(View in Desktop-site)",
    demoLink: "https://budget-fit-1-frontend.onrender.com"
  },
  {
    title: "Library Management",
    image: "l.jpg",
    description: "Library Management System using Django is a web-based application that allows librarians to manage books, members, issues, and returns efficiently. It provides features like book inventory tracking, user registration, book search, issuing/returning books, and overdue fine calculation. Built with Django, it uses a powerful admin panel for backend operations and ensures smooth user interaction through dynamic web pages.",
    demoLink: "https://github.com/diyabhargava27/django-project"
  }
];

const Projects = () => {
  return (
    <motion.section 
      id="projects" 
      className="py-16 bg-[#000013] text-white text-center px-6 md:px-12"
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1, transition: { duration: 1 } }} 
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-cyan-400">
        My Projects
      </h2>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl  mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.3 } }
        }}
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="bg-[#000013] p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_cyan]"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
            }}
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-gray-400 text-sm">{project.description}</p>
            <br />
            <a 
  href={project.demoLink} 
  target="_blank" 
  rel="noopener noreferrer" 
  className="mt-4 px-4 py-2 bg-cyan-800 text-black rounded-full font-bold transition-all duration-300 hover:bg-cyan-400 hover:shadow-lg"
>
  View Demo
</a>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
