import React from "react";
// import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { research } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ResearchCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full card hover:shadow-[0_35px_60px_-15px_rgba(237, 228, 228,1)]'>
      {/* <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full bg-gray'
      > */}
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          {/* <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2'
              />
            </div>
          </div> */}
        </div>

        <div className='mt-5'>
          <h3 className='text-secondary font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-white text-[14px]'>{description}</p>
        </div>

        {/* <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              // key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div> */}
        <div className='mt-4 my-auto flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              // className={`inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}
              className={`text-[14px] text-secondary`}
            >
              <span className='text-white'>#</span>{tag}
            </p>
          ))}
            {/* <div className='absolute inset-0 flex justify-end card-img_hover'> */}
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="block h-12 w-12 cursor-pointer ml-auto "
              // className="absolute bottom-0 right-0 h-12 w-12 cursor-pointer"
              // className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2'
              />
            </div>
          {/* </div> */}
        </div>
      {/* </Tilt> */}
    </motion.div>
  );
};

const Research = () => {
  return (
    <>
      {/* <div className='backdrop-blur-sm'> */}
      <div>
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionHeadText}`}>Research<span className='text-secondary'>.</span></h2>
        </motion.div>

        <div className='w-full flex'>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-3 text-white text-[17px] max-w-3xl leading-[30px]'
          >

            The following research display my experience and experience with different programming languages and concepts.
          </motion.p>
        </div>
      </div>


      <div className='mt-20 flex flex-wrap gap-7 backdrop-blur-sm'>
        {research.map((research, index) => (
          <ResearchCard key={`project-${index}`} index={index} {...research} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Research, "research");