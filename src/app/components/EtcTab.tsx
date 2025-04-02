import Image from 'next/image';

export default function EtcTab() {
  return (
    <div className='max-w-[1000px]'>
      <ul className='flex flex-wrap gap-8 justify-between px-[52px] pt-4 max-md:px-3'>
        <li>
          <strong className='mb-4 inline-block lg:text-[28px] text-white text-[24px] max-md:text-lg'>
            SKILL &amp; ETC
          </strong>
          <ul className='flex flex-col gap-6'>
            <li className='flex items-center'>
              <div className='shadow-lg rounded-[10px] p-4 bg-white min-w-[62px]'>
                <Image src={'/icon_git.svg'} alt={''} width={30} height={30}></Image>
              </div>
              <div className='ml-8 text-white'>
                <strong className='text-[24px] max-md:text-lg'>GIT</strong>
                <p className='mt-2 max-md:text-[14px]'>
                  효율적인 버전 관리를 수행하며 다양한 협업 워크플로우를 적용하여 안정적인 개발 환경을 구축할 수
                  있습니다
                </p>
              </div>
            </li>
            <li className='flex items-center'>
              <div className='shadow-lg rounded-[10px] p-4 bg-white min-w-[62px]'>
                <Image src={'/icon_github.svg'} alt={''} width={30} height={30}></Image>
              </div>
              <div className='ml-8 text-white'>
                <strong className='text-[24px] max-md:text-lg'>GITHUB</strong>
                <p className='mt-2 max-md:text-[14px]'>
                  코드 저장소를 관리하고, 이슈 트래킹 및 Pull Request를 통해 효과적인 협업을 수행할 수 있습니다.
                </p>
              </div>
            </li>
            <li className='flex items-center'>
              <div className='shadow-lg rounded-[10px] p-4 bg-white min-w-[62px]'>
                <Image src={'/icon_gitlab.svg'} alt={''} width={30} height={30}></Image>
              </div>
              <div className='ml-8 text-white'>
                <strong className='text-[24px] max-md:text-lg'>GITLAB</strong>
                <p className='mt-2 max-md:text-[14px]'>
                  CI/CD 파이프라인을 구축할 수 있으며 코드 리뷰 및 프로젝트 관리를 통해 효율적인 환경을 조성할 수
                  있습니다.
                </p>
              </div>
            </li>
            <li className='flex items-center'>
              <div className='shadow-lg rounded-[10px] p-4 bg-white min-w-[62px]'>
                <Image src={'/icon_vercel.svg'} alt={''} width={30} height={30}></Image>
              </div>
              <div className='ml-8 text-white'>
                <strong className='text-[24px] max-md:text-lg'>VERCEL</strong>
                <p className='mt-2 max-md:text-[14px]'>
                  Vercel을 활용하여 애플리케이션을 빠르고 간편하게 배포할 수 있으며, 자동 빌드 및 배포 환경을 구성하여
                  개발 생산성을 높일 수 있습니다.
                </p>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
