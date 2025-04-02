'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';
import LanguageTab from './Language';
import FrontEndTab from './FrontEndTab';
import EtcTab from './EtcTab';

const tabs = [
  { id: 1, label: 'Language', component: <LanguageTab /> },
  { id: 2, label: 'FrontEnd', component: <FrontEndTab /> },
  { id: 3, label: 'ETC', component: <EtcTab /> }
];

const Skill = () => {
  const [activeTab, setActiveTab] = useState(1);
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
    >
      <h3 className='text-4xl font-black text-superLightGray pb-[2rem] text-white'>Skill</h3>
      <div className='flex max-md:block'>
        <div className='flex flex-col max-md:block'>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-4 max-w-[180px] ${
                activeTab === tab.id ? 'border-b-2 border-white font-bold text-white' : 'text-gray-400'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className='mt-4'>{tabs.find((tab) => tab.id === activeTab)?.component}</div>
      </div>
    </motion.div>
  );
};

export default Skill;
