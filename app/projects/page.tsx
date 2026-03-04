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
          return (
            <Card key={project.id} id={project.id}>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h2 className="text-white font-semibold">{project.title}</h2>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/50 hover:text-white transition-colors flex-shrink-0 mt-0.5"
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>
                <p className="text-white/60 text-base leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => {
                    const skill = skillByTech[tech];
                    return skill ? (
                      <Link
                        key={tech}
                        href={`/skills#${skill.id}`}
                        className="px-3 py-1 text-sm text-white border border-white/30 rounded-full hover:border-white hover:text-white transition-colors"
                      >
                        {tech}
                      </Link>
                    ) : (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm text-white/50 border border-white/15 rounded-full"
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
                {experience && (
                  <Link
                    href={`/experience#${experience.id}`}
                    className="inline-flex items-center gap-1.5 text-xs text-white/40 hover:text-white/70 transition-colors"
                  >
                    <span>↗</span>
                    <span>{experience.title} · {experience.period}</span>
                  </Link>
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </PageLayout>
  );
}
