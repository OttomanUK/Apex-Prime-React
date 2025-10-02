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
        formElement.reset(); // Clear the form
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
    <section id="contact" style={{ padding: "80px 0" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 20px" }}>
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "20px",
            textAlign: "center",
            color: "#1e3a8a",
          }}
        >
          Contact Us
        </h2>

        <form
          name="contact"
          method="POST"
          onSubmit={handleSubmit}
          className="space-y-4"
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          {/* Required for Netlify */}
          <input type="hidden" name="form-name" value="contact" />

          {/* Honeypot for spam protection */}
          <p className="hidden">
            <label>
              Don't fill this out if you're human:
              <input name="bot-field" />
            </label>
          </p>

          <div>
            <label style={{ display: "block", marginBottom: "8px" }}>
              Name:
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "6px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          <div>
            <label style={{ display: "block", marginBottom: "8px" }}>
              Email:
            </label>
            <input
              type="email"
              name="email"
              placeholder="your.email@example.com"
              required
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "6px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          <div>
            <label style={{ display: "block", marginBottom: "8px" }}>
              Subject:
            </label>
            <input
              type="text"
              name="subject"
              placeholder="What's this about?"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "6px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          <div>
            <label style={{ display: "block", marginBottom: "8px" }}>
              Message:
            </label>
            <textarea
              name="message"
              placeholder="Explain your query in detail"
              required
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                minHeight: "120px",
              }}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              padding: "12px 20px",
              backgroundColor: "#1e3a8a",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            {isSubmitting ? "Sending Email..." : "Send Email"}
          </button>
        </form>

        {/* Confirmation Modal */}
        {showModal && (
          <div
            style={{
              marginTop: "20px",
              padding: "15px",
              backgroundColor: "#e6ffed",
              border: "1px solid #4ade80",
              borderRadius: "6px",
              textAlign: "center",
            }}
          >
            ✅ Thank you! Your message has been sent.
          </div>
        )}
      </div>
    </section>
  );
}
