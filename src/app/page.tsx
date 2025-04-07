"use client";
import { useEffect, useState } from "react";
import About from "./components/About";
import Introduction from "./components/Introduction";
import Main from "./components/Main";
import FloatingBar from "./components/FloatingBar";

export default function Home() {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScroll(true);
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <>
            <div className={`top-0 ${scroll ? "sticky" : ""}`}>
                <Main />
            </div>
            <About />
            <Introduction />
            <FloatingBar />
        </>
    );
}
