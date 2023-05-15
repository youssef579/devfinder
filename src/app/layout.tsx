// Main stylesheet file
import "./globals.css";
// Next fonts
import { Space_Mono } from "next/font/google";
// vercel analytics
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
    title: "devfinder",
    description: "Find user's info on GitHub",
};

const spaceMono = Space_Mono({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--space-mono",
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${spaceMono.variable} grid min-h-screen place-content-center bg-dark font-mono text-white`}
            >
                <div className="m-auto w-screen max-w-xl px-4">{children}</div>
                <Analytics />
            </body>
        </html>
    );
}
