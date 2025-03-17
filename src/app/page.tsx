'use client';
import { useEffect, useState } from 'react';
import Main from './main/page';
import About from './components/About';
import Introduction from './components/Introduction';

export default function Home() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // 컴포넌트 언마운트 시 이벤트 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <div className={`top-0 ${scroll ? 'sticky' : ''}`}>
        <Main />
      </div>
      <About />
      <Introduction />
    </>
  );
}
