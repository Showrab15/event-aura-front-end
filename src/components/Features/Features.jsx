/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { FaRegCalendarPlus, FaSearch, FaUsers } from "react-icons/fa";

const features = [
  {
    title: "Easy Event Creation",
    description: "Create events instantly with our user-friendly form. Get started in seconds.",
    icon: <FaRegCalendarPlus className="text-4xl text-white z-10" />,
    bg: "from-purple-500 to-purple-700",
  },
  {
    title: "Join & Track Events",
    description: "Easily join, track, and manage all your event activities in one place.",
    icon: <FaUsers className="text-4xl text-white z-10" />,
    bg: "from-blue-500 to-blue-700",
  },
  {
    title: "Smart Search & Filters",
    description: "Quickly find the events you care about with powerful filters and sorting.",
    icon: <FaSearch className="text-4xl text-white z-10" />,
    bg: "from-pink-500 to-pink-700",
  },
];

const Features = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 px-6 sm:px-12 lg:px-24 overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 bg-clip-text text-transparent mb-6"
        >
          Explore Our Core Features
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto mb-14 text-base sm:text-lg"
        >
          Powerful tools to make your event journey easier — from planning to participation.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative w-16 h-16 mx-auto mb-6">
                <div
                  className={`absolute inset-0 rounded-full bg-gradient-to-tr ${feature.bg} blur-md opacity-70`}
                />
                <div className="relative w-full h-full flex items-center justify-center rounded-full bg-black/70 backdrop-blur-md">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
