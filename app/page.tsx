import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { Github, Mail, Facebook } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const navigation = [
  { name: "作品", href: "/projects" },
  { name: "スキル", href: "/skills" },
  { name: "経歴", href: "/experience" },
  { name: "ブログ", href: "/blog" },
  { name: "資格", href: "/certifications" },
  { name: "推薦文", href: "/testimonials" },
  { name: "レジュメ", href: "/resume" },
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

const featuredSections = [
  {
    title: "作品紹介",
    href: "/projects",
    description: "AIプロダクトや Webアプリなど、これまでに開発したプロジェクト一覧。",
    emoji: "🚀",
  },
  {
    title: "スキルセット",
    href: "/skills",
    description: "LLM、RAG、Python、Next.jsなど技術スタック一覧。",
    emoji: "⚡",
  },
  {
    title: "経歴",
    href: "/experience",
    description: "これまでの職務経歴と担当プロジェクト。",
    emoji: "📋",
  },
  {
    title: "技術ブログ",
    href: "/blog",
    description: "AI・開発に関する知見や実装メモを公開しています。",
    emoji: "✍️",
  },
  {
    title: "資格・認定",
    href: "/certifications",
    description: "取得した技術資格の一覧。",
    emoji: "🏆",
  },
  {
    title: "お問い合わせ",
    href: "/contact",
    description: "お仕事のご依頼・ご質問はこちらから。",
    emoji: "💬",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* ナビゲーション */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-zinc-800/50 bg-black/80 backdrop-blur-md">
        <span className="text-white font-bold tracking-widest text-sm">YS</span>
        <ul className="hidden md:flex items-center gap-6">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-xs text-zinc-400 hover:text-white transition-colors duration-200 tracking-wide"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="text-xs px-4 py-2 rounded-full border border-zinc-600 text-zinc-300 hover:border-white hover:text-white transition-all duration-200"
        >
          連絡する
        </Link>
      </nav>

      {/* ヒーローセクション */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden">
        <Particles className="absolute inset-0 -z-10" quantity={120} />

        {/* グロウライン */}
        <div className="hidden w-screen h-px md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/30 to-zinc-300/0 mb-8" />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Available バッジ */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-emerald-500/30 bg-emerald-500/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 text-xs font-medium tracking-wide">
              仕事受付中
            </span>
          </div>

          {/* メインタイトル */}
          <h1 className="font-display text-6xl sm:text-8xl md:text-[10rem] text-transparent bg-clip-text bg-white cursor-default animate-title whitespace-nowrap text-edge-outline mb-4">
            Yuto Shima
          </h1>

          {/* 役職 */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-violet-500" />
            <p className="text-lg sm:text-xl text-zinc-300 font-light tracking-widest">
              AI ENGINEER
            </p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500" />
          </div>

          {/* サブテキスト */}
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            LLM・生成AIを活用したプロダクト開発を専門としています。
            <br className="hidden sm:block" />
            ビジネス課題をAIで解決し、プロトタイプから本番まで一気通貫で開発します。
          </p>

          {/* CTAボタン */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/projects"
              className="px-8 py-3 rounded-full bg-white text-black font-medium text-sm hover:bg-zinc-200 transition-all duration-200 shadow-lg shadow-white/10"
            >
              作品を見る
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 rounded-full border border-zinc-600 text-zinc-300 text-sm font-medium hover:border-zinc-400 hover:text-white transition-all duration-200"
            >
              お問い合わせ
            </Link>
          </div>

          {/* ソーシャルリンク */}
          <div className="flex items-center justify-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="p-2.5 rounded-full border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-400 transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden w-screen h-px md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/30 to-zinc-300/0 mt-8" />

        {/* スクロールインジケーター */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-fade-in">
          <span className="text-zinc-600 text-xs tracking-widest">SCROLL</span>
          <div className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent" />
        </div>
      </section>

      {/* 専門領域セクション */}
      <section className="px-6 py-20 border-t border-zinc-800/50">
        <div className="max-w-5xl mx-auto">
          {/* セクションヘッダー */}
          <div className="text-center mb-16">
            <p className="text-xs tracking-widest text-zinc-500 mb-3">EXPERTISE</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              専門領域
            </h2>
          </div>

          {/* 専門領域カード */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            {[
              {
                title: "LLM / 生成AI",
                desc: "ChatGPT、Claude、Gemini等のLLMを活用したアプリ開発。プロンプトエンジニアリング、RAG構築、Fine-tuning。",
                tags: ["OpenAI API", "Claude API", "LangChain", "RAG"],
              },
              {
                title: "AI プロダクト開発",
                desc: "AIを核とした Webサービスの設計・開発。ユーザー体験とビジネス価値を両立したプロダクト。",
                tags: ["Python", "FastAPI", "Next.js", "Vercel"],
              },
              {
                title: "自動化 / エージェント",
                desc: "AIエージェントや業務自動化システムの構築。繰り返し業務をAIで効率化します。",
                tags: ["AI Agent", "Workflow", "API連携", "RPA"],
              },
            ].map((card) => (
              <div
                key={card.title}
                className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:border-zinc-600 transition-all duration-300 group"
              >
                <h3 className="text-white font-semibold mb-3 group-hover:text-zinc-100">
                  {card.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  {card.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-md bg-zinc-800 text-zinc-400 border border-zinc-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* グリッドナビゲーション */}
          <div className="text-center mb-10">
            <p className="text-xs tracking-widest text-zinc-500 mb-3">PORTFOLIO</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              コンテンツ一覧
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredSections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="group p-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-800/50 hover:border-zinc-600 transition-all duration-300"
              >
                <div className="text-3xl mb-3">{section.emoji}</div>
                <h3 className="text-white font-semibold mb-2 group-hover:text-zinc-100">
                  {section.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400">
                  {section.description}
                </p>
                <div className="mt-4 flex items-center gap-1 text-xs text-zinc-600 group-hover:text-zinc-400 transition-colors">
                  <span>詳しく見る</span>
                  <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="border-t border-zinc-800/50 px-6 py-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-xs">
            © 2024 Yuto Shima. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-zinc-600 hover:text-zinc-300 transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
