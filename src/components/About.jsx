import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const About = () => {
  return (
    <div className='backdrop-blur-sm'>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
        <h2 className={styles.sectionHeadText}>Overview<span className='text-secondary'>.</span></h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-white text-[17px] max-w-3xl leading-[30px]'
      >
        I am a first-year student at the <span className='text-secondary'>University of Manchester</span> studying <span className='text-secondary'>Computer Science</span>. 
        As an aspiring tech entrepreneur, my aim is <span className='text-secondary'>to leverage technology to solve problems at scale</span>. 
        With a strong belief in  <span className='italic'>learning by doing</span>, I have contanly sought out opportunities over the years to further my tech skills.
      </motion.p>
    </div>
  );
};

export default SectionWrapper(About, "about");