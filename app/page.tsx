import Link from "next/link";
import { socials } from "./data/socials";
import { Navigation } from "./components/nav";
import { Footer } from "./components/footer";

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
        {/* ドットグリッドパターン */}
        <div
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-10">
            AI Engineer · 2025
          </p>

          <h1 className="font-display text-7xl sm:text-9xl text-white leading-none tracking-tight mb-8">
            Yuto<br />Shima
          </h1>

          <div className="w-12 h-px bg-white/40 mx-auto mb-8" />

          <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-12 max-w-sm mx-auto">
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
              className="px-7 py-3 rounded-full border border-white/60 text-white text-sm hover:border-white transition-colors"
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
      <section className="bg-surface px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-[0.25em] text-white/40 text-center mb-12">
            Contents
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10">
            {sections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="group bg-surface p-8 hover:bg-[#475d90] transition-colors duration-200"
              >
                <h3 className="text-white font-semibold text-lg mb-2">{section.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">{section.description}</p>
                <span className="text-white/30 group-hover:text-white/80 transition-colors text-sm">
                  → 見る
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
