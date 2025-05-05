import Image from 'next/image';
import React from 'react';

const ModalPortfolio = () => {
  return (
    <div className='relative w-full h-full modal_text_box p-8 max-md:w-full max-md:p-4'>
      <h2 className='py-[25px] text-[35px] font-medium text-white max-md:py-[10px] max-md:text-[22px]'>
        포트폴리오 웹 사이트
      </h2>
      <ul className='flex text-[24px] text-white'>
        <li className='py-[25px] mr-8 w-1/3 max-md:py-[10px] max-md:mr-4'>
          <strong className='text-[16px] pb-[20px] block font-semibold border-b-[1px] border-white max-md:pb-[10px] max-md:text-[14px]'>
            기간
          </strong>
          <ul className='text-[16px] pt-[20px] flex flex-wrap opacity-65 max-md:pt-[10px] max-md:text-[12px]'>
            <li>2025.03 ~ </li>
          </ul>
        </li>
        <li className='py-[25px] mr-8 w-1/3 max-md:py-[10px] max-md:mr-4'>
          <strong className='text-[16px] pb-[20px] block font-semibold border-b-[1px] border-white max-md:pb-[10px] max-md:text-[14px]'>
            참여인원
          </strong>
          <ul className='text-[16px] pt-[20px] flex flex-wrap opacity-65 max-md:pt-[10px] max-md:text-[12px]'>
            <li>1인</li>
          </ul>
        </li>
      </ul>
      <div className='flex justify-center'>
        <div className='relative w-full h-[350px] max-md:h-[150px]'>
          <Image src={'/portfolio_main.JPG'} alt={''} layout='fill' objectFit='contain'></Image>
        </div>
      </div>
      <div>
        <p className='text-2xl text-white max-md:text-[18px] font-medium'>웹 사이트 설명</p>
        <p className='text-lg leading-[33px] py-[10px] text-white max-md:text-[14px] max-md:leading-[22px]'>
          저의 고민과 성장 과정을 담은 인터랙티브 포트폴리오 사이트입니다. 프로젝트마다 어떤 역할을 했는지, 어떤 문제를
          해결했는지에 초점을 맞춰 설명하였으며, 방문자가 쉽고 빠르게 제 실력을 이해할 수 있도록 UI와 콘텐츠를
          구성하였으며 현재있는 기능 제외 계속 업데이트 예정입니다.
        </p>
      </div>
      <div className='mt-4'>
        <p className='text-2xl text-white max-md:text-[18px] font-medium'>주요 특징</p>
        <ul className='text-white mt-4 list-disc font-[300] pl-6 max-md:text-[11px]'>
          <li className='mb-4'>Framer Motion을 활용해 스크롤에 따라 콘텐츠가 부드럽게 등장하도록 구성</li>
          <li className='mb-4'>다양한 디바이스 환경에서도 일관된 사용자 경험을 제공할 수 있도록 반응형으로 설계함</li>
          <li className='mb-4'>자기 소개와 지금까지 해왔던 프로젝트를 확인 가능</li>
        </ul>
      </div>
      <a
        className='relative block btn_site w-[242px] h-[60px] leading-[60px] rounded-[10px] text-white mx-auto hover:pr-[38px] max-md:w-full max-md:h-[40px] max-md:leading-[40px] max-md:text-[14px] max-md:rounded-[4px]'
        href='https://limgi.vercel.app/'
        target='blank'
      >
        <Image
          src={'/arrow.png'}
          alt={''}
          width={50}
          height={50}
          className='absolute right-0 top-1/2 translate-y-[-50%] opacity-0'
        ></Image>
        사이트 바로가기
      </a>
    </div>
  );
};

export default ModalPortfolio;
