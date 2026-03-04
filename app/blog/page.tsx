"use client";

import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { motion } from "framer-motion";
import blogData from "../data/blog.json";

interface BlogPost {
  id: string;
  title: string;
  summary: string;
  date: string;
  tags: string[];
  content: string;
}

const posts: BlogPost[] = blogData;

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default function BlogPage() {
  return (
    <div className="bg-brand min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="font-bold text-3xl md:text-5xl text-center mb-6 text-white">
          技術ブログ
        </h1>
        <p className="text-white/60 text-center max-w-3xl mx-auto mb-12">
          フロントエンド開発の知見やベストプラクティスについての記事を共有しています。
        </p>

        <div className="max-w-4xl mx-auto grid gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                    <h2 className="text-2xl font-bold text-white">
                      {post.title}
                    </h2>
                    <span className="text-sm text-white/50 whitespace-nowrap">
                      {formatDate(post.date)}
                    </span>
                  </div>
                  <p className="text-white/80 mb-4">{post.summary}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    className="mt-2 px-4 py-2 bg-white hover:bg-white/90 text-white rounded transition-colors"
                  >
                    続きを読む
                  </button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
