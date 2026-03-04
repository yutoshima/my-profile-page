import Link from "next/link";
import type { Metadata } from "next";
import { PageLayout } from "../components/page-layout";
import experiencesData from "../data/experiences.json";
import projectsData from "../data/projects.json";
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
      href="/experience"
    >
      <div className="relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/20" />

        <div className="space-y-10">
          {experiencesData.map((exp) => {
            const relatedProjects = projectsData.filter(
              (p) => p.experienceId === exp.id
            );
            return (
              <div key={exp.id} id={exp.id} className="pl-8 relative">
                <div className="absolute left-0 top-[6px] w-[15px] h-[15px] rounded-full border-2 border-white/50 bg-brand" />

                {/* 経歴情報 */}
                <p className="text-xs text-white/40 uppercase tracking-wider mb-1">{exp.period}</p>
                <h3 className="text-lg font-bold text-white mb-0.5">{exp.title}</h3>
                <p className="text-white/60 text-base mb-3">{exp.company} · {exp.location}</p>
                {exp.description.length > 0 && (
                  <ul className="text-white/75 text-base space-y-1.5">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-white/30 mt-0.5 shrink-0">–</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

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
            );
          })}
        </div>
      </div>
    </PageLayout>
  );
}
