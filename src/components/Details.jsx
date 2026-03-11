import React from "react";
import { motion } from "framer-motion";
import { Code, Shield, Cpu, Palette } from "lucide-react";

const skills = [
  "React",
  "JavaScript (ES6+)",
  "Three.js",
  "HTML5",
  "CSS3",
  "Node.js",
  "UI Design",
  "Linux",
  "Python",
];

const Details = () => {
  return (
    <section
      id="details"
      className="relative min-h-screen w-full flex items-center justify-center py-24 px-6"
    >
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-20 items-start">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-1 bg-blue-500"></div>

            <div className="w-8 h-8 border-2 border-blue-500 rounded-sm flex items-center justify-center">
              <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            About Me
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            I'm Emir, a developer and student from Turkey. My work focuses on
            modern web development, UI animation, and cyber security.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed">
            I enjoy creating interactive digital experiences and experimenting
            with new technologies. Coding allows me to quickly transform ideas
            into real, functional products.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed">
            Outside development I enjoy music, gaming and building creative
            projects that push my skills further.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-lg font-semibold transition"
          >
            Send me a message →
          </a>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div className="flex items-center gap-3">
            <Cpu className="text-blue-400" />
            <h3 className="text-4xl font-bold">Skills & Technologies</h3>
          </div>

          <p className="text-gray-400 text-lg">
            These are some of the tools and technologies I use while building
            modern web experiences.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">

            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-[#0b0f19] border border-blue-500/30 rounded-lg px-4 py-3 text-blue-400 font-medium text-center hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition"
              >
                {skill}
              </motion.div>
            ))}

          </div>

          {/* EXTRA INFO CARDS */}
          <div className="grid sm:grid-cols-3 gap-4 pt-6">

            <div className="bg-[#0b0f19] p-4 rounded-lg border border-blue-500/20">
              <Code className="text-blue-400 mb-2" />
              <p className="text-sm text-gray-400">
                Building interactive and scalable web applications.
              </p>
            </div>

            <div className="bg-[#0b0f19] p-4 rounded-lg border border-blue-500/20">
              <Palette className="text-blue-400 mb-2" />
              <p className="text-sm text-gray-400">
                Creating modern UI and smooth user experiences.
              </p>
            </div>

            <div className="bg-[#0b0f19] p-4 rounded-lg border border-blue-500/20">
              <Shield className="text-blue-400 mb-2" />
              <p className="text-sm text-gray-400">
                Interest in cyber security and system architecture.
              </p>
            </div>

          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Details;