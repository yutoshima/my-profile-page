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
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {others.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className="group p-5 border border-white/10 rounded-xl hover:border-white/30 transition-all"
          >
            <p className="text-white font-medium mb-1 group-hover:text-white transition-colors">
              {page.label}
            </p>
            <p className="text-white/50 text-sm">{page.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
