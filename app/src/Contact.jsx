import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    
    <div id="contact" className="min-h-screen flex flex-col items-center justify-center bg-[#000013] text-white py-10 px-5">

      <h2 className="text-4xl font-bold mb-8 text-cyan-400">
        Get in Touch
      </h2>
     
      <div className="w-full max-w-lg bg-[#0a0a1a] p-8 rounded-lg shadow-lg text-center border border-cyan-500/50">
        <p className="text-gray-300 mb-6">Feel free to reach out!</p>

        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 bg-[#0a0a1a] border border-cyan-400 rounded-md outline-none text-white focus:ring-2 focus:ring-cyan-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 bg-[#0a0a1a] border border-cyan-400 rounded-md outline-none text-white focus:ring-2 focus:ring-cyan-500"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 bg-[#0a0a1a] border border-cyan-400 rounded-md outline-none text-white focus:ring-2 focus:ring-cyan-500"
          ></textarea>
          <button className="w-full bg-cyan-500 text-black py-3 rounded-md font-bold hover:bg-cyan-600 transition">
            Send Message
          </button>
        </form>

        <div className="flex justify-center space-x-6 mt-6">
          <a href="mailto:diyabhargava27@gmail.com" className="text-cyan-400 text-3xl hover:text-cyan-500 transition">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/diya-bhargava-27b172247/" target="_blank" className="text-cyan-400 text-3xl hover:text-cyan-500 transition">
            <FaLinkedin />
          </a>
          <a href="https://github.com/diyabhargava27" target="_blank" className="text-cyan-400 text-3xl hover:text-cyan-500 transition">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
