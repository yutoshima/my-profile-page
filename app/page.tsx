import Link from "next/link";
import React from "react";
import { Github, Mail, Facebook } from "lucide-react";
import { Navigation } from "./components/nav";
import { Footer } from "./components/footer";

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
      <Navigation />

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-8 text-center overflow-hidden">
        {/* 中心に向かう淡いグラデーション */}
        <div className="absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-10">
            AI Engineer · 2025
          </p>

          <h1 className="font-display text-7xl sm:text-9xl text-white leading-none tracking-tight mb-8">
            Yuto<br />Shima
          </h1>

          <div className="w-12 h-px bg-white/30 mx-auto mb-8" />

          <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-12 max-w-sm mx-auto">
            学生時代からAI・LLMを使ったプロダクト開発に取り組んできました。現在は社会人1年目です。
          </p>

          <div className="flex items-center justify-center gap-4 mb-12">
            <Link
              href="/projects"
              className="px-7 py-3 rounded-full bg-white text-brand text-sm font-semibold hover:bg-white/90 transition-colors"
            >
              作品を見る
            </Link>
            <Link
              href="/contact"
              className="px-7 py-3 rounded-full border border-white/40 text-white text-sm hover:bg-white/10 hover:border-white/60 transition-colors"
            >
              連絡する
            </Link>
          </div>

          <div className="flex items-center justify-center gap-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-white/40 hover:text-white transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contents */}
      <section className="bg-brand-dark px-8 py-20">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.25em] text-white/30 text-center mb-12">
            Contents
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="group p-7 border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all"
              >
                <h3 className="text-white font-semibold mb-2">{section.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{section.description}</p>
                <span className="mt-6 inline-block text-white/30 group-hover:text-white/70 transition-colors">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
