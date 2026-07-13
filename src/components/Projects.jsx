import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  source_code_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      whileHover={{ y: -6 }}
      className="w-full h-full p-[1.5px] rounded-2xl bg-gradient-to-br from-tertiary to-transparent hover:from-secondary hover:to-secondary/20 transition-all duration-500 shadow-lg hover:shadow-[0_0_25px_rgba(33,209,159,0.15)] cursor-pointer group"
    >
      <div className="bg-[#12141c]/95 backdrop-blur-md p-6 rounded-[15px] h-full flex flex-col justify-between min-h-[260px]">
        <div>
          <div className="flex justify-between items-center w-full gap-4 mb-4">
            <h3 className="text-white font-bold text-[22px] tracking-tight transition-colors duration-300">
              {name}
            </h3>

            <a
              href={source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex justify-center items-center cursor-pointer bg-black/40 hover:bg-secondary/20 border border-transparent hover:border-secondary transition-all duration-300 shrink-0 shadow-md"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </a>
          </div>

          <p className="mt-3 text-slate-300 text-[14px] leading-[22px] font-normal">
            {description}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={`${name}-${tag}`}
              className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-[#252836]/40 text-secondary border border-secondary/10 group-hover:border-secondary/30 transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <div>
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionHeadText}`}>
            Projects<span className="text-secondary">.</span>
          </h2>
        </motion.div>

        <div className="w-full flex">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-white text-[17px] max-w-3xl leading-[30px]"
          >
            The following projects display my experience and proficiency with different programming languages and concepts.
          </motion.p>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 w-full">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
