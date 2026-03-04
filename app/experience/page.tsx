import type { Metadata } from "next";
import { PageLayout } from "../components/page-layout";
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
      <div className="relative">
        {/* タイムライン縦線 */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/20" />

        <div className="space-y-10">
          {experiencesData.map((exp) => (
            <div key={exp.id} className="pl-8 relative">
              {/* ドット */}
              <div className="absolute left-0 top-[6px] w-[15px] h-[15px] rounded-full border-2 border-white/50 bg-brand" />

              <p className="text-xs text-white/40 uppercase tracking-wider mb-1">{exp.period}</p>
              <h3 className="text-base font-bold text-white mb-0.5">{exp.title}</h3>
              <p className="text-white/60 text-sm mb-3">{exp.company} · {exp.location}</p>
              <ul className="text-white/75 text-sm space-y-1.5">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-white/30 mt-0.5 shrink-0">–</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
