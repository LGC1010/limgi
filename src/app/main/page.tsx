'use client';

import React, { useEffect, useState } from 'react';
import Profile from '../components/Profile';
import { AnimatePresence, motion } from 'framer-motion';

const Main = () => {
  const [moveUp, setMoveUp] = useState(false);

  // useEffect(() => {
  //   const timer1 = setTimeout(() => setMoveUp(true), 3500); // 2초 후 텍스트 위로 이동

  //   return () => {
  //     clearTimeout(timer1);
  //   };
  // }, []);
  return (
    <main className='h-screen flex items-center flex-col justify-between bg-[#efeff1] px-10 pt-10 sticky top-0 overflow-hidden max-sm:h-screen max-sm:pt-5 max-sm:px-5'>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={moveUp ? { opacity: 1 } : {}}
          transition={{ duration: 2 }}
          className='absolute bg-cover bg-main top-0 bottom-0 left-0 right-0 z-[-1]'
        ></motion.div>
      </AnimatePresence>
      <Profile />
    </main>
  );
};

export default Main;
