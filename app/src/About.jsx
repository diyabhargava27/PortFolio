import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

const educationData = [
  {
    year: "2025",
    title: "B.Tech CSE",
    institution: "SATI College, Vidisha",
    description: "Pursuing my Bachelor's degree in Computer Science with a focus on Backend Development.",
  },
  {
    year: "2022",
    title: "Diploma in CSE",
    institution: "Government Polytechnic College, Shivpuri",
    description: "Completed diploma with a CGPA of 8.58, specializing in Computer Science and Engineering.",
  },
  {
    year: "2019",
    title: "10th Grade",
    institution: "St. Benedict's School, Shivpuri",
    description: "Completed High school ",
  },
];

const About = () => {
  return (
    <motion.section 
      id="about" 
      className="py-12 bg-[#000013] text-white"
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1, transition: { duration: 1 } }} 
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto px-6">
        
        {/* About Section with Animation */}
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-10"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
        >
          About Me
        </motion.h2>

        <motion.p 
          className="text-gray-400 text-lg text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
        >
          Hi, I'm <span className="text-cyan-400 font-bold">Diya Bhargava</span>. A passionate full-stack developer 
          specializing in **Backend development**.
        </motion.p>

        {/* Education Section with Scroll Animation */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-cyan-400 mb-6">
            Education
          </h3>

          <div className="relative border-l-4 border-cyan-500 pl-6">
            {educationData.map((edu, index) => (
              <motion.div 
                key={index} 
                className="mb-10 relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8, delay: index * 0.2 } }}
              >
                <div className="absolute -left-900 top-0 bg-cyan-500 p-2 rounded-full shadow-md">
                  <FaGraduationCap className="text-white text-xl" />
                </div>
                <span className="text-cyan-400 text-sm font-semibold">{edu.year}</span>
                <h3 className="text-xl font-bold">{edu.title}</h3>
                <p className="text-gray-400">{edu.institution}</p>
                <p className="text-gray-500 text-sm mt-2">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
