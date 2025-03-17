import { motion } from 'framer-motion';
import React from 'react';

const Skill = () => {
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
      <h3 className='text-4xl font-black text-superLightGray pb-[2rem]'>Skill &amp; Tools</h3>
      <div>
        <ul className='flex'>
          <li>
            <strong>FrontEnd</strong>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </li>
          <li>
            <strong>Tools</strong>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Skill;
