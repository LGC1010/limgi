"use client";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans_KR({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${notoSans.className} antialiased`}>
                {children}
                <div id="global-modal" />
            </body>
        </html>
    );
}
