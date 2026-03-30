import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="bg-[#0766AD] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-white/20 pb-10 mb-10 gap-6">
          <span className="font-anton text-4xl uppercase tracking-wider">
            <img
              src="/img/logo-eco.jpeg"
              alt="EcoStock Logo"
              className="h-24 w-auto rounded-2xl object-contain bg-white"
              style={{ maxWidth: '320px' }}
            />
          </span>
          <div className="flex items-center gap-4">
            <span className="font-medium mr-2">Mạng xã hội:</span>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#29ADB2] transition-colors" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#29ADB2] transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#29ADB2] transition-colors" aria-label="Twitter">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h4 className="font-bold mb-6 text-xl">Công ty</h4>
            <ul className="space-y-4 text-white/70">
              <li><Link href="/#about" className="hover:text-[#C5E898] transition-colors">Về chúng tôi</Link></li>
              <li><a href="#" className="hover:text-[#C5E898] transition-colors">Dự án</a></li>
              <li><Link href="/#blog" className="hover:text-[#C5E898] transition-colors">Blog</Link></li>
              <li><a href="#" className="hover:text-[#C5E898] transition-colors">Đối tác</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-xl">Giải pháp</h4>
            <ul className="space-y-4 text-white/70">
              <li><Link href="/giai-phap#tap-hoa" className="hover:text-[#C5E898] transition-colors">Cho Tạp hóa</Link></li>
              <li><Link href="/giai-phap#sieu-thi" className="hover:text-[#C5E898] transition-colors">Cho Siêu thị</Link></li>
              <li><Link href="/giai-phap#nguoi-tieu-dung" className="hover:text-[#C5E898] transition-colors">Cho Người tiêu dùng</Link></li>
              <li><Link href="/giai-phap#to-chuc-tu-thien" className="hover:text-[#C5E898] transition-colors">Cho Tổ chức từ thiện</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-xl">Liên hệ</h4>
            <ul className="space-y-4 text-white/70">
              <li><Link href="/#faq" className="hover:text-[#C5E898] transition-colors">FAQ</Link></li>
              <li><Link href="/ho-tro" className="hover:text-[#C5E898] transition-colors">Hỗ trợ</Link></li>
              <li><Link href="/chinh-sach-bao-mat" className="hover:text-[#C5E898] transition-colors">Chính sách bảo mật</Link></li>
              <li><Link href="/dieu-khoan" className="hover:text-[#C5E898] transition-colors">Điều khoản</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-xl">Bản tin</h4>
            <p className="text-white/70 mb-4">Đăng ký để nhận thông tin mới nhất.</p>
            <div className="flex bg-white rounded-full p-1">
              <input type="email" placeholder="Nhập email" className="bg-transparent px-4 py-2 w-full text-[#0766AD] focus:outline-none" />
              <button className="bg-[#29ADB2] hover:bg-[#29ADB2]/90 text-white px-6 py-2 rounded-full font-medium transition-colors whitespace-nowrap">
                Đăng ký
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-white/50 text-sm border-t border-white/20 pt-8">
          <p>&copy; 2026 EcoStock. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span>Made by ReviveX</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
