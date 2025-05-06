import { motion } from 'framer-motion';
import ReactECharts from 'echarts-for-react';
import option from '@/mock/chart';

const Skill = () => {
  const handleChartSize = (chart: { resize: () => void }) => {
    window.addEventListener('resize', () => {
      chart.resize();
    });
  };

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
      <h3 className='text-4xl font-black pb-[2rem] text-white'>Skill</h3>
      <div className='w-[900px] max-xl:w-full mx-auto mt-20 max-md:mt-6'>
        <ReactECharts option={option} onChartReady={handleChartSize} style={{ height: '400px', width: '100%' }} />
      </div>
    </motion.div>
  );
};

export default Skill;
