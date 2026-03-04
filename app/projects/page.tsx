import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "作品紹介 | ポートフォリオ",
  description: "これまでに取り組んできた個人プロジェクトと実務開発案件の紹介",
};

export const revalidate = 60;

interface ProjectItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  slug: string;
  date: string;
  technologies: string[];
  imageUrl?: string;
  projectUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

const projects: ProjectItem[] = [
  {
    id: "portfolio",
    title: "ポートフォリオサイト",
    description:
      "Next.js、TailwindCSS、Contentlayerを使用して構築された個人ポートフォリオサイト",
    longDescription:
      "このポートフォリオサイトは、最新のWeb技術を活用して作成しました。Next.jsのApp Routerを採用し、TailwindCSSでスタイリング、Framer Motionでアニメーションを実装しています。また、ContentlayerでMarkdownコンテンツを管理し、柔軟なコンテンツ更新が可能です。",
    slug: "portfolio",
    date: "2023-12-15",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
      "Contentlayer",
    ],
    imageUrl: "/portfolio.png",
    githubUrl: "https://github.com/yutoshima/my-profile-app",
    featured: true,
  },
  {
    id: "ecommerce",
    title: "Eコマースプラットフォーム",
    description:
      "React、Next.js、Stripeを使用したオンラインショッピングプラットフォーム",
    longDescription:
      "フルスタックのEコマースプラットフォームで、商品一覧、詳細ページ、カート機能、決済プロセスまでを実装しています。認証にはNext-Authを使用し、バックエンドはPrismaとPostgreSQLで構築。Stripeを統合して安全な決済処理を実現しました。",
    slug: "ecommerce",
    date: "2023-09-20",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Stripe",
      "Next-Auth",
    ],
    projectUrl: "https://nextjs-ecommerce-demo.vercel.app",
    githubUrl: "https://github.com/yutoshima/nextjs-ecommerce",
    featured: true,
  },
  {
    id: "task-manager",
    title: "タスク管理アプリ",
    description:
      "React、TypeScript、Firebase を使用したタスク管理アプリケーション",
    longDescription:
      "直感的なUIを持つタスク管理アプリです。ドラッグ&ドロップでタスクの並べ替え、カテゴリー分け、優先度設定、期限設定などの機能を実装。Firebaseを使ってリアルタイムデータ同期とユーザー認証を行っています。",
    slug: "task-manager",
    date: "2023-06-10",
    technologies: [
      "React",
      "TypeScript",
      "Firebase",
      "Firestore",
      "React Beautiful DnD",
      "Chakra UI",
    ],
    projectUrl: "https://task-manager-app-demo.web.app",
    githubUrl: "https://github.com/yutoshima/task-manager-app",
    featured: true,
  },
  {
    id: "social-network",
    title: "SNSクローン",
    description:
      "React、GraphQL、MongoDB を使用したソーシャルネットワークアプリケーション",
    longDescription:
      "主要なSNS機能を備えたアプリケーションです。ユーザープロフィール、投稿、コメント、いいね、フォロー機能を実装。GraphQLを使用したAPIで効率的なデータ取得を行い、MongoDB Atlasでデータを管理しています。",
    slug: "social-network",
    date: "2023-03-05",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "GraphQL",
      "Apollo",
      "MongoDB",
      "JWT認証",
    ],
    githubUrl: "https://github.com/yutoshima/social-network-app",
    featured: false,
  },
  {
    id: "weather-app",
    title: "天気予報アプリ",
    description:
      "React Nativeで開発したクロスプラットフォーム天気予報アプリケーション",
    longDescription:
      "位置情報を活用してリアルタイムの天気予報と週間予報を表示するモバイルアプリです。OpenWeatherMap APIを使用してデータを取得し、美しいUIで天気情報を視覚化しています。お気に入りの場所を保存する機能も実装。",
    slug: "weather-app",
    date: "2022-11-22",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "OpenWeatherMap API",
      "Async Storage",
      "React Navigation",
    ],
    projectUrl: "https://expo.dev/@yutoshima/weather-app",
    githubUrl: "https://github.com/yutoshima/react-native-weather",
    featured: false,
  },
  {
    id: "blog-platform",
    title: "ブログプラットフォーム",
    description: "Next.js、MDX、Vercelを使用した高速ブログプラットフォーム",
    longDescription:
      "技術ブログ向けに最適化されたプラットフォームです。MDXでコードブロックのシンタックスハイライトや様々なコンポーネントを記事内に埋め込み可能。検索機能、タグフィルター、関連記事表示など、読者体験を向上させる機能を実装しています。",
    slug: "blog-platform",
    date: "2022-08-17",
    technologies: [
      "Next.js",
      "MDX",
      "TailwindCSS",
      "Vercel",
      "Next-SEO",
      "Algolia Search",
    ],
    projectUrl: "https://nextjs-blog-platform-demo.vercel.app",
    githubUrl: "https://github.com/yutoshima/nextjs-blog-platform",
    featured: false,
  },
];

