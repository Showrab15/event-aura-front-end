// /* eslint-disable no-unused-vars */
// import { motion } from "framer-motion";

// const upcomingEvents = [
//   {
//     id: 1,
//     title: "Tech Expo 2025",
//     date: "2025-07-10",
//     time: "10:00 AM",
//     location: "Dhaka Convention Center",
//     description: "Explore the latest innovations in tech.",
//     featured: true,
//   },
//   {
//     id: 2,
//     title: "Startup Meetup",
//     date: "2025-07-15",
//     time: "4:00 PM",
//     location: "Banani Co-working Space",
//     description: "Network with startup founders and investors.",
//     featured: false,
//   },
//   {
//     id: 3,
//     title: "AI & Future",
//     date: "2025-07-20",
//     time: "2:00 PM",
//     location: "BRAC University Auditorium",
//     description: "Panel discussion on AI trends and ethics.",
//     featured: false,
//   },
// ];

// const Upcoming = () => {
//   return (
//     <section className="bg-white py-20 px-4 sm:px-8 lg:px-20">
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5 }}
//         className="text-center mb-12"
//       >
//         <h2 
//   className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600
//    via-indigo-500 to-purple-500 bg-clip-text text-transparent mb-8"
//         >
//           Don't Miss What's Coming
//         </h2>
//       <p className="text-gray-700 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
//   Be a part of the most exciting events around you. <br className="md:block hidden"/>
//   <span className="text-indigo-600 font-semibold">Join</span>, <span className="text-purple-600 font-semibold">connect</span>, and <span className="text-pink-600 font-semibold whitespace-nowrap">grow</span>.
// </p>


//       </motion.div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {upcomingEvents.map((event, index) =>
//           event.featured ? (
//             <motion.div
//               key={event.id}
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//               className="lg:col-span-2 bg-indigo-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300"
//             >
//               <h3 className="text-2xl font-bold text-indigo-700 mb-2">
//                 🌟 Featured: {event.title}
//               </h3>
//               <p className="text-gray-700 mb-2">
//                 <strong>📍 Location:</strong> {event.location}
//               </p>
//               <p className="text-gray-700 mb-2">
//                 <strong>🗓️ Time:</strong> {event.date} at {event.time}
//               </p>
//               <p className="text-gray-600 mt-4">{event.description}</p>
//               <button className="mt-6 px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg">
//                 Join Now
//               </button>
//             </motion.div>
//           ) : (
//             <motion.div
//               key={event.id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.2, duration: 0.5 }}
//               className="bg-white border border-gray-200 p-6 rounded-2xl shadow hover:shadow-md transition-all duration-300"
//             >
//               <h4 className="text-lg font-semibold text-gray-800">
//                 {event.title}
//               </h4>
//               <p className="text-sm text-gray-600 mt-1">{event.location}</p>
//               <p className="text-sm text-gray-600">{event.date} at {event.time}</p>
//               <p className="text-gray-600 mt-3 text-sm">{event.description}</p>
//               <button className="mt-4 text-indigo-600 hover:underline text-sm">
//                 View Details →
//               </button>
//             </motion.div>
//           )
//         )}
//       </div>
//     </section>
//   );
// };

// export default Upcoming;


// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// const Upcoming = () => {
//   const [events, setEvents] = useState([]);

  
//   useEffect(() => {
//     const fetchUpcoming = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/featured-upcoming-events", {
//           credentials: "include",
//         });
//         const data = await res.json();

//         if (Array.isArray(data) && data.length > 0) {
//           const [featured, ...rest] = data;
//           setEvents([
//             { ...featured, featured: true },
//             ...rest.map((e) => ({ ...e, featured: false })),
//           ]);
//         }
//       } catch (error) {
//         console.error("Failed to fetch upcoming events", error);
//       }
//     };

//     fetchUpcoming();
//   }, []);

