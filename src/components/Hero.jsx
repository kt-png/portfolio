import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="text-center max-w-4xl">

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
        >
          Hi, I'm <span className="text-blue-500">Kuruba Teja</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-3xl font-semibold mb-6 text-gray-300"
        >
          Data Analyst • Machine Learning Enthusiast • Dashboard Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-400 mb-8 text-lg leading-relaxed"
        >
          I specialize in transforming raw data into meaningful insights using 
          <span className="text-white font-medium"> Python, SQL, Power BI, and Machine Learning</span>.  
          Passionate about building predictive models and interactive dashboards 
          that drive data-informed decision making.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center gap-4 flex-wrap mb-6"
        >
          <a
            href="https://drive.google.com/file/d/1EPVdC84PAyHp0o6mJL00YqgDPsbHQDBe/view?usp=drivesdk"
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-medium transition duration-300"
          >
            View Resume
          </a>

          <a
            href="#contact"
            className="border border-gray-600 hover:border-blue-500 px-6 py-3 rounded-lg font-medium transition duration-300"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center gap-6 text-gray-400 text-lg"
        >
          <a
            href="#contact"
            className="hover:text-blue-500 transition"
          >
           <FaEnvelope />
          </a>

          <a
            href="https://linkedin.com/in/kuruba-teja-9b215b2b0"
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
            className="hover:text-blue-500 transition"
          >
            <FaGithub />
          </a>
        </motion.div>

      </div>
    </section>
  );
}