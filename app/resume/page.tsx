"use client";

import React, { useEffect, useState } from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { motion } from "framer-motion";
import { Download, ExternalLink, Briefcase, Book, Code, Globe } from "lucide-react";

interface Resume {
  basics: {
    name: string;
    label: string;
    email: string;
    phone: string;
    location: {
      address: string;
      postalCode: string;
      city: string;
      countryCode: string;
    };
    profiles: Array<{
      network: string;
      username: string;
      url: string;
    }>;
    summary: string;
  };
  work: Array<{
    company: string;
    position: string;
    website: string;
    startDate: string;
    endDate: string;
    summary: string;
    highlights: string[];
  }>;
  education: Array<{
    institution: string;
    area: string;
    studyType: string;
    startDate: string;
    endDate: string;
    gpa: string;
    courses: string[];
  }>;
  skills: Array<{
    name: string;
    level: string;
    keywords: string[];
  }>;
  languages: Array<{
    language: string;
    fluency: string;
  }>;
  fileFormat: {
    pdfUrl: string;
    docxUrl: string;
    jsonUrl: string;
  };
}

export default function ResumePage() {
  const [resume, setResume] = useState<Resume | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/resume');
        const data = await response.json();
        setResume(data);
      } catch (error) {
        console.error('レジュメデータの取得に失敗しました:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading || !resume) {
    return (
      <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen">
        <Navigation />
        <div className="container mx-auto px-4 pt-24 pb-12 flex items-center justify-center">
          <div className="text-white">読み込み中...</div>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    if (dateString === '現在') return '現在';
    const [year, month] = dateString.split('-');
    return `${year}年${month}月`;
  };

  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
          >
            <h1 className="font-bold text-3xl md:text-5xl mb-3 text-white">
              {resume.basics.name}の経歴書
            </h1>
            <p className="text-zinc-400 max-w-3xl mx-auto mb-6">
              {resume.basics.summary}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <a
                href={resume.fileFormat.pdfUrl}
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-md transition-colors"
                download
              >
                <Download size={18} />
                <span>PDF形式でダウンロード</span>
              </a>
              <a
                href={resume.fileFormat.docxUrl}
                className="inline-flex items-center gap-2 bg-zinc-700 hover:bg-zinc-600 text-white px-5 py-2.5 rounded-md transition-colors"
                download
              >
                <Download size={18} />
                <span>Word形式でダウンロード</span>
              </a>
            </div>
          </motion.div>

          {/* 職歴 */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">職歴</h2>
            </div>
            
            <div className="space-y-6">
              {resume.work.map((work) => (
                <Card key={`work-${work.company}-${work.position}`}>
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">{work.position}</h3>
                        <div className="flex items-center gap-2 text-zinc-400">
                          <span>{work.company}</span>
                          <a 
                            href={work.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-indigo-400 hover:text-indigo-300"
                            aria-label={`${work.company}のウェブサイト`}
                          >
                            <ExternalLink size={14} />
                          </a>
                        </div>
                      </div>
                      <div className="text-sm text-zinc-500">
                        {formatDate(work.startDate)} - {formatDate(work.endDate)}
                      </div>
                    </div>
                    
                    <p className="text-zinc-300 mb-4">{work.summary}</p>
                    
                    <ul className="space-y-2">
                      {work.highlights.map((highlight) => (
                        <li key={highlight.substring(0, 20)} className="flex items-start gap-2 text-zinc-400">
                          <span className="mt-1 flex-shrink-0 text-indigo-500">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </motion.section>

          {/* 学歴 */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <Book className="text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">学歴</h2>
            </div>
            
            <div className="space-y-6">
              {resume.education.map((edu) => (
                <Card key={`edu-${edu.institution}-${edu.studyType}`}>
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
                        <div className="text-zinc-400">
                          {edu.studyType} - {edu.area}
                        </div>
                      </div>
                      <div className="text-sm text-zinc-500">
                        {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                      </div>
                    </div>
                    
                    {edu.gpa && (
                      <div className="mb-4 text-zinc-300">
                        GPA: {edu.gpa}
                      </div>
                    )}
                    
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-zinc-300 mb-2">主な履修科目:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course) => (
                          <span 
                            key={course}
                            className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs rounded-full"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.section>

          {/* スキル */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <Code className="text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">スキル</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resume.skills.map((skill) => (
                <Card key={`skill-${skill.name}`}>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-bold text-white">{skill.name}</h3>
                      <span className="px-3 py-1 bg-indigo-600/30 text-indigo-300 text-xs rounded-full">
                        {skill.level}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {skill.keywords.map((keyword) => (
                        <span 
                          key={keyword}
                          className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs rounded-full"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.section>

          {/* 言語 */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Globe className="text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">言語</h2>
            </div>
            
            <Card>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {resume.languages.map((lang) => (
                    <div key={`lang-${lang.language}`} className="flex justify-between items-center">
                      <span className="text-zinc-300">{lang.language}</span>
                      <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs rounded-full">
                        {lang.fluency}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.section>
        </div>
      </div>
    </div>
  );
} 
