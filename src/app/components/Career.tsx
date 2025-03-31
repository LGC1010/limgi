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
      className='w-full flex justify-between'
    >
      <div className='text-white mr-6 sticky top-10 flex flex-col gap-3 w-auto h-screen overflow-[none] max-md:flex-row max-md:bg-mainBlack max-md:z-[2] max-md:py-3 max-md:top-0 max-md:w-full max-md:h-auto max-md:overflow-y-scroll max-md:backdrop-blur-md'>
        <h2 className='text-white text-[60px] font-semibold'>CAREER</h2>
      </div>
      <div className='h-full w-[60%]'>
        <ul className='flex flex-wrap'>
          <li className='card relative w-[calc(50%-7.064%)] h-[31.7vw] bg-[#444] rounded-[17px] mr-[14.128%] flex justify-center pt-[100px]'>
            <p className='text-white text-3xl text-center font-bold'>
              ELIF
              <br />
              홈페이지 구축
            </p>
            <p className='absolute bottom-4 left-4 text-white'>2022.09</p>
            <div className='absolute bg-[#444] top-0 left-0 w-full h-full back_card transition-all ease-in duration-300 rounded-[17px] opacity-0 p-4 text-white'>
              <p className='text-white text-xl font-semibold'>ELIF 홈페이지 퍼블리싱 작업</p>
              <ul className='text-[#a6a6a6] list-disc ml-4.5 mt-2'>
                <li>디자이너와 개발자와 협업하여 원활한 커뮤니케이션 진행</li>
                <li>접근성을 고려한 퍼블리싱 작업 수행</li>
              </ul>
            </div>
          </li>
          <li className='card relative w-[calc(50%-7.064%)] h-[31.7vw] bg-[#444] rounded-[18px] mt-[180px] flex justify-center pt-[100px]'>
            <p className='text-white text-3xl text-center font-bold'>
              FREDIT
              <br />
              홈페이지 고도화
            </p>
            <p className='absolute bottom-4 left-4 text-white'>2022.11</p>
            <div className='absolute bg-[#444] top-0 left-0 w-full h-full back_card transition-all ease-in duration-300 rounded-[17px] opacity-0 p-4'>
              <p className='text-white text-xl font-semibold'>FREDIT 홈페이지 모바일 고도화 작업</p>
              <ul className='text-[#a6a6a6] list-disc ml-4.5 mt-2'>
                <li>디자이너와 개발자와 협업하여 원활한 커뮤니케이션 진행</li>
                <li>접근성을 고려한 퍼블리싱 작업 수행</li>
              </ul>
            </div>
          </li>
          <li className='card relative w-[calc(50%-7.064%)] h-[31.7vw] bg-[#444] rounded-[18px] flex justify-center pt-[100px]'>
            <p className='text-white text-3xl font-bold'>SSG몰 운영</p>
            <p className='absolute bottom-4 left-4 text-white'>2023.1</p>
            <div className='absolute bg-[#444] top-0 left-0 w-full h-full back_card transition-all ease-in duration-300 rounded-[17px] opacity-0 p-4'>
              <p className='text-white text-xl font-semibold'>SSG 운영 프로젝트</p>
              <ul className='text-[#a6a6a6] list-disc ml-4.5 mt-2'>
                <li>디자이너, 개발자, 기획자와 협업하여 원활한 커뮤니케이션 진행</li>
                <li>접근성을 고려한 퍼블리싱 작업 수행</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Career;
