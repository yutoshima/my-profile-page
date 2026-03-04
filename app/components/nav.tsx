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
        className={`fixed inset-x-0 top-0 z-50 duration-200 border-b ${
          isIntersecting
            ? "bg-zinc-950/0 border-transparent"
            : "bg-zinc-950 border-zinc-800"
        }`}
      >
        <div className="container flex items-center justify-between p-6 mx-auto">
          <Link
            href="/"
            className="duration-200 text-white/70 hover:text-white"
          >
            <ArrowLeft className="w-6 h-6" />
          </Link>

          {/* デスクトップナビゲーション */}
          <div className="hidden md:flex justify-between gap-8">
            <Link
              href="/projects"
              className="duration-200 text-white/60 hover:text-white"
            >
              作品紹介
            </Link>
            <Link
              href="/skills"
              className="duration-200 text-white/60 hover:text-white"
            >
              スキル
            </Link>
            <Link
              href="/experience"
              className="duration-200 text-white/60 hover:text-white"
            >
              経歴
            </Link>
            <Link
              href="/contact"
              className="duration-200 text-white/60 hover:text-white"
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
          <div className="md:hidden bg-zinc-950 border-t border-zinc-800">
            <div className="container mx-auto py-4 px-6 flex flex-col space-y-4">
              <Link
                href="/projects"
                className="duration-200 text-white/60 hover:text-white py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                作品紹介
              </Link>
              <Link
                href="/skills"
                className="duration-200 text-white/60 hover:text-white py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                スキル
              </Link>
              <Link
                href="/experience"
                className="duration-200 text-white/60 hover:text-white py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                経歴
              </Link>
              <Link
                href="/contact"
                className="duration-200 text-white/60 hover:text-white py-2"
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
