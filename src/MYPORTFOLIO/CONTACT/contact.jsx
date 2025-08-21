import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("❌ " + data.error);
      }
    } catch (err) {
      console.error(err);
      setStatus("⚠️ Failed to send message. Try again later.");
    }
  };

  return (
    <>
      <div id="contact-section">
        <h1 className="contact-title" data-aos="fade-down">
          Let’s Connect
        </h1>
        <p className="contact-subtitle" data-aos="fade-up">
          I’m always excited to discuss new opportunities, collaborations, or projects.
        </p>

        <div className="contact-container">
          {/* Contact Form */}
          <div className="contact-form" data-aos="fade-right">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit">🚀 Send Message</button>
            </form>
            {status && <p className="status-msg">{status}</p>}
          </div>

          {/* Contact Info (no changes here) */}
          <div className="contact-info" data-aos="zoom-in">
            <h2>Contact Information</h2>
            <p><i className="fa-solid fa-envelope"></i> shashafa48da0427@gmail.com</p>
            <p><i className="fa-solid fa-phone"></i> +91 70134 57506</p>
            <p><i className="fa-solid fa-location-dot"></i> Kurnool, Andhra Pradesh, India</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
