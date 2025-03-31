import Image from 'next/image';

const ModalPoultry = () => {
  return (
    <>
      <div className='w-full h-full flex items-center justify-center'>
        <div className='max-w-[1200px] mx-auto flex z-10 justify-between items-center'>
          <div className='sm:w-full md:w-[60%] h-full modal_text_box poultry relative'>
            <div className='sm:w-[50px] sm:h-[50px] md:w-[100px] md:h-[100px] relative'>
              <Image src={'/poultry_fram_logo.png'} alt={''} layout='fill' objectFit='cover'></Image>
            </div>
            <h2 className='sm:py-[10px] sm:-text[22px] md:py-[25px] md:text-[35px] font-medium text-white'>
              집중력있게 챌린지를 끝낼 수 있도록 도와주며 자랑할 수 있는 웹사이트!
            </h2>
            <ul className='flex text-[24px] text-white'>
              <li className='sm:py-[10px] sm:mr-4 md:py-[25px] md:mr-8 w-1/3'>
                <strong className='sm:pb-[10px] sm:text-[14px] md:text-[18px] lg:text-[16px] md:pb-[20px] block font-semibold border-b-[1px] border-white'>
                  SKILL
                </strong>
                <ul className='sm:pt-[10px] sm:text-[12px] md:text-[16px] md:pt-[20px] flex flex-wrap opacity-65'>
                  <li className='pr-6'>첫페이지</li>
                  <li>브랜드페이지</li>
                </ul>
              </li>
              <li className='sm:py-[10px] sm:mr-4 md:py-[25px] md:mr-8 w-1/3'>
                <strong className='sm:pb-[10px] sm:text-[14px] md:text-[18px] lg:text-[16px] md:pb-[20px] block font-semibold border-b-[1px] border-white'>
                  DATA
                </strong>
                <ul className='sm:pt-[10px] sm:text-[12px] md:text-[16px] md:pt-[20px] flex flex-wrap opacity-65'>
                  <li>2024.10.10 ~ 2024.18</li>
                </ul>
              </li>
              <li className='sm:py-[10px] sm:mr-4 md:py-[25px] md:mr-8 w-1/3'>
                <strong className='sm:pb-[10px] sm:text-[14px] md:text-[18px] lg:text-[16px] md:pb-[20px] block font-semibold border-b-[1px] border-white'>
                  TEAM
                </strong>
                <ul className='sm:pt-[10px] sm:text-[12px] md:text-[16px] md:pt-[20px] flex flex-wrap opacity-65'>
                  <li>5인(프론트 5명)</li>
                </ul>
              </li>
            </ul>
            <div className='justify-center md:hidden sm:flex'>
              <Image src={'/geul_kkab_bi.svg'} alt={''} width={445} height={360}></Image>
            </div>
            <p className='sm:text-[14px] sm:leading-[20px] sm:pt-[20px] sm:mb-[25px] md:text-[16px] md:leading-[33px] md:pt-[30px] md:pb-[50px] lg:pb-[75px] lg:text-[18px] text-white font-[300]'>
              사용자가 설정한 디데이와 투두 리스트를 기반으로 챌린지를 상세하게 설정하고, 그 진행상황을 “알”로 시작해
              점점 “닭”으로 키우는 과정을 보며 보다 재미있고 집중력 있게 챌린지를 끝낼 수 있는 사이트.
            </p>
            <a
              className='relative block btn_site sm:w-full md:w-[242px] h-[60px] leading-[60px] text-white hover:pr-[38px]'
              href='https://www.geul-kkae-bi.com/'
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
          <div className='flex justify md:block sm:hidden'>
            <Image src={'/geul_kkab_bi.svg'} alt={''} width={445} height={360}></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalPoultry;
