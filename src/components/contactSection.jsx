import { motion } from "framer-motion";
import React, { useState } from "react";

export function ContactSection({ country }) {
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
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2.4, ease: "easeOut" }}
        className="max-w-4xl mx-auto px-4"
      >
        <h2 className="text-4xl font-bold mb-6 text-center text-[#1e3a8a]">
          Contact Us
        </h2>

        <form
          name="contact"
          method="POST"
          onSubmit={handleSubmit}
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="flex flex-col gap-6"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          <div>
            <label className="block mb-2">Name:</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-[#ffb91f] focus:ring focus:ring-[#ffb91f]/40 outline-none transition"
            />
          </div>

          <div>
            <label className="block mb-2">Email:</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-[#ffb91f] focus:ring focus:ring-[#ffb91f]/40 outline-none transition"
            />
          </div>

          <div>
            <label className="block mb-2">Subject:</label>
            <input
              type="text"
              name="subject"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-[#ffb91f] focus:ring focus:ring-[#ffb91f]/40 outline-none transition"
            />
          </div>

          <div>
            <label className="block mb-2">Message:</label>
            <textarea
              name="message"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md min-h-[120px] focus:border-[#ffb91f] focus:ring focus:ring-[#ffb91f]/40 outline-none transition"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 bg-[#ffb91f] rounded-md text-[#152d6a] font-bold hover:bg-[#152d6a] hover:text-white transition"
          >
            {isSubmitting ? "Sending Email..." : "Send Email"}
          </button>
        </form>

        {showModal && (
          <div className="mt-6 p-4 bg-green-50 border border-green-400 rounded-md text-center text-green-700">
            ✅ Thank you! Your message has been sent.
          </div>
        )}
      </motion.div>
    </section>
  );
}
