"use client";
import { ArrowLeft, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/projects", label: "作品紹介" },
  { href: "/skills", label: "スキル" },
  { href: "/experience", label: "経歴" },
  { href: "/contact", label: "お問い合わせ" },
];

export const Navigation = () => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting),
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header ref={ref}>
      <div
        className={`fixed inset-x-0 top-0 z-50 duration-200 border-b ${
          isIntersecting
            ? "bg-brand/0 border-transparent"
            : "bg-brand border-white/10"
        }`}
      >
        <div className="container flex items-center justify-between p-6 mx-auto">
          {isHome ? (
            <span className="font-display font-bold text-white tracking-widest text-sm">
              YS
            </span>
          ) : (
            <Link href="/" className="duration-200 text-white/70 hover:text-white">
              <ArrowLeft className="w-6 h-6" />
            </Link>
          )}

          {/* デスクトップナビゲーション */}
          <div className="hidden md:flex justify-between gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="duration-200 text-white/60 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* モバイルメニューボタン */}
          <button
            className="md:hidden text-white/60 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="メニュー"
            type="button"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* モバイルメニュー */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-brand border-t border-white/10">
            <div className="container mx-auto py-4 px-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="duration-200 text-white/60 hover:text-white py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
