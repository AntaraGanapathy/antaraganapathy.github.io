// import { motion } from 'framer-motion';

import { styles } from '../styles'
import { TypeAnimation } from 'react-type-animation';

// import { Stars } from "./canvas";

const Home = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        {/* <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div> */}

        <div className=' block space-y-28'>
          <div><h1 className={`${styles.headingText} text-white`}>Hi! My name is <span className='text-[#21D19F]'>Antara</span></h1></div>
          <div>
            <TypeAnimation
              className={`${styles.headingText} text-white mt-1000`}
              sequence={[
                'I am a developer',
                2000, 
                'I am a student',
                2000,
                'I am a something',
                2000,
              ]}
              wrapper="span"
              speed={10}
              repeat={Infinity}
            />
          </div>
          {/* <h1 className={`${styles.heroHeadText} text-white`}>I am a <span className='text-[#915eff]'></span></h1> */}
          {/* <h1 className={`${styles.heroSubText} mt-2 text-white-100`}> Lorem ipsum dolor sit amet, <br className='sm:block hidden' /> consectetur adipiscing elit </h1> */}
        </div>

      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className={`${styles.scroll1}`}>
            <div className={`${styles.scroll2}`}></div>
          </div>
        </a>
      </div>

    </section>

  );
};

export default Home