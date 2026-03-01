import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-900 text-white flex items-center px-6 py-20"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>

        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
          
          <p>
            I am an entry-level <span className="text-white font-semibold">Data Analyst</span> 
            with hands-on experience in Python, SQL, Excel, Power BI, and R. 
            I specialize in data cleaning, exploratory data analysis (EDA), 
            statistical analysis, KPI tracking, and dashboard development.
          </p>

          <p>
            I have built machine learning models using Random Forest and XGBoost 
            to predict patterns and improve decision-making accuracy. 
            My work focuses on transforming complex datasets into 
            meaningful insights through data visualization and predictive analytics.
          </p>

          <p>
            I have developed interactive dashboards such as:
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="text-white font-medium">
                Blinkit Sales Dashboard
              </span> – Designed KPI-driven Power BI dashboards to monitor 
              sales performance and automate reporting processes.
            </li>
            <li>
              <span className="text-white font-medium">
                Meta Ads Performance Dashboard
              </span> – Built analytics dashboards tracking CTR, engagement, 
              conversions, and ROI with advanced DAX calculations.
            </li>
            <li>
              <span className="text-white font-medium">
                Substance Use Prediction Model
              </span> – Developed predictive ML models with feature engineering 
              and cross-validation techniques.
            </li>
          </ul>

          <p>
            Currently pursuing B.Tech in Computer Science Engineering (AI), 
            I am passionate about leveraging data and machine learning 
            to drive smarter business decisions.
          </p>

        </div>
      </motion.div>
    </section>
  );
}