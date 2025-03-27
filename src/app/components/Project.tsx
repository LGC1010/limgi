'use client';

import data from '@/mock/data';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const tabs = ['전체', '팀', '개인'];

const Project = () => {
  const [selectedTab, setSelectedTab] = useState('전체');

  const filteredProjects = data.filter((project) => {
    switch (selectedTab) {
      case '개인':
        return !project.team;
      case '팀':
        return project.team;
      default:
        return true;
    }
  });

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
      className='h-[900px] w-full flex justify-between'
    >
      <div className='w-full'>
        <div className='flex gap-3 mb-6'>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-3.5 py-2.5 rounded-[55px] font-semibold min-w-[100px] ${
                selectedTab === tab ? 'bg-white text-gray-800' : 'border-white border  text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className='grid grid-cols-4 gap-4 pt-[3rem] h-auto max-md:pt-[3rem] max-lg:grid-cols-1 max-xl:grid-cols-2 max-2xl:grid-cols-3'>
          {filteredProjects.map((item) => (
            <div
              className='relative overflow-hidden flex flex-col justify-start gap-8 rounded bg-[#323232] h-[25rem] group transition-all hover:shadow-black hover:shadow-2xl hover:translate-y-[-5px]'
              key={item.id}
            >
              <div className='relative h-[45%]'>
                <Image src={item.image} alt={''} layout='fill' objectFit='cover'></Image>
              </div>
              <div className='text-white px-5'>
                <h3 className='text-2xl font-bold'>{item.title}</h3>
                <p className='opacity-50 mt-4'>{item.description}</p>
              </div>
              <div className='absolute bottom-2 left-5'>
                <ul className='flex'>
                  {item.stack.map((type, index) => (
                    <li key={index}>
                      <span>{type}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='text-white sticky top-10 flex flex-col gap-3 w-auto h-screen overflow-[none] max-md:flex-row max-md:bg-mainBlack max-md:z-[2] max-md:py-3 max-md:top-0 max-md:w-full max-md:h-auto max-md:overflow-y-scroll max-md:backdrop-blur-md'>
        <h3 className='text-[60px] font-bold'>PROJECT</h3>
      </div>
    </motion.div>
  );
};

export default Project;
