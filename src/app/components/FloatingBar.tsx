import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const FloatingBar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 7000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={show ? { opacity: 1 } : {}}
      transition={{ duration: 1, ease: 'easeOut' }}
      className='fixed bottom-6 right-4 flex flex-col z-20 gap-2 max-md:right-1 max-md:bottom-2'
    >
      <a
        href='https://github.com/LGC1010'
        className="w-[50px] h-[50px] bg-[url('/icon_github.svg')] bg-no-repeat bg-center bg-[auto_30px] shadow-lg bg-white flex items-center justify-center rounded-full p-3 max-md:w-[40px] max-md:h-[40px] max-md:bg-[auto_22px]"
      ></a>
      <button
        type='button'
        onClick={goToTop}
        className="w-[50px] h-[50px] bg-[url('/icon_arrow.png')] bg-no-repeat bg-center bg-[auto_16px] shadow-lg bg-white scale-y-[-1] flex items-center justify-center rounded-full p-3 max-md:w-[40px] max-md:h-[40px]"
      ></button>
    </motion.div>
  );
};

export default FloatingBar;
