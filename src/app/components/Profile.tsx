"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Profile = () => {
    const [show, setShow] = useState(false);
    const [moveUp, setMoveUp] = useState(false);

    useEffect(() => {
        const timer1 = setTimeout(() => setMoveUp(true), 5500); // 2초 후 텍스트 위로 이동
        const timer2 = setTimeout(() => setShow(true), 6000); // 3.5초 후 인트로 제거

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    return (
        <>
            <motion.div
                initial={{ opacity: 1 }}
                animate={moveUp ? { opacity: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute z-[-1] top-1/2 left-2/4 overflow-hidden translate-y-[-50%] translate-x-[-50%] h-[80vh] w-[80vw] flex flex-col items-center justify-center"
            >
                <svg viewBox="0 0 1320 135" className="w-full">
                    <text x="50%" y="50%" dy="40px" textAnchor="middle">
                        Front End
                    </text>
                </svg>
                <div>
                    <p className="tracking-in-expand text-[18px] text-[#3e3e3e]">Lim Gi Cheol Portfolio</p>
                </div>
                <div className="lines-wrapper">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </motion.div>
            <section className="absolute top-12 flex items-center flex-col mb-20 w-full mt-[calc(100vh-85vh)] max-sm:mt-[calc(100vh-90vh)]">
                <AnimatePresence>
                    <motion.div
                        initial={{ y: 200, scale: 1.5, opacity: 1 }}
                        animate={moveUp ? { y: 0, scale: 1, opacity: 1 } : {}}
                        transition={{ duration: 1.5 }}
                        className="relative w-full"
                    >
                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={moveUp ? { opacity: 1 } : {}}
                            transition={{ duration: 1.5 }}
                            className="text-5xl text-black font-normal mb-6 relative z-10 w-full text-center max-sm:text-xl max-lg:text-3xl"
                        >
                            프론트엔드 개발자 <strong>임기철</strong>입니다.
                            <div className="absolute z-[-1] top-0 left-2/4 w-full overflow-hidden translate-y-[-75%] translate-x-[-50%] h-[155px]">
                                <p className="text-[10rem] font-black text-white leading-[1] max-sm:text-[4rem] max-lg:text-[6rem]">
                                    Front-End
                                </p>
                            </div>
                        </motion.h2>
                    </motion.div>
                </AnimatePresence>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={show ? { opacity: 1, y: 0 } : {}}
                    transition={{
                        duration: 1,
                    }}
                >
                    작은 디테일까지 책임지는
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={show ? { opacity: 1, y: 0 } : {}}
                    transition={{
                        duration: 1,
                    }}
                >
                    소통 중심의 <strong className="font-bold">프론트엔드</strong> 개발자입니다.
                </motion.p>
            </section>
        </>
    );
};

export default Profile;
