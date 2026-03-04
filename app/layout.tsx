import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://yutoshima.github.io/my-profile-page"),
  title: {
    default: "Yuto Shima | Frontend Engineer",
    template: "%s | Yuto Shima",
  },
  description:
    "島 悠人のポートフォリオサイト。フロントエンドエンジニアとして培った技術とプロジェクトを紹介しています。",
  openGraph: {
    title: "Yuto Shima | Frontend Engineer",
    description:
      "島 悠人のポートフォリオサイト。フロントエンドエンジニアとして培った技術とプロジェクトを紹介しています。",
    url: "https://yutoshima.github.io/my-profile-page",
    siteName: "Yuto Shima Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Yuto Shima",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/portfolio.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${
          process.env.NODE_ENV === "development" ? "debug-screens" : ""
        }`}
      >
        {children}
      </body>
    </html>
  );
}
