"use client";

import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { motion } from "framer-motion";
import workProcessData from "../data/work-process.json";

interface Stage {
  id: string;
  title: string;
  description: string;
  tasks: string[];
  icon: string;
}

interface Principle {
  id: string;
  title: string;
  description: string;
}

interface Process {
  title: string;
  description: string;
  stages: Stage[];
  principles: Principle[];
}

const process: Process = workProcessData as Process;

const getIcon = (iconName: string) => {
  const iconStyles = "w-6 h-6 text-indigo-400";
  switch (iconName) {
    case "search":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={iconStyles} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <title>検索</title>
          <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      );
    case "layout":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={iconStyles} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <title>レイアウト</title>
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" />
        </svg>
      );
    case "code":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={iconStyles} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <title>コード</title>
          <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case "check-circle":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={iconStyles} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <title>チェック</title>
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      );
    case "upload-cloud":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={iconStyles} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <title>アップロード</title>
          <polyline points="16 16 12 12 8 16" /><line x1="12" y1="12" x2="12" y2="21" /><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
        </svg>
      );
    default:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={iconStyles} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <title>アイコン</title>
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
};

export default function ProcessPage() {
  return (
    <div className="bg-brand min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="font-bold text-3xl md:text-5xl text-center mb-6 text-white">
          {process.title}
        </h1>
        <p className="text-white/60 text-center max-w-3xl mx-auto mb-12">
          {process.description}
        </p>

        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            開発ステージ
          </h2>
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
                      <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                        {getIcon(stage.icon)}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {stage.title}
                      </h3>
                      <p className="text-white/80 mb-4">{stage.description}</p>
                      <div className="bg-white/10/50 rounded-lg p-4">
                        <h4 className="text-sm font-medium text-white/80 mb-3">
                          主なタスク:
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                          {stage.tasks.map((task) => (
                            <li
                              key={task.substring(0, 20)}
                              className="flex items-start gap-2 text-white/60"
                            >
                              <span className="mt-1 flex-shrink-0 text-indigo-500">✓</span>
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

        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            開発原則
          </h2>
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
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                        <span className="text-indigo-400 font-bold">
                          {index + 1}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white">
                        {principle.title}
                      </h3>
                    </div>
                    <p className="text-white/80">{principle.description}</p>
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
