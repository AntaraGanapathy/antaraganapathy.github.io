import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { research } from "../constants";
import { textVariant } from "../utils/motion";

const ResearchCard = ({
    title,
    journal,
    description,
    date,
    url,
}) => {
    return (
        <div class=" max-w-5xl p-6 border border-primary rounded-lg shadow bg-tertiary hover:border-secondary">
            <h3 className='font-bold text-[24px]'>{title}</h3>
            <p className="mt-2 mb-3 text-secondary text-[16px] italic">{journal}<span className="text-white">, {date}</span></p>
            <p className="mt-2 mb-3 text-white text-[16px]">{description}</p>
            <a href={url} target="_blank" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-black ">
                Read more
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </a>
        </div>
    );
};

const Research = () => {
    return (
        <>
            <div>
                <motion.div variants={textVariant()}>
                    <h2 className={`${styles.sectionHeadText}`}>Research<span className='text-secondary'>.</span></h2>
                </motion.div>
            </div>

            <div className='mt-20 flex justify-center gap-7 backdrop-blur-sm'>
                {research.map((research, index) => (
                    <ResearchCard key={`project-${index}`} index={index} {...research} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Research, "research");