import Image from 'next/image';

const ModalPoultry = () => {
  return (
    <>
      <div className='relative w-full h-full modal_text_box p-8 max-md:w-full max-md:p-4'>
        <div className='relative w-[100px] h-[80px] max-md:w-[80px] max-md:h-[60px]'>
          <Image src={'/poultry_fram_logo.png'} alt={''} layout='fill' objectFit='cover'></Image>
        </div>
        <h2 className='py-[25px] text-[35px] font-medium text-white max-md:py-[10px] max-md:text-[22px]'>
          집중력있게 챌린지를 끝낼 수 있도록 도와주며 자랑할 수 있는 웹사이트!
        </h2>
        <ul className='flex text-[24px] text-white'>
          <li className='py-[25px] mr-8 w-1/3 max-md:py-[10px] max-md:mr-4'>
            <strong className='text-[16px] pb-[20px] block font-semibold border-b-[1px] border-white max-md:pb-[10px] max-md:text-[14px] md:text-[18px]'>
              기술 스택
            </strong>
            <ul className='text-[16px] pt-[20px] flex flex-wrap opacity-65 max-md:pt-[10px] max-md:text-[12px]'>
              <li className='pr-6'>REACT</li>
              <li className='pr-6'>TYPESCRIPT</li>
              <li className='pr-6'>SUPABASE</li>
              <li className='pr-6'>TAILWIND</li>
            </ul>
          </li>
          <li className='py-[25px] mr-8 w-1/3 max-md:py-[10px] max-md:mr-4'>
            <strong className='text-[16px] pb-[20px] block font-semibold border-b-[1px] border-white max-md:pb-[10px] max-md:text-[14px]'>
              기간
            </strong>
            <ul className='text-[16px] pt-[20px] flex flex-wrap opacity-65 max-md:pt-[10px] max-md:text-[12px]'>
              <li>2024.10.10 ~ 2024.18</li>
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
            <Image src={'/poultry_main.png'} alt={''} layout='fill' objectFit='contain'></Image>
          </div>
        </div>
        <div>
          <p className='text-2xl text-white max-md:text-[18px] font-medium'>상세 내용</p>
          <p className='text-lg leading-[33px] py-[10px] text-white max-md:text-[14px] max-md:leading-[22px]'>
            사용자가 설정한 디데이와 투두 리스트를 기반으로 챌린지를 상세하게 설정하고, 그 진행상황을 “알”로 시작해 점점
            “닭”으로 키우는 과정을 보며 보다 재미있고 집중력 있게 챌린지를 끝낼 수 있는 사이트.
          </p>
        </div>
        <div className='mt-4'>
          <p className='text-2xl text-white max-md:text-[18px] font-medium'>주요 기능</p>
          <ul className='text-white mt-4 list-disc font-[300] pl-6 max-md:text-[11px]'>
            <li className='mb-4'>챌린지 타이틀과 디데이를 입력하고, 수정은 디테일 페이지로 넘어가도록 구현</li>
            <li className='mb-4'>디데이 설정 날짜를 캘린더에서 색으로 한눈에 보기 쉽게 표현.</li>
            <li className='mb-4'>챌린지를 누구나 자유롭게 확인하고 수정 삭제가 가능한 커뮤니티 페이지</li>
            <li className='mb-4'>챌린지 진행 상황을 아이콘과 함께 확인 가능</li>
          </ul>
        </div>
        <div className='mt-4'>
          <p className='text-2xl text-white max-md:text-[18px] font-medium'>트러블 슈팅</p>
          <ol className='text-white list-decimal pl-5 mt-4'>
            <li>
              <p className='pb-4 max-md:text-[12px]'>커뮤니티 페이지 개발</p>
              <ul className='list-disc font-[300] pl-6 max-md:text-[11px]'>
                <li className='mb-4'>
                  유저 검색 시 검색어에 일치하는 피드만 보여주는게 필요 supabase에서 제공하는 ilike를 적용하여 검색어에
                  따라 피드 제공
                </li>
                <li className='mb-4'>
                  각자 다른 데이터 테이블을 이용하여 유저의 정보가 다르게 연결되는 현상 발견 커스텀 훅을 만들어 불필요한
                  로직도 줄이며 해결
                </li>
              </ul>
            </li>
          </ol>
        </div>
        <a
          className='relative block btn_site w-[242px] h-[60px] leading-[60px] rounded-[10px] text-white mx-auto hover:pr-[38px] max-md:w-full max-md:h-[40px] max-md:leading-[40px] max-md:text-[14px] max-md:rounded-[4px]'
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
    </>
  );
};

export default ModalPoultry;
