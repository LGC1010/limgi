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
              <li className='pr-6'>REACT</li>
              <li className='pr-6'>TAILWIND</li>
              <li className='pr-6'>KAKAO MAP</li>
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
        <div className='flex justify-center'>
          <div className='relative w-full h-[350px] max-md:h-[150px]'>
            <Image src={'/monggle_main.gif'} alt={''} layout='fill' objectFit='contain'></Image>
          </div>
        </div>
        <div>
          <p className='text-2xl text-white max-md:text-[18px] font-medium'>웹 사이트 소개</p>
          <p className='text-lg leading-[33px] py-[10px] text-white max-md:text-[14px] max-md:leading-[22px]'>
            창의적인 산책로와 반려동물 필수 장소 정보를 한눈에 제공하는 맞춤형 서비스, 몽글로드 입니다. 동물병원,
            애견카페, 애견호텔, 커스텀 산책로 등 다양한 정보를 얻을 수 있습니다.
          </p>
        </div>
        <div className='mt-4'>
          <p className='text-2xl text-white max-md:text-[18px] font-medium'>담당 파트</p>
          <p className='text-[16px] leading-[33px] py-[10px] text-white max-md:text-[14px] max-md:leading-[22px]'>
            검색어 입력 및 카테고리 클릭 시 지도가 해당 위치로 이동하는 기능을 구현하였습니다.
          </p>
        </div>
        <div className='mt-4'>
          <p className='text-2xl text-white max-md:text-[18px] font-medium'>주요 기능</p>
          <ul className='text-white mt-4 list-disc font-[300] pl-6 max-md:text-[11px]'>
            <li className='mb-4'>장소 클릭 시 관련 상세 정보 및 마커 표시 제공</li>
            <li className='mb-4'>산책로 직접 그리기 및 저장 기능</li>
            <li className='mb-4'>지역 선택 및 검색어 입력으로 지도 상에서 장소 탐색 가능</li>
          </ul>
        </div>
        <div className='mt-4'>
          <p className='text-2xl text-white max-md:text-[18px] font-medium'>트러블 슈팅</p>
          <ol className='text-white list-decimal pl-5 mt-4'>
            <li>
              <p className='pb-4 max-md:text-[12px]'>
                지도 이동 후 제주도에서 검색되는 문제 → Kakao Map의 map.getCenter를 활용해 현재 중심 위치 기준으로
                검색되도록 수정
              </p>
            </li>
            <li>
              <p className='pb-4 max-md:text-[12px]'>
                마커 정보 미표시 이슈 → 마커 클릭 시 장소 정보가 유저에게 명확히 전달되도록 커스터마이징
              </p>
            </li>
          </ol>
        </div>
        <div className='my-4'>
          <p className='text-2xl text-white max-md:text-[18px] font-medium'>협업 경험</p>
          <p className='text-[16px] leading-[33px] py-[10px] text-white max-md:text-[14px] max-md:leading-[22px]'>
            초기 기획 단계에서 팀원들과 적극적으로 소통하여 각자의 역할을 명확히 분담하였고, 짧은 개발 기간 동안
            효율적으로 기능을 나누어 구현함으로써 프로젝트를 기한 내에 마무리할 수 있었습니다. 원활한 협업 구조 덕분에
            개발에 집중할 수 있었고, 책임감을 갖고 맡은 기능을 완성하는 경험을 할 수 있었습니다.
          </p>
        </div>
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
