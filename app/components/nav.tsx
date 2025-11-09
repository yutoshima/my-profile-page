"use client";
import { ArrowLeft, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export const Navigation = () => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting),
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header ref={ref}>
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b ${
          isIntersecting
            ? "bg-zinc-900/0 border-transparent"
            : "bg-zinc-900/500 border-zinc-800"
        }`}
      >
        <div className="container flex items-center justify-between p-6 mx-auto">
          <Link
            href="/"
            className="duration-200 text-zinc-300 hover:text-zinc-100"
          >
            <ArrowLeft className="w-6 h-6" />
          </Link>

          {/* デスクトップナビゲーション */}
          <div className="hidden md:flex justify-between gap-8">
            <Link
              href="/projects"
              className="duration-200 text-zinc-400 hover:text-zinc-100"
            >
              作品紹介
            </Link>
            <Link
              href="/skills"
              className="duration-200 text-zinc-400 hover:text-zinc-100"
            >
              スキル
            </Link>
            <Link
              href="/experience"
              className="duration-200 text-zinc-400 hover:text-zinc-100"
            >
              経歴
            </Link>
            <Link
              href="/blog"
              className="duration-200 text-zinc-400 hover:text-zinc-100"
            >
              技術ブログ
            </Link>
            <Link
              href="/certifications"
              className="duration-200 text-zinc-400 hover:text-zinc-100"
            >
              資格・認定
            </Link>
            <Link
              href="/testimonials"
              className="duration-200 text-zinc-400 hover:text-zinc-100"
            >
              推薦文
            </Link>
            <Link
              href="/process"
              className="duration-200 text-zinc-400 hover:text-zinc-100"
            >
              開発プロセス
            </Link>
            <Link
              href="/resume"
              className="duration-200 text-zinc-400 hover:text-zinc-100"
            >
              レジュメ
            </Link>
            <Link
              href="/contact"
              className="duration-200 text-zinc-400 hover:text-zinc-100"
            >
              お問い合わせ
            </Link>
          </div>

          {/* モバイルメニューボタン */}
          <button
            className="md:hidden text-zinc-400 hover:text-zinc-100"
            onClick={toggleMobileMenu}
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
          <div className="md:hidden bg-zinc-900/95 border-t border-zinc-800">
            <div className="container mx-auto py-4 px-6 flex flex-col space-y-4">
              <Link
                href="/projects"
                className="duration-200 text-zinc-400 hover:text-zinc-100 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                作品紹介
              </Link>
              <Link
                href="/skills"
                className="duration-200 text-zinc-400 hover:text-zinc-100 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                スキル
              </Link>
              <Link
                href="/experience"
                className="duration-200 text-zinc-400 hover:text-zinc-100 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                経歴
              </Link>
              <Link
                href="/blog"
                className="duration-200 text-zinc-400 hover:text-zinc-100 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                技術ブログ
              </Link>
              <Link
                href="/certifications"
                className="duration-200 text-zinc-400 hover:text-zinc-100 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                資格・認定
              </Link>
              <Link
                href="/testimonials"
                className="duration-200 text-zinc-400 hover:text-zinc-100 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                推薦文
              </Link>
              <Link
                href="/process"
                className="duration-200 text-zinc-400 hover:text-zinc-100 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                開発プロセス
              </Link>
              <Link
                href="/resume"
                className="duration-200 text-zinc-400 hover:text-zinc-100 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                レジュメ
              </Link>
              <Link
                href="/contact"
                className="duration-200 text-zinc-400 hover:text-zinc-100 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
