import { motion } from "framer-motion";
import { FaTrophy, FaCode, FaBolt } from "react-icons/fa";

const Achievements = () => {
  const achievements = [
    {
      title: "🏆 Stack Hack 2.0",
      description: "Secured 27th position out of 12,000 participants.",
      icon: <FaTrophy size={40} className="text-yellow-400" />,
    }
  ];

  return (
    <div id="achievements" className="py-16 bg-[#000013] text-white text-center relative">
      <div id="achievements">
      <h2 className="text-5xl font-bold mb-10">🏅 Achievements</h2>

      <div className="flex flex-col items-center space-y-12 relative">
        {achievements.map((achieve, index) => (
          <motion.div
            key={index}
            className="w-full md:w-2/3 lg:w-1/2 p-6 bg-[#000013] rounded-xl shadow-lg flex items-center gap-6 border border-gray-700 relative"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            whileHover={{
              scale: 1.05,
              rotate: 3,
              boxShadow: "0px 4px 20px rgba(0,255,255,0.5)",
            }}
          >
            <div className="text-4xl">{achieve.icon}</div>
            <div className="text-left">
              <h3 className="text-xl font-bold">{achieve.title}</h3>
              <p className="text-gray-400">{achieve.description}</p>
            </div>
          </motion.div>
        ))}

     
        <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-transparent z-[-1]"></div>
      </div>
      </div>
    </div>
  );
};

export default Achievements;
