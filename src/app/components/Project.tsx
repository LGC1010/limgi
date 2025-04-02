'use client';

import data from '@/mock/data';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ModalPoultry from './ModalPoultry';
import ModalMonggle from './ModalMonggle';
import ModalGuel from './ModalGuel';
import Modal from './Modal';
import useModal from '@/utils/modal/useModal';
import { ProjectItem } from '@/types/project';

const tabs = ['전체', '팀', '개인'];

const Project = () => {
  const [selectedTab, setSelectedTab] = useState('전체');
  const { isOpen, modalContent, openModal, closeModal } = useModal();

  const handlePopup = (item: ProjectItem) => {
    // 각 프로젝트 타입에 맞는 컴포넌트 전달
    if (item.type === 'poultry') {
      openModal(<ModalPoultry />);
    } else if (item.type === 'geul') {
      openModal(<ModalGuel />);
    } else if (item.type === 'monggle') {
      openModal(<ModalMonggle />);
    }
  };

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
    <>
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
        className='w-full flex justify-between max-md:flex-col-reverse'
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
                className='card relative overflow-hidden flex flex-col justify-start gap-8 rounded bg-[#323232] h-[25rem] group transition-all hover:shadow-black hover:shadow-2xl hover:translate-y-[-5px]'
                key={item.id}
              >
                {item.image ? (
                  <div className='relative h-[45%]'>
                    <Image src={item.image} alt={''} layout='fill' objectFit='cover'></Image>
                  </div>
                ) : (
                  <div className='pb-3'></div>
                )}
                <div className='text-white px-5'>
                  <h3 className='text-2xl font-bold'>{item.title}</h3>
                  <p className='opacity-50 mt-4'>{item.description}</p>
                </div>
                <div className='absolute bottom-2 left-5'>
                  <ul className='flex gap-2'>
                    {item.stack.map((type, index) => (
                      <li key={index} className='bg-[#0f1418] rounded-md'>
                        <span className='flex justify-center items-center px-2 py-1 text-[12px] text-white'>
                          {type}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='back_card transition-all opacity-0 absolute top-0 left-0 w-full h-full bg-[#323232] flex flex-col items-center justify-center'>
                  <p className='text-center text-2xl text-white font-medium mb-6'>{item.subTitle}</p>
                  <a
                    href={item.github}
                    target='blank'
                    className='text-white px-4 py-2 mb-4 min-w-[200px] text-center border-white border-1 hover:bg-white hover:text-black'
                  >
                    GITHUB
                  </a>
                  <button
                    className='text-white px-4 py-2 min-w-[200px] text-center border-white border-1 hover:bg-white hover:text-black'
                    onClick={() => handlePopup(item)}
                  >
                    VIEW MORE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='text-white sticky top-10 flex flex-col gap-3 w-auto h-screen overflow-[none] bg-[#1616166b] max-md:flex-row max-md:bg-mainBlack max-md:z-[2] max-md:py-3 max-md:top-0 max-md:w-full max-md:h-auto'>
          <h3 className='max-lg:text-5xl text-[60px] font-bold max-md:text-5xl'>PROJECT</h3>
        </div>
      </motion.div>
      <Modal isOpen={isOpen} onClose={() => closeModal()}>
        {modalContent}
      </Modal>
    </>
  );
};

export default Project;
