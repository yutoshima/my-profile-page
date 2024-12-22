"use client";
import { Github, Mail, Facebook } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
    {
        icon: <FontAwesomeIcon icon={faXTwitter} size="lg" />,
        href: "https://x.com/Yuto00579583",
        label: "X",
        handle: "@Yuto00579583",
    },
    {
        icon: <Mail size={28} />,
        href: "yutoshima1234@gmail.com",
        label: "Email",
        handle: "yutoshima1234@gmail.com",
    },
    {
        icon: <Github size={28} />,
        href: "https://github.com/yutoshima",
        label: "Github",
        handle: "@yutoshima",
    },
    {
        icon: <Facebook size={28} />,
        href: "https://www.facebook.com/profile.php?id=100090928243991",
        label: "FaceBook",
        handle: "@島悠人",
    },
];

export default function Example() {
    return (
        <div className="min-h-screen bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <Navigation />
            <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
                <div className="container max-w-6xl px-4 mx-auto">
                    <div className="grid w-full grid-cols-1 gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-3">
                        {socials.map((s) => (
                            <Card key={s.label}>
                                <Link
                                    href={s.href}
                                    target="_blank"
                                    className="p-8 relative flex flex-col items-center gap-6 duration-700 group md:gap-10 md:py-16 md:px-12"
                                >
                                    <span
                                        className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                                        aria-hidden="true"
                                    />
                                    <span className="relative z-10 flex items-center justify-center w-16 h-16 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                                        {s.icon}
                                    </span>
                                    <div className="z-10 flex flex-col items-center">
                                        <span className="text-xl font-medium duration-150 xl:text-2xl text-zinc-200 group-hover:text-white font-display">
                                            {s.handle}
                                        </span>
                                        <span className="mt-4 text-base text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                                            {s.label}
                                        </span>
                                    </div>
                                </Link>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
