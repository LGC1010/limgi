import { motion } from 'framer-motion';
import React from 'react';

const Career = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      transition={{
        duration: 0.6,
        ease: 'easeOut'
      }}
      className='h-[1000px] w-full flex justify-between'
    >
      <div className='text-white mr-6 sticky top-10 flex flex-col gap-3 w-auto h-screen overflow-[none] max-md:flex-row max-md:bg-mainBlack max-md:z-[2] max-md:py-3 max-md:top-0 max-md:w-full max-md:h-auto max-md:overflow-y-scroll max-md:backdrop-blur-md'>
        <h2 className='text-white text-[60px] font-semibold'>CAREER</h2>
      </div>
      <div className=' h-full w-[60%]'>
        <ul className='flex flex-wrap'>
          <li className='relative w-[calc(50%-7.064%)] h-[31.7vw] bg-[#444] rounded-[17px] mr-[14.128%] flex justify-center pt-[100px]'>
            <p className='text-white text-3xl font-bold'>ELIF 홈페이지 구축</p>
            <p className='absolute bottom-4 left-4 text-white'>2022.09</p>
            <div className='absolute bg-[#444] top-0 left-0 w-full h-full rounded-[17px] opacity-0 p-4'>
              <ul>
                <li>웹 표준과 접근성에 맞춰 웹 사이트 퍼블리싱</li>
              </ul>
            </div>
          </li>
          <li className='relative w-[calc(50%-7.064%)] h-[31.7vw] bg-[linear-gradient(123deg,#050505_0%,#222_100%)] rounded-[18px] mt-[180px]'></li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Career;
