"use client";

import data from "@/mock/data";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const tabs = ["전체", "팀", "개인"];

const Project = () => {
    const [selectedTab, setSelectedTab] = useState("전체");

    const filteredProjects = data.filter((project) => {
        switch (selectedTab) {
            case "개인":
                return !project.team;
            case "팀":
                return project.team;
            default:
                return true;
        }
    });

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.6,
                ease: "easeOut",
            }}
            className="h-[900px] w-full flex justify-between"
        >
            <div className="w-full">
                <div className="flex gap-3 mb-6">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setSelectedTab(tab)}
                            className={`px-3.5 py-2.5 rounded-[55px] font-semibold min-w-[100px] ${
                                selectedTab === tab ? "bg-white text-gray-800" : "border-white border  text-white"
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="flex flex-wrap">
                    {filteredProjects.map((item) => (
                        <div className="w-[calc(33.333%-16px)] mr-4" key={item.id}>
                            <ul>
                                <li>
                                    <div className="relative w-[calc(100%-16px)] h-auto aspect-[4/3]">
                                        <div className="w-full h-full rounded-[6px] bg-[#666]">
                                            <div className="absolute top-0 left-0 w-full h-full">
                                                <Image src={item.image} alt={""} width={100} height={100} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative w-[calc(100%-16px)] translate-x-4 -translate-y-4 p-2.5 bg-white rounded-[6px] min-h-[100px]"></div>
                                    <div className="text-white">
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="text-white sticky top-10 flex flex-col gap-3 w-auto h-screen overflow-[none] max-md:flex-row max-md:bg-mainBlack max-md:z-[2] max-md:py-3 max-md:top-0 max-md:w-full max-md:h-auto max-md:overflow-y-scroll max-md:backdrop-blur-md">
                <h3 className="text-[60px]">Projects</h3>
            </div>
        </motion.div>
    );
};

export default Project;
