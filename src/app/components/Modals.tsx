import { mockPopupData } from '@/mock/popup';
import Image from 'next/image';
import React from 'react';

interface ModalProps {
  type: string;
}

const Modals = ({ type }: ModalProps) => {
  const PopupData = mockPopupData.find((item) => item.type === type);
  console.log('props.type:', type);
  console.log(
    '찾은 데이터:',
    mockPopupData.find((item) => item.type === type)
  );
  console.log(type);
  if (!PopupData) return null;

  return (
    <div className='relative w-full h-full modal_text_box p-8 max-md:w-full max-md:p-4'>
      <div className='relative w-[100px] h-[32px] max-md:w-[80px] max-md:h-[25px]'>
        <Image src={PopupData.logo} alt='로고' layout='fill' objectFit='cover' />
      </div>
      <h2 className='py-[25px] text-[35px] font-medium text-white max-md:py-[10px] max-md:text-[22px]'>
        {PopupData.title}
      </h2>
      <ul className='flex text-[24px] text-white'>
        {PopupData.details.map((detail, index) => (
          <li key={index} className='py-[25px] mr-8 w-1/3 max-md:py-[10px] max-md:mr-4'>
            <strong className='text-[16px] pb-[20px] block font-semibold border-b-[1px] border-white max-md:pb-[10px] max-md:text-[14px] md:text-[18px]'>
              {detail.category}
            </strong>
            <ul className='text-[16px] pt-[20px] flex flex-wrap opacity-65 max-md:pt-[10px] max-md:text-[12px]'>
              {detail.items.map((item, i) => (
                <li key={i} className='pr-6'>
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <div className='flex justify-center'>
        <div className='relative w-full h-[350px] max-md:h-[150px]'>
          <Image src={PopupData.bannerImage} alt='배너 이미지' layout='fill' objectFit='contain' />
        </div>
      </div>
      <div>
        <p className='text-2xl text-white max-md:text-[18px] font-medium'>상세 내용</p>
        <p className='text-lg leading-[33px] py-[10px] text-white max-md:text-[14px] max-md:leading-[22px]'>
          {PopupData.description}
        </p>
      </div>
      <div className='mt-4'>
        <p className='text-2xl text-white max-md:text-[18px] font-medium'>작업 기여도</p>
        <ul className='text-white mt-4 list-disc font-[300] pl-6 max-md:text-[11px]'>
          {PopupData.contributions.map((contribution, index) => (
            <li key={index} className='mb-4'>
              {contribution}
            </li>
          ))}
        </ul>
      </div>
      <div className='mt-4'>
        <p className='text-2xl text-white max-md:text-[18px] font-medium'>트러블 슈팅</p>
        <ol className='text-white list-decimal pl-5 mt-4'>
          {PopupData.troubleShooting.map((trouble, index) => (
            <li key={index}>
              <p className='pb-4 max-md:text-[12px]'>{trouble.title}</p>
              <ul className='list-disc font-[300] pl-6 max-md:text-[11px]'>
                {trouble.details.map((detail, i) => (
                  <li key={i} className='mb-4'>
                    {detail}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
      <a
        className='relative block btn_site w-[242px] h-[60px] leading-[60px] rounded-[10px] text-white mx-auto hover:pr-[38px] max-md:w-full max-md:h-[40px] max-md:leading-[40px] max-md:text-[14px] max-md:rounded-[4px]'
        href={PopupData.siteLink.url}
        target='_blank'
        rel='noopener noreferrer'
      >
        <Image
          src={PopupData.siteLink.arrowImage}
          alt='화살표 아이콘'
          width={50}
          height={50}
          className='absolute right-0 top-1/2 translate-y-[-50%] opacity-0'
        />
        {PopupData.siteLink.text}
      </a>
    </div>
  );
};

export default Modals;
