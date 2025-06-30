/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const upcomingEvents = [
  {
    id: 1,
    title: "Tech Expo 2025",
    date: "2025-07-10",
    time: "10:00 AM",
    location: "Dhaka Convention Center",
    description: "Explore the latest innovations in tech.",
    featured: true,
  },
  {
    id: 2,
    title: "Startup Meetup",
    date: "2025-07-15",
    time: "4:00 PM",
    location: "Banani Co-working Space",
    description: "Network with startup founders and investors.",
    featured: false,
  },
  {
    id: 3,
    title: "AI & Future",
    date: "2025-07-20",
    time: "2:00 PM",
    location: "BRAC University Auditorium",
    description: "Panel discussion on AI trends and ethics.",
    featured: false,
  },
];

const Upcoming = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-8 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 
  className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600
   via-indigo-500 to-purple-500 bg-clip-text text-transparent mb-8"
        >
          Don't Miss What's Coming
        </h2>
      <p className="text-gray-700 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
  Be a part of the most exciting events around you. <br className="md:block hidden"/>
  <span className="text-indigo-600 font-semibold">Join</span>, <span className="text-purple-600 font-semibold">connect</span>, and <span className="text-pink-600 font-semibold whitespace-nowrap">grow</span>.
</p>


      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {upcomingEvents.map((event, index) =>
          event.featured ? (
            <motion.div
              key={event.id}
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
                <strong>🗓️ Time:</strong> {event.date} at {event.time}
              </p>
              <p className="text-gray-600 mt-4">{event.description}</p>
              <button className="mt-6 px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg">
                Join Now
              </button>
            </motion.div>
          ) : (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-white border border-gray-200 p-6 rounded-2xl shadow hover:shadow-md transition-all duration-300"
            >
              <h4 className="text-lg font-semibold text-gray-800">
                {event.title}
              </h4>
              <p className="text-sm text-gray-600 mt-1">{event.location}</p>
              <p className="text-sm text-gray-600">{event.date} at {event.time}</p>
              <p className="text-gray-600 mt-3 text-sm">{event.description}</p>
              <button className="mt-4 text-indigo-600 hover:underline text-sm">
                View Details →
              </button>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
};

export default Upcoming;
