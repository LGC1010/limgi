import { motion } from "framer-motion";
import React from "react";

const Career = () => {
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
            className="h-[1000px] w-full flex justify-between"
        >
            <div className="text-white mr-6 sticky top-10 flex flex-col gap-3 w-auto h-screen overflow-[none] max-md:flex-row max-md:bg-mainBlack max-md:z-[2] max-md:py-3 max-md:top-0 max-md:w-full max-md:h-auto max-md:overflow-y-scroll max-md:backdrop-blur-md">
                <h2 className="text-white text-[60px] font-semibold">CAREER</h2>
            </div>
            <div className=" h-full w-[60%]">
                <ul className="flex flex-wrap">
                    <li className="relative w-[calc(50%-7.064%)] h-[31.7vw] bg-[#f1e9e4] rounded-[18px] mr-[14.128%]"></li>
                    <li className="relative w-[calc(50%-7.064%)] h-[31.7vw] bg-[#f1e9e4] rounded-[18px] mt-[180px]"></li>
                </ul>
            </div>
        </motion.div>
    );
};

export default Career;
