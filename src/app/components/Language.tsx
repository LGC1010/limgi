import Image from 'next/image';

export default function LanguageTab() {
  return (
    <div className='max-w-[1000px]'>
      <ul className='flex flex-wrap gap-8 justify-between px-[52px] pt-4 sm:pb-14 md:pb-28'>
        <li>
          <strong className='mb-4 inline-block lg:text-[28px] text-white text-[24px]'>SKILL &amp; Language</strong>
          <ul className='flex flex-col gap-6'>
            <li className='flex items-center'>
              <div className='shadow-lg rounded-[10px] p-4 bg-white'>
                <Image src={'/icon_html.svg'} alt={''} width={30} height={30}></Image>
              </div>
              <div className='ml-8 text-white'>
                <strong className='text-[24px]'>HTML</strong>
                <p className='mt-2'>
                  시맨틱 마크업을 사용하고, 접근성과 SEO를 고려한 구조적인 웹페이지를 구현할 수 있습니다.
                </p>
              </div>
            </li>
            <li className='flex items-center'>
              <div className='shadow-lg rounded-[10px] p-4 bg-white'>
                <Image src={'/icon_css.svg'} alt={''} width={30} height={30}></Image>
              </div>
              <div className='ml-8 text-white'>
                <strong className='text-[24px]'>CSS</strong>
                <p className='mt-2'>
                  반응형 디자인과 다양한 스타일링 기법을 적용할 수 있으며, 유지보수가 용이한 구조로 스타일을 작성할 수
                  있습니다.
                </p>
              </div>
            </li>
            <li className='flex items-center'>
              <div className='shadow-lg rounded-[10px] p-4 bg-white'>
                <Image src={'/icon_java.svg'} alt={''} width={30} height={30}></Image>
              </div>
              <div className='ml-8 text-white'>
                <strong className='text-[24px]'>JAVASCRIPT</strong>
                <p className='mt-2'>
                  동적인 웹 애플리케이션을 개발하며 비동기 처리와 최적화된 코드 작성을 통해 성능을 개선할 수 있습니다.
                </p>
              </div>
            </li>
            <li className='flex items-center'>
              <div className='shadow-lg rounded-[10px] p-4 bg-white'>
                <Image src={'/icon_type.svg'} alt={''} width={30} height={30}></Image>
              </div>
              <div className='ml-8 text-white'>
                <strong className='text-[24px]'>TYPESCRIPT</strong>
                <p className='mt-2'>
                  제네릭, 인덱싱, 유틸리티등 다양한 타입을 사용하여 확장성과 안정성을 고려한 개발이 가능합니다.
                </p>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
