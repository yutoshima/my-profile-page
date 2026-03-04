import Link from "next/link";
import type { Metadata } from "next";
import { PageLayout } from "../components/page-layout";
import { Card } from "../components/card";
import skillsData from "../data/skills.json";
import projectsData from "../data/projects.json";
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
      label="Skills"
      href="/skills"
    >
      {categories.map((category) => (
        <div key={category} className="mb-12">
          <h3 className="text-sm uppercase tracking-[0.2em] text-white/50 mb-4">{category}</h3>
          <div className="flex flex-col gap-4">
            {skillsData
              .filter((s) => s.category === category)
              .map((skill) => {
                const relatedProjects = projectsData.filter((p) =>
                  p.technologies.some((t) => skill.technologies.includes(t))
                );
                return (
                  <Card key={skill.name} id={skill.id}>
                    <div className="p-6 space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-white">{skill.name}</h4>
                        <span className="text-base text-white/60">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-white/30 rounded-full h-2">
                        <div
                          className="h-2 rounded-full bg-white"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      <p className="text-white/60 text-base">{skill.description}</p>
                      {relatedProjects.length > 0 && (
                        <div className="pt-1">
                          <p className="text-xs text-white/30 uppercase tracking-wider mb-2">
                            関連プロジェクト
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {relatedProjects.map((p) => (
                              <Link
                                key={p.id}
                                href={`/projects#${p.id}`}
                                className="text-sm text-white/60 hover:text-white underline underline-offset-2 transition-colors"
                              >
                                {p.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </Card>
                );
              })}
          </div>
        </div>
      ))}
    </PageLayout>
  );
}
