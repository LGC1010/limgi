import Image from 'next/image';

const ModalGuel = () => {
  return (
    <>
      <div className='relative w-full h-full modal_text_box p-8 max-md:w-full max-md:p-4'>
        <div className='relative w-[100px] h-[32px] max-md:w-[80px] max-md:h-[25px]'>
          <Image src={'/geul_kkae_bi_logo.svg'} alt={''} layout='fill' objectFit='cover'></Image>
        </div>
        <h2 className='py-[25px] text-[35px] font-medium text-white max-md:py-[10px] max-md:text-[22px]'>
          한국인을 위한 한국어 맞춤법 어휘 발음 학습 사이트
        </h2>
        <ul className='flex text-[24px] text-white'>
          <li className='py-[25px] mr-8 w-1/3 max-md:py-[10px] max-md:mr-4'>
            <strong className='text-[16px] pb-[20px] block font-semibold border-b-[1px] border-white max-md:pb-[10px] max-md:text-[14px] md:text-[18px]'>
              기술 스택
            </strong>
            <ul className='text-[16px] pt-[20px] flex flex-wrap opacity-65 max-md:pt-[10px] max-md:text-[12px]'>
              <li className='pr-6'>NEXT JS</li>
              <li className='pr-6'>TYPESCRIPT</li>
              <li className='pr-6'>PNPM</li>
              <li className='pr-6'>SUPABASE</li>
            </ul>
          </li>
          <li className='py-[25px] mr-8 w-1/3 max-md:py-[10px] max-md:mr-4'>
            <strong className='text-[16px] pb-[20px] block font-semibold border-b-[1px] border-white max-md:pb-[10px] max-md:text-[14px]'>
              기간
            </strong>
            <ul className='text-[16px] pt-[20px] flex flex-wrap opacity-65 max-md:pt-[10px] max-md:text-[12px]'>
              <li>2024.10.18 ~ 2024.11.21</li>
            </ul>
          </li>
          <li className='py-[25px] mr-8 w-1/3 max-md:py-[10px] max-md:mr-4'>
            <strong className='text-[16px] pb-[20px] block font-semibold border-b-[1px] border-white max-md:pb-[10px] max-md:text-[14px]'>
              참여인원
            </strong>
            <ul className='text-[16px] pt-[20px] flex flex-wrap opacity-65 max-md:pt-[10px] max-md:text-[12px]'>
              <li>7인(프론트 5명, 디자이너 2명)</li>
            </ul>
          </li>
        </ul>
        <div className='flex justify-center'>
          <div className='relative w-full h-[350px] max-md:h-[150px]'>
            <Image src={'/geul_kkab_bi.svg'} alt={''} layout='fill' objectFit='contain'></Image>
          </div>
        </div>
        <div>
          <p className='text-2xl text-white max-md:text-[18px] font-medium'>웹 사이트 소개</p>
          <p className='text-lg leading-[33px] py-[10px] text-white max-md:text-[14px] max-md:leading-[22px]'>
            최근 2030세대의 문해력 문제가 주목받고 있는 가운데, 맞춤법과 발음을 재미있게 공부할 수 있도록 게임 요소를
            가미한 사이트입니다
          </p>
        </div>
        <div className='mt-4'>
          <p className='text-2xl text-white max-md:text-[18px] font-medium'>담당 파트</p>
          <p className='text-[16px] leading-[33px] py-[10px] text-white max-md:text-[14px] max-md:leading-[22px]'>
            Speech-to-Text 기반의 실시간 발음 평가 게임 전체 구현을 맡아, 사용자의 발음 연습 흐름과 결과 피드백 과정을
            설계 개발했습니다.
          </p>
          <ul className='text-white mt-4 list-disc font-[300] pl-6 max-md:text-[11px] max-md:mt-1'>
            <li className='mb-4'>Speech-to-Text 기반의 실시간 발음 평가 게임 구현</li>
            <li className='mb-4'>발음 비교, 오답 저장, 결과 시각화로 사용자 연습 흐름을 향상</li>
            <li className='mb-4'>반응형 UI 구성으로 다양한 디바이스에서도 일관된 사용자 경험 제공</li>
          </ul>
        </div>
        <div className='mt-4'>
          <p className='text-2xl text-white max-md:text-[18px] font-medium'>구현 기능</p>
          <ul className='text-white mt-4 list-disc font-[300] pl-6 max-md:text-[11px]'>
            <li className='mb-4'>유저 발음을 문제 문장과 비교해 정확도 측정</li>
            <li className='mb-4'>게임 결과에 따라 결과 페이지 및 오답 확인 기능 제공</li>
            <li className='mb-4'>Zustand를 이용한 오답 저장 및 상태 관리</li>
            <li className='mb-4'>오답 데이터를 로컬스토리지 + DB에 저장하여 새로고침 시에도 유지</li>
          </ul>
        </div>
        <div className='mt-4'>
          <p className='text-2xl text-white max-md:text-[18px] font-medium'>트러블 슈팅</p>
          <ol className='text-white list-decimal pl-5 mt-4'>
            <li>
              <p className='pb-4 max-md:text-[12px]'>
                오디오 점수 0점 발생 → useRef로 인스턴스 유지 및 초기화 시점 개선
              </p>
            </li>
            <li>
              <p className='pb-4 max-md:text-[12px]'>
                총합 점수 100점 초과 → 점수 누적 로직 수정 및 unmount 시 초기화 처리
              </p>
            </li>
            <li>
              <p className='pb-4 max-md:text-[12px]'>오답 상태 휘발성 → 로컬 + DB 병행 저장으로 새로고침 시 유지</p>
            </li>
            <li>
              <p className='pb-4 max-md:text-[12px]'>오답 문제 삭제 후 반영 안됨 → React Query의 refetch로 즉시 반영</p>
            </li>
          </ol>
        </div>
        <div className='my-4'>
          <p className='text-2xl text-white max-md:text-[18px] font-medium'>협업</p>
          <p className='text-[16px] leading-[33px] py-[10px] text-white max-md:text-[14px] max-md:leading-[22px]'>
            매일 스탠드업 미팅을 통해 진행 상황을 공유하고, 기획자·디자이너와 UI 흐름에 대해 의견을 주고받으며 최적의
            사용자 경험을 설계했습니다.
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

export default ModalGuel;
