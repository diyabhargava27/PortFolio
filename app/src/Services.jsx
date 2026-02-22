import { motion } from "framer-motion";
import { FaTrophy, FaCode, FaDatabase } from "react-icons/fa";

const Achievements = () => {
  const achievements = [
    {
      title: "Stack Hack 2.0",
      description:
        "Secured 27th position out of 12,000 participants for building Movie Dekho platform.",
      icon: <FaTrophy size={35} className="text-yellow-400" />,
    },
    {
      title: "Build-Verse Hackathon",
      description:
        "Ranked Top 100 among 400+ participating teams.",
      icon: <FaCode size={35} className="text-cyan-400" />,
    },
    {
      title: "SQL (Intermediate) Certification",
      description:
        "Earned SQL certification from HackerRank demonstrating strong database skills.",
      icon: <FaDatabase size={35} className="text-green-400" />,
    },
  ];

  return (
    <div id="achievements" className="py-20 bg-[#000013] text-white text-center relative">
      
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-cyan-400">
        Achievements
      </h2>

      <div className="flex flex-col items-center space-y-12 relative">

        {achievements.map((achieve, index) => (
          <motion.div
            key={index}
            className="w-full md:w-2/3 lg:w-1/2 p-6 bg-white/5 backdrop-blur-lg rounded-xl shadow-lg flex items-center gap-6 border border-white/10"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px rgba(0,255,255,0.6)",
            }}
          >
            <div>{achieve.icon}</div>

            <div className="text-left">
              <h3 className="text-xl font-bold">{achieve.title}</h3>
              <p className="text-gray-400 mt-2">{achieve.description}</p>
            </div>
          </motion.div>
        ))}

        {/* Vertical Line */}
        <div className="absolute top-0 left-1/2 w-[2px] h-full bg-gradient-to-b from-cyan-400 to-transparent -translate-x-1/2"></div>
      </div>
    </div>
  );
};

export default Achievements;
