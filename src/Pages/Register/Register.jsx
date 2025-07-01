/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photoURL: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(""); // Clear error while typing
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Registration failed");
      } else {
        setSuccess("Registration successful!");
        alert("Registration successful!")
        setTimeout(() => navigate("/login"), 1500); // Redirect after success
      }
    } catch (err) {
      console.error("Registration error:", err);
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md rounded-2xl p-8 backdrop-blur-md bg-white/10 border border-white/20 shadow-xl"
      >
        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-extrabold text-white tracking-wide">
            Create Your EventAura Account
          </h2>
          <p className="text-sm text-white/70 mt-1">
            Join now and manage your events like a pro!
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm text-white/80 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#ff5733]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-white/80 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#ff5733]"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-white/80 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#ff5733]"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-sm text-white/80 mb-1">Photo URL</label>
            <input
              type="url"
              name="photoURL"
              value={formData.photoURL}
              onChange={handleChange}
              required
              placeholder="https://example.com/photo.jpg"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#ff5733]"
            />
          </div>

          {/* Error/Success */}
          {error && (
            <p className="text-red-300 text-sm text-center -mt-2">{error}</p>
          )}
          {success && (
            <p className="text-green-300 text-sm text-center -mt-2">{success}</p>
          )}

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="cursor-pointer w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-pink-500 hover:to-purple-500 text-white py-2 rounded-lg font-semibold shadow-lg transition-all duration-300"
          >
            Register
          </motion.button>
        </form>

        {/* Login redirect */}
        <p className="text-center text-base text-white/70 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400 font-medium hover:underline">
            Log in here
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;
