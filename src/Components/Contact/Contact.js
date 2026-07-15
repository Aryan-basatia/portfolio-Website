import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add email sending logic here using a service like EmailJS or a backend API
    console.log("Form submitted:", formData);
    setSubmitted(true);
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    // Hide success message after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div id="contact" className="contact-container">
      <h1>Get In Touch</h1>
      <p className="contact-subtitle">
        Have a project or opportunity? I'd love to hear from you!
      </p>

      <div className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Project Title or Subject"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell me about your project..."
              rows="6"
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>

        <div className="contact-info">
          <h3>Other Ways to Connect</h3>
          <div className="info-item">
            <i className="fa-solid fa-envelope"></i>
            <p>Email: aryanbasatia24@gmail.com</p>
          </div>
          <div className="info-item">
            <i className="fa-solid fa-map-location-dot"></i>
            <p>Location: Haryana, India</p>
          </div>
          <div className="social-links">
            <a href="#" className="social-link">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      {submitted && (
        <div className="success-message">
          Thank you! I'll get back to you soon.
        </div>
      )}
    </div>
  );
};

export default Contact;
