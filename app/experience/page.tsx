import type { Metadata } from "next";
import { PageLayout } from "../components/page-layout";
import { Card } from "../components/card";
import experiencesData from "../data/experiences.json";
import profileData from "../data/profile.json";

export const metadata: Metadata = {
  title: "経歴",
  description: "島 悠人の経歴",
};

export default function ExperiencePage() {
  return (
    <PageLayout
      title={profileData.headings.experience}
      description={profileData.descriptions.experience}
      label="Experience"
    >
      <div className="space-y-6">
        {experiencesData.map((exp) => (
          <Card key={exp.id}>
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-white">{exp.title}</h3>
                <span className="text-white/70 text-xs bg-white/10 rounded-full px-2 py-0.5">{exp.period}</span>
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
    </PageLayout>
  );
}
