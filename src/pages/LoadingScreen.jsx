import React from "react";
import { motion } from "framer-motion";

const RocketAnimation = () => {
  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-black to-blue-900 flex items-center justify-center overflow-hidden">
      {/* Stars Background */}
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
        />
      ))}

      {/* Moving Rocket */}
      <motion.div
        className="relative w-20 h-48 bg-gray-300 rounded-t-lg flex flex-col items-center justify-end shadow-lg"
        animate={{ y: [-100, -300, -500, -700], opacity: [1, 1, 0.8, 0] }}
        transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
      >
        <div className="absolute top-0 w-12 h-12 bg-red-500 rounded-t-full"></div>
        <div className="absolute -left-5 bottom-5 w-8 h-8 bg-red-500 rotate-45"></div>
        <div className="absolute -right-5 bottom-5 w-8 h-8 bg-red-500 -rotate-45"></div>
        <div className="absolute bottom-0 w-10 h-20 bg-orange-500 blur-lg"></div>
      </motion.div>

      {/* Alien Messages */}
      <motion.div
        className="absolute top-20 left-10 p-4 bg-green-600 text-white rounded-lg shadow-lg text-lg font-semibold max-w-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        👽 "Hey humans! Still searching for life? We’ve been here partying for eons!"
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-10 p-4 bg-purple-700 text-white rounded-lg shadow-lg text-lg font-semibold max-w-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
      >
        🚀 "Wait, what?! You guys exist? Are you on Google Maps?"
      </motion.div>

      <motion.div
        className="absolute bottom-32 right-10 p-4 bg-green-500 text-black rounded-lg shadow-lg text-lg font-semibold max-w-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 5 }}
      >
        👾 "Haha, nah! But our delivery service is faster than yours. Wanna order a space pizza?"
      </motion.div>

      <motion.div
        className="absolute bottom-24 left-10 p-4 bg-blue-500 text-white rounded-lg shadow-lg text-lg font-semibold max-w-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 7 }}
      >
        🚀 "Wait… Do you guys have Wi-Fi? Asking for a friend."
      </motion.div>

      <motion.div
        className="absolute bottom-16 right-10 p-4 bg-yellow-500 text-black rounded-lg shadow-lg text-lg font-semibold max-w-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 9 }}
      >
        👽 "Of course! But it's quantum-speed. You might accidentally download the future."
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-10 p-4 bg-red-600 text-white rounded-lg shadow-lg text-lg font-semibold max-w-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 11 }}
      >
        🚀 "Awesome! Now I just need to figure out how to explain this to NASA…"
      </motion.div>

      {/* Launch Text */}
      <motion.h1
        className="absolute bottom-5 w-full text-center text-white text-3xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 13 }}
      >
        Rocket Launching... 🚀 (Still waiting for email verification... Maybe by the time we reach Mars?)
      </motion.h1>
    </div>
  );
};

export default RocketAnimation;
