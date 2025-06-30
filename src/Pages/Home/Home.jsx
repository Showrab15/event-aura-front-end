// import React from "react";
// import hero from "../../assets/heroimage.jpg";
// import { motion } from "framer-motion";

// const Home = () => {
//   return (
//     <div className="relative w-full h-[90vh] overflow-hidden">
//       {/* Background Image */}
//       <img
//         src={hero}
//         alt="Event Hero"
//         className="absolute top-0 left-0 w-full h-full object-cover brightness-75"
//       />

//       {/* Animated gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-[#6C63FF]/60 via-transparent to-[#4A44C6]/70 animate-pulse" />

//       {/* Glassmorphic Content */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="relative z-10 flex flex-col items-center md:items-start justify-center h-full px-6 md:px-20 text-white"
//       >
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.3, duration: 1 }}
//           className="bg-white/10 backdrop-blur-md rounded-xl p-8 md:p-12 max-w-2xl shadow-xl"
//         ><h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-white drop-shadow-lg">
//   Host, Connect, Celebrate: <br />
//   <span className="text-[#D1D5DB]">Your Events, Our Platform</span>
// </h1>

//           <p className="text-base md:text-lg mb-6 text-white/90">
//             Discover & manage events with ease. Join 3,000+ active users making their events memorable.
//           </p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-[#6C63FF] hover:bg-[#4A44C6] text-white py-3 px-6 rounded-lg font-semibold shadow-md transition duration-300"
//           >
//             Get Started
//           </motion.button>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default Home;
import React from "react";
import Header from "../../components/Header/Header";
import Features from "../../components/Features/Features";
import Upcoming from './../../components/Upcoming/Upcoming';
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import Testimonials from "../../components/Testimonials/Testimonials";
import CallToAction from './../../components/CallToAction/CallToAction';

const Home = () => {
  return (
   <>
   <Header/>
   <Features/>
   <Upcoming/>
   <HowItWorks/>
   <Testimonials/>
   <CallToAction/>
   </>
  );
};

export default Home;
