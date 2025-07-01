import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";
// import { useNavigate } from "react-router-dom";

const MyEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingEvent, setEditingEvent] = useState(null);
//   const navigate = useNavigate();

  const fetchEvents = async () => {
    try {
      const res = await axios.get("https://eventaura-server.vercel.app/my-events", {
        withCredentials: true,
      });
      setEvents(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this event?");
    if (!confirm) return;

    try {
      await axios.delete(`https://eventaura-server.vercel.app/events/${id}`, {
        withCredentials: true,
      });
      setEvents((prev) => prev.filter((e) => e._id !== id));
    } catch (err) {
      console.error(err);
      alert("Delete failed");
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://eventaura-server.vercel.app/events/${editingEvent._id}`,
        {
          title: editingEvent.title,
          dateTime: editingEvent.dateTime,
          location: editingEvent.location,
          description: editingEvent.description,
          attendeeCount: editingEvent.attendeeCount
        },
        { withCredentials: true }
      );
      setEditingEvent(null);
      fetchEvents();
    } catch (err) {
      console.error(err);
      alert("Update failed");
    }
  };

  if (loading) return <div className="text-center py-8">Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">My Events</h1>
      {events.length === 0 ? (
        <p className="text-center text-gray-500">You haven't posted any events yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event) => (
            <div key={event._id} className="bg-white p-6 rounded-2xl shadow-md relative">
              <h2 className="text-xl font-semibold text-indigo-600">{event.title}</h2>
              <p><strong>Posted By:</strong> {event.name}</p>
              <p><strong>Date & Time:</strong> {format(new Date(event.dateTime), "PPpp")}</p>
              <p><strong>Location:</strong> {event.location}</p>
              <p><strong>Description:</strong> {event.description}</p>
              <p><strong>Attendees:</strong> {event.attendeeCount}</p>
              <div className="mt-4 space-x-2">
                <button
                  onClick={() => setEditingEvent(event)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(event._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Update Modal */}
     {editingEvent && (
  <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
    <form
      onSubmit={handleUpdate}
      className="bg-white p-6 rounded-2xl w-full max-w-md space-y-4 shadow-lg"
    >
      <h2 className="text-2xl font-bold text-indigo-600 mb-2">Update Event</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
        <input
          type="text"
          value={editingEvent.title}
          onChange={(e) => setEditingEvent({ ...editingEvent, title: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Date & Time</label>
        <input
          type="datetime-local"
          value={editingEvent.dateTime.slice(0, 16)}
          onChange={(e) => setEditingEvent({ ...editingEvent, dateTime: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
        <input
          type="text"
          value={editingEvent.location}
          onChange={(e) => setEditingEvent({ ...editingEvent, location: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
        <textarea
          value={editingEvent.description}
          onChange={(e) => setEditingEvent({ ...editingEvent, description: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
          rows={3}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Attendee Count</label>
       <input 
  type="number"
  value={editingEvent.attendeeCount ?? ''}
  onChange={(e) =>
    setEditingEvent({ ...editingEvent, attendeeCount: Number(e.target.value) })
  }
  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
  min={0}
/>

      </div>

      <div className="flex justify-end gap-3 pt-2">
        <button
          type="button"
          onClick={() => setEditingEvent(null)}
          className="px-4 py-2 rounded-xl bg-gray-200 hover:bg-gray-300"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 rounded-xl bg-green-500 text-white hover:bg-green-600"
        >
          Save
        </button>
      </div>
    </form>
  </div>
)}


    </div>
  );
};

export default MyEvents;