//   return (
//     <section className="bg-white py-20 px-4 sm:px-8 lg:px-20">
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5 }}
//         className="text-center mb-12"
//       >
//         <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent mb-8">
//           Don't Miss What's Coming
//         </h2>
//         <p className="text-gray-700 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
//           Be a part of the most exciting events around you. <br className="md:block hidden" />
//           <span className="text-indigo-600 font-semibold">Join</span>,{" "}
//           <span className="text-purple-600 font-semibold">connect</span>, and{" "}
//           <span className="text-pink-600 font-semibold whitespace-nowrap">grow</span>.
//         </p>
//       </motion.div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {events.map((event, index) =>
//           event.featured ? (
//             <motion.div
//               key={event._id}
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//               className="lg:col-span-2 bg-indigo-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300"
//             >
//               <h3 className="text-2xl font-bold text-indigo-700 mb-2">
//                 🌟 Featured: {event.title}
//               </h3>
//               <p className="text-gray-700 mb-2">
//                 <strong>📍 Location:</strong> {event.location}
//               </p>
//               <p className="text-gray-700 mb-2">
//                 <strong>🗓️ Time:</strong>{" "}
//                 {new Date(event.dateTime).toLocaleDateString()} at{" "}
//                 {new Date(event.dateTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
//               </p>
//               <p className="text-gray-600 mt-4">{event.description}</p>
//               <button className="mt-6 px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg">
//                 Join Now
//               </button>
//             </motion.div>
//           ) : (
//          <motion.div
//   key={event._id}
//   initial={{ opacity: 0, y: 30 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   viewport={{ once: true }}
//   transition={{ delay: index * 0.2, duration: 0.5 }}
//   className="relative bg-gradient-to-br from-white via-blue-50 to-purple-50 border border-indigo-100 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
// >
//   <div className="absolute top-4 right-4">
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       className="h-6 w-6 text-indigo-400 opacity-20"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//     >
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 4h10M5 11h14M5 19h14M5 15h14" />
//     </svg>
//   </div>
//   <h4 className="text-xl font-bold text-indigo-700 mb-1 flex items-center gap-2">
//     <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//       <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 4h10M5 11h14M5 19h14M5 15h14" />
//     </svg>
//     {event.title}
//   </h4>
//   <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
//     <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
//       <path d="M10 2a6 6 0 00-6 6c0 4.25 6 10 6 10s6-5.75 6-10a6 6 0 00-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" />
//     </svg>
//     {event.location}
//   </p>
//   <p className="text-sm text-gray-600 flex items-center gap-1">
//     <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
//       <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//     </svg>
//     {new Date(event.dateTime).toLocaleDateString()} at{" "}
//     {new Date(event.dateTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
//   </p>
//   <p className="text-gray-700 mt-3 text-sm line-clamp-3">{event.description}</p>

//   <div className="mt-4 flex items-center justify-between">
//     <span className="inline-block bg-indigo-100 text-indigo-700 px-3 py-1 text-xs font-medium rounded-full">
//       {event.attendeeCount} Joined
//     </span>
//     <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium transition">
//       View Details →
//     </button>
//   </div>
// </motion.div>

//           )
//         )}
//       </div>
//     </section>
//   );
// };

// export default Upcoming;
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2"; // ✅ install with: npm i sweetalert2
import { useNavigate } from "react-router-dom";

