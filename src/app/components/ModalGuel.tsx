import Image from 'next/image';

const ModalGuel = () => {
  return (
    <>
      <div className='w-full h-full'>
        <div className='max-w-[1200px] mx-auto flex modal_text_box relative z-10 w-full h-full justify-between items-center'>
          <div className='sm:w-full md:w-[800px] h-full'>
            <div className='sm:w-[80px] sm:h-[25px] md:w-[100px] md:h-[32px] relative'>
              <Image src={'/geul_kkae_bi_logo.svg'} alt={''} layout='fill' objectFit='cover'></Image>
            </div>
            {/* <Image src={'/geul_kkae_bi_logo.svg'} alt={''} width={100} height={100}></Image> */}
            <h2 className='sm:py-[10px] sm:-text[22px] md:py-[25px] md:text-[35px] font-semibold'>
              글깨비 반응형 웹 사이트
            </h2>
            <ul className='flex text-[24px]'>
              <li className='sm:py-[10px] sm:mr-4 md:py-[25px] md:mr-8 w-1/3'>
                <strong className='sm:pb-[10px] sm:text-[14px] md:text-[18px] lg:text-[22px] md:pb-[20px] block font-semibold border-b-[1px] border-black dark:border-white'>
                  SKILL
                </strong>
                <ul className='sm:pt-[10px] sm:text-[12px] md:text-[18px] lg-text[22px] md:pt-[20px] flex flex-wrap'>
                  <li className='pr-6'>NEXT JS</li>
                  <li className='pr-6'>TYPESCRIPT</li>
                  <li className='pr-6'>PNPM</li>
                  <li className='pr-6'>SUPABASE</li>
                </ul>
              </li>
              <li className='sm:py-[10px] sm:mr-4 md:py-[25px] md:mr-8 w-1/3'>
                <strong className='sm:pb-[10px] sm:text-[14px] md:text-[18px] lg:text-[22px] md:pb-[20px] block font-semibold border-b-[1px] border-black dark:border-white'>
                  DATA
                </strong>
                <ul className='sm:pt-[10px] sm:text-[12px] md:text-[18px] lg-text[22px] md:pt-[20px] flex flex-wrap'>
                  <li>2024.10 ~ 2024.11</li>
                </ul>
              </li>
              <li className='sm:py-[10px] sm:mr-4 md:py-[25px] md:mr-8 w-1/3'>
                <strong className='sm:pb-[10px] sm:text-[14px] md:text-[18px] lg:text-[22px] md:pb-[20px] block font-semibold border-b-[1px] border-black dark:border-white'>
                  TYPE
                </strong>
                <ul className='sm:pt-[10px] sm:text-[12px] md:text-[18px] lg-text[22px] md:pt-[20px] flex flex-wrap'>
                  <li>NEXT JS</li>
                </ul>
              </li>
            </ul>
            <div className='justify-center md:hidden sm:flex'>
              <Image src={'/geul_kkab_bi.svg'} alt={''} width={445} height={360}></Image>
            </div>
            <p className='sm:text-[14px] sm:leading-[20px] sm:pt-[20px] sm:mb-[25px] md:text-[16px] md:leading-[33px] md:pt-[30px] md:pb-[50px] lg:pb-[75px] lg:text-[18px]'>
              최근 2030세대의 문해력 문제가 주목받고 있는 가운데, 맞춤법과 어휘 그리고 발음을 재미있게 공부할 수 있도록
              게임 요소를 가미한 사이트입니다.
            </p>
            <a className='block btn sm:w-full md:w-[180px]' href='https://www.geul-kkae-bi.com/' target='blank'>
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

export default ModalGuel;
