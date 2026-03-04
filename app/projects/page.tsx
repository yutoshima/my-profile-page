import { Github } from "lucide-react";
import type { Metadata } from "next";
import { Card } from "../components/card";
import { PageLayout } from "../components/page-layout";
import projectsData from "../data/projects.json";
import profileData from "../data/profile.json";

export const metadata: Metadata = {
  title: "作品紹介",
  description: "これまでに取り組んできた個人プロジェクトの紹介",
};

export default function ProjectsPage() {
  return (
    <PageLayout
      title={profileData.headings.projects}
      description={profileData.descriptions.projects}
    >
      <div className="space-y-4">
        {projectsData.map((project) => (
          <Card key={project.id}>
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
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-xs text-white/70 border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </PageLayout>
  );
}