const Upcoming = () => {
  const [events, setEvents] = useState([]);
  const [user, setUser] = useState(null); // ✅ track login state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUpcoming = async () => {
      try {
        const res = await fetch("http://localhost:5000/featured-upcoming-events", {
          credentials: "include",
        });
        const data = await res.json();

        if (Array.isArray(data) && data.length > 0) {
          const [featured, ...rest] = data;
          setEvents([
            { ...featured, featured: true },
            ...rest.map((e) => ({ ...e, featured: false })),
          ]);
        }
      } catch (error) {
        console.error("Failed to fetch upcoming events", error);
      }
    };

    const fetchUser = async () => {
      try {
        const res = await fetch("http://localhost:5000/me", {
          credentials: "include",
        });
        if (res.ok) {
          const data = await res.json();
          setUser(data);
        } else {
          setUser(null);
        }
      } catch (err) {
        console.error("Auth check failed", err);
        setUser(null);
      }
    };

    fetchUpcoming();
    fetchUser();
  }, []);

  const handleJoin = async (eventId) => {
    if (!user) {
      Swal.fire({
        icon: "warning",
        title: "Login Required",
        text: "You must log in to join an event.",
        confirmButtonColor: "#4f46e5",
        showCancelButton: true,
        confirmButtonText: "Go to Login",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) navigate("/login");
      });
      return;
    }

    try {
      const res = await fetch(`http://localhost:5000/events/join/${eventId}`, {
        method: "POST",
        credentials: "include",
      });
      const data = await res.json();

      if (!res.ok) {
        Swal.fire({
          icon: "info",
          title: "Already Joined",
          text: data.message || "You have already joined this event.",
          confirmButtonColor: "#4f46e5",
        });
      } else {
        Swal.fire({
          icon: "success",
          title: "Joined Successfully",
          text: "You have successfully joined the event!",
          confirmButtonColor: "#4f46e5",
        });

        // Update UI immediately:
        setEvents((prev) =>
          prev.map((e) =>
            e._id === eventId
              ? { ...e, attendeeCount: e.attendeeCount + 1, joined: true }
              : e
          )
        );
      }
    } catch (error) {
      console.error("Failed to join event", error);
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Something went wrong while joining.",
        confirmButtonColor: "#4f46e5",
      });
    }
  };

  return (
    <section className="bg-white py-20 px-4 sm:px-8 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent mb-8">
          Don't Miss What's Coming
        </h2>
        <p className="text-gray-700 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          Be a part of the most exciting events around you. <br className="md:block hidden" />
          <span className="text-indigo-600 font-semibold">Join</span>,{" "}
          <span className="text-purple-600 font-semibold">connect</span>, and{" "}
          <span className="text-pink-600 font-semibold whitespace-nowrap">grow</span>.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {events.map((event, index) =>
          event.featured ? (
            <motion.div
              key={event._id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 bg-indigo-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-indigo-700 mb-2">
                🌟 Featured: {event.title}
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>📍 Location:</strong> {event.location}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>🗓️ Time:</strong>{" "}
                {new Date(event.dateTime).toLocaleDateString()} at{" "}
                {new Date(event.dateTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </p>
              <p className="text-gray-600 mt-4">{event.description}</p>
              <button
                className={`mt-6 px-5 py-2 rounded-lg text-white ${
                  event.joined ? "bg-green-600 cursor-default" : "bg-indigo-600 hover:bg-indigo-700"
                }`}
                disabled={event.joined}
                onClick={() => handleJoin(event._id)}
              >
                {event.joined ? "Joined" : "Join Now"}
              </button>
            </motion.div>
          ) : (
            <motion.div
              key={event._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative bg-gradient-to-br from-white via-blue-50 to-purple-50 border border-indigo-100 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="absolute top-4 right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-indigo-400 opacity-20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 4h10M5 11h14M5 19h14M5 15h14" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-indigo-700 mb-1 flex items-center gap-2">
                <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 4h10M5 11h14M5 19h14M5 15h14" />
                </svg>
                {event.title}
              </h4>
              <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a6 6 0 00-6 6c0 4.25 6 10 6 10s6-5.75 6-10a6 6 0 00-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
                {event.location}
              </p>
              <p className="text-sm text-gray-600 flex items-center gap-1">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {new Date(event.dateTime).toLocaleDateString()} at{" "}
                {new Date(event.dateTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </p>
              <p className="text-gray-700 mt-3 text-sm line-clamp-3">{event.description}</p>

              <div className="mt-4 flex items-center justify-between">
                <span className="inline-block bg-indigo-100 text-indigo-700 px-3 py-1 text-xs font-medium rounded-full">
                  {event.attendeeCount} Joined
                </span>
                <button
  className="text-indigo-600 hover:text-indigo-800 text-sm font-medium transition"
  onClick={() => navigate(`/events`)}
>
  View More →
</button>
              </div>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
};

export default Upcoming;

