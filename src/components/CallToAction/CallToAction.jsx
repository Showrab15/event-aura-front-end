/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import join from "../../assets/pexels-fauxels-3184306.jpg";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-indigo-700 via-purple-600 to-pink-500 overflow-hidden">
      <div className="container mx-auto px-6 flex justify-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-10 md:p-16 shadow-2xl max-w-4xl w-full text-white text-center"
        >
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-xl border-4 border-white/30">
            <img src={join} alt="Collaboration" className="w-full h-full object-cover" />
          </div>

          <h2 className="text-2xl md:text-4xl font-extrabold mt-20 mb-6 leading-tight">
            Let’s Build Something <br /> Unforgettable Together
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Collaborate. Create. Celebrate. Whether you're planning an event or joining one,
            take the first step toward something truly memorable.
          </p>
<Link to="add-events">  <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
           
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-indigo-700 font-bold shadow-lg hover:bg-gray-100 transition"
          >
            Create Your Event
            <ArrowRight className="ml-2 w-5 h-5" />
          </motion.a></Link>
         
        </motion.div>
      </div>

      {/* Background glow blur blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
    </section>
  );
};

export default CallToAction;
