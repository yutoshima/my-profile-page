import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "スキル | ポートフォリオ",
  description: "技術スキルとその熟練度のご紹介",
};

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
