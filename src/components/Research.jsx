import React from "react";
// import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { research } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

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
            {/* <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            </a> */}
            {/* <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p> */}
            <p className="mt-2 mb-3 text-secondary text-[16px] italic">{journal},      {date}</p>
            <p className="mt-2 mb-3 text-white text-[16px]">{description}</p>
            <a href={url} target="_blank" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-black ">
                Read more
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </a>
        </div>
        //     <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        //         className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full card hover:shadow-[0_35px_60px_-15px_rgba(237, 228, 228,1)]'>
        //         {/* <Tilt
        //     options={{
        //       max: 45,
        //       scale: 1,
        //       speed: 450,
        //     }}
        //     className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full bg-gray'
        //   > */}
        //         <div className='relative w-full h-[230px]'>
        //             <img
        //                 src={image}
        //                 alt='project_image'
        //                 className='w-full h-full object-cover rounded-2xl'
        //             />

        //             {/* <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
        //         <div
        //           onClick={() => window.open(source_code_link, "_blank")}
        //           className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
        //         >
        //           <img
        //             src={github}
        //             alt='source code'
        //             className='w-1/2 h-1/2'
        //           />
        //         </div>
        //       </div> */}
        //         </div>

        //         <div className='mt-5'>
        //             <h3 className='text-secondary font-bold text-[24px]'>{name}</h3>
        //             <p className='mt-2 text-white text-[14px]'>{description}</p>
        //         </div>
        //         <div className='mt-4 my-auto flex flex-wrap gap-2'>
        //             {tags.map((tag) => (
        //                 <p
        //                     key={`${name}-${tag.name}`}
        //                     className={`text-[14px] text-secondary`}
        //                 >
        //                     <span className='text-white'>#</span>{tag}
        //                 </p>
        //             ))}
        //             <div
        //                 onClick={() => window.open(source_code_link, "_blank")}
        //                 className="block h-12 w-12 cursor-pointer ml-auto "
        //             >
        //                 <img
        //                     src={github}
        //                     alt='source code'
        //                     className='w-1/2 h-1/2'
        //                 />
        //             </div>
        //         </div>
        //     </motion.div>
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

            {/* <div className="flex justify-center mt-20 ">
                <div class=" max-w-5xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div> */}




            <div className='mt-20 flex justify-center gap-7 backdrop-blur-sm'>
                {research.map((research, index) => (
                    <ResearchCard key={`project-${index}`} index={index} {...research} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Research, "research");