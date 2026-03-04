import React from "react";
import { Navigation } from "../components/nav";
import { Footer } from "../components/footer";
import { Card } from "../components/card";
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
    <div className="bg-brand min-h-screen">
      <Navigation />
      <div className="max-w-3xl mx-auto px-8 pt-24 pb-12">
        <h1 className="font-bold text-3xl md:text-5xl text-center mb-6 text-white">
          {profileData.headings.skills}
        </h1>
        <p className="text-white/60 text-center mb-12">
          {profileData.descriptions.skills}
        </p>

        <div className="w-full h-px bg-white/15 mb-12" />

        {categories.map((category) => (
          <div key={category} className="mb-12">
            <h3 className="text-xl font-bold text-white mb-6">{category}</h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill) => (
                  <Card key={skill.name}>
                    <div className="p-6 space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-white">{skill.name}</h4>
                        <span className="text-sm text-white/60">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-1.5">
                        <div
                          className="h-1.5 rounded-full bg-white"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      <p className="text-white/60 text-sm">{skill.description}</p>
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
