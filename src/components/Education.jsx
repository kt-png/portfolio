import { motion } from "framer-motion";

export default function Education() {
  return (
    <section
      id="education"
      className="min-h-screen bg-black text-white px-6 py-20"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Education
        </motion.h2>

        <div className="relative border-l border-gray-700 space-y-12">

          {/* B.Tech */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="ml-6"
          >
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2.5 mt-2"></div>
            <h3 className="text-xl font-semibold">
              B.Tech – Computer Science Engineering (AI)
            </h3>
            <p className="text-gray-400">
              Sreenivasa Institute of Technology and Management Studies, Chittoor
            </p>
            <p className="text-gray-500 text-sm">2021 – 2025</p>
            <p className="text-gray-400 mt-2">
              Specialized in Artificial Intelligence with a strong focus on 
              machine learning, data analytics, and problem-solving using Python and SQL.
            </p>
          </motion.div>

          {/* Intermediate */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="ml-6"
          >
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2.5 mt-2"></div>
            <h3 className="text-xl font-semibold">
              Intermediate – MPC
            </h3>
            <p className="text-gray-400">
              Suvarna Bharathi Junior College, Hindupur
            </p>
            <p className="text-gray-500 text-sm">2019 – 2021</p>
            <p className="text-gray-400 mt-2">
              Studied Mathematics, Physics, and Chemistry with emphasis on analytical thinking and quantitative reasoning.
            </p>
          </motion.div>

          {/* X Class */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="ml-6"
          >
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2.5 mt-2"></div>
            <h3 className="text-xl font-semibold">
              Secondary Education (X Class)
            </h3>
            <p className="text-gray-400">
              ZPHS, Pulamathi
            </p>
            <p className="text-gray-500 text-sm">2018 – 2019</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}