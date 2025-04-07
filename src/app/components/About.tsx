"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import Interview from "./Interview";
import Skill from "./Skill";
import Link from "next/link";

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
            <main className="relative flex items-center flex-col justify-center bg-[#161616] px-10 pt-10 pb-96 z-1 max-lg:h-auto max-lg:py-20 max-md:px-4">
                <h2 className="absolute top-10 left-10 text-white font-black text-6xl max-md:text-4xl max-lg:flex-col max-lg:static max-lg:w-full">
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
                    className="flex flex-col gap-40 py-20 max-xl:min-w-auto max-2xl:min-w-[1180px]"
                >
                    <div className="flex flex-col items-center gap-10">
                        <div>
                            <Image
                                src={`${isHovering ? "/Emoji2.png" : "/Emoji1.png"}`}
                                alt={""}
                                width={420}
                                height={420}
                            ></Image>
                            <ul className="flex gap-4 text-white max-md:text-[12px]">
                                <li>#협업과_소통</li>
                                <li>#문제해결능력</li>
                                <li>#실전경험</li>
                                <li>#끊임없는_배움</li>
                            </ul>
                        </div>
                        <button
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                            className="project-button relative w-[150px] h-[50px] bg-[#e82a2a] text-white text-[14px] text-center leading-[50px] rounded-[10px] overflow-hidden group"
                        >
                            <Link
                                href={"/profile.pdf"}
                                target="_blank"
                                className="relative z-[2] transition-all duration-300 ease-out group-hover:text-[#111]"
                            >
                                이력서 확인
                            </Link>
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
