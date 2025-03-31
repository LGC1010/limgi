import Image from 'next/image';

const ModalMonggle = () => {
  return (
    <>
      <div className='w-full h-full'>
        <div className=' max-w-[1200px] mx-auto flex modal_text_box monggle relative z-10 w-full h-full justify-between items-center'>
          <div className='sm:w-full md:w-[800px] h-full'>
            <div className='sm:w-[50px] sm:h-[52px] md:w-[100px] md:h-[105px] relative'>
              <Image src={'/monggle_logo.png'} alt={''} layout='fill' objectFit='cover'></Image>
            </div>
            <h2 className='sm:py-[10px] sm:-text[22px] md:py-[25px] md:text-[28px] lg:text-[35px] font-semibold'>
              몽글로드 웹 사이트
            </h2>
            <ul className='flex text-[24px]'>
              <li className='sm:py-[10px] sm:mr-4 md:py-[25px] md:mr-8 w-1/3'>
                <strong className='sm:pb-[10px] sm:text-[14px] md:text-[18px] lg:text-[22px] md:pb-[20px] block font-semibold border-b-[1px] border-black dark:border-white'>
                  SKILL
                </strong>
                <ul className='sm:pt-[10px] sm:text-[12px] md:text-[18px] lg-text[22px] md:pt-[20px] flex flex-wrap'>
                  <li className='pr-6'>첫페이지</li>
                  <li>브랜드페이지</li>
                </ul>
              </li>
              <li className='sm:py-[10px] sm:mr-4 md:py-[25px] md:mr-8 w-1/3'>
                <strong className='sm:pb-[10px] sm:text-[14px] md:text-[18px] lg:text-[22px] md:pb-[20px] block font-semibold border-b-[1px] border-black dark:border-white'>
                  DATA
                </strong>
                <ul className='sm:pt-[10px] sm:text-[12px] md:text-[18px] lg-text[22px] md:pt-[20px] flex flex-wrap'>
                  <li>2024.09 ~ 2024.10</li>
                </ul>
              </li>
              <li className='sm:py-[10px] sm:mr-4 md:py-[25px] md:mr-8 w-1/3'>
                <strong className='sm:pb-[10px] sm:text-[14px] md:text-[18px] lg:text-[22px] md:pb-[20px] block font-semibold border-b-[1px] border-black dark:border-white'>
                  TYPE
                </strong>
                <ul className='sm:pt-[10px] sm:text-[12px] md:text-[18px] lg-text[22px] md:pt-[20px] flex flex-wrap'>
                  <li>REACT</li>
                </ul>
              </li>
            </ul>
            <div className='justify-center md:hidden sm:flex'>
              <Image src={'/geul_kkab_bi.svg'} alt={''} width={445} height={360}></Image>
            </div>
            <p className='sm:text-[14px] sm:leading-[20px] sm:pt-[20px] sm:mb-[25px] md:text-[16px] md:leading-[33px] md:pt-[30px] md:pb-[50px] lg:pb-[75px] lg:text-[18px]'>
              창의적인 산책로와 반려동물 필수 장소 정보를 한눈에 제공하는 맞춤형 서비스, 몽글로드 입니다. 동물병원,
              애견카페, 애견호텔, 커스텀 산책로 등 다양한 정보를 얻을 수 있습니다.
            </p>
            <a className='block btn sm:w-full md:w-[180px]' href='https://monggleroad.vercel.app/' target='blank'>
              사이트 바로가기
            </a>
          </div>
          <div className='flex justify md:block sm:hidden'>
            <Image src={'/geul_kkab_bi.svg'} alt={''} width={445} height={360}></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalMonggle;
