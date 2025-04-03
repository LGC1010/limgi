export const mockPopupData = [
  {
    type: 'geul',
    logo: '/geul_kkae_bi_logo.svg',
    title: '한국인을 위한 한국어 맞춤법 & 어휘 & 발음 학습 사이트',
    details: [
      {
        category: '기술 스택',
        items: ['NEXT JS', 'TYPESCRIPT', 'PNPM', 'SUPABASE']
      },
      {
        category: '기간',
        items: ['2024.10.18 ~ 2024.11.21']
      },
      {
        category: '참여인원',
        items: ['7인(프론트 5명, 디자이너 2명)']
      }
    ],
    bannerImage: '/geul_kkab_bi.svg',
    description:
      '최근 2030세대의 문해력 문제가 주목받고 있는 가운데, 맞춤법과 발음을 재미있게 공부할 수 있도록 게임 요소를 가미한 사이트입니다.',
    contributions: [
      '유저의 발음을 문제와 비교하여 정확도를 측정하는 게임 나야 발음왕 구현',
      '게임 결과에 따라 나오는 결과 페이지 영역 작업',
      '게임에 대한 오답 정확도 체크 및 확인',
      '반응형으로 개발하여 사용자에게 좋은 경험을 제공'
    ],
    troubleShooting: [
      {
        title: 'Speech to text API를 이용하여 나야 발음왕 게임 개발',
        details: [
          '유저 테스트 때 처음 오디오 점수가 계속 0으로 나오는 현상 확인. 렌더링이 일어나도 인스턴스가 유지되게 useRef 적용하여 유저에게 더 좋은 서비스 제공.',
          '총합 점수가 100점이 넘어가는 현상 발생하여 유저 랭킹에 영향을 끼침. 데이터 합산 로직, 변수가 리셋 안됨을 확인 이후 Throttling과 unmount 시 데이터를 리셋하여 문제 해결.'
        ]
      },
      {
        title: '게임 결과에 따른 오답 확인 작업',
        details: [
          '3가지의 오답 관리를 Zustand로 하여 데이터를 관리. 새로고침 시 데이터 휘발성으로 사라짐. 데이터를 쌓는 목적으로 로컬과 데이터베이스로 관리하여 해결.',
          '모든 오답을 알고 싶다는 유저의 피드백을 받아 데이터의 기록을 쌓아서 보여주게 구현.',
          '유저가 문제 삭제 시 화면에서 삭제되지 않는 현상 발생. React Query에서 제공하는 refetch를 이용하여 데이터를 다시 불러와 문제 해결.'
        ]
      }
    ],
    siteLink: {
      url: 'https://www.geul-kkae-bi.com/',
      text: '사이트 바로가기',
      arrowImage: '/arrow.png'
    }
  },
  {
    type: 'poultry',
    logo: '/poultry_fram_logo.png',
    title: '한국인을 위한 한국어 맞춤법 & 어휘 & 발음 학습 사이트',
    details: [
      {
        category: '기술 스택',
        items: ['NEXT JS', 'TYPESCRIPT', 'PNPM', 'SUPABASE']
      },
      {
        category: '기간',
        items: ['2024.10.18 ~ 2024.11.21']
      },
      {
        category: '참여인원',
        items: ['7인(프론트 5명, 디자이너 2명)']
      }
    ],
    bannerImage: '/geul_kkab_bi.svg',
    description:
      '최근 2030세대의 문해력 문제가 주목받고 있는 가운데, 맞춤법과 발음을 재미있게 공부할 수 있도록 게임 요소를 가미한 사이트입니다.',
    contributions: [
      '유저의 발음을 문제와 비교하여 정확도를 측정하는 게임 나야 발음왕 구현',
      '게임 결과에 따라 나오는 결과 페이지 영역 작업',
      '게임에 대한 오답 정확도 체크 및 확인',
      '반응형으로 개발하여 사용자에게 좋은 경험을 제공'
    ],
    troubleShooting: [
      {
        title: 'Speech to text API를 이용하여 나야 발음왕 게임 개발',
        details: [
          '유저 테스트 때 처음 오디오 점수가 계속 0으로 나오는 현상 확인. 렌더링이 일어나도 인스턴스가 유지되게 useRef 적용하여 유저에게 더 좋은 서비스 제공.',
          '총합 점수가 100점이 넘어가는 현상 발생하여 유저 랭킹에 영향을 끼침. 데이터 합산 로직, 변수가 리셋 안됨을 확인 이후 Throttling과 unmount 시 데이터를 리셋하여 문제 해결.'
        ]
      },
      {
        title: '게임 결과에 따른 오답 확인 작업',
        details: [
          '3가지의 오답 관리를 Zustand로 하여 데이터를 관리. 새로고침 시 데이터 휘발성으로 사라짐. 데이터를 쌓는 목적으로 로컬과 데이터베이스로 관리하여 해결.',
          '모든 오답을 알고 싶다는 유저의 피드백을 받아 데이터의 기록을 쌓아서 보여주게 구현.',
          '유저가 문제 삭제 시 화면에서 삭제되지 않는 현상 발생. React Query에서 제공하는 refetch를 이용하여 데이터를 다시 불러와 문제 해결.'
        ]
      }
    ],
    siteLink: {
      url: 'https://www.geul-kkae-bi.com/',
      text: '사이트 바로가기',
      arrowImage: '/arrow.png'
    }
  }
];
