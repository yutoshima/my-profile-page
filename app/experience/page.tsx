"use client";

import React, { useEffect, useState } from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { motion } from "framer-motion";

interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

interface ProfileData {
  headings: {
    experience: string;
  };
  descriptions: {
    experience: string;
  };
}

export default function ExperiencePage() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const experiencesResponse = await fetch('/api/experiences');
        const experiencesData = await experiencesResponse.json();
        setExperiences(experiencesData);

        const profileResponse = await fetch('/api/profile');
        const profileData = await profileResponse.json();
        setProfile(profileData);
      } catch (error) {
        console.error('データの取得に失敗しました:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen">
        <Navigation />
        <div className="container mx-auto px-4 pt-24 pb-12 flex items-center justify-center">
          <div className="text-white">読み込み中...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="font-bold text-3xl md:text-5xl text-center mb-12 text-white">
          {profile?.headings?.experience || "経歴"}
        </h1>
        <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-12">
          {profile?.descriptions?.experience || 
          "これまでの私の職務経歴と経験をご紹介します。様々なプロジェクトと役割を通じて、フロントエンド開発の専門知識を培ってきました。"}
        </p>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-12 relative"
            >
              {index < experiences.length - 1 && (
                <div className="absolute left-[25px] top-[76px] bottom-[-48px] w-[2px] bg-zinc-800" />
              )}
              <Card>
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0 bg-zinc-800 rounded-full w-12 h-12 flex items-center justify-center">
                    <span className="text-white">
                      {experiences.length - index}
                    </span>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">
                        {exp.title}
                      </h3>
                      <span className="text-zinc-500 text-sm">
                        {exp.period}
                      </span>
                    </div>
                    <div className="text-zinc-400 mb-4">
                      {exp.company} • {exp.location}
                    </div>
                    <ul className="text-zinc-300 list-disc pl-5 space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={`${exp.id}-desc-${i}`}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
