// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";
// import { format } from "date-fns";

// const EventsPage = () => {
//   const [events, setEvents] = useState([]);
//   const [joinedEventIds, setJoinedEventIds] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchEvents = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/events", {
//         withCredentials: true,
//       });
//       setEvents(res.data);
//     } catch (err) {
//       console.error("Failed to fetch events", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleJoin = async (id) => {
//     if (joinedEventIds.includes(id)) return;

//     try {
//       await axios.post(
//         `http://localhost:5000/events/join/${id}`,
//         {},
//         { withCredentials: true }
//       );
//       setEvents((prev) =>
//         prev.map((e) =>
//           e._id === id ? { ...e, attendeeCount: e.attendeeCount + 1 } : e
//         )
//       );
//       setJoinedEventIds((prev) => [...prev, id]);
//     } catch (err) {
//       console.error("Failed to join", err);
//     }
//   };

//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   if (loading) return <div className="text-center py-20 text-lg">Loading events...</div>;

//   return (
//     <div className="px-4 md:px-10 py-10 min-h-screen bg-gradient-to-br from-white to-gray-100">
//       <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Upcoming Events</h2>
//       <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//         {events.map((event, index) => (
//           <motion.div
//             key={event._id}
//             className="rounded-2xl bg-white shadow-xl p-6 hover:shadow-2xl transition-all duration-300 border border-gray-200"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.1 }}
//           >
//             <h3 className="text-xl font-semibold text-indigo-600 mb-2">{event.title}</h3>
//             <p className="text-gray-600 text-sm mb-1">By: <strong>{event.name}</strong></p>
//             <p className="text-gray-600 text-sm mb-1">
//               📅 {format(new Date(event.dateTime), "PPP p")}
//             </p>
//             <p className="text-gray-600 text-sm mb-1">📍 {event.location}</p>
//             <p className="text-gray-700 text-sm mb-3">{event.description}</p>
//             <div className="flex items-center justify-between mt-4">
//               <span className="text-sm text-gray-500">
//                 👥 {event.attendeeCount} Attending
//               </span>
//               <button
//                 disabled={joinedEventIds.includes(event._id)}
//                 onClick={() => handleJoin(event._id)}
//                 className={`px-4 py-1 text-sm rounded-lg font-medium transition ${
//                   joinedEventIds.includes(event._id)
//                     ? "bg-gray-300 text-gray-600 cursor-not-allowed"
//                     : "bg-indigo-500 hover:bg-indigo-600 text-white"
//                 }`}
//               >
//                 {joinedEventIds.includes(event._id) ? "Joined" : "Join Event"}
//               </button>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EventsPage;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { format } from "date-fns";

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [joinedEventIds, setJoinedEventIds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");

  const fetchEvents = async () => {
    try {
      const res = await axios.get("http://localhost:5000/events", {
        params: {
          search: searchTerm,
          filter: filter,
        },
        withCredentials: true,
      });
      setEvents(res.data);
    } catch (err) {
      console.error("Failed to fetch events", err);
    } finally {
      setLoading(false);
    }
  };

 const handleJoin = async (id) => {
  try {
    await axios.post(
      `http://localhost:5000/events/join/${id}`,
      {},
      { withCredentials: true }
    );

    setEvents((prev) =>
      prev.map((e) =>
        e._id === id
          ? {
              ...e,
              attendeeCount: e.attendeeCount + 1,
              joined: true, // ✅ update local joined status
            }
          : e
      )
    );
  } catch (err) {
    console.error("Failed to join", err);
  }
};


  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setFilter("");
  };

  useEffect(() => {
    fetchEvents();
  }, [searchTerm, filter]);

  if (loading)
    return <div className="text-center py-20 text-lg">Loading events...</div>;

  return (
    <div className="px-4 md:px-10 py-10 min-h-screen bg-gradient-to-br from-white to-gray-100">
     <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-600">
  Discover Events
</h2>
<p className="text-center text-gray-600 max-w-2xl mx-auto -mt-6 mb-8 text-sm sm:text-base">
  Explore, search, and join events happening now and in the future.
</p>


      {/* 🔍 Filters */}
      <div className="flex flex-wrap  mx-auto justify-center items-center gap-4 mb-8">
        <input
          type="text"
          placeholder="Search by event title"
          value={searchTerm}
          onChange={handleSearchChange}
          className="border border-gray-300 rounded-lg p-2 w-60"
        />
        <select
          value={filter}
          onChange={handleFilterChange}
          className="border border-gray-300 rounded-lg p-2"
        >
          <option value="">Select a date range</option>
          <option value="today">Today</option>
          <option value="currentWeek">This Week</option>
          <option value="lastWeek">Last Week</option>
          <option value="currentMonth">This Month</option>
          <option value="lastMonth">Last Month</option>
        </select>
        <button
          onClick={clearFilters}
          className="px-4 py-2 border rounded text-sm text-gray-600 hover:bg-gray-100"
        >
          Clear Filters ✖️
        </button>
      </div>

      {/* 🗓️ Events */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
     {events.map((event, index) => (
  <motion.div
    key={event._id}
    className="rounded-2xl bg-white shadow-xl p-6 hover:shadow-2xl transition-all duration-300 border border-gray-200"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
  >
    <h3 className="text-xl font-semibold text-indigo-600 mb-2">
      {event.title}
    </h3>
    <p className="text-gray-600 text-sm mb-1">
      By: <strong>{event.name}</strong>
    </p>
    <p className="text-gray-600 text-sm mb-1">
      📅 {format(new Date(event.dateTime), "PPP p")}
    </p>
    <p className="text-gray-600 text-sm mb-1">📍 {event.location}</p>
    <p className="text-gray-700 text-sm mb-3">{event.description}</p>
    <div className="flex items-center justify-between mt-4">
      <span className="text-sm text-gray-500">
        👥 {event.attendeeCount} Attending
      </span>
      <button
        disabled={event.joined}
        onClick={() => handleJoin(event._id)}
        className={`px-4 py-1 text-sm rounded-lg font-medium transition ${
          event.joined
            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
            : "cursor-pointer bg-gradient-to-r from-purple-600 to-blue-600 hover:from-pink-500 hover:to-purple-500 text-white shadow-lg transition-all duration-300"
        }`}
      >
        {event.joined ? "Joined" : "Join Event"}
      </button>
    </div>
  </motion.div>
))}

      </div>
    </div>
  );
};

export default EventsPage;
