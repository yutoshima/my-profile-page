import Link from "next/link";
import React from "react";
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
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.258 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    ),
    href: "https://x.com/Yuto00579583",
    label: "X",
  },
  {
    icon: <Github className="w-4 h-4" />,
    href: "https://github.com/yutoshima",
    label: "GitHub",
  },
  {
    icon: <Mail className="w-4 h-4" />,
    href: "mailto:yutoshima1234@gmail.com",
    label: "Email",
  },
  {
    icon: <Facebook className="w-4 h-4" />,
    href: "https://www.facebook.com/profile.php?id=100090928243991",
    label: "Facebook",
  },
];

const sections = [
  { title: "作品紹介", href: "/projects", description: "学生時代・個人開発で作ったプロジェクト" },
  { title: "スキルセット", href: "/skills", description: "学習・実装で身につけた技術スタック" },
  { title: "経歴", href: "/experience", description: "学生時代の活動と現在" },
  { title: "お問い合わせ", href: "/contact", description: "GitHubやSNSからもどうぞ" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-brand text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-brand border-b border-white/10">
        <span className="text-white font-bold text-sm tracking-widest font-display">YS</span>
        <ul className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-sm text-white/70 hover:text-white transition-colors">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/contact" className="text-sm text-white/70 hover:text-white transition-colors">
          連絡する
        </Link>
      </nav>

      <section className="flex flex-col justify-center min-h-screen px-8 pt-24 pb-16 max-w-3xl mx-auto">
        <p className="text-white/60 text-sm mb-4">AIエンジニア · 2025年4月〜</p>
        <h1 className="font-display text-5xl sm:text-7xl text-white mb-6 tracking-tight">
          Yuto Shima
        </h1>
        <p className="text-white/80 text-lg max-w-lg leading-relaxed mb-10">
          学生時代からAI・LLMを使ったプロダクト開発に取り組んできました。
          現在は社会人1年目です。
        </p>

        <div className="flex items-center gap-4 mb-16">
          <Link href="/projects" className="px-5 py-2.5 bg-white text-brand text-sm font-medium hover:bg-white/90 transition-colors">
            作品を見る
          </Link>
          <Link href="/contact" className="px-5 py-2.5 border border-white/40 text-white text-sm hover:border-white hover:bg-white/10 transition-colors">
            連絡する
          </Link>
        </div>

        <div className="flex items-center gap-5">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
              className="text-white/50 hover:text-white transition-colors">
              {s.icon}
            </a>
          ))}
        </div>
      </section>

      <section className="px-8 py-16 border-t border-white/10">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10">
            {sections.map((section) => (
              <Link key={section.href} href={section.href}
                className="group p-8 bg-brand hover:bg-brand-dark transition-colors">
                <h3 className="text-white text-base font-medium mb-2">{section.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{section.description}</p>
                <span className="mt-4 inline-block text-xs text-white/30 group-hover:text-white/70 transition-colors">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="px-8 py-6 border-t border-white/10">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <p className="text-white/30 text-xs">© 2025 Yuto Shima</p>
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                className="text-white/30 hover:text-white/70 transition-colors">
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
