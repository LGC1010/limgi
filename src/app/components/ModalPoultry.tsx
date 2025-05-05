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
          <p className='text-2xl text-white max-md:text-[18px] font-medium'>웹 사이트 소개</p>
          <p className='text-lg leading-[33px] py-[10px] text-white max-md:text-[14px] max-md:leading-[22px]'>
            사용자가 설정한 디데이와 투두 리스트를 기반으로 챌린지를 상세하게 설정하고, 그 진행상황을 “알”로 시작해 점점
            “닭”으로 키우는 과정을 보며 보다 재미있고 집중력 있게 챌린지를 끝낼 수 있는 사이트.
          </p>
        </div>
        <div className='mt-4'>
          <p className='text-2xl text-white max-md:text-[18px] font-medium'>담당 파트</p>
          <p className='text-[16px] leading-[33px] py-[10px] text-white max-md:text-[14px] max-md:leading-[22px]'>
            커뮤니티 페이지의 게시글 검색 기능과 데이터 테이블 구조를 담당했습니다. 검색 로직 개선과 사용자 경험 향상에
            중점을 두고 개발을 진행했습니다.
          </p>
          <ul className='text-white mt-4 list-disc font-[300] pl-6 max-md:text-[11px] max-md:mt-1'>
            <li className='mb-4'>입력 키워드 기반의 실시간 게시글 필터링 기능 구현</li>
            <li className='mb-4'>Supabase 연동을 통한 게시글 CRUD 처리** 및 테이블 구조 간소화</li>
            <li className='mb-4'>기존 검색 로직을 분리 및 리팩토링하여 재사용성과 가독성 향상</li>
          </ul>
        </div>
        <div className='mt-4'>
          <p className='text-2xl text-white max-md:text-[18px] font-medium'>트러블 슈팅</p>
          <ol className='text-white list-decimal pl-5 mt-4'>
            <li>
              <p className='pb-4 max-md:text-[12px]'>
                검색 정확도 미흡 → Supabase의 ilike 연산자를 적용해 부분 일치 기반 검색 구현
              </p>
            </li>
            <li>
              <p className='pb-4 max-md:text-[12px]'>
                유저별 데이터 연결 오류 → 커스텀 훅으로 테이블 로직을 통합하고 불필요한 조건 분기를 제거하여 정확한 연결
                확보
              </p>
            </li>
          </ol>
        </div>
        <div className='my-4'>
          <p className='text-2xl text-white max-md:text-[18px] font-medium'>협업 및 회고</p>
          <p className='text-[16px] leading-[33px] py-[10px] text-white max-md:text-[14px] max-md:leading-[22px]'>
            데이터 테이블 구조를 팀원 간 명확히 공유하지 않아, 서로 다른 구조로 작업이 진행된 문제가 있었습니다. 이후
            원인을 공유하고 로직을 통합하며 문제를 해결했지만, 이 경험을 통해 초기 커뮤니케이션과 설계 공유의 중요성을
            배웠습니다. 앞으로는 프로젝트 초반부터 구조를 명확히 정리하고, 팀원 간 충분히 공유하는 습관을 실천하고자
            합니다.
          </p>
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
