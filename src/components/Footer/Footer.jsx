/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-indigo-700 via-purple-600 to-pink-500 text-white pt-14 pb-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10"
      >
        {/* Logo + About */}
        <div>
          <h3 className="text-2xl font-extrabold mb-4 text-[#ff5733]">EventAura</h3>
          <p className="text-sm text-white/80 leading-relaxed">
            Your trusted platform to discover, host, and join amazing events. Make every moment count with EventAura.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><a href="/" className="hover:text-[#ff5733] transition">Home</a></li>
            <li><a href="/events" className="hover:text-[#ff5733] transition">Events</a></li>
            <li><a href="/add-event" className="hover:text-[#ff5733] transition">Add Event</a></li>
            <li><a href="/my-events" className="hover:text-[#ff5733] transition">My Events</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Support</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><a href="#" className="hover:text-[#ff5733] transition">Help Center</a></li>
            <li><a href="#" className="hover:text-[#ff5733] transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#ff5733] transition">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-[#ff5733] transition">Contact Us</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Subscribe</h4>
          <p className="text-sm text-white/80 mb-4">
            Get updates about upcoming events and exclusive offers.
          </p>
          <form className="flex flex-col sm:flex-row items-center gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full sm:w-auto px-4 py-2 rounded-md text-black focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#ff5733] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-white/20 pt-6 px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
        <p>© {new Date().getFullYear()} EventAura. All rights reserved.</p>
        <div className="flex gap-4">
          {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
            <a
              key={idx}
              href="#"
              className="hover:text-[#ff5733] transition"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
