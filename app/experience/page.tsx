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
              <p className="text-xs text-white/40 mb-2">{exp.period}</p>
              <h3 className="text-base font-bold text-white mb-1">{exp.title}</h3>
              <p className="text-white/60 text-sm mb-4">{exp.company} · {exp.location}</p>
              <ul className="text-white/80 text-sm space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-white/30 mt-0.5 shrink-0">–</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </PageLayout>
  );
}
