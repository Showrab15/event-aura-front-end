import { useEffect, useState } from "react";

const AddEvent = () => {
  const [form, setForm] = useState({
    title: "",
    name: "", // fill this from user data
    dateTime: "",
    location: "",
    description: "",
    attendeeCount: 0,
  });

  const [error, setError] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("User from localStorage:", user);

    if (user?.name) {
      setForm((prev) => {
        const updatedForm = { ...prev, name: user.name };
        console.log("Updated form with name:", updatedForm);
        return updatedForm;
      });
    }
  }, []);

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

      alert("Event is added successfully");

      // ✅ Reset form while preserving user name
      setForm({
        title: "",
        name: form.name,
        dateTime: "",
        location: "",
        description: "",
        attendeeCount: 0,
      });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f0f4ff] to-[#e0e7ff] py-10 px-4">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-8 sm:p-12 transition-all">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#6C63FF] mb-6 text-center">
          Add New Event
        </h2>
        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          <div className="col-span-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Event Title
            </label>
            <input
              type="text"
              name="title"
              value={form.title}
              required
              placeholder="Enter Event Title"
              className="w-full border rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              placeholder={form.name}
              readOnly
              className="w-full bg-gray-100 border rounded-lg px-4 py-2 shadow-sm cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date & Time
            </label>
            <input
              type="datetime-local"
              name="dateTime"
              value={form.dateTime}
              required
              className="w-full border rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
              onChange={handleChange}
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={form.location}
              required
              placeholder="Enter Location"
              className="w-full border rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
              onChange={handleChange}
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={form.description}
              rows="4"
              required
              placeholder="Write something about the event..."
              className="w-full border rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Attendee Count
            </label>
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
              className="w-full cursor-pointer bg-gradient-to-r from-purple-600 to-blue-600 hover:from-pink-500 hover:to-purple-500
               text-white py-3 px-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
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
