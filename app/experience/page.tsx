"use client";

import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { motion } from "framer-motion";
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
      <div className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="font-bold text-3xl md:text-5xl text-center mb-12 text-white">
          {profileData.headings.experience}
        </h1>
        <p className="text-white/60 text-center max-w-3xl mx-auto mb-12">
          {profileData.descriptions.experience}
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
                <div className="absolute left-[25px] top-[76px] bottom-[-48px] w-[2px] bg-white/10" />
              )}
              <Card>
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0 bg-white/10 rounded-full w-12 h-12 flex items-center justify-center">
                    <span className="text-white">
                      {experiences.length - index}
                    </span>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">
                        {exp.title}
                      </h3>
                      <span className="text-white/50 text-sm">
                        {exp.period}
                      </span>
                    </div>
                    <div className="text-white/60 mb-4">
                      {exp.company} • {exp.location}
                    </div>
                    <ul className="text-white/80 list-disc pl-5 space-y-2">
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
