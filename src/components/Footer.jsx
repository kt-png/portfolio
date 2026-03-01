import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-4">Kuruba Teja</h2>
          <p className="text-gray-400">
            Data Analyst specializing in Python, SQL, Power BI, and Machine Learning.
            Transforming complex data into actionable business insights.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#about" className="hover:text-blue-400">About</a></li>
            <li><a href="#education" className="hover:text-blue-400">Education</a></li>
            <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </motion.div>

        {/* Contact & Social */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold mb-4">Connect</h3>

          <p className="text-gray-400">kurubatejakurubateja@gmail.com</p>
          <p className="text-gray-400 mb-4">+91 6305413519</p>

          <div className="flex space-x-6 text-2xl">
            <a
              href="https://www.linkedin.com/in/kuruba-teja-9b215b2b0/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/kt-png"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition"
            >
              <FaGithub />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} Kuruba Teja. All Rights Reserved.
      </div>
    </footer>
  );
}