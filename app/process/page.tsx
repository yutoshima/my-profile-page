"use client";

import React, { useEffect, useState } from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { motion } from "framer-motion";

interface Process {
  title: string;
  description: string;
  stages: Array<{
    id: string;
    title: string;
    description: string;
    tasks: string[];
    icon: string;
  }>;
  principles: Array<{
    id: string;
    title: string;
    description: string;
  }>;
}

export default function ProcessPage() {
  const [process, setProcess] = useState<Process | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/work-process');
        const data = await response.json();
        setProcess(data);
      } catch (error) {
        console.error('開発プロセスデータの取得に失敗しました:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading || !process) {
    return (
      <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen">
        <Navigation />
        <div className="container mx-auto px-4 pt-24 pb-12 flex items-center justify-center">
          <div className="text-white">読み込み中...</div>
        </div>
      </div>
    );
  }

  // アイコン名からコンポーネントを返す関数
  const getIcon = (iconName: string) => {
    const iconStyles = "w-6 h-6 text-indigo-400";
    
    switch (iconName) {
      case 'search':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className={iconStyles} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <title>検索アイコン</title>
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        );
      case 'layout':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className={iconStyles} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <title>レイアウトアイコン</title>
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <line x1="3" y1="9" x2="21" y2="9" />
            <line x1="9" y1="21" x2="9" y2="9" />
          </svg>
        );
      case 'code':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className={iconStyles} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <title>コードアイコン</title>
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        );
      case 'check-circle':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className={iconStyles} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <title>チェックアイコン</title>
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        );
      case 'upload-cloud':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className={iconStyles} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <title>アップロードアイコン</title>
            <polyline points="16 16 12 12 8 16" />
            <line x1="12" y1="12" x2="12" y2="21" />
            <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
            <polyline points="16 16 12 12 8 16" />
          </svg>
        );
      case 'refresh-cw':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className={iconStyles} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <title>リフレッシュアイコン</title>
            <polyline points="23 4 23 10 17 10" />
            <polyline points="1 20 1 14 7 14" />
            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className={iconStyles} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <title>デフォルトアイコン</title>
            <circle cx="12" cy="12" r="10" />
          </svg>
        );
    }
  };

  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="font-bold text-3xl md:text-5xl text-center mb-6 text-white">
          {process.title}
        </h1>
        <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-12">
          {process.description}
        </p>

        {/* 開発ステージ */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">開発ステージ</h2>
          
          <div className="relative">
            {/* 接続線 */}
            <div className="absolute left-[28px] top-10 bottom-10 w-1 bg-zinc-800 hidden md:block" />
            
            <div className="space-y-10">
              {process.stages.map((stage, index) => (
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <Card>
                    <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 rounded-full bg-zinc-800 flex items-center justify-center relative z-10">
                          {getIcon(stage.icon)}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {stage.title}
                        </h3>
                        <p className="text-zinc-300 mb-4">{stage.description}</p>
                        
                        <div className="bg-zinc-800/50 rounded-lg p-4">
                          <h4 className="text-sm font-medium text-zinc-300 mb-3">主なタスク:</h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                            {stage.tasks.map((task) => (
                              <li key={task.substring(0, 20)} className="flex items-start gap-2 text-zinc-400">
                                <span className="mt-1 flex-shrink-0">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <title>タスクチェックアイコン</title>
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                </span>
                                <span>{task}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* 開発原則 */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">開発原則</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {process.principles.map((principle, index) => (
              <motion.div
                key={principle.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-indigo-600/20 flex items-center justify-center">
                        <span className="text-indigo-400 font-bold">{index + 1}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white">
                        {principle.title}
                      </h3>
                    </div>
                    <p className="text-zinc-300">{principle.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 