export default function ProjectsPage() {
  // 特集プロジェクトと通常プロジェクトに分割
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <div className="bg-brand-dark min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 pt-24 pb-12 sm:px-6 md:pb-16 lg:pb-20">
        <h1 className="font-bold text-3xl md:text-5xl text-center mb-6 text-white">
          作品紹介
        </h1>
        <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-12">
          これまでに取り組んできた個人プロジェクトと実務開発案件の一部をご紹介します。
          各プロジェクトで習得した技術と解決した課題に焦点を当てています。
        </p>
        <div className="w-full h-px bg-zinc-800 mb-12" />

        {/* 特集プロジェクト */}
        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 mb-12">
          <Card>
            <article className="relative w-full h-full p-4 md:p-8">
              {featuredProjects[0].imageUrl && (
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img
                    src={featuredProjects[0].imageUrl}
                    alt={featuredProjects[0].title}
                    className="object-cover w-full h-48 transition-transform duration-300 hover:scale-105"
                  />
                </div>
              )}
              <div className="flex items-center justify-between gap-2">
                <div className="text-xs text-zinc-100">
                  <time dateTime={featuredProjects[0].date}>
                    {new Date(featuredProjects[0].date).toLocaleDateString(
                      "ja-JP",
                    )}
                  </time>
                </div>
                <div className="flex space-x-2">
                  {featuredProjects[0].githubUrl && (
                    <a
                      href={featuredProjects[0].githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-zinc-100"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-labelledby="github-icon-title"
                      >
                        <title id="github-icon-title">GitHubリポジトリ</title>
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  )}
                  {featuredProjects[0].projectUrl && (
                    <a
                      href={featuredProjects[0].projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-zinc-100"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-labelledby="external-link-icon-title"
                      >
                        <title id="external-link-icon-title">
                          プロジェクトサイト
                        </title>
                        <path d="M14 4h-13v18h20v-11h1v12h-22v-20h14v1zm10 5h-1v-6.293l-11.646 11.647-.708-.708 11.647-11.646h-6.293v-1h8v8z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              <h2 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
                {featuredProjects[0].title}
              </h2>
              <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                {featuredProjects[0].longDescription}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {featuredProjects[0].technologies.map((tech) => (
                  <span
                    key={`${featuredProjects[0].id}-${tech}`}
                    className="px-2 py-1 text-xs text-zinc-300 bg-zinc-800 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </Card>

          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0">
            {featuredProjects.slice(1).map((project) => (
              <Card key={`project-${project.id}`}>
                <article className="relative w-full h-full p-4 md:p-8">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-xs text-zinc-100">
                      <time dateTime={project.date}>
                        {new Date(project.date).toLocaleDateString("ja-JP")}
                      </time>
                    </div>
                    <div className="flex space-x-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-400 hover:text-zinc-100"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-labelledby={`github-icon-${project.id}`}
                          >
                            <title id={`github-icon-${project.id}`}>
                              GitHubリポジトリ
                            </title>
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </a>
                      )}
                      {project.projectUrl && (
                        <a
                          href={project.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-400 hover:text-zinc-100"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-labelledby={`external-link-icon-${project.id}`}
                          >
                            <title id={`external-link-icon-${project.id}`}>
                              プロジェクトサイト
                            </title>
                            <path d="M14 4h-13v18h20v-11h1v12h-22v-20h14v1zm10 5h-1v-6.293l-11.646 11.647-.708-.708 11.647-11.646h-6.293v-1h8v8z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                  <h2 className="mt-4 text-xl font-bold text-zinc-100 group-hover:text-white font-display">
                    {project.title}
                  </h2>
                  <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={`${project.id}-${tech}`}
                        className="px-2 py-1 text-xs text-zinc-300 bg-zinc-800 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 text-xs text-zinc-300 bg-zinc-800 rounded-full">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </article>
              </Card>
            ))}
          </div>
        </div>
        <div className="w-full h-px mb-12 md:block bg-zinc-800" />

        {/* その他のプロジェクト */}
        <h2 className="font-bold text-2xl md:text-3xl mb-6 text-white">
          その他のプロジェクト
        </h2>
        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project) => (
            <Card key={`project-${project.id}`}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    <time dateTime={project.date}>
                      {new Date(project.date).toLocaleDateString("ja-JP")}
                    </time>
                  </div>
                  <div className="flex space-x-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-zinc-100"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-labelledby={`github-other-${project.id}`}
                        >
                          <title id={`github-other-${project.id}`}>
                            GitHubリポジトリ
                          </title>
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    )}
                    {project.projectUrl && (
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-zinc-100"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-labelledby={`external-other-${project.id}`}
                        >
                          <title id={`external-other-${project.id}`}>
                            プロジェクトサイト
                          </title>
                          <path d="M14 4h-13v18h20v-11h1v12h-22v-20h14v1zm10 5h-1v-6.293l-11.646 11.647-.708-.708 11.647-11.646h-6.293v-1h8v8z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
                <h2 className="mt-4 text-xl font-bold text-zinc-100 group-hover:text-white font-display">
                  {project.title}
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={`${project.id}-${tech}`}
                      className="px-2 py-1 text-xs text-zinc-300 bg-zinc-800 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs text-zinc-300 bg-zinc-800 rounded-full">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </article>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
