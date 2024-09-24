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
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full card border border-primary hover:border-secondary '>
      <div className='relative w-full h-[230px]'>
        <img
          src={image}
          alt='project_image'
          className='w-full h-full object-cover rounded-2xl'
        />
      </div>

      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>{name}</h3>
        <p className='mt-2 text-white text-[14px]'>{description}</p>
      </div>

      <div className='mt-4 my-auto flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <p
            key={`${name}-${tag.name}`}
            className={`text-[14px] text-secondary`}
          >
            <span className='text-white'>#</span>{tag}
          </p>
        ))}

        <a
          href={source_code_link}
          className="block h-12 w-12 cursor-pointer ml-auto "
        >
          <img
            src={github}
            alt='source code'
            className='w-1/2 h-1/2'
          />
        </a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <div>
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionHeadText}`}>Projects<span className='text-secondary'>.</span></h2>
        </motion.div>

        <div className='w-full flex'>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-3 text-white text-[17px] max-w-3xl leading-[30px]'
          >

            The following projects display my experience and experience with different programming languages and concepts.
          </motion.p>
        </div>
      </div>


      <div className='mt-20 flex flex-wrap gap-7 backdrop-blur-sm'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");