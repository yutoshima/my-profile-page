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
                    <div className="p-6">
                      {/* スキル情報 */}
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-white">{skill.name}</h4>
                        <span className="text-base text-white/50">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2 mb-3">
                        <div
                          className="h-2 rounded-full bg-white"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      <p className="text-white/60 text-base">{skill.description}</p>

                      {/* 関連プロジェクト */}
                      {relatedProjects.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-white/10">
                          <p className="text-xs text-white/30 uppercase tracking-wider mb-2">
                            関連プロジェクト
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {relatedProjects.map((p) => (
                              <Link
                                key={p.id}
                                href={`/projects#${p.id}`}
                                className="px-2.5 py-1 text-sm text-white/60 border border-white/15 rounded-full hover:text-white hover:border-white/35 transition-colors"
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
