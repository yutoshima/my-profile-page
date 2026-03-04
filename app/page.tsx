import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { Github, Mail, Facebook } from "lucide-react";

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

const sections = [
  { title: "作品紹介", href: "/projects", emoji: "🚀", description: "AIプロダクトや Webアプリの開発実績" },
  { title: "スキルセット", href: "/skills", emoji: "⚡", description: "LLM・RAG・Python・Next.js など" },
  { title: "経歴", href: "/experience", emoji: "📋", description: "これまでの職務経歴" },
  { title: "技術ブログ", href: "/blog", emoji: "✍️", description: "AI・開発に関する知見" },
  { title: "資格・認定", href: "/certifications", emoji: "🏆", description: "取得した技術資格" },
  { title: "お問い合わせ", href: "/contact", emoji: "💬", description: "お仕事のご依頼はこちら" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-darker">

      {/* ナビゲーション */}
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

      {/* ヒーロー */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden bg-brand">
        <Particles className="absolute inset-0 -z-10 opacity-30" quantity={80} />

        {/* 上部グロウライン */}
        <div className="hidden w-screen h-px md:block animate-fade-left bg-gradient-to-r from-white/0 via-white/40 to-white/0" />

        <div className="relative z-10 max-w-3xl mx-auto py-12">

          {/* Available バッジ */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-10 rounded-full border border-white/30 bg-white/10">
            <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
            <span className="text-white/90 text-xs font-medium tracking-wide">仕事受付中</span>
          </div>

          {/* 名前（名刺と同じ大きさ感） */}
          <h1 className="font-display text-7xl sm:text-9xl md:text-[10rem] text-white cursor-default animate-title whitespace-nowrap tracking-tight mb-2">
            Yuto Shima
          </h1>

          {/* 区切り線＋役職 */}
          <div className="flex items-center justify-center gap-4 my-6">
            <div className="h-px flex-1 max-w-[80px] bg-white/30" />
            <p className="text-white/80 text-sm tracking-[0.3em] uppercase">AI Engineer</p>
            <div className="h-px flex-1 max-w-[80px] bg-white/30" />
          </div>

          {/* サブテキスト */}
          <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            LLM・生成AIを活用したプロダクト開発を専門としています。<br className="hidden sm:block" />
            ビジネス課題をAIで解決し、プロトタイプから本番まで一気通貫で開発します。
          </p>

          {/* CTAボタン */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link href="/projects" className="px-8 py-3 rounded-full bg-white text-brand font-semibold text-sm hover:bg-white/90 transition-all duration-200 shadow-lg">
              作品を見る
            </Link>
            <Link href="/contact" className="px-8 py-3 rounded-full border border-white/50 text-white text-sm font-medium hover:bg-white/10 transition-all duration-200">
              お問い合わせ
            </Link>
          </div>

          {/* ソーシャルリンク（名刺と同じ並び） */}
          <div className="flex items-center justify-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="p-2.5 rounded-full border border-white/30 text-white/70 hover:text-white hover:border-white/70 hover:bg-white/10 transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* 下部グロウライン */}
        <div className="hidden w-screen h-px md:block animate-fade-right bg-gradient-to-r from-white/0 via-white/40 to-white/0" />

        {/* スクロールインジケーター */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-fade-in">
          <span className="text-white/40 text-xs tracking-widest">SCROLL</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* 専門領域セクション */}
      <section className="px-6 py-20 bg-brand-dark">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs tracking-widest text-white/40 mb-3">EXPERTISE</p>
            <h2 className="text-3xl font-bold text-white">専門領域</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
            {[
              {
                title: "LLM / 生成AI",
                desc: "ChatGPT、Claude 等のLLMを活用したアプリ開発。プロンプトエンジニアリング、RAG構築、Fine-tuning。",
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
              <div key={card.title} className="p-6 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 transition-all duration-300 group">
                <h3 className="text-white font-semibold mb-3">{card.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">{card.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-md bg-white/10 text-white/70 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* コンテンツグリッド */}
          <div className="text-center mb-10">
            <p className="text-xs tracking-widest text-white/40 mb-3">PORTFOLIO</p>
            <h2 className="text-3xl font-bold text-white">コンテンツ一覧</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="group p-6 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all duration-300"
              >
                <div className="text-3xl mb-3">{section.emoji}</div>
                <h3 className="text-white font-semibold mb-1">{section.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/70">
                  {section.description}
                </p>
                <div className="mt-4 text-xs text-white/30 group-hover:text-white/60 transition-colors">
                  詳しく見る →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* フッター（名刺と同じ情報） */}
      <footer className="border-t border-white/10 px-6 py-8 bg-brand-darker">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">© 2024 Yuto Shima. All rights reserved.</p>
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
