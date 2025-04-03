import { motion } from 'framer-motion';
import React from 'react';

const Education = () => {
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
      <div className='text-white mr-6 sticky top-10 flex flex-col gap-3 w-auto h-screen bg-[#1616166b] max-md:flex-row max-md:bg-mainBlack max-md:z-[2] max-md:py-3 max-md:top-0 max-md:w-full max-md:h-auto'>
        <h2 className='text-white text-[60px] font-semibold max-md:text-5xl'>EDUCATION</h2>
      </div>
      <div className='h-full w-[60%] max-md:w-full'>
        <ul className='flex flex-wrap'>
          <li className="card relative w-[calc(50%-7.064%)] h-[450px] rounded-[17px] overflow-hidden mr-[14.128%] bg-[url('/nbcamp.png')] bg-no-repeat bg-center bg-cover flex justify-center pt-[100px] px-2 max-md:mr-[7%] max-md:w-[calc(50%-3.5%)] max-md:h-[320px]">
            <p className='absolute bottom-4 left-4 text-[#444]'>2024.07 ~ 2024.11</p>
            <div className="absolute top-0 left-0 w-full h-full back_card bg-[url('/nbcamp.png')] bg-no-repeat bg-center bg-cover transition-all ease-in duration-300 flex items-center justify-center rounded-[17px] opacity-0 p-4 text-white">
              <div className='relative z-10'>
                <p className='mb-6 text-white text-3xl text-center font-bold max-md:text-xl'>내일배움캠프</p>
                <p className='text-white text-center text-xl font-semibold max-md:text-lg'>프론트엔드 6기 과정 수료</p>
                <ul className='text-[#a6a6a6] list-disc ml-4.5 mt-2'>
                  <li>프론트엔드 기본과 심화학습 습득</li>
                  <li>다양한 커리큘럼과 팀 프로젝트를 경험</li>
                  <li>최종 프로젝트 대상 수상</li>
                </ul>
              </div>
              <div className='thumb'></div>
            </div>
          </li>
          <li className="card relative w-[calc(50%-7.064%)] h-[450px] bg-[#444] rounded-[18px] overflow-hidden mt-[180px] bg-[url('/green_academy.png')] bg-no-repeat bg-center bg-cover flex justify-center pt-[100px] px-2 max-md:w-[calc(50%-3.5%)] max-md:h-[320px]">
            <p className='absolute bottom-4 left-4 text-[#444]'>2020.03 ~ 2020.07</p>
            <div className="absolute bg-[#444] top-0 left-0 w-full h-full back_card bg-[url('/green_academy.png')] bg-no-repeat bg-center bg-cover transition-all ease-in duration-300 flex items-center justify-center rounded-[17px] opacity-0 p-4">
              <div className='relative z-10'>
                <p className='mb-6 text-white text-3xl text-center font-bold max-md:text-xl'>그린아카데미</p>
                <p className='text-white text-xl font-semibold'>웹 퍼블리셔 교육 수료</p>
                <ul className='text-[#a6a6a6] list-disc ml-4.5 mt-2'>
                  <li>협업과 실무 역량 학습 </li>
                  <li>기획, 디자인, 퍼블리싱 학습</li>
                </ul>
              </div>
              <div className='thumb'></div>
            </div>
          </li>
          <li className='card relative w-[calc(50%-7.064%)] h-[450px] bg-[#444] rounded-[18px] overflow-hidden flex justify-center pt-[100px] px-2 max-md:mr-[7%] max-md:w-[calc(50%-3.5%)] max-md:h-[320px] max-md:mt-[-120px]'>
            <p className='text-white text-3xl font-bold max-md:text-xl'>창원문성대학교</p>
            <p className='absolute bottom-4 left-4 text-white'>2016.03 ~ 2020.02</p>
            <div className='absolute bg-[#444] top-0 left-0 w-full h-full back_card transition-all ease-in duration-300 flex items-center justify-between rounded-[17px] opacity-0 p-4'>
              <div className='relative z-10'>
                <p className='mb-6 text-white text-3xl font-bold max-md:text-xl'>창원문성대학교 졸업</p>
                <ul className='text-[#a6a6a6] list-disc ml-4.5 mt-2'>
                  <li>프로그래밍 언어, 자료구조 등 기초 필수 과목 학습</li>
                  <li>실무 &amp; 프로젝트 경험</li>
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

export default Education;
