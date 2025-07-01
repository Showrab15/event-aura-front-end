/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import banner from "../../assets/heroimage.jpg"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="relative w-full md:h-[87vh] h-[70vh] overflow-hidden">
      {/* Background Image */}
      <img
        src={banner}
        alt="Event Celebration"
        className="absolute top-0 left-0 w-full h-full object-cover brightness-75"
      />

      {/* Moving Gradient Overlay */}
      <motion.div
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-[length:400%_400%] opacity-40 mix-blend-overlay"
      />

      {/* Glassmorphic Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center md:items-start justify-center h-full px-6 md:px-20 text-white"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 md:p-8 max-w-xl shadow-2xl"
        >
          <h1 className="text-2xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 text-white drop-shadow-lg">
            Host, Connect, Celebrate: <br />
            <span className="text-gray-300">Your Events, Our Platform</span>
          </h1>

          <p className="text-base md:text-lg mb-6 text-white/90">
            Discover & manage events with ease. Join 3,000+ active users making their events unforgettable.
          </p>

         
<Link to="/add-events">
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="cursor-pointer bg-gradient-to-r from-purple-600 to-blue-600 hover:from-pink-500 hover:to-purple-500 text-white py-3 px-6 rounded-lg font-semibold shadow-lg transition-all duration-300"
  >
   Get Started
  </motion.button>
</Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Header;
