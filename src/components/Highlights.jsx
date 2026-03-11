import React from "react";
import { motion } from "framer-motion";

const highlights = [
  {
    title: "Human Resources Application Form",
    description:
      "It is an example of HR application development. The project is entirely a demo.",
    tag: "PHP",
    link: "https://ikbasvuruemirtahayilmaz.infinityfree.me/",
  },
  {
    title: "Cmd Music Downloader",
    description:
      "Music download system via user-friendly terminal developed with Python.",
    tag: "Python",
    link: "https://github.com/emryboi/cmdmusicdownloader",
  },
  {
    title: "Personal Website V2",
    description: "Development project. Stay chill C:",
    tag: "Vue",
    link: "https://github.com/emryboi/illuminaweb",
  },
];

const tagColors = {
  PHP: "from-blue-400 to-blue-600",
  Python: "from-purple-400 to-purple-600",
  Vue: "from-green-400 to-green-600",
};

const Highlights = () => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center py-24 px-6">
      <div className="max-w-7xl w-full mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3">
            Highlights
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of my recent projects, open source contributions, and
            things I&apos;ve learned.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {highlights.map((item, idx) => {
            const CardContent = (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-[#0b0f19] border border-blue-500/30 rounded-2xl p-8 shadow-lg 
                           hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:-translate-y-1 
                           transition-all duration-300 flex flex-col justify-between h-full cursor-pointer"
              >
                {/* Tag */}
                <span
                  className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${tagColors[item.tag]} text-white font-semibold tracking-wide`}
                >
                  {item.tag}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mt-2">{item.title}</h3>

                {/* Description */}
                <p className="text-gray-400 text-base leading-relaxed mt-2 flex-1">
                  {item.description}
                </p>

                {/* Optional button */}
                {item.link && (
                  <span className="mt-4 text-blue-400 hover:text-blue-300 font-semibold">
                    Visit Project →
                  </span>
                )}
              </motion.div>
            );


            return item.link ? (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {CardContent}
              </a>
            ) : (
              <div key={idx}>{CardContent}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Highlights;