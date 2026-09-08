import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { research } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ResearchCard = ({
  index,
  title,
  journal,
  description,
  date,
  url,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      whileHover={{ y: -6 }}
      className="w-full max-w-5xl p-[1.5px] rounded-2xl bg-gradient-to-br from-tertiary to-transparent hover:from-secondary hover:to-secondary/20 transition-all duration-500 shadow-lg hover:shadow-[0_0_25px_rgba(33,209,159,0.15)] cursor-pointer group"
    >
      <div className="bg-[#12141c]/95 backdrop-blur-md p-6 rounded-[15px] h-full flex flex-col justify-between">
        <div>
          <h3 className="text-white font-bold text-[24px] tracking-tight transition-colors duration-300">
            {title}
          </h3>
          
          <p className="mt-2 mb-3 text-secondary text-[16px] italic">
            {journal}<span className="text-white">, {date}</span>
          </p>

          <p className="mt-2 mb-4 text-slate-300 text-[16px] leading-[26px] font-normal">
            {description}
          </p>
        </div>

        <div>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-primary hover:bg-secondary/20 border border-transparent hover:border-secondary rounded-lg transition-all duration-300 focus:ring-4 focus:outline-none focus:ring-black shadow-md"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2 group-hover:translate-x-1 transition-transform duration-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Research = () => {
  return (
    <>
      <div>
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionHeadText}`}>
            Research<span className="text-secondary">.</span>
          </h2>
        </motion.div>
      </div>

      <div className="mt-20 flex justify-center gap-7 backdrop-blur-sm w-full">
        {research.map((item, index) => (
          <ResearchCard key={`research-${index}`} index={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Research, "research");