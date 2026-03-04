import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Footer } from "../components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "作品紹介 | ポートフォリオ",
  description: "これまでに取り組んできた個人プロジェクトの紹介",
};

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-label="GitHub">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const projects = [
  {
    id: "auto-news",
    title: "車・ITニュース自動配信システム",
    description: "毎朝、車とITの最新ニュースをRSSで自動収集し、LLM（Poe API / Gemini）で要約してDiscordに配信するサービス。新型車の自動検出機能付き。",
    technologies: ["Python", "LLM", "Gemini", "RSS", "Discord API"],
    githubUrl: "https://github.com/yutoshima/auto_news",
  },
  {
    id: "ronshows-alpha",
    title: "論証グラフ作成ツール",
    description: "論理的推論を視覚化するWebアプリ。前提と結論のノードを配置し、演繹・仮定・対立などのリンクで推論過程を図示できる。",
    technologies: ["TypeScript", "Next.js", "React"],
    githubUrl: "https://github.com/yutoshima/ronshows_alpha",
  },
  {
    id: "concept-map-system",
    title: "概念マップ採点システム",
    description: "McClure・Novak・LEA法など複数アルゴリズムを統合した概念マップ自動採点ツール。Python標準ライブラリのみで動作。",
    technologies: ["Python"],
    githubUrl: "https://github.com/yutoshima/concept-map-system",
  },
  {
    id: "research-survey-system",
    title: "研究用アンケート・穴埋めシステム",
    description: "ログ機能・データベース機能を備えた研究用アンケートおよび穴埋め問題システム。",
    technologies: ["Java"],
    githubUrl: "https://github.com/yutoshima/research-survey-system",
  },
  {
    id: "my-profile-page",
    title: "ポートフォリオサイト（本サイト）",
    description: "Next.js App Router・TailwindCSS・Contentlayerで構築。GitHub Actionsで自動デプロイ。",
    technologies: ["TypeScript", "Next.js", "TailwindCSS"],
    githubUrl: "https://github.com/yutoshima/my-profile-page",
  },
];

export default function ProjectsPage() {
  return (
    <div className="bg-brand min-h-screen">
      <Navigation />
      <div className="max-w-3xl mx-auto px-8 pt-24 pb-12">
        <h1 className="font-bold text-3xl md:text-5xl text-center mb-6 text-white">
          作品紹介
        </h1>
        <p className="text-white/60 text-center mb-12">
          学生時代・個人開発で取り組んできたプロジェクトです。
        </p>

        <div className="w-full h-px bg-white/15 mb-12" />

        <div className="space-y-4">
          {projects.map((project) => (
            <div key={project.id} className="border border-white/15 hover:border-white/30 hover:bg-white/5 transition-colors p-6">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h2 className="text-white font-semibold">{project.title}</h2>
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                    className="text-white/50 hover:text-white transition-colors flex-shrink-0 mt-0.5">
                    <GithubIcon />
                  </a>
                )}
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-0.5 text-xs text-white/70 border border-white/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
