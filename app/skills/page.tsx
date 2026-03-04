"use client";

import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { motion } from "framer-motion";
import skillsData from "../data/skills.json";
import profileData from "../data/profile.json";

interface Skill {
  name: string;
  level: number;
  description: string;
  category: string;
}

const skills: Skill[] = skillsData;
const categories = Array.from(new Set(skills.map((skill) => skill.category)));

export default function SkillsPage() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 pt-24 pb-12 sm:px-6 md:pb-16 lg:pb-20">
        <h1 className="font-bold text-3xl md:text-5xl text-center mb-6 text-white">
          {profileData.headings.skills}
        </h1>
        <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-12">
          {profileData.descriptions.skills}
        </p>

        <div className="w-full h-px bg-zinc-800 mb-12" />

        {categories.map((category) => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-bold text-zinc-100 mb-6">
              {category}
            </h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill) => (
                  <Card key={skill.name}>
                    <div className="p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xl font-semibold text-zinc-100">
                          {skill.name}
                        </h4>
                        <span className="text-sm text-zinc-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-zinc-700 rounded-full h-2.5">
                        <motion.div
                          className="h-2.5 rounded-full bg-indigo-500"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                        />
                      </div>
                      <p className="text-zinc-400">{skill.description}</p>
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
