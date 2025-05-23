import React, { useState } from "react";
import { FiX, FiMenu } from "react-icons/fi";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaReact, FaNodeJs, FaDatabase, FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <div className="relative w-full min-h-screen bg-[#000013] text-white flex flex-col items-center justify-center">
      
     
      <nav id="home" className="fixed top-0 w-full flex justify-between items-center px-10 py-5 bg-[#000013] z-50 shadow-md">
        <h1 className="text-xl font-bold">Diya Bhargava</h1>

        
        <div className="hidden md:flex space-x-6">
          {["Home", "About", "Projects", "Achievements"].map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className={`relative px-4 py-2 text-lg transition-all duration-300 cursor-pointer ${
                active === item ? "text-cyan-400" : "text-gray-400 hover:text-white"
              }`}
              onClick={() => setActive(item)}
            >
              {item}
              <span
                className={`absolute left-0 bottom-0 h-[3px] bg-cyan-400 rounded-full transition-all duration-500 shadow-[0_0_10px_cyan] ${
                  active === item ? "w-full" : "w-0"
                }`}
              ></span>
            </Link>
          ))}
        </div>

        <button className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
          
        </button>
      </nav>

      
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full flex justify-center items-center bg-black/90 p-6 z-50">
          <nav className="backdrop-blur-lg bg-white/10 p-4 rounded-lg flex flex-col space-y-4 shadow-lg border border-white/10">
            {["Home", "About", "Projects", "Achievements"].map((item) => (
              <button
                key={item}
                className={`relative px-4 py-2 text-lg transition-all duration-300 ${
                  active === item ? "text-cyan-400" : "text-gray-400 hover:text-white"
                }`}
                onClick={() => {
                  setActive(item);
                  setMenuOpen(false);
                }}
              >
                {item}
                <span
                  className={`absolute left-0 bottom-0 h-[3px] bg-cyan-400 rounded-full transition-all duration-500 shadow-[0_0_10px_cyan] ${
                    active === item ? "w-full" : "w-0"
                  }`}
                ></span>
              </button>
            ))}
          </nav>
        </div>
      )}

   
      <div className="text-center mt-20">
        <h1 className="text-3xl md:text-5xl font-bold mt-6 font-serif flex items-center gap-2">
          Hi, I'm Diya Bhargava <span className="animate-wave">👋</span>
        </h1>
        <p className="text-gray-400 mt-4 max-w-lg mx-auto">MERN Stack Developer || B.Tech (CSE) || Diploma Holder || Tech Explorer</p>

       
        <button
          className="mt-6 px-6 py-2 bg-cyan-500 text-black rounded-full font-bold"
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/diya_bhargava.pdf"; 
            link.download = "diya_bhargava.pdf"; 
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
        >
          Download Resume
        </button>
      </div>

    
      <div className="w-full overflow-hidden mt-10">
  <div className="flex space-x-16 animate-marquee">
    {[FaReact, FaNodeJs, FaDatabase, FaJs, FaHtml5, FaCss3Alt].map((Icon, index) => (
      <Icon key={index} className="text-9xl text-cyan-400" />
    ))}
    {[FaReact, FaNodeJs, FaDatabase, FaJs, FaHtml5, FaCss3Alt].map((Icon, index) => (
      <Icon key={index + 6} className="text-9xl text-cyan-400" />
    ))}
  </div>
</div>
     
      <style>
        {`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            white-space: nowrap;
            animation: marquee 10s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
