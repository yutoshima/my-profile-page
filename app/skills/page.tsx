import type { Metadata } from "next";
import { PageLayout } from "../components/page-layout";
import { Card } from "../components/card";
import skillsData from "../data/skills.json";
import profileData from "../data/profile.json";

export const metadata: Metadata = {
  title: "スキル",
  description: "島 悠人のスキルセット",
};

const categories = Array.from(new Set(skillsData.map((s) => s.category)));

export default function SkillsPage() {
  return (
    <PageLayout
      title={profileData.headings.skills}
      description={profileData.descriptions.skills}
    >
      {categories.map((category) => (
        <div key={category} className="mb-12">
          <h3 className="text-xl font-bold text-white mb-6">{category}</h3>
          <div className="flex flex-col gap-4">
            {skillsData
              .filter((s) => s.category === category)
              .map((skill) => (
                <Card key={skill.name}>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-white">{skill.name}</h4>
                      <span className="text-sm text-white/60">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-1.5">
                      <div className="h-1.5 rounded-full bg-white" style={{ width: `${skill.level}%` }} />
                    </div>
                    <p className="text-white/60 text-sm">{skill.description}</p>
                  </div>
                </Card>
              ))}
          </div>
        </div>
      ))}
    </PageLayout>
  );
}
