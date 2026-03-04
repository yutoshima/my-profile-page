import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import experiencesData from "../data/experiences.json";
import profileData from "../data/profile.json";

interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const experiences: Experience[] = experiencesData;

export default function ExperiencePage() {
  return (
    <div className="bg-brand min-h-screen">
      <Navigation />
      <div className="max-w-3xl mx-auto px-8 pt-24 pb-12">
        <h1 className="font-bold text-3xl md:text-5xl text-center mb-6 text-white">
          {profileData.headings.experience}
        </h1>
        <p className="text-white/60 text-center mb-12">
          {profileData.descriptions.experience}
        </p>

        <div className="w-full h-px bg-white/15 mb-12" />

        <div className="space-y-6">
          {experiences.map((exp) => (
            <Card key={exp.id}>
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-white">{exp.title}</h3>
                  <span className="text-white/50 text-sm">{exp.period}</span>
                </div>
                <div className="text-white/60 text-sm mb-4">
                  {exp.company} · {exp.location}
                </div>
                <ul className="text-white/80 text-sm list-disc pl-5 space-y-1">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
