/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     const res = await fetch("http://localhost:5000/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData), // ✅ use formData directly
//     });

//     const data = await res.json();

//     if (!res.ok) {
//       setError(data.message || "Login failed");
//     } else {
//       localStorage.setItem("user", JSON.stringify(data.user));
//       navigate("/");
//     }
//   } catch (err) {
//     console.error("Login error:", err);
//   }
// };
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify(formData), // ✅ Use formData correctly
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.message || "Login failed");
    } else {
      navigate("/");
    }
  } catch (err) {
    console.error("Login error:", err);
    setError("Something went wrong");
  }
};



  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md rounded-2xl p-8 backdrop-blur-md bg-white/10
         border border-white/20 shadow-xl"
      >
        {/* Branding */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-extrabold text-white tracking-wide">EventAura</h2>
          <p className="text-sm text-white/70 mt-1">Welcome back. Let's make events unforgettable!</p>
        </div>

        {/* Form */}
       <form className="space-y-5" onSubmit={handleSubmit}>
  {/* Email */}
  <div>
    <label className="block text-sm text-white/80 mb-1">Email</label>
    <input
      name="email"
      type="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="you@example.com"
      className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#ff5733] backdrop-blur-md"
      required
    />
  </div>

  {/* Password */}
  <div>
    <label className="block text-sm text-white/80 mb-1">Password</label>
    <input
      name="password"
      type="password"
      value={formData.password}
      onChange={handleChange}
      placeholder="••••••••"
      className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#ff5733] backdrop-blur-md"
      required
    />
  </div>

  {/* Submit */}
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    type="submit"
    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-pink-500 hover:to-purple-500
     text-white py-2 rounded-lg font-semibold shadow-lg transition-all duration-300"
  >
    Sign In
  </motion.button>

  {/* Error Message */}
  {error && (
    <p className="text-red-300 text-sm text-center mt-2">
      {error}
    </p>
  )}

  {/* Footer */}
  <p className="text-base text-white/70 text-center">
    Don’t have an account?{" "}
    <a href="/register" className="text-blue-400 hover:underline">
      Register here
    </a>
  </p>
</form>

      </motion.div>
    </div>
  );
};

export default Login;
