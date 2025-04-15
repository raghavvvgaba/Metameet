// Landing.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUsers, FaSyncAlt, FaUserEdit, FaMobileAlt } from "react-icons/fa";

const features = [
  {
    icon: <FaUsers size={24} />, 
    title: "Social Interaction",
    desc: "Engage in seamless conversations with avatars in shared spaces."
  },
  {
    icon: <FaSyncAlt size={24} />, 
    title: "Real-Time Collaboration",
    desc: "Experience low-latency interactions ideal for work, study, or casual hangs."
  },
  {
    icon: <FaUserEdit size={24} />, 
    title: "Avatar Customisation",
    desc: "Design your own digital identity with customizable avatars."
  },
  {
    icon: <FaMobileAlt size={24} />, 
    title: "Low-End Device Friendly",
    desc: "Optimized performance for all devices, no high specs needed."
  },
];

function GlowingParticles({ count = 90, className = "" }) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const temp = Array.from({ length: count }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      duration: 4 + Math.random() * 4,
    }));
    setParticles(temp);
  }, [count]);

  return (
    <>
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className={`absolute w-[3px] h-[3px] rounded-full bg-purple-400 shadow-[0_0_6px_var(--tw-shadow-color)] shadow-purple-400 opacity-70 ${className}`}
          style={{ top: p.top, left: p.left }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ y: -20, opacity: [0, 0.8, 0] }}
          transition={{ repeat: Infinity, duration: p.duration, delay: p.delay, ease: 'easeInOut' }}
        />
      ))}
    </>
  );
}

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden w-full">
      <GlowingParticles count={100} />

      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-between items-center px-6 py-4 border-b border-gray-700 bg-gradient-to-r from-gray-800 to-black backdrop-blur-md w-full"
      >
        <h1 className="text-2xl font-bold text-purple-400">MetaMeet</h1>
        <div className="space-x-4">
          <button onClick={() => navigate("/signin")} className="px-4 py-1 rounded bg-purple-500 hover:bg-purple-600 transition">Login</button>
          <button onClick={() => navigate("/signup")} className="px-4 py-1 rounded bg-white text-black hover:bg-gray-200 transition">Sign Up</button>
        </div>
      </motion.nav>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center px-4 py-24 w-full"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Step Into The 2D Metaverse
        </h2>
        <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto">
          MetaMeet is a browser-based platform for interactive virtual rooms where avatars connect, collaborate, and communicate.
        </p>
        <button
          onClick={() => navigate("/room")}
          className="px-6 py-3 bg-purple-600 rounded-full font-semibold hover:bg-purple-700 transition"
        >
          🚪 Enter Room
        </button>
      </motion.div>

      {/* Features Section */}
      <section className="py-16 px-6 md:px-12 w-full">
        <h3 className="text-3xl font-bold text-center mb-12">✨ Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white/5 border border-gray-700 rounded-xl p-6 flex items-start gap-4 backdrop-blur-md hover:scale-105 hover:shadow-2xl transition-transform duration-300 cursor-pointer hover:bg-white/10"
            >
              <div className="text-purple-400 mt-1">{feature.icon}</div>
              <div>
                <h4 className="text-xl font-semibold mb-1">{feature.title}</h4>
                <p className="text-sm text-gray-300">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-700 py-6 px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 bg-black/40 backdrop-blur w-full">
        <div className="flex items-center space-x-2 mb-2 md:mb-0">
          <span>Made with</span>
          <span className="text-red-500">❤️</span>
          <span>by</span>
          <a href="#" className="text-blue-400"> Team MetaMeet 💻</a>
        </div>
        <span>© 2025 metameet. All rights reserved.</span>
      </footer>
    </div>
  );
};

export default Landing;
