import type { Metadata } from "next";
import { Mail, MessageCircle, PhoneCall, Sparkles, Wrench, TrendingUp } from "lucide-react";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";

export const metadata: Metadata = {
  title: "Hỗ trợ - Trung tâm Trợ giúp Đối tác EcoStock",
  description: "Trung tâm Hỗ trợ EcoStock: hotline, Zalo, email và hướng dẫn xử lý sự cố kỹ thuật, vận hành AI.",
};

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-[#F3F3F3] text-[#0766AD] font-montserrat selection:bg-[#29ADB2] selection:text-white">
      <SiteHeader />

      <main className="pt-10 pb-20">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0766AD] text-white rounded-[40px] p-10 md:p-16 shadow-xl">
            <span className="text-[#C5E898] font-bold tracking-wider uppercase text-sm mb-4 block">
              Trung tâm Trợ giúp Đối tác
            </span>
            <h1 className="font-anton text-5xl md:text-6xl uppercase leading-tight">
              HỖ TRỢ <span className="text-[#C5E898]">ECOSTOCK</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/85 mt-8 max-w-5xl leading-[1.9]">
              Mục tiêu của chúng tôi là đảm bảo cửa hàng của bạn không bao giờ bị gián đoạn. Tại EcoStock, chúng tôi hiểu rằng
              thời gian của các tiểu thương là vàng bạc. Trung tâm Hỗ trợ được thiết kế để giải quyết nhanh chóng mọi vấn đề,
              từ kỹ thuật đến tư vấn chiến lược bán hàng.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
            <div className="bg-[#FDFBF7] border border-[#0766AD]/10 rounded-3xl p-8 shadow-md">
              <div className="flex items-center gap-3 mb-5">
                <PhoneCall className="text-[#29ADB2]" />
                <h2 className="font-anton text-2xl uppercase">Hotline</h2>
              </div>
              <div className="text-[#0766AD]/80 text-lg leading-relaxed">
                <div className="font-semibold text-[#0766AD]">1900 xxxx</div>
                <div className="mt-2">Hoạt động 6:00 - 22:00 hàng ngày, kể cả Lễ Tết.</div>
                <div className="mt-2">Phù hợp cho các sự cố khẩn cấp về hệ thống.</div>
              </div>
            </div>

            <div className="bg-[#FDFBF7] border border-[#0766AD]/10 rounded-3xl p-8 shadow-md">
              <div className="flex items-center gap-3 mb-5">
                <MessageCircle className="text-[#29ADB2]" />
                <h2 className="font-anton text-2xl uppercase">Zalo (Ưu tiên)</h2>
              </div>
              <div className="text-[#0766AD]/80 text-lg leading-relaxed">
                <div>
                  Quét mã QR hoặc tìm OA: <span className="font-semibold text-[#0766AD]">&quot;EcoStock Hỗ trợ&quot;</span>.
                </div>
                <div className="mt-2">Phản hồi trong 5-10 phút, hỗ trợ gửi ảnh và video hướng dẫn trực quan.</div>
              </div>
              <div className="mt-6 rounded-2xl border border-dashed border-[#29ADB2]/50 bg-white/70 p-4 text-[#0766AD]/70">
                Placeholder QR: bạn có thể thay bằng ảnh QR thật sau.
              </div>
            </div>

            <div className="bg-[#FDFBF7] border border-[#0766AD]/10 rounded-3xl p-8 shadow-md">
              <div className="flex items-center gap-3 mb-5">
                <Mail className="text-[#29ADB2]" />
                <h2 className="font-anton text-2xl uppercase">Email CSKH</h2>
              </div>
              <div className="text-[#0766AD]/80 text-lg leading-relaxed">
                <div className="font-semibold text-[#0766AD]">support@ecostock.vn</div>
                <div className="mt-2">Phản hồi trong 24 giờ làm việc.</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12">
            <section className="lg:col-span-7 bg-white rounded-[40px] p-8 md:p-12 shadow-xl border border-[#0766AD]/5">
              <div className="flex items-center gap-3 mb-6">
                <Wrench className="text-[#29ADB2]" />
                <h2 className="font-anton text-3xl md:text-4xl uppercase">Hỗ trợ Kỹ thuật & Vận hành AI</h2>
              </div>
              <div className="space-y-6 text-[#0766AD]/80 text-lg leading-relaxed">
                <div>
                  <div className="font-semibold text-[#0766AD]">Lỗi nhận diện giọng nói</div>
                  <div className="mt-1">
                    Hướng dẫn khắc phục khi trợ lý ảo không nghe rõ hoặc ghi nhận sai số lượng, tên hàng hóa do tạp âm tại cửa hàng.
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-[#0766AD]">Đồng bộ dữ liệu</div>
                  <div className="mt-1">
                    Xử lý các vấn đề liên quan đến việc cập nhật tồn kho lên hệ thống đám mây.
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-[#0766AD]">Triển khai ban đầu (Onboarding)</div>
                  <div className="mt-1">
                    Hỗ trợ nhập liệu kho hàng lần đầu tiên hoàn toàn miễn phí cho các đối tác mới.
                  </div>
                </div>
              </div>
            </section>

            <section className="lg:col-span-5 bg-[#FDFBF7] border border-[#0766AD]/10 text-[#0766AD] rounded-[40px] p-8 md:p-12 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="text-[#29ADB2]" />
                <h2 className="font-anton text-3xl md:text-4xl uppercase">Business Support</h2>
              </div>
              <p className="text-[#0766AD]/80 text-lg leading-relaxed">
                Không chỉ sửa lỗi kỹ thuật, đội ngũ chuyên gia của EcoStock sẵn sàng tư vấn cách tinh chỉnh thuật toán{" "}
                <span className="text-[#29ADB2] font-semibold">&quot;Định giá động&quot;</span> và thiết lập{" "}
                <span className="text-[#29ADB2] font-semibold">&quot;Bếp trưởng ảo&quot;</span> (Meal Kit) phù hợp nhất với đặc thù khách hàng tại khu vực của bạn.
              </p>
              <div className="mt-8 flex items-center gap-3 text-[#0766AD]/90">
                <TrendingUp className="text-[#29ADB2]" />
                <div className="font-medium">Tối ưu doanh thu theo dữ liệu bán hàng thực tế của cửa hàng.</div>
              </div>
            </section>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
