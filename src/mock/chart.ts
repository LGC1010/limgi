const tooltips: Record<string, string> = {
  React: 'UI 구성 및 상태 관리 중심 기능 구현',
  'Next.js': '라우팅 SSR 등 구조적 페이지 설계',
  TypeScript: '전반적인 타입 안정성 확보 및 오류 방지',
  'State\nManage': '프로젝트 상태 관리에 활용',
  'Tailwind\nCSS': '반응형 UI 스타일링'
};

const option = {
  title: {
    text: '주요 기술 사용 경험',
    subtext: '협업 시 GitHub 사용',
    left: 'center',
    textStyle: {
      color: '#ffffff'
    }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: { type: 'shadow' },
    formatter: (params: { name: string; value: number }[]) => {
      const data = params[0];
      return `${tooltips[data.name] || ''}`;
    },
    backgroundColor: '#333',
    textStyle: {
      color: '#fff'
    }
  },
  grid: {
    left: '0',
    right: '10%',
    bottom: '10%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    max: 100,
    axisLine: { lineStyle: { color: '#999' } },
    splitLine: { lineStyle: { color: '#444' } }
  },
  yAxis: {
    type: 'category',
    data: ['React', 'Next.js', 'TypeScript', 'State\nManage', 'Tailwind\nCSS'],
    inverse: true,
    axisLine: { lineStyle: { color: '#999' } },
    axisLabel: { color: '#fff' }
  },
  series: [
    {
      name: '숙련도',
      type: 'bar',
      data: [90, 85, 75, 70, 90],
      label: {
        show: true,
        position: 'right',
        color: '#fff'
      },
      itemStyle: {
        color: '#444'
      }
    }
  ]
};

export default option;
