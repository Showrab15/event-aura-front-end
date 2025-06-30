import { useState } from "react";

const AddEvent = () => {
const [form, setForm] = useState({
  title: "",
  dateTime: "",
  location: "",
  description: "",
  attendeeCount: 0,
});

  const [error, setError] = useState(null);

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     if (user?.name) {
//       setForm((prev) => ({ ...prev, name: user.name }));
//     }
//   }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: name === "attendeeCount" ? parseInt(value) || 0 : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/add-events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Failed to add event");
      }
alert("Event is added succesfully")
    //   navigate("/"); // redirect after success
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f0f4ff] to-[#e0e7ff] py-10 px-4">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-8 sm:p-12 transition-all">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#6C63FF] mb-6 text-center">Add New Event</h2>
        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="col-span-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">Event Title</label>
            <input
              type="text"
              name="title"
              required
              placeholder="Enter Event Title"
              className="w-full border rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
              onChange={handleChange}
            />
          </div>

          <div>
  <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
  <input
    type="text"
    name="name"
    value={form.name}
    className="w-full bg-gray-100 border rounded-lg px-4 py-2 shadow-sm"
                  onChange={handleChange}

  />
</div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date & Time</label>
            <input
              type="datetime-local"
              name="dateTime"
              required
              className="w-full border rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
              onChange={handleChange}
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <input
              type="text"
              name="location"
              required
              placeholder="Enter Location"
              className="w-full border rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
              onChange={handleChange}
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              name="description"
              rows="4"
              required
              placeholder="Write something about the event..."
              className="w-full border rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Attendee Count</label>
            <input
              type="number"
              name="attendeeCount"
              value={form.attendeeCount}
              min="0"
              className="w-full border rounded-lg px-4 py-2 shadow-sm"
              onChange={handleChange}
            />
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#6C63FF] to-[#857FFF] text-white py-3 px-6 rounded-xl shadow-lg hover:scale-105 transition-transform"
            >
              Add Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;
