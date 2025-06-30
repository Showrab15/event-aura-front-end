/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Pencil, ImageIcon, Calendar, Edit, Eye, RefreshCcw, MousePointerClick, Bell, Users } from "lucide-react";
import img1 from '../../assets/3972196.jpg';
import img2 from '../../assets/3156627.jpg';
import img3 from '../../assets/7457176.jpg';

const steps = [
  {
    step: "Step 1",
    title: "Create Your Event",
    description: "Easily create your event with all the details you need. Quick and simple form to get started.",
    highlights: [
      { text: "Custom Event Form", icon: <Pencil className="w-5 h-5 text-green-500" /> },
      { text: "Upload Images", icon: <ImageIcon className="w-5 h-5 text-green-500" /> },
      { text: "Set Date & Time", icon: <Calendar className="w-5 h-5 text-green-500" /> }
    ],
    image: img1
  },
  {
    step: "Step 2",
    title: "Manage & Track",
    description: "Update event details, manage attendees, and track engagement in real time from your dashboard.",
    highlights: [
      { text: "Edit Anytime", icon: <Edit className="w-5 h-5 text-green-500" /> },
      { text: "Track Attendance", icon: <Eye className="w-5 h-5 text-green-500" /> },
      { text: "Real-Time Updates", icon: <RefreshCcw className="w-5 h-5 text-green-500" /> }
    ],
    image: img2
  },
  {
    step: "Step 3",
    title: "Join & Enjoy",
    description: "Participants can join your event easily and stay connected with all updates and schedules.",
    highlights: [
      { text: "One-Click Join", icon: <MousePointerClick className="w-5 h-5 text-green-500" /> },
      { text: "Live Notifications", icon: <Bell className="w-5 h-5 text-green-500" /> },
      { text: "Community Access", icon: <Users className="w-5 h-5 text-green-500" /> }
    ],
    image: img3
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-4 text-blue-600"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          How It Works
        </motion.h2>
        <motion.p
          className="text-center text-gray-600 mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Discover the simple steps to create, manage, and join exciting events in just a few clicks.
        </motion.p>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center ${index % 2 !== 0 ? "md:flex-row-reverse" : ""} gap-12`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              {/* Image */}
              <div className="flex-1">
                <img
                  src={step.image}
                  alt={step.title}
                  className="rounded-2xl shadow-lg w-full h-[300px] md:h-[400px] object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left space-y-4">
                <motion.div
                  className="inline-block bg-blue-100 text-blue-700 font-semibold px-4 py-2 rounded-full text-sm mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {step.step}
                </motion.div>

                <h3 className="text-2xl font-semibold mb-2 text-gray-800">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>

                {/* Highlights with topic-wise icons */}
                <ul className="space-y-2 text-left">
                  {step.highlights.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      {point.icon}
                      <span>{point.text}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
