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
      className='w-full flex justify-between max-md:flex-col'
    >
      <div className='mr-6 sticky top-10 flex flex-col gap-3 w-auto h-screen bg-[#1616166b] max-md:flex-row max-md:z-[2] max-md:py-3 max-md:top-0 max-md:w-full max-md:h-auto'>
        <h2 className='text-white text-[60px] font-semibold max-md:text-5xl'>CAREER</h2>
      </div>
      <div className='h-full w-[60%] max-md:w-full max-md:mt-6'>
        <ul className='flex flex-wrap'>
          <li className="card elif relative w-[calc(50%-7.064%)] h-[31.7vw] rounded-[17px] mr-[14.128%] bg-[url('/elif.png')] bg-no-repeat bg-center bg-cover flex justify-center pt-[100px] px-2 max-md:mr-[7%] max-md:w-[calc(50%-3.5%)] max-md:h-[320px]">
            <p className='absolute bottom-4 left-4 text-white'>2022.09</p>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center back_card bg-[url('/elif.png')] bg-no-repeat bg-center bg-cover transition-all ease-in duration-300 rounded-[17px] opacity-0 p-4 text-white">
              <div className='relative z-10'>
                <p className='mb-6 text-white text-3xl text-center font-bold max-md:text-xl'>
                  ELIF
                  <br />
                  홈페이지 구축
                </p>
                <p className='text-white text-xl font-semibold max-md:text-[16px]'>ELIF 홈페이지 퍼블리싱 작업</p>
                <ul className='text-[#a6a6a6] list-disc ml-4.5 mt-2 max-md:text-[12px]'>
                  <li>디자이너와 개발자와 협업하여 원활한 커뮤니케이션 진행</li>
                  <li>접근성을 고려한 퍼블리싱 작업 수행</li>
                </ul>
              </div>
              <div className='thumb'></div>
            </div>
          </li>
          <li className="card fredit relative w-[calc(50%-7.064%)] h-[31.7vw] bg-[url('/fredit.png')] bg-no-repeat bg-center bg-cover rounded-[18px] mt-[180px] flex justify-center pt-[100px] px-2 max-md:w-[calc(50%-3.5%)] max-md:h-[320px]">
            <p className='absolute bottom-4 left-4 text-white'>2022.11</p>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center back_card bg-[url('/fredit.png')] bg-no-repeat bg-center bg-cover transition-all ease-in duration-300 rounded-[17px] opacity-0 p-4">
              <div className='relative z-10'>
                <p className='mb-6 text-white text-3xl text-center font-bold max-md:text-xl'>
                  FREDIT
                  <br />
                  홈페이지 고도화
                </p>
                <p className='text-white text-xl font-semibold max-md:text-[16px]'>
                  FREDIT 홈페이지 모바일 고도화 작업
                </p>
                <ul className='text-[#a6a6a6] list-disc ml-4.5 mt-2 max-md:text-[12px]'>
                  <li>디자이너와 개발자와 협업하여 원활한 커뮤니케이션 진행</li>
                  <li>접근성을 고려한 퍼블리싱 작업 수행</li>
                </ul>
              </div>
              <div className='thumb'></div>
            </div>
          </li>
          <li className="card relative w-[calc(50%-7.064%)] h-[31.7vw] bg-[url('/ssg.jpg')] bg-no-repeat bg-center bg-cover rounded-[18px] flex justify-center pt-[100px] px-2 max-md:mr-[7%] max-md:w-[calc(50%-3.5%)] max-md:h-[320px] max-md:mt-[-120px]">
            <p className='absolute bottom-4 left-4 text-white'>2023.1</p>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center back_card bg-[url('/ssg.jpg')] bg-no-repeat bg-center bg-cover  transition-all ease-in duration-300 rounded-[17px] opacity-0 p-4">
              <div className='relative z-10'>
                <p className='mb-6 text-white text-3xl font-bold max-md:text-xl'>SSG몰 운영</p>
                <p className='text-white text-xl font-semibold max-md:text-[16px]'>SSG 운영 프로젝트</p>
                <ul className='text-[#a6a6a6] list-disc ml-4.5 mt-2 max-md:text-[12px]'>
                  <li>디자이너, 개발자, 기획자와 협업하여 원활한 커뮤니케이션 진행</li>
                  <li>접근성을 고려한 퍼블리싱 작업 수행</li>
                </ul>
              </div>
              <div className='thumb'></div>
            </div>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Career;
