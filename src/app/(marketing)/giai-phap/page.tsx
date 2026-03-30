import type { Metadata } from "next";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import SolutionsTabs from "@/components/features/SolutionsTabs";

export const metadata: Metadata = {
  title: "Giải pháp - EcoStock",
  description: "Một nền tảng, đa giải pháp cho hệ sinh thái bán lẻ xanh.",
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-[#F3F3F3] text-[#0766AD] font-montserrat selection:bg-[#29ADB2] selection:text-white">
      <SiteHeader />

      <main className="pt-10 pb-20">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0766AD] text-white rounded-[40px] p-8 md:p-14 shadow-xl">
            <span className="text-[#C5E898] font-bold tracking-wider uppercase text-sm mb-4 block">
              Giải pháp
            </span>
            <h1 className="font-anton text-5xl md:text-6xl uppercase leading-tight max-w-5xl">
              MỘT NỀN TẢNG - <span className="text-[#C5E898]">ĐA GIẢI PHÁP</span> CHO HỆ SINH THÁI BÁN LẺ XANH
            </h1>
            <p className="text-lg md:text-xl text-white/85 mt-6 max-w-4xl leading-relaxed">
              Dù bạn là một tiệm tạp hóa nhỏ, một hệ thống siêu thị lớn, hay một người tiêu dùng thông thái, EcoStock đều có bộ công cụ AI tối ưu dành riêng cho bạn.
            </p>
          </div>

          <SolutionsTabs />
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

