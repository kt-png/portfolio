import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          console.log(error.text);
          alert("Something went wrong. Try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-900 text-white flex items-center px-6 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl mx-auto w-full text-center"
      >
        {/* Top Content */}
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="text-gray-400 mb-2">
          Let’s connect and build something impactful together.
        </p>
        <p className="text-blue-400 mb-8">
          kurubatejakurubateja@gmail.com
        </p>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="space-y-6 text-left">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 hover:bg-blue-600 py-3 rounded-lg font-medium transition duration-300"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-green-400 text-center mt-4">
              Message sent successfully ✅
            </p>
          )}
        </form>
      </motion.div>
    </section>
  );
}