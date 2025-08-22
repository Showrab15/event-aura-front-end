/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Emily Johnson",
    role: "Event Organizer",
    feedback: "This platform made it so easy to manage my events and connect with participants. The interface is user-friendly and intuitive!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael Brown",
    role: "Event Attendee",
    feedback: "Joining events has never been this simple! I love the real-time notifications and seamless joining process.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Sarah Wilson",
    role: "Community Manager",
    feedback: "Tracking attendance and managing multiple events is now effortless. Highly recommend this platform for all event needs!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const Testimonials = () => {
  const [reviews, setReviews] = useState(testimonials);
  const [formData, setFormData] = useState({ name: "", role: "", feedback: "", rating: 5 });

  // Typing animation logic
  const sampleFeedback = "This platform made my event unforgettable!";
  const [typingText, setTypingText] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const typingIntervalRef = useRef(null);

  useEffect(() => {
    if (isTyping && typingIndex < sampleFeedback.length) {
      typingIntervalRef.current = setInterval(() => {
        setTypingText((prev) => prev + sampleFeedback[typingIndex]);
        setTypingIndex((prev) => prev + 1);
      }, 100);
    }
    return () => clearInterval(typingIntervalRef.current);
  }, [typingIndex, isTyping]);

  const handleFocus = () => {
    clearInterval(typingIntervalRef.current);
    setIsTyping(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.feedback && formData.role) {
      const newReview = { ...formData, image: `https://i.pravatar.cc/150?u=${formData.name}` };
      setReviews([...reviews, newReview]);
      setFormData({ name: "", role: "", feedback: "", rating: 5 });
      setTypingText(""); // reset typing text
      setTypingIndex(0); // reset typing index
      setIsTyping(true); // restart typing animation
      alert("Thank you for your feedback!");
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What They Said — What You Say Next
        </motion.h2>

        <motion.p
          className="text-gray-700 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Discover real stories from our amazing <span className="text-indigo-600 font-semibold">users</span>. <br className="md:block hidden" />
          <span className="text-purple-600 font-semibold">Learn</span>, 
          <span className="text-pink-600 font-semibold">share</span>, and <span className="text-blue-600 font-semibold whitespace-nowrap">grow together</span>.
        </motion.p>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Left: Timeline */}
          <div className="flex-1 relative border-l-4 border-blue-200 ml-4 space-y-16">
            {reviews.slice(0,3).map((testimonial, index) => (
              <motion.div
                key={index}
                className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"} items-start gap-6 relative`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
              >
                <div className="w-6 h-6 bg-blue-500 rounded-full absolute -left-[15px] top-2"></div>

                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-blue-300"
                />

                <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition max-w-lg">
                  <h3 className="text-xl font-semibold mb-1">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{testimonial.role}</p>

                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, idx) => (
                      <Star key={idx} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Review Form with Typing Animation */}
          <div className="flex-1 bg-blue-50 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-center text-blue-600">Leave a Review</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg border"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Your Role (e.g. Organizer, Attendee)"
                className="w-full p-3 rounded-lg border"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                required
              />
              <textarea
                placeholder="Your Feedback"
                className="w-full p-3 rounded-lg border"
                rows="4"
                value={isTyping ? typingText : formData.feedback}
                onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
                onFocus={handleFocus}
                required
              ></textarea>

              <div className="flex items-center gap-2">
                <label className="text-gray-600">Rating:</label>
                <select
                  className="p-2 rounded-lg border"
                  value={formData.rating}
                  onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) })}
                >
                  {[5, 4, 3, 2, 1].map((num) => (
                    <option key={num} value={num}>
                      {num} Star{num > 1 && "s"}
                    </option>
                  ))}
                </select>
              </div>

              <button type="submit"
               className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-pink-500
                hover:to-purple-500 transition-all duration-300
                text-white py-3 rounded-lg  shadow-lg ">
                Submit Review
              </button>
              
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
