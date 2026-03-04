import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Footer } from "../components/footer";
import { Card } from "../components/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "作品紹介 | ポートフォリオ",
  description: "これまでに取り組んできた個人プロジェクトの紹介",
};

interface ProjectItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  date: string;
  technologies: string[];
  githubUrl?: string;
  projectUrl?: string;
  featured: boolean;
}

const projects: ProjectItem[] = [
  {
    id: "auto-news",
    title: "車・ITニュース自動配信システム",
    description: "RSSで収集したニュースをLLMで要約してDiscordに自動配信するシステム",
    longDescription:
      "毎朝、車とITの最新ニュースをRSSで自動収集し、LLM（Poe API / Gemini）で要約してDiscordに配信するサービス。新型車・プロトタイプの自動検出機能や、月額数十円で運用できる低コスト設計が特徴。",
    date: "2026-03-04",
    technologies: ["Python", "LLM", "Poe API", "Gemini", "RSS", "Discord API"],
    githubUrl: "https://github.com/yutoshima/auto_news",
    featured: true,
  },
  {
    id: "ronshows-alpha",
    title: "論証グラフ作成ツール",
    description: "論理的推論を視覚化するWebアプリ。ノードとリンクで推論過程を図示できる",
    longDescription:
      "シャーロック・ホームズの推理などの論理的推論を視覚的に表現するグラフ作成ツール。前提（Premise）と結論（Claim）のノードを配置し、演繹・仮定・対立・限定の4種類のリンクで推論過程を明確に図示できる。Undo/Redoや設定の永続化にも対応。",
    date: "2025-12-23",
    technologies: ["TypeScript", "Next.js", "React"],
    githubUrl: "https://github.com/yutoshima/ronshows_alpha",
    featured: true,
  },
  {
    id: "concept-map-system",
    title: "概念マップ採点システム",
    description: "概念マップ（CSV形式）を自動採点するPythonツール。複数アルゴリズムに対応",
    longDescription:
      "McClure法・Novak法・LEA法など複数の採点アルゴリズムを統合した概念マップ自動採点システム。Python標準ライブラリのみで動作し、追加インストール不要。CLI・JSON出力に対応した研究・教育向けツール。",
    date: "2026-02-02",
    technologies: ["Python"],
    githubUrl: "https://github.com/yutoshima/concept-map-system",
    featured: true,
  },
  {
    id: "research-survey-system",
    title: "研究用アンケート・穴埋めシステム",
    description: "ログ機能付きの研究用アンケートフォームシステム",
    longDescription:
      "ログ機能・テスト・データベース機能を備えた研究用アンケートおよび穴埋め問題システム。Java製のエンタープライズグレードの設計で、研究データの収集・管理に対応。",
    date: "2025-12-15",
    technologies: ["Java"],
    githubUrl: "https://github.com/yutoshima/research-survey-system",
    featured: false,
  },
  {
    id: "my-profile-page",
    title: "ポートフォリオサイト（本サイト）",
    description: "Next.js・TailwindCSSで構築した個人ポートフォリオ",
    longDescription:
      "このサイト自体。Next.js App Router・TailwindCSS・Contentlayerで構築。GitHub Actionsで自動デプロイ。",
    date: "2025-01-01",
    technologies: ["TypeScript", "Next.js", "TailwindCSS", "GitHub Actions"],
    githubUrl: "https://github.com/yutoshima/my-profile-page",
    featured: false,
  },
];

export default function ProjectsPage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="bg-brand min-h-screen">
      <Navigation />
      <div className="max-w-3xl mx-auto px-8 pt-24 pb-12">
        <h1 className="font-bold text-3xl md:text-5xl text-center mb-6 text-white">
          作品紹介
        </h1>
        <p className="text-white/60 text-center max-w-3xl mx-auto mb-12">
          学生時代・個人開発で取り組んできたプロジェクトです。
        </p>
        <div className="w-full h-px bg-white/15 mb-12" />

        {/* 特集プロジェクト */}
        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 mb-12">
          <Card>
            <article className="relative w-full h-full p-4 md:p-8">
              <div className="flex items-center justify-between gap-2">
                <div className="text-xs text-white/60">
                  <time dateTime={featuredProjects[0].date}>
                    {new Date(featuredProjects[0].date).toLocaleDateString("ja-JP")}
                  </time>
                </div>
                {featuredProjects[0].githubUrl && (
                  <a href={featuredProjects[0].githubUrl} target="_blank" rel="noopener noreferrer"
                    className="text-white/60 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-label="GitHub">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                )}
              </div>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl font-display">
                {featuredProjects[0].title}
              </h2>
              <p className="mt-4 leading-8 text-white/70">
                {featuredProjects[0].longDescription}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {featuredProjects[0].technologies.map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs text-white/80 bg-white/10 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </Card>

          <div className="flex flex-col w-full gap-8">
            {featuredProjects.slice(1).map((project) => (
              <Card key={project.id}>
                <article className="relative w-full h-full p-4 md:p-8">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-xs text-white/60">
                      <time dateTime={project.date}>
                        {new Date(project.date).toLocaleDateString("ja-JP")}
                      </time>
                    </div>
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                        className="text-white/60 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-label="GitHub">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    )}
                  </div>
                  <h2 className="mt-4 text-xl font-bold text-white font-display">
                    {project.title}
                  </h2>
                  <p className="mt-4 leading-8 text-white/70">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="px-2 py-1 text-xs text-white/80 bg-white/10 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              </Card>
            ))}
          </div>
        </div>

        <div className="w-full h-px mb-12 bg-white/15" />

        <h2 className="font-bold text-2xl md:text-3xl mb-6 text-white">その他</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project) => (
            <Card key={project.id}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-white/60">
                    <time dateTime={project.date}>
                      {new Date(project.date).toLocaleDateString("ja-JP")}
                    </time>
                  </div>
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                      className="text-white/60 hover:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-label="GitHub">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  )}
                </div>
                <h2 className="mt-4 text-xl font-bold text-white font-display">
                  {project.title}
                </h2>
                <p className="mt-4 leading-8 text-white/70">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs text-white/80 bg-white/10 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
