import Image from 'next/image';

const ModalMonggle = () => {
  return (
    <>
      <div className='relative w-full h-full modal_text_box p-8 max-md:w-full max-md:p-4'>
        <div className='relative w-[100px] h-[100px] max-md:w-[80px] max-md:h-[90px]'>
          <Image src={'/monggle_logo.png'} alt={''} layout='fill' objectFit='cover'></Image>
        </div>
        <h2 className='py-[25px] text-[35px] font-medium text-white max-md:py-[10px] max-md:text-[22px]'>
          몽글로드 웹 사이트
        </h2>
        <ul className='flex text-[24px] text-white'>
          <li className='py-[25px] mr-8 w-1/3 max-md:py-[10px] max-md:mr-4'>
            <strong className='text-[16px] pb-[20px] block font-semibold border-b-[1px] border-white max-md:pb-[10px] max-md:text-[14px] md:text-[18px]'>
              기술 스택
            </strong>
            <ul className='text-[16px] pt-[20px] flex flex-wrap opacity-65 max-md:pt-[10px] max-md:text-[12px]'>
              <li className='pr-6'>첫페이지</li>
              <li>브랜드페이지</li>
            </ul>
          </li>
          <li className='py-[25px] mr-8 w-1/3 max-md:py-[10px] max-md:mr-4'>
            <strong className='text-[16px] pb-[20px] block font-semibold border-b-[1px] border-white max-md:pb-[10px] max-md:text-[14px]'>
              기간
            </strong>
            <ul className='text-[16px] pt-[20px] flex flex-wrap opacity-65 max-md:pt-[10px] max-md:text-[12px]'>
              <li>2024.09 ~ 2024.10</li>
            </ul>
          </li>
          <li className='py-[25px] mr-8 w-1/3 max-md:py-[10px] max-md:mr-4'>
            <strong className='text-[16px] pb-[20px] block font-semibold border-b-[1px] border-white max-md:pb-[10px] max-md:text-[14px]'>
              참여인원
            </strong>
            <ul className='text-[16px] pt-[20px] flex flex-wrap opacity-65 max-md:pt-[10px] max-md:text-[12px]'>
              <li>5인(프론트 5명)</li>
            </ul>
          </li>
        </ul>
        <p className='text-2xl font-medium leading-[33px] pt-[10px] pb-[20px] text-white max-md:text-[14px] max-md:leading-[22px] max-md:pt-[10px]'>
          창의적인 산책로와 반려동물 필수 장소 정보를 한눈에 제공하는 맞춤형 서비스, 몽글로드 입니다. 동물병원,
          애견카페, 애견호텔, 커스텀 산책로 등 다양한 정보를 얻을 수 있습니다.
        </p>
        <p className='text-lg text-white max-md:text-[14px]'>상세 내용</p>
        <ol className='text-white list-decimal pl-5 mt-4'>
          <li>
            <p className='pb-4 max-md:text-[12px]'>KaKao Map API(맵, 현재위치, 마커 사)</p>
            <ul className='list-disc font-[300] pl-6 max-md:text-[11px]'>
              <li className='mb-4'>
                지도 위치를 옮겼을 경우 제주도 위치에서 검색되는 현상 발견 카카오에서 제공해주는 map.getCenter을
                이용하여 현재 위치에서 검색되게 해결
              </li>
              <li className='mb-4'>마커를 이용해 유저에게 필요한 정보 제공</li>
            </ul>
          </li>
        </ol>
        <a
          className='relative block btn_site w-[242px] h-[60px] leading-[60px] rounded-[10px] text-white mx-auto hover:pr-[38px] max-md:w-full max-md:h-[40px] max-md:leading-[40px] max-md:text-[14px] max-md:rounded-[4px]'
          href='https://monggleroad.vercel.app/'
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
    </>
  );
};

export default ModalMonggle;
