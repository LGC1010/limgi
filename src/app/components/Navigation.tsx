import React from 'react';

const Navigation = ({ activeSection }: { activeSection: string }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className='sticky top-10 flex flex-col gap-3 w-auto h-screen overflow-[none] max-md:flex-row max-md:bg-mainBlack max-md:z-[2] max-md:py-3 max-md:top-0 max-md:w-full max-md:h-auto max-md:overflow-y-scroll max-md:backdrop-blur-md'>
      <button
        onClick={() => scrollToSection('career')}
        className={`text-left ${activeSection === 'career' ? 'text-white font-bold' : 'text-gray-500'}`}
      >
        Career
      </button>
      <button
        onClick={() => scrollToSection('project')}
        className={`text-left ${activeSection === 'project' ? 'text-white font-bold' : 'text-gray-500'}`}
      >
        Project
      </button>
      <button
        onClick={() => scrollToSection('education')}
        className={`text-left ${activeSection === 'education' ? 'text-white font-bold' : 'text-gray-500'}`}
      >
        Education
      </button>
    </nav>
  );
};

export default Navigation;
