import { motion } from "framer-motion";

const projects = [
  
  {
    title: "Blinkit Sales Dashboard",
    description: "Interactive Power BI dashboard for sales KPI tracking.",
    github: "https://github.com/kt-png/Blinkit_DashBoard.git"
  },
  {
    title:"Hospital ER-Analysis",
    description:"Monitor key metrics and trends on a month-by-month basis to identify patterns and areas for improvement",
    github:"https://github.com/kt-png/Hospital-ER-Dash-Board.git"

  },
  {
    title:"HR-Data-Analysis",
    description:"This dashboard gives a clear overview of employee distribution, attrition trends, salary expenses, and demographic insights.",
    github:"https://github.com/kt-png/HR-Data-Dash-Board.git"

  },
  {
    title: "Meta Ads Dashboard",
    description: "Ad performance analysis dashboard with KPI insights.",
    github: "https://github.com/kt-png/Meta-Ad-Performance-Analysis-Dash-Board-.git"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-black text-white px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-gray-800 p-6 rounded-xl hover:scale-105 hover:bg-gray-700 transition cursor-pointer block"
          >
            <h3 className="text-xl font-semibold mb-3">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              {project.description}
            </p>

            <span className="text-blue-400 text-sm">
              View on GitHub →
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}