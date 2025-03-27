"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import Interview from "./Interview";
import Skill from "./Skill";

const About = () => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };
    return (
        <div>
            <main className="relative flex items-center flex-col justify-center bg-[#232323] px-10 pt-10 z-1 max-lg:h-auto max-lg:py-20">
                <h2 className="absolute top-10 left-10 text-white font-black text-6xl max-lg:flex-col max-lg:static max-lg:w-full">
                    About me
                </h2>
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                    }}
                    className="flex flex-col gap-20 py-20"
                >
                    <div className="flex flex-col items-center gap-10">
                        <div>
                            <Image
                                src={`${isHovering ? "/Emoji2.png" : "/Emoji1.png"}`}
                                alt={""}
                                width={420}
                                height={420}
                            ></Image>
                            <ul className="flex gap-4 text-white">
                                <li>#역지사지</li>
                                <li>#메타인지</li>
                                <li>#피드백_수용</li>
                                <li>#끊임없는_배움</li>
                            </ul>
                        </div>
                        {/* <button
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                            className="relative flex items-center justify-between gap-12 bg-mainGray rounded-full py-3 px-5 shadow-lg transition-all after:absolute after:left-[50%] after:top-[50%] after:translate-y-[-50%] after:translate-x-[-50%] after:rounded-full after:w-full after:h-full after:bg-white after:opacity-0 after:z-[0] after:transition-all hover:after:opacity-40 hover:after:scale-y-[1.22] hover:after:scale-x-[1.06]"
                        >
                            팀원 리뷰
                        </button> */}
                        <button
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                            className="project-button relative w-[150px] h-[50px] bg-[#e82a2a] text-white text-[14px] text-center leading-[50px] rounded-[10px] overflow-hidden group"
                        >
                            <span className="relative z-[2] transition-all duration-300 ease-out group-hover:text-[#111]">
                                이력서 확인
                            </span>
                        </button>
                    </div>
                    <Interview />
                    <Skill />
                </motion.section>
            </main>
        </div>
    );
};

export default About;
