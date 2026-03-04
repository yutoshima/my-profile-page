import { Github } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { Card } from "../components/card";
import { PageLayout } from "../components/page-layout";
import projectsData from "../data/projects.json";
import skillsData from "../data/skills.json";
import experiencesData from "../data/experiences.json";
import profileData from "../data/profile.json";

export const metadata: Metadata = {
  title: "作品紹介",
  description: "これまでに取り組んできた個人プロジェクトの紹介",
};

const skillByTech = Object.fromEntries(
  skillsData.flatMap((skill) => skill.technologies.map((tech) => [tech, skill]))
);

export default function ProjectsPage() {
  return (
    <PageLayout
      title={profileData.headings.projects}
      description={profileData.descriptions.projects}
      label="Projects"
      href="/projects"
    >
      <div className="space-y-4">
        {projectsData.map((project) => {
          const experience = project.experienceId
            ? experiencesData.find((e) => e.id === project.experienceId)
            : null;
          const linkedTechs = project.technologies.filter((t) => skillByTech[t]);
          const plainTechs = project.technologies.filter((t) => !skillByTech[t]);
          return (
            <Card key={project.id} id={project.id}>
              <div className="p-6">
                {/* メインコンテンツ */}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h2 className="text-white font-semibold">{project.title}</h2>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/40 hover:text-white transition-colors flex-shrink-0 mt-0.5"
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>
                <p className="text-white/60 text-base leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* 技術タグ */}
                <div className="flex flex-wrap gap-2">
                  {linkedTechs.map((tech) => (
                    <Link
                      key={tech}
                      href={`/skills#${skillByTech[tech].id}`}
                      className="px-2.5 py-1 text-sm text-white/80 border border-white/25 rounded-full hover:border-white/60 hover:text-white transition-colors"
                    >
                      {tech}
                    </Link>
                  ))}
                  {plainTechs.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-sm text-white/35 border border-white/10 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* 経歴リンク */}
                {experience && (
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <Link
                      href={`/experience#${experience.id}`}
                      className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white/80 transition-colors"
                    >
                      <span className="text-white/25">経歴</span>
                      <span>{experience.title}</span>
                      <span className="text-white/25">·</span>
                      <span className="text-white/35">{experience.period}</span>
                    </Link>
                  </div>
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </PageLayout>
  );
}
