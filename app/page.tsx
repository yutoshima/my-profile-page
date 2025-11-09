import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "作品紹介", href: "/projects" },
  { name: "スキル", href: "/skills" },
  { name: "経歴", href: "/experience" },
  { name: "技術ブログ", href: "/blog" },
  { name: "資格・認定", href: "/certifications" },
  { name: "推薦文", href: "/testimonials" },
  { name: "開発プロセス", href: "/process" },
  { name: "レジュメ", href: "/resume" },
  { name: "お問い合わせ", href: "/contact" },
];

const sections = [
  {
    title: "技術ブログ",
    href: "/blog",
    description: "技術的な知識や思考プロセスを公開しています。最新のウェブ開発トレンドや解決策についての記事をご覧ください。",
    icon: "📝"
  },
  {
    title: "資格・認定情報",
    href: "/certifications",
    description: "スキルの客観的な証明となる資格や認定情報を紹介しています。継続的な学習の成果をご確認ください。",
    icon: "🏆"
  },
  {
    title: "推薦文/推薦者情報",
    href: "/testimonials",
    description: "これまでの仕事の質と人柄の証明として、一緒に働いた方々からの推薦文を掲載しています。",
    icon: "👥"
  },
  {
    title: "開発プロセス",
    href: "/process",
    description: "問題解決アプローチや開発手法について詳しく説明しています。プロジェクトをどのように進めるかをご覧ください。",
    icon: "⚙️"
  },
  {
    title: "レジュメ情報",
    href: "/resume",
    description: "詳細な経歴とスキルを一覧で表示しています。PDF/Word形式でダウンロードも可能です。",
    icon: "📄"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <div className="h-screen flex flex-col items-center justify-center w-full relative overflow-hidden">
        <nav className="my-16 animate-fade-in">
          <ul className="flex items-center justify-center gap-4 flex-wrap px-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </nav>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={100}
        />
        <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
          Yuto Shima
        </h1>

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <div className="my-16 text-center animate-fade-in max-w-3xl mx-auto px-4">
          <h2 className="text-xl text-zinc-300 font-semibold mb-4">
            Web Developer & Designer
          </h2>
          <p className="text-lg text-zinc-400 mb-6">
            専門的なウェブ開発とデザインスキルで、あなたのビジョンを実現します。React、Next.js、Tailwind
            CSSを駆使した現代的なウェブアプリケーション開発が得意です。
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-zinc-500">
            <span className="px-2 py-1 rounded-full border border-zinc-500">
              React
            </span>
            <span className="px-2 py-1 rounded-full border border-zinc-500">
              Next.js
            </span>
            <span className="px-2 py-1 rounded-full border border-zinc-500">
              TypeScript
            </span>
            <span className="px-2 py-1 rounded-full border border-zinc-500">
              Tailwind CSS
            </span>
            <span className="px-2 py-1 rounded-full border border-zinc-500">
              JavaScript
            </span>
            <span className="px-2 py-1 rounded-full border border-zinc-500">
              HTML/CSS
            </span>
          </div>
        </div>
      </div>

      {/* コンテンツセクション */}
      <div className="w-full max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          ポートフォリオコンテンツ
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section) => (
            <Link href={section.href} key={section.href} className="group">
              <div className="p-6 rounded-xl bg-zinc-800/50 border border-zinc-700 h-full transition-all duration-300 hover:bg-zinc-700/50 hover:border-zinc-600">
                <div className="text-4xl mb-4">{section.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-zinc-200">
                  {section.title}
                </h3>
                <p className="text-zinc-400 group-hover:text-zinc-300">
                  {section.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
