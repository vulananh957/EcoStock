"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";

export default function SiteHeader() {
  const pathname = usePathname();
  const base = useMemo(() => (pathname === "/" ? "" : "/"), [pathname]);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    const onResize = () => {
      // Close drawer when switching to desktop layout.
      if (window.innerWidth >= 1024) setMobileMenuOpen(false); // Tailwind `lg`
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav className="sticky top-0 z-50 py-2 bg-[#F3F3F3]/90 backdrop-blur-md shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-[auto_1fr_auto] items-center">
            <Link href="/" className="flex items-center gap-2 justify-self-start" aria-label="EcoStock">
                <Image
                src="/img/logo-eco.png"
                alt="EcoStock Logo"
                width={400}
                height={120}
                className="h-20 md:h-24 w-auto object-contain scale-125 origin-left"
                priority
              />
            </Link>

            {/* Center menu (desktop) */}
            <div className="hidden lg:flex items-center justify-center gap-8 whitespace-nowrap justify-self-center">
              <Link href="/" className="text-[#0766AD] hover:text-[#29ADB2] font-medium transition-colors">Trang chủ</Link>
              <Link href={`${base}#about`} className="text-[#0766AD] hover:text-[#29ADB2] font-medium transition-colors">Về chúng tôi</Link>
              <Link href={`${base}#solutions`} className="text-[#0766AD] hover:text-[#29ADB2] font-medium transition-colors">Dự báo & Tối ưu</Link>
              <Link href={`${base}#blog`} className="text-[#0766AD] hover:text-[#29ADB2] font-medium transition-colors">Cẩm nang</Link>
            </div>

            {/* Right actions / hamburger */}
            <div className="flex items-center gap-4 justify-self-end">
              <div className="hidden lg:flex items-center gap-3">
                <Link 
                  href="/login" 
                  className="border-2 border-[#0766AD] text-[#0766AD] hover:bg-[#0766AD] hover:text-white px-6 py-2.5 rounded-full font-medium transition-all inline-flex items-center justify-center whitespace-nowrap"
                >
                  Đăng nhập
                </Link>
                <Link 
                  href="/register" 
                  className="bg-[#29ADB2] hover:bg-[#29ADB2]/90 text-white border-2 border-[#29ADB2] px-6 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 shadow-md inline-flex items-center justify-center whitespace-nowrap"
                >
                  Đăng ký
                </Link>
              </div>

              <button
                type="button"
                className="lg:hidden inline-flex items-center justify-center rounded-xl border border-black/10 bg-white/70 backdrop-blur px-3 py-3 text-[#0766AD] shadow-sm active:scale-[0.98]"
                aria-label={mobileMenuOpen ? "Đóng menu" : "Mở menu"}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
                onClick={() => setMobileMenuOpen((v) => !v)}
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile task bar / menu */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${mobileMenuOpen ? "" : "pointer-events-none"}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity duration-200 ${mobileMenuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={closeMobileMenu}
        />
        <aside
          id="mobile-menu"
          className={`absolute right-0 inset-y-0 w-[72vw] max-w-[280px] bg-[#F3F3F3] border-l border-black/10 shadow-2xl transition-transform duration-200 ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div className="h-full flex flex-col">
            <div className="flex items-center justify-between gap-3 px-4 py-2 border-b border-black/10">
              <Link href="/" className="flex items-center" onClick={closeMobileMenu} aria-label="EcoStock">
                <Image
                  src="/img/logo-eco.png"
                  alt="EcoStock Logo"
                  width={420}
                  height={126}
                  className="h-16 w-auto object-contain scale-125 origin-left"
                />
              </Link>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white p-2 text-[#0766AD] shadow-sm active:scale-[0.98]"
                aria-label="Đóng menu"
                onClick={closeMobileMenu}
              >
                <X size={20} />
              </button>
            </div>

            <div className="px-5 py-5 flex-1 overflow-y-auto">
              <nav className="flex flex-col gap-2">
                <Link
                  href="/"
                  className="rounded-2xl px-4 py-3 text-lg font-semibold text-[#0766AD] hover:bg-white/70 transition-colors"
                  onClick={closeMobileMenu}
                >
                  Trang chủ
                </Link>
                <Link
                  href={`${base}#about`}
                  className="rounded-2xl px-4 py-3 text-lg font-semibold text-[#0766AD] hover:bg-white/70 transition-colors"
                  onClick={closeMobileMenu}
                >
                  Về chúng tôi
                </Link>
                <Link
                  href={`${base}#solutions`}
                  className="rounded-2xl px-4 py-3 text-lg font-semibold text-[#0766AD] hover:bg-white/70 transition-colors"
                  onClick={closeMobileMenu}
                >
                  Dự báo & Tối ưu
                </Link>
                <Link
                  href={`${base}#blog`}
                  className="rounded-2xl px-4 py-3 text-lg font-semibold text-[#0766AD] hover:bg-white/70 transition-colors"
                  onClick={closeMobileMenu}
                >
                  Cẩm nang
                </Link>
                <Link
                  href={`${base}#faq`}
                  className="rounded-2xl px-4 py-3 text-lg font-semibold text-[#0766AD] hover:bg-white/70 transition-colors"
                  onClick={closeMobileMenu}
                >
                  FAQ
                </Link>
              </nav>
            </div>

            <div className="px-5 pt-4 pb-[max(12px,env(safe-area-inset-bottom))] border-t border-black/10">
                            {/* Inside the Mobile Menu (Sidebar/Drawer) component, near bottom navigation */}
              <div className="w-full mt-8 flex flex-col gap-3 px-6">
                {/* Button 1: Đăng nhập (Primary, with Icon) */}
                <Link
                  href="/login"
                  className="bg-[#0766AD] hover:bg-[#0766AD]/90 text-white p-4 rounded-full font-semibold transition-all w-full flex items-center justify-center shadow-lg"
                  onClick={closeMobileMenu}
                >
                  <span className="w-full text-center">Đăng nhập</span>
                </Link>

                {/* Button 2: Đăng ký (Secondary, centered text) */}
                <Link
                  href="/register"
                  className="border-2 border-[#0766AD] text-[#0766AD] hover:bg-[#0766AD]/5 p-4 rounded-full font-semibold transition-all w-full flex items-center justify-center whitespace-nowrap"
                  onClick={closeMobileMenu}
                >
                  Đăng ký
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
