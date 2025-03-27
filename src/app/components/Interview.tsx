import { motion } from 'framer-motion';
import React from 'react';

const Interview = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      transition={{
        duration: 0.6,
        ease: 'easeOut'
      }}
      className='relative'
    >
      <h3 className='text-4xl font-black text-superLightGray pb-1.5 mb-9 border-b-white border-b-[1px] text-white'>
        Interview
      </h3>
      <div>
        <ul className='text-white flex justify-center flex-wrap gap-10'>
          <li className='relative w-[300px]'>
            <span className='absolute top-16 left-1/2 translate-x-[-50%] text-[32px]'>&quot;Q&amp;A&quot;</span>
            <div className='relative z-[-1] pb-[100%] rounded-[100%] mb-[-50%] bg-[#444]'></div>
            <div className='bg-[#444] rounded-b-[10px]'>
              <div className='py-4 bg-[#666] text-center min-h-[90px] flex justify-center items-center'>
                <strong className='text-lg'>프론트엔드로 전향한 이유?</strong>
              </div>
              <p className='p-6 text-xl font-semibold line-clamp-[1.38] min-h-[400px]'>
                컴퓨터 전공을 바탕으로 다양한 IT 분야를 접하던 중, 웹사이트 제작에 매력을 느껴 웹 퍼블리셔로 첫 경력을
                시작했습니다. 더 나아가 개발에 대한 흥미와 역량을 확장하고자 프론트엔드 개발자로 전향하게 되었고, 현재는
                사용자 중심의 인터페이스와 효율적인 코드 설계에 집중하며 성장하고 있습니다.
              </p>
            </div>
          </li>
          <li className='relative w-[300px]'>
            <span className='absolute top-16 left-1/2 translate-x-[-50%] text-[32px]'>&quot;Q&amp;A&quot;</span>
            <div className='relative z-[-1] pb-[100%] rounded-[100%] mb-[-50%] bg-[#444]'></div>
            <div className='bg-[#444] rounded-b-[10px]'>
              <div className='py-4 bg-[#666] text-center min-h-[90px] flex justify-center items-center'>
                <strong className='text-lg'>
                  일에 있어 가장 중요하게
                  <br /> 생각하는 것이 있다면?
                </strong>
              </div>
              <p className='p-6 text-xl font-semibold line-clamp-[1.38] min-h-[400px]'>
                저는 일에 있어 팀원들과의 소통을 가장 중요하게 생각합니다. 함께 일하는 사람들과의 열린 대화와 신뢰가
                있어야 더 좋은 결과물이 나온다고 믿기 때문입니다. 소통이 잘 되는 팀은 서로의 아이디어를 존중하며, 문제
                상황에서도 유연하게 협업할 수 있다고 생각합니다.
              </p>
            </div>
          </li>
          <li className='relative w-[300px]'>
            <span className='absolute top-16 left-1/2 translate-x-[-50%] text-[32px]'>&quot;Q&amp;A&quot;</span>
            <div className='relative z-[-1] pb-[100%] rounded-[100%] mb-[-50%] bg-[#444]'></div>
            <div className='bg-[#444] rounded-b-[10px]'>
              <div className='py-4 bg-[#666] text-center min-h-[90px] flex justify-center items-center'>
                <strong className='text-lg'>
                  자기계발을 위해
                  <br />
                  어떤 것들을 해왔는지?
                </strong>
              </div>
              <p className='p-6 text-xl font-semibold line-clamp-[1.38] min-h-[400px]'>
                개발자로서 지속적인 성장을 위해 인터넷 강의 수강, 기술 서적 탐독, 토이 프로젝트 진행 등 다양한 방식으로
                자기계발을 실천하고 있습니다. 새로운 기술을 익히고 실무에 적용해보며 더 나은 코드를 고민하는 개발자가
                되기 위해 노력하고 있습니다.
              </p>
            </div>
          </li>
        </ul>
      </div>
      {/* <ul className="text-white">
                <li className="relative text-base mb-5 bg-[#373737] p-5 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl">
                    <strong>Q. 프론트엔드로 전향한 이유?</strong>
                    <p>
                        컴퓨터 전공을 바탕으로 다양한 IT 분야를 접하던 중, 웹사이트 제작에 매력을 느껴 웹 퍼블리셔로 첫
                        경력을 시작했습니다. 더 나아가 개발에 대한 흥미와 역량을 확장하고자 프론트엔드 개발자로 전향하게
                        되었고, 현재는 사용자 중심의 인터페이스와 효율적인 코드 설계에 집중하며 성장하고 있습니다.
                    </p>
                </li>
                <li className="relative text-base mb-5 bg-[#373737] p-5 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl">
                    <strong>Q. 일에 있어 가장 중요하게 생각하는 것이 있다면?</strong>
                    <p>
                        저는 일에 있어 팀원들과의 소통을 가장 중요하게 생각합니다. 함께 일하는 사람들과의 열린 대화와
                        신뢰가 있어야 더 좋은 결과물이 나온다고 믿기 때문입니다. 소통이 잘 되는 팀은 서로의 아이디어를
                        존중하며, 문제 상황에서도 유연하게 협업할 수 있다고 생각합니다.
                    </p>
                </li>
                <li className="relative text-base mb-5 bg-[#373737] p-5 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl">
                    <strong>Q. 자기계발을 위해 어떤 것들을 해왔는지?</strong>
                    <p>
                        개발자로서 지속적인 성장을 위해 인터넷 강의 수강, 기술 서적 탐독, 토이 프로젝트 진행 등 다양한
                        방식으로 자기계발을 실천하고 있습니다. 새로운 기술을 익히고 실무에 적용해보며 더 나은 코드를
                        고민하는 개발자가 되기 위해 노력하고 있습니다.
                    </p>
                </li>
            </ul> */}
    </motion.div>
  );
};

export default Interview;
