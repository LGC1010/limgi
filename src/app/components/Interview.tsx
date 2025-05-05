import { motion } from 'framer-motion';
import React from 'react';

const Interview = () => {
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
      className='relative'
    >
      <h3 className='text-4xl font-black pb-1.5 mb-12 border-b-white border-b-[1px] text-white max-md:mb-4'>
        Interview
      </h3>
      <div className='w-[1200px] flex flex-col items-center max-xl:w-full'>
        <ul className='text-white flex flex-col gap-10 max-md:gap-4 max-lg:gap-6 w-[800px] max-lg:w-full'>
          <li>
            <div className=''>
              <div className='py-4'>
                <strong className='text-lg max-md:text-[14px]'>왜 프론트엔드로 전향하셨나요?</strong>
              </div>
              <p className='bg-[#444] rounded-[10px] p-6 text-xl font-semibold line-clamp-[1.38] max-md:text-[11px] max-lg:text-[16px] max-lg:p-3'>
                웹 퍼블리셔로 UI 구현을 해오며 사용자 중심의 화면 구성에 익숙해졌고, 기능 개발에 대한 흥미로
                프론트엔드로 전향하게 되었습니다.
              </p>
            </div>
          </li>
          <li>
            <div className=''>
              <div className='py-4'>
                <strong className='text-lg max-md:text-[14px]'>일하면서 가장 중요하게 생각하는 가치는?</strong>
              </div>
              <p className='bg-[#444] rounded-[10px] p-6 text-xl font-semibold line-clamp-[1.38] max-md:text-[11px] max-lg:text-[16px] max-lg:p-3'>
                사용자 경험을 우선으로 생각하며, 팀 내 협업과 꾸준한 피드백을 중시합니다.
              </p>
            </div>
          </li>
          <li>
            <div className=''>
              <div className='py-4'>
                <strong className='text-lg max-md:text-[14px]'>어떻게 성장하고 있나요?</strong>
              </div>
              <p className='bg-[#444] rounded-[10px] p-6 text-xl font-semibold line-clamp-[1.38] max-md:text-[11px] max-lg:text-[16px] max-lg:p-3'>
                React를 기반으로 Vue, Java, React Native 등 다양한 기술을 학습하며 프론트엔드뿐 아니라 최신 기술
                트렌드에 맞춰 개발 역량을 넓혀가고 있습니다.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Interview;
