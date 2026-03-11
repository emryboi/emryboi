import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const projectData = [
  {
    title: "A technology without borders",
    description:
      "Empowering ideas to transcend geography, language, and limitations — crafting digital experiences that connect people, not just devices.",
    link: "#",
  },
];

const matrixText = `> Booting website engine...
> Loading core modules...

[01/07] Initializing UI framework...
[02/07] Loading design system...
[03/07] Importing components...

✔ Navbar.jsx loaded
✔ Hero.jsx loaded
✔ Projects.jsx loaded
✔ Footer.jsx loaded

[04/07] Connecting API...
✔ API connection established

[05/07] Fetching project data...
✔ Data received

[06/07] Optimizing assets...
✔ Images optimized
✔ Fonts cached
✔ Scripts bundled

[07/07] Starting render engine...

> Website deployed successfully.
> All systems operational.

status: ONLINE
`;

const TypingTerminal = ({ text }) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i));
      i++;

      if (i > text.length) clearInterval(interval);
    }, 18);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="bg-[#0b0f19] rounded-xl shadow-2xl border border-blue-500 w-full max-w-md overflow-hidden">

      {/* terminal header */}
      <div className="flex items-center gap-2 px-4 py-2 border-b border-blue-500 bg-[#0b0f19]">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>

        <span className="ml-3 text-xs text-gray-400 font-mono">
          emryboi
        </span>
      </div>

      {/* terminal content */}
      <div className="p-5 font-mono text-blue-400 text-sm h-[320px] overflow-auto">
        <pre className="whitespace-pre-wrap">{displayed}</pre>
      </div>
    </div>
  );
};

const Projects = () => {
  const currentProject = projectData[0];

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl w-full mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            className="space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-1 bg-blue-500"></div>

              <div className="w-8 h-8 border-2 border-blue-500 rounded-sm flex items-center justify-center">
                <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
              </div>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-lg">
              {currentProject.title}
            </h2>

            <p className="text-gray-400 text-lg max-w-md">
              {currentProject.description}
            </p>

            <a href="#details">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-2 px-6 py-3 bg-blue-500 text-white font-semibold rounded-md"
              >
                Continue
                <ArrowDown
                  className="transition-transform duration-300 group-hover:translate-y-1"
                  size={20}
                />
              </motion.button>
            </a>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <TypingTerminal text={matrixText} />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Projects;