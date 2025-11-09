import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "経歴 | ポートフォリオ",
  description: "これまでの職務経歴とプロジェクト経験のご紹介",
};

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
