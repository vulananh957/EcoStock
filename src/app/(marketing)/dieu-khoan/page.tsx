import type { Metadata } from "next";
import { AlertTriangle, CheckCircle2, Clock, Scale, ShieldAlert, UserRound } from "lucide-react";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";

export const metadata: Metadata = {
  title: "Điều khoản dịch vụ - EcoStock",
  description: "Điều khoản dịch vụ EcoStock dành cho cửa hàng/đối tác: duy trì hệ thống, trách nhiệm đối tác, và giới hạn sử dụng.",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#F3F3F3] text-[#0766AD] font-montserrat selection:bg-[#29ADB2] selection:text-white">
      <SiteHeader />

      <main className="pt-10 pb-20">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0766AD] text-white rounded-[40px] p-8 md:p-14 shadow-xl">
            <span className="text-[#C5E898] font-bold tracking-wider uppercase text-sm mb-4 block">
              Điều khoản
            </span>
            <h1 className="font-anton text-5xl md:text-6xl uppercase leading-tight">
              ĐIỀU KHOẢN <span className="text-[#C5E898]">DỊCH VỤ</span>
            </h1>
            <p className="text-lg md:text-xl text-white/85 mt-6 max-w-4xl leading-relaxed">
              Vui lòng đọc kỹ các điều khoản dưới đây trước khi sử dụng nền tảng EcoStock. Thỏa thuận này quy định quyền hạn và trách nhiệm
              giữa Nền tảng EcoStock và Quý cửa hàng/Đối tác khi ứng dụng Trợ lý ảo AI vào hoạt động kinh doanh.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12">
            <section className="lg:col-span-7 bg-white rounded-[40px] p-8 md:p-12 shadow-xl border border-[#0766AD]/5">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="text-[#29ADB2]" />
                <h2 className="font-anton text-3xl md:text-4xl uppercase">1. Cung cấp và duy trì dịch vụ</h2>
              </div>
              <div className="text-[#0766AD]/80 text-lg leading-relaxed space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-[#29ADB2] mt-1 shrink-0" />
                  <div>EcoStock cam kết duy trì hệ thống hoạt động ổn định (Uptime 99.9%).</div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-[#29ADB2] mt-1 shrink-0" />
                  <div>
                    Các bản cập nhật thuật toán AI và bảo trì hệ thống sẽ được thông báo trước ít nhất 24 giờ và thực hiện vào khung giờ thấp điểm
                    để không ảnh hưởng đến việc buôn bán.
                  </div>
                </div>
              </div>
            </section>

            <aside className="lg:col-span-5 bg-white text-[#0766AD] rounded-[40px] p-8 md:p-12 shadow-xl border border-[#0766AD]/5">
              <div className="flex items-center gap-3 mb-6">
                <Scale className="text-[#29ADB2]" />
                <h2 className="font-anton text-3xl md:text-4xl uppercase">Nguyên tắc</h2>
              </div>
              <p className="text-[#0766AD]/80 text-lg leading-relaxed">
                EcoStock cung cấp công nghệ và khuyến nghị dựa trên dữ liệu. Quyết định vận hành cuối cùng thuộc về Chủ cửa hàng.
              </p>
            </aside>
          </div>

          <div className="mt-10 bg-white rounded-[40px] p-8 md:p-12 shadow-xl border border-[#0766AD]/5">
            <div className="flex items-center gap-3 mb-6">
              <UserRound className="text-[#29ADB2]" />
              <h2 className="font-anton text-3xl md:text-4xl uppercase">2. Trách nhiệm của Đối tác (Chủ cửa hàng)</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white border border-[#0766AD]/10 rounded-3xl p-7">
                <div className="font-semibold text-[#0766AD] text-xl">Tính chính xác của đầu vào</div>
                <p className="mt-2 text-[#0766AD]/80 text-lg leading-relaxed">
                  Hệ thống AI đưa ra khuyến nghị dựa trên dữ liệu bạn cung cấp. Bạn có trách nhiệm đọc lệnh chính xác và kiểm tra lại thông tin
                  trên &quot;Giao diện vô hình&quot; để đảm bảo số lượng và hạn sử dụng được ghi nhận đúng.
                </p>
              </div>
              <div className="bg-white border border-[#0766AD]/10 rounded-3xl p-7">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="text-[#29ADB2]" />
                  <div className="font-semibold text-[#0766AD] text-xl">Chất lượng thực phẩm (Rất quan trọng)</div>
                </div>
                <p className="mt-2 text-[#0766AD]/80 text-lg leading-relaxed">
                  EcoStock là nền tảng công nghệ hỗ trợ đẩy nhanh việc bán hàng tồn/cận date. Việc kiểm định an toàn vệ sinh thực phẩm,
                  đảm bảo hàng hóa chưa biến chất trước khi bán cho người tiêu dùng là trách nhiệm hoàn toàn thuộc về cửa hàng.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
            <section className="bg-white border border-[#0766AD]/10 rounded-[40px] p-8 md:p-12 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <ShieldAlert className="text-[#29ADB2]" />
                <h2 className="font-anton text-3xl md:text-4xl uppercase">3. Miễn trừ trách nhiệm về định giá</h2>
              </div>
              <p className="text-[#0766AD]/80 text-lg leading-relaxed">
                Tính năng &quot;Định giá động&quot; và &quot;Bếp trưởng ảo&quot; hoạt động dựa trên các mô hình dự báo thống kê. Đây là các khuyến nghị tham khảo.
                Chủ cửa hàng là người đưa ra quyết định cuối cùng về việc áp dụng mức giá nào. EcoStock không chịu trách nhiệm bù đắp cho các khoản
                chênh lệch doanh thu, lỗ vốn hoặc các khiếu nại từ khách hàng cuối (End-user) liên quan đến giá cả.
              </p>
            </section>

            <section className="bg-white border border-[#0766AD]/10 rounded-[40px] p-8 md:p-12 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="text-[#29ADB2]" />
                <h2 className="font-anton text-3xl md:text-4xl uppercase">4. Giới hạn sử dụng</h2>
              </div>
              <p className="text-[#0766AD]/80 text-lg leading-relaxed">
                Tài khoản EcoStock được cấp riêng cho từng cơ sở kinh doanh. Việc chia sẻ tài khoản cho nhiều cửa hàng khác nhau
                (không cùng hệ thống sở hữu) mà không có sự đồng ý của EcoStock có thể dẫn đến việc tạm ngưng dịch vụ.
              </p>
            </section>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
