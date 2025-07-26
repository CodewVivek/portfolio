import React, { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-black text-white min-h-screen mr-30  ">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <motion.h2
          className="text-3xl font-bold mb-10 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={0.2}
        >
          Contact Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 ">
          {/* Left Column */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={0.4}
          >
            <h3 className="text-xl font-semibold">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <a href="mailto:vivekmanikonda113@gmail.com" className="text-gray-400">
                  vivekmanikonda113@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span className="text-gray-400">+91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span className="text-gray-400">India</span>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="w-5 h-5" />
                <a
                  href="https://www.linkedin.com/in/vivekmanikonda"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400"
                >
                  linkedin.com/in/vivekmanikonda
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={0.6}
          >
            {isSuccess ? (
              <div className="bg-green-100 p-6 rounded-md text-center text-green-800">
                <CheckCircle className="w-10 h-10 mx-auto mb-2" />
                <h4 className="font-semibold">Message sent successfully!</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Thanks for reaching out. I'll get back to you soon.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-4 underline text-sm text-green-600"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <p className="text-red-500 text-sm border border-red-500 rounded p-2">
                    {error}
                  </p>
                )}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full p-2 rounded bg-gray-900 text-white border border-gray-700"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      required
                      className="w-full p-2 rounded bg-gray-900 text-white border border-gray-700"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    required
                    className="w-full p-2 rounded bg-gray-900 text-white border border-gray-700"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2 px-4 rounded bg-white text-black hover:bg-gray-200 transition"
                >
                  {isSubmitting ? "Sending..." : "Submit Message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
