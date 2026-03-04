import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { Github, Mail, Facebook } from "lucide-react";

const navigation = [
  { name: "作品", href: "/projects" },
  { name: "スキル", href: "/skills" },
  { name: "経歴", href: "/experience" },
  { name: "連絡", href: "/contact" },
];

const socials = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.258 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    ),
    href: "https://x.com/Yuto00579583",
    label: "X",
  },
  {
    icon: <Github className="w-5 h-5" />,
    href: "https://github.com/yutoshima",
    label: "GitHub",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    href: "mailto:yutoshima1234@gmail.com",
    label: "Email",
  },
  {
    icon: <Facebook className="w-5 h-5" />,
    href: "https://www.facebook.com/profile.php?id=100090928243991",
    label: "Facebook",
  },
];

const sections = [
  { title: "作品紹介", href: "/projects", emoji: "🚀", description: "学生時代・個人開発で作ったプロジェクト一覧" },
  { title: "スキルセット", href: "/skills", emoji: "⚡", description: "学習・実装で身につけた技術スタック" },
  { title: "経歴", href: "/experience", emoji: "📋", description: "学生時代の活動と現職" },
  { title: "お問い合わせ", href: "/contact", emoji: "💬", description: "お気軽にご連絡ください" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-darker">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-brand-darker/80 backdrop-blur-md border-b border-white/10">
        <span className="text-white font-bold tracking-widest text-sm font-display">YS</span>
        <ul className="hidden md:flex items-center gap-6">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-xs text-white/60 hover:text-white transition-colors duration-200 tracking-wide">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/contact" className="text-xs px-4 py-2 rounded-full border border-white/40 text-white/80 hover:border-white hover:text-white transition-all duration-200">
          連絡する
        </Link>
      </nav>

      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden bg-brand">
        <Particles className="absolute inset-0 -z-10 opacity-30" quantity={80} />
        <div className="hidden w-screen h-px md:block animate-fade-left bg-gradient-to-r from-white/0 via-white/40 to-white/0" />

        <div className="relative z-10 max-w-3xl mx-auto py-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-10 rounded-full border border-white/30 bg-white/10">
            <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
            <span className="text-white/90 text-xs font-medium tracking-wide">2025年4月 新社会人</span>
          </div>

          <h1 className="font-display text-7xl sm:text-9xl md:text-[10rem] text-white cursor-default animate-title whitespace-nowrap tracking-tight mb-2">
            Yuto Shima
          </h1>

          <div className="flex items-center justify-center gap-4 my-6">
            <div className="h-px flex-1 max-w-[80px] bg-white/30" />
            <p className="text-white/80 text-sm tracking-[0.3em] uppercase">AI Engineer</p>
            <div className="h-px flex-1 max-w-[80px] bg-white/30" />
          </div>

          <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            学生時代からAI・LLMを使ったプロダクト開発に取り組んできました。<br className="hidden sm:block" />
            現在は社会人1年目として新たなキャリアをスタートしています。
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link href="/projects" className="px-8 py-3 rounded-full bg-white text-brand font-semibold text-sm hover:bg-white/90 transition-all duration-200 shadow-lg">
              作品を見る
            </Link>
            <Link href="/contact" className="px-8 py-3 rounded-full border border-white/50 text-white text-sm font-medium hover:bg-white/10 transition-all duration-200">
              お問い合わせ
            </Link>
          </div>

          <div className="flex items-center justify-center gap-4">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                className="p-2.5 rounded-full border border-white/30 text-white/70 hover:text-white hover:border-white/70 hover:bg-white/10 transition-all duration-200">
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden w-screen h-px md:block animate-fade-right bg-gradient-to-r from-white/0 via-white/40 to-white/0" />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-fade-in">
          <span className="text-white/40 text-xs tracking-widest">SCROLL</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      <section className="px-6 py-20 bg-brand-dark">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs tracking-widest text-white/40 mb-3">PORTFOLIO</p>
            <h2 className="text-3xl font-bold text-white">コンテンツ一覧</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sections.map((section) => (
              <Link key={section.href} href={section.href}
                className="group p-6 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all duration-300">
                <div className="text-3xl mb-3">{section.emoji}</div>
                <h3 className="text-white font-semibold mb-1">{section.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/70">{section.description}</p>
                <div className="mt-4 text-xs text-white/30 group-hover:text-white/60 transition-colors">詳しく見る →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 bg-brand-darker">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">© 2025 Yuto Shima. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="text-white/30 hover:text-white/70 transition-colors">
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
