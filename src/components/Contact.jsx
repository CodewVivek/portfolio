import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Send,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);

    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="min-h-screen px-6 py-16 bg-black text-white " id="contact">
      <h2 className="text-3xl font-bold mb-10 text-center">Contact Me</h2>

      <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto">
        {/* Left: Contact Info */}
        <div className="w-full md:w-1/2 space-y-6">
          <h3 className="text-xl font-semibold">Get In Touch</h3>

          <div className="flex items-start gap-4">
            <Mail className="mt-1" />
            <div>
              <p className="font-medium">Email</p>
              <a href="mailto:something@gmail.com" className="text-gray-400">something@gmail.com</a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="mt-1" />
            <div>
              <p className="font-medium">Phone</p>
              <p className="text-gray-400">+91 XXXXXXXXXX</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="mt-1" />
            <div>
              <p className="font-medium">Location</p>
              <p className="text-gray-400">Hyderabad, India</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Linkedin className="mt-1" />
            <div>
              <p className="font-medium">LinkedIn</p>
              <a href="https://linkedin.com/in/sai-vivek-manikonda-10b734249" target="_blank" rel="noopener noreferrer" className="text-gray-400">
                linkedin.com/in/sai-vivek
              </a>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <form onSubmit={handleSubmit} className="w-full md:w-1/2 space-y-5">
          <h3 className="text-xl font-semibold">Send Me a Message</h3>

          {submitted && (
            <div className="bg-green-600 text-white text-sm px-4 py-2 rounded text-center">
              Message sent successfully!
            </div>
          )}

          <div className="flex gap-4">
            <div className="w-1/2">
              <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full px-4 py-2 rounded bg-gray-900 border border-gray-600 focus:outline-none"
              />
            </div>

            <div className="w-1/2">
              <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your email"
                className="w-full px-4 py-2 rounded bg-gray-900 border border-gray-600 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your message"
              className="w-full px-4 py-2 rounded bg-gray-900 border border-gray-600 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center items-center gap-2 py-2 px-4 bg-white text-black font-medium rounded hover:bg-gray-200 transition"
          >
            <Send size={18} /> Submit Message
          </button>
        </form>
      </div>

      <footer className="text-center text-sm text-gray-600 mt-16">
        © 2025 Sai Vivek. All rights reserved.
      </footer>
    </section>
  );
};

export default Contact;
