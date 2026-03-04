import Link from "next/link";

const pages = [
  { href: "/projects", label: "作品紹介", description: "プロジェクト一覧" },
  { href: "/skills", label: "スキル", description: "技術スタック" },
  { href: "/experience", label: "経歴", description: "学歴・職歴" },
  { href: "/contact", label: "お問い合わせ", description: "連絡先" },
];

export const PageNav = ({ current }: { current: string }) => {
  const others = pages.filter((p) => p.href !== current);
  return (
    <div className="mt-20 pt-12 border-t border-white/10">
      <p className="text-xs uppercase tracking-[0.25em] text-white/40 mb-6">Other Pages</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10">
        {others.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className="group bg-surface p-6 hover:bg-[#475d90] transition-colors duration-200"
          >
            <p className="text-white font-semibold mb-1">{page.label}</p>
            <p className="text-white/50 text-sm leading-relaxed mb-4">{page.description}</p>
            <span className="text-white/30 group-hover:text-white/80 transition-colors text-sm">
              → 見る
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};
