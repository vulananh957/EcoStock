import type { BlogPost, FaqItem, Testimonial } from "@/types";

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: "EcoStock có thu phí hàng tháng không?",
    a: "EcoStock cung cấp gói cơ bản miễn phí cho các cửa hàng nhỏ. Các tính năng AI nâng cao sẽ có mức phí hợp lý dựa trên quy mô doanh thu.",
  },
  {
    q: "Lắp đặt hệ thống có khó không?",
    a: "Hoàn toàn không. EcoStock hoạt động trực tiếp trên trình duyệt web, không cần cài đặt phần mềm phức tạp. Chỉ mất 5 phút để thiết lập tài khoản.",
  },
  {
    q: "Làm sao để đảm bảo chất lượng thực phẩm cận date?",
    a: "Hệ thống yêu cầu người bán cập nhật hình ảnh thực tế và có chính sách đánh giá từ người mua để đảm bảo minh bạch.",
  },
  {
    q: "Làm thế nào để yêu cầu thu gom rác thải?",
    a: "Bạn có thể sử dụng tính năng điều khiển bằng giọng nói hoặc đặt lịch trực tiếp trên ứng dụng. Hệ thống sẽ tối ưu hóa lộ trình xe thu gom.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Cô Lan",
    role: "Chủ tạp hóa (SME)",
    quote:
      "Chỉ cần bấm nút thu âm là bán được hàng cận date cho cả chung cư. Không lo bù lỗ nữa. Giao diện vô hình thực sự là một bước đột phá cho những người không rành công nghệ như tôi.",
    avatarUrl: "https://picsum.photos/seed/testimonial-lan/600/800",
  },
  {
    name: "Chú Hùng",
    role: "Chủ siêu thị mini Hùng Phát (Hải Phòng)",
    quote:
      "Trước đây hàng gần hết hạn là chú toàn nhắm mắt bán tháo hoặc đổ bỏ, xót ruột lắm. Từ ngày có thuật toán của EcoStock tự động gợi ý giảm giá theo ngày, chú đẩy được 80% hàng tồn vặt vãnh. Doanh thu nhỉnh hơn hẳn mà nhẹ cả đầu.",
    avatarUrl: "https://picsum.photos/seed/testimonial-hung/600/800",
  },
  {
    name: "Chị Mai",
    role: "Quản lý cửa hàng tiện lợi Mai Mart (Ninh Bình)",
    quote:
      "Cái tính năng gợi ý ghép combo hay thực sự! Mấy gói gia vị với đồ tươi sắp héo thay vì vứt đi, AI tự ghép thành 'Combo lẩu cuối tuần' rồi đăng bán. Khách hàng chuộng lắm vì tiện, mua một phát là xong bữa tối.",
    avatarUrl: "https://picsum.photos/seed/testimonial-mai/600/800",
  },
  {
    name: "Anh Tuấn",
    role: "Chủ chuỗi 3 tạp hóa (Hà Nội)",
    quote:
      "Lúc đầu nghe đến AI anh sợ phức tạp, ai dè dễ hơn xài mạng xã hội. Không chỉ tối ưu được chi phí vận hành, anh còn thấy tự hào vì cửa hàng mình đang góp phần giảm rác thải môi trường. Khách họ biết họ cũng ủng hộ hơn.",
    avatarUrl: "https://picsum.photos/seed/testimonial-tuan/600/800",
  },
];

export const PRIMARY_TESTIMONIAL: Testimonial = TESTIMONIALS[0];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "10 Cách Dễ Dàng Để Bắt Đầu Tái Chế Tại Nhà",
    img: "https://picsum.photos/seed/blog1/600/400",
    author: "Admin",
    dateLabel: "30 Thg 8, 2026",
  },
  {
    title: "Thực Hành Thân Thiện Môi Trường Cho Tương Lai",
    img: "https://picsum.photos/seed/blog2/600/400",
    author: "Admin",
    dateLabel: "30 Thg 8, 2026",
  },
  {
    title: "Giải Pháp Quản Lý Rác Thải Đổi Mới",
    img: "https://picsum.photos/seed/blog3/600/400",
    author: "Admin",
    dateLabel: "30 Thg 8, 2026",
  },
];
