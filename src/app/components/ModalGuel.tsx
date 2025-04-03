import Image from 'next/image';

const ModalGuel = () => {
  return (
    <>
      <div className='relative w-full h-full modal_text_box p-8 max-md:w-full max-md:p-4'>
        <div className='relative w-[100px] h-[32px] max-md:w-[80px] max-md:h-[25px]'>
          <Image src={'/geul_kkae_bi_logo.svg'} alt={''} layout='fill' objectFit='cover'></Image>
        </div>
        <h2 className='py-[25px] text-[35px] font-medium text-white max-md:py-[10px] max-md:text-[22px]'>
          한국인을 위한 한국어 맞춤법 &amp; 어휘 &amp; 발음 학습 사이트
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
          <p className='text-2xl text-white max-md:text-[18px] font-medium'>상세 내용</p>
          <p className='text-lg leading-[33px] py-[10px] text-white max-md:text-[14px] max-md:leading-[22px]'>
            최근 2030세대의 문해력 문제가 주목받고 있는 가운데, 맞춤법과 발음을 재미있게 공부할 수 있도록 게임 요소를
            가미한 사이트입니다
          </p>
        </div>
        <div className='mt-4'>
          <p className='text-2xl text-white max-md:text-[18px] font-medium'>작업 기여도</p>
          <ul className='text-white mt-4 list-disc font-[300] pl-6 max-md:text-[11px]'>
            <li className='mb-4'>유저의 발음을 문제와 비교하여 정확도를 측정하는 게임 나야 발음왕 구현</li>
            <li className='mb-4'>게임 결과에 따라 나오는 결과 페이지 영역 작업</li>
            <li className='mb-4'>게임에 대한 오답 정확도 체크 및 확인</li>
            <li className='mb-4'>반응형으로 개발하여 사용자에게 좋은 경험을 제공</li>
          </ul>
        </div>
        <div className='mt-4'>
          <p className='text-2xl text-white max-md:text-[18px] font-medium'>트러블 슈팅</p>
          <ol className='text-white list-decimal pl-5 mt-4'>
            <li>
              <p className='pb-4 max-md:text-[12px]'>Speech to text API를 이용하여 나야 발음왕 게임 개발</p>
              <ul className='list-disc font-[300] pl-6 max-md:text-[11px]'>
                <li className='mb-4'>
                  유저 테스트때 처음 오디오 점수가 계속 0으로 나오는 현상 확인 렌더링이 일어나도 인스터스가 유지되게
                  useRef 적용하여 유저에게 더 좋은 서비스 제공
                </li>
                <li className='mb-4'>
                  총합 점수가 100점이 넘어가는 현상 발생하여 유저 랭킹에 영향을 끼침 데이터 합산 로직, 변수가 리셋
                  안됨을 확인 이후 Throttling과 unmount시 데이터를 리셋하 여 문제 해결
                </li>
              </ul>
            </li>
            <li>
              <p className='pb-4 max-md:text-[12px]'>게임 결과에 따른 오답 확인 작업</p>
              <ul className='list-disc font-[300] pl-6 max-md:text-[11px]'>
                <li className='mb-4'>
                  3가지의 오답 관리를 zustand로하여 데이터를 관리, 새로고침시 데이터 휘발성으로 사라 짐 데이터를 쌓는
                  목적으로 로컬과, 데이터베이스로 관리하여 해결
                </li>
                <li className='mb-4'>
                  모든 오답을 알고 싶다는 유저의 피드백을 받아 데이터의 기록을 쌓아서 보여주게 구현
                </li>
                <li className='mb-4'>
                  유저가 문제 삭제시 화면에서 삭제되지 않는 현상발생 react query에서 제공하는 refetch를 이용하여
                  데이터를 다시 불러와 문제 해
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

export default ModalGuel;
