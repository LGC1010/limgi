import React from 'react';
import Profile from './Profile';

const Main = () => {
  return (
    <main className='h-screen flex items-end justify-center bg-[#efeff1] px-10 pt-10 sticky top-0 overflow-hidden max-sm:h-screen max-sm:pt-5 max-sm:px-5'>
      <Profile />
    </main>
  );
};

export default Main;
