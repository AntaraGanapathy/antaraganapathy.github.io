import { styles } from '../styles'
import { TypeAnimation } from 'react-type-animation';


const Home = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>

        <div className=' block space-y-28'>
          <div><h1 className={`${styles.headingText}text-white backdrop-blur-sm`}>Hi! My name is <span className='text-[#21D19F]'>Antara</span></h1></div>
          <div className='backdrop-blur-sm'>
            <TypeAnimation
              className={`${styles.headingText} text-white mt-1000`}
              sequence={[
                "I am a developer",
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