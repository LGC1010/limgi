'use client';

import data from '@/mock/data';
import React, { useState } from 'react';
import Image from 'next/image';

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
    <div className='h-[900px] w-full'>
      <div>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`px-4 py-2 rounded-lg font-semibold border ${
              selectedTab === tab ? 'bg-black text-white' : 'bg-gray-100 text-gray-800'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      {filteredProjects.map((item) => (
        <ul key={item.id}>
          <li>
            <div>
              <Image src={item.image} alt={''} width={100} height={100} />
            </div>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Project;
