import Career from './Career';
import Education from './Education';
import Project from './Project';

const Introduction = () => {
  return (
    <section className='relative bg-[#161616] w-full flex p-6 gap-14 z-1 max-md:flex-col max-md:gap-0 max-ls:gap-5 max-xl:gap-10'>
      <div className='flex flex-col flex-2 gap-60 pb-20'>
        <div id='career' className='w-[1280px] mx-auto max-xl:w-full max-xl:mx-0'>
          <Career />
        </div>
        <div id='project' className='w-[1280px] mx-auto max-xl:w-full max-xl:mx-0'>
          <Project />
        </div>
        <div id='education' className='w-[1280px] mx-auto max-xl:w-full max-xl:mx-0'>
          <Education />
        </div>
      </div>
    </section>
  );
};

export default Introduction;
