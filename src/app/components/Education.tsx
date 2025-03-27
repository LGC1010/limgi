import { motion } from "framer-motion";
import React from "react";

const Education = () => {
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
            className="h-[800px] w-full flex justify-between"
        >
            <div className="text-white mr-6 sticky top-10 flex flex-col gap-3 w-auto h-screen overflow-[none] max-md:flex-row max-md:bg-mainBlack max-md:z-[2] max-md:py-3 max-md:top-0 max-md:w-full max-md:h-auto max-md:overflow-y-scroll max-md:backdrop-blur-md">
                <h2 className="text-[60px]">Education</h2>
            </div>
            <div className="bg-amber-950 w-full h-full"></div>
        </motion.div>
    );
};

export default Education;
