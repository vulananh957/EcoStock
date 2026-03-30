import type { Metadata } from "next";
import { LockKeyhole, Database, Mic, ShieldCheck, UserRoundCheck } from "lucide-react";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";

export const metadata: Metadata = {
  title: "Chính sách bảo mật - EcoStock",
  description: "Cam kết bảo vệ dữ liệu kinh doanh đối tác EcoStock: dữ liệu giọng nói, dữ liệu kho, và quyền kiểm soát của bạn.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#F3F3F3] text-[#0766AD] font-montserrat selection:bg-[#29ADB2] selection:text-white">
      <SiteHeader />

      <main className="pt-10 pb-20">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0766AD] text-white rounded-[40px] p-8 md:p-14 shadow-xl">
            <span className="text-[#C5E898] font-bold tracking-wider uppercase text-sm mb-4 block">
              Chính sách
            </span>
            <h1 className="font-anton text-5xl md:text-6xl uppercase leading-tight">
              CHÍNH SÁCH <span className="text-[#C5E898]">BẢO MẬT</span>
            </h1>
            <p className="text-lg md:text-xl text-white/85 mt-6 max-w-4xl leading-relaxed">
              EcoStock cam kết bảo vệ dữ liệu kinh doanh của bạn như chính tài sản của chúng tôi. Vì EcoStock là một nền tảng Agentic AI,
              việc thu thập dữ liệu là cần thiết để Trợ lý ảo phục vụ cửa hàng của bạn thông minh hơn. Tuy nhiên, chúng tôi tuân thủ các
              tiêu chuẩn bảo mật khắt khe nhất.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12">
            <section className="lg:col-span-7 bg-white rounded-[40px] p-8 md:p-12 shadow-xl border border-[#0766AD]/5">
              <div className="flex items-center gap-3 mb-6">
                <Database className="text-[#29ADB2]" />
                <h2 className="font-anton text-3xl md:text-4xl uppercase">1. Thông tin chúng tôi thu thập</h2>
              </div>
              <div className="space-y-6 text-[#0766AD]/80 text-lg leading-relaxed">
                <div className="flex gap-3">
                  <Mic className="mt-1 text-[#29ADB2]" />
                  <div>
                    <div className="font-semibold text-[#0766AD]">Dữ liệu âm thanh (Voice Data)</div>
                    <div className="mt-1">Các đoạn ghi âm mệnh lệnh chỉ được thu thập khi bạn kích hoạt nút micro trên ứng dụng.</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Database className="mt-1 text-[#29ADB2]" />
                  <div>
                    <div className="font-semibold text-[#0766AD]">Dữ liệu kinh doanh</div>
                    <div className="mt-1">Danh mục hàng hóa, số lượng tồn kho, ngày hết hạn (date), và lịch sử giao dịch.</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <UserRoundCheck className="mt-1 text-[#29ADB2]" />
                  <div>
                    <div className="font-semibold text-[#0766AD]">Thông tin định danh</div>
                    <div className="mt-1">Tên chủ cửa hàng, số điện thoại, địa chỉ kinh doanh để phục vụ liên lạc và thanh toán.</div>
                  </div>
                </div>
              </div>
            </section>

            <aside className="lg:col-span-5 bg-white text-[#0766AD] rounded-[40px] p-8 md:p-12 shadow-xl border border-[#0766AD]/5">
              <div className="flex items-center gap-3 mb-6">
                <LockKeyhole className="text-[#29ADB2]" />
                <h2 className="font-anton text-3xl md:text-4xl uppercase">Cam kết cốt lõi</h2>
              </div>
              <p className="text-[#0766AD]/80 text-lg leading-relaxed">
                <span className="text-[#29ADB2] font-semibold">Không huấn luyện chéo</span>: Dữ liệu chi tiết về doanh thu và chiến lược giá của cửa hàng bạn
                tuyệt đối không được dùng để huấn luyện AI cho một cửa hàng đối thủ cạnh tranh.
              </p>
              <div className="mt-8 flex items-start gap-3">
                <ShieldCheck className="text-[#29ADB2] mt-1" />
                <div className="text-[#0766AD]/80 leading-relaxed">
                  Toàn bộ hệ thống cơ sở dữ liệu được mã hóa chuẩn quốc tế và lưu trữ trên hạ tầng đám mây an toàn.
                </div>
              </div>
            </aside>
          </div>

          <div className="mt-10 bg-white rounded-[40px] p-8 md:p-12 shadow-xl border border-[#0766AD]/5">
            <h2 className="font-anton text-3xl md:text-4xl uppercase mb-6">
              2. Cách AI của chúng tôi sử dụng dữ liệu
            </h2>
            <div className="space-y-6 text-[#0766AD]/80 text-lg leading-relaxed">
              <div>
                <div className="font-semibold text-[#0766AD]">Giọng nói</div>
                <div className="mt-1">
                  Dữ liệu giọng nói được chuyển đổi thành văn bản (Speech-to-Text) ngay lập tức để thực thi lệnh quản lý kho và không được lưu trữ vĩnh viễn dưới dạng tệp âm thanh.
                </div>
              </div>
              <div>
                <div className="font-semibold text-[#0766AD]">Phân tích bán hàng</div>
                <div className="mt-1">
                  Dữ liệu bán hàng được AI phân tích để cá nhân hóa dự báo cho riêng cửa hàng của bạn (ví dụ: dự báo thứ 7 tuần sau mặt hàng nào sẽ bán chạy).
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
            <section className="bg-white border border-[#0766AD]/10 rounded-[40px] p-8 md:p-12 shadow-lg">
              <h2 className="font-anton text-3xl md:text-4xl uppercase mb-6">3. Lưu trữ và chia sẻ thông tin</h2>
              <div className="space-y-5 text-[#0766AD]/80 text-lg leading-relaxed">
                <div>Toàn bộ hệ thống cơ sở dữ liệu được mã hóa chuẩn quốc tế và lưu trữ trên hạ tầng đám mây an toàn.</div>
                <div className="bg-white rounded-3xl p-6 border border-[#0766AD]/10">
                  <div className="font-semibold text-[#0766AD]">Không bán dữ liệu</div>
                  <div className="mt-1">
                    Chúng tôi KHÔNG bán, trao đổi hoặc cho thuê thông tin kinh doanh của đối tác cho bất kỳ bên thứ ba nào (như các nhà sản xuất FMCG hay công ty quảng cáo) dưới mọi hình thức.
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white border border-[#0766AD]/10 rounded-[40px] p-8 md:p-12 shadow-lg">
              <h2 className="font-anton text-3xl md:text-4xl uppercase mb-6">4. Quyền kiểm soát của bạn</h2>
              <div className="space-y-5 text-[#0766AD]/80 text-lg leading-relaxed">
                <div>Bạn là chủ sở hữu hợp pháp của mọi dữ liệu được tạo ra.</div>
                <div className="bg-white rounded-3xl p-6 border border-[#0766AD]/10">
                  <div className="font-semibold text-[#0766AD]">Xuất hoặc xóa dữ liệu</div>
                  <div className="mt-1">
                    Bạn có quyền yêu cầu xuất (export) toàn bộ dữ liệu kho hàng hoặc yêu cầu xóa vĩnh viễn tài khoản và dữ liệu khỏi hệ thống EcoStock bất cứ lúc nào.
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
