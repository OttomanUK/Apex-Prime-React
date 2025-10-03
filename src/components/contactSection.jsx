import { motion } from "framer-motion";
import React, { useState } from "react";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setShowModal(true);
        formElement.reset();
        setTimeout(() => setShowModal(false), 5000);
      } else {
        alert("There was an error sending your message. Please try again.");
      }
    } catch (error) {
      alert("There was an error sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2.4, ease: "easeOut" }}
        className="max-w-5xl mx-auto px-6 sm:px-10 py-10 sm:py-14 bg-[#ffc64a] rounded-2xl shadow-lg"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center text-[#1e3a8a]">
          Contact Us
        </h2>

        <form
          name="contact"
          method="POST"
          onSubmit={handleSubmit}
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="flex flex-col gap-6 w-full max-w-2xl mx-auto"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          {/* Name */}
          <div>
            <label className="block mb-2 font-medium text-sm sm:text-base">
              Name:
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 border border-black rounded-md focus:border-[#ffb91f] focus:ring focus:ring-[#ffb91f]/40 outline-none transition text-sm sm:text-base"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-medium text-sm sm:text-base">
              Email:
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-black rounded-md focus:border-[#ffb91f] focus:ring focus:ring-[#ffb91f]/40 outline-none transition text-sm sm:text-base"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block mb-2 font-medium text-sm sm:text-base">
              Subject:
            </label>
            <input
              type="text"
              name="subject"
              className="w-full px-4 py-3 border border-black rounded-md focus:border-[#ffb91f] focus:ring focus:ring-[#ffb91f]/40 outline-none transition text-sm sm:text-base"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 font-medium text-sm sm:text-base">
              Message:
            </label>
            <textarea
              name="message"
              required
              className="w-full px-4 py-3 border border-black rounded-md min-h-[140px] sm:min-h-[160px] focus:border-[#ffb91f] focus:ring focus:ring-[#ffb91f]/40 outline-none transition text-sm sm:text-base"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-6 py-3 bg-black rounded-md text-white font-bold hover:bg-[#1e3a8a] hover:text-white transition text-sm sm:text-base"
          >
            {isSubmitting ? "Sending Email..." : "Send Email"}
          </button>
        </form>

        {/* Success Modal */}
        {showModal && (
          <div className="mt-6 p-4 bg-green-50 border border-green-400 rounded-md text-center text-green-700 text-sm sm:text-base">
            ✅ Thank you! Your message has been sent.
          </div>
        )}
      </motion.div>
    </section>
  );
}
