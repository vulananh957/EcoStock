import type { SolutionTab } from "@/types";

export const SOLUTION_TABS: SolutionTab[] = [
  {
    id: "tap-hoa",
    label: "Cho Tạp hóa",
    eyebrow: "Đối tác cốt lõi",
    headline: "Trợ lý ảo AI - Quản lý kho bằng giọng nói",
    problemTitle: "Vấn đề",
    problem:
      "Các chủ tiệm thường bận rộn, ghi chép sổ sách thủ công và hay bỏ quên hàng cận date dưới đáy tủ.",
    problemBullets: [
      "Bận bán hàng, không có thời gian nhập liệu chi tiết.",
      "Dễ quên hàng cận date ở các kệ/tủ phía dưới.",
      "Thiếu cảnh báo sớm nên thất thoát và phải bán tháo.",
    ],
    solutionsTitle: "Giải pháp từ EcoStock",
    solutions: [
      "Giao diện vô hình: Không cần thao tác app phức tạp, chỉ cần bấm nút thu âm đọc thông tin nhập/xuất, AI tự động lên danh sách tồn kho.",
      "Cảnh báo thông minh: Tự động báo cáo các mặt hàng sắp hết hạn trước 3-5 ngày.",
      "Tạo Combo tự động (Bếp trưởng ảo): Gợi ý ghép các sản phẩm cận date với hàng bán chạy để tạo thành combo hấp dẫn, đẩy hàng đi nhanh chóng.",
    ],
    ctaLabel: "Dùng thử AI cho Tạp hóa",
  },
  {
    id: "sieu-thi",
    label: "Cho Siêu thị",
    eyebrow: "Đối tác quy mô lớn",
    headline: "Trung tâm điều khiển & Định giá động tự động",
    problemTitle: "Vấn đề",
    problem:
      "Lượng SKU (mã hàng) quá lớn, việc rà soát date và thay đổi giá thủ công tốn rất nhiều nhân lực và thời gian.",
    problemBullets: [
      "SKU lớn, khó theo dõi hạn sử dụng theo từng lô.",
      "Giảm giá thủ công chậm, bỏ lỡ “thời điểm vàng” để xả hàng.",
      "Tốn nhân lực vận hành và khó đo lường hiệu quả.",
    ],
    solutionsTitle: "Giải pháp từ EcoStock",
    solutions: [
      "Thuật toán Định giá động (Dynamic Pricing): AI phân tích tốc độ bán, hạn sử dụng và nhu cầu khu vực để tự động đề xuất/cập nhật mức giảm giá tối ưu theo thời gian thực.",
      "Tích hợp POS: Kết nối liền mạch (API) với các hệ thống quản lý bán hàng hiện tại của siêu thị.",
      "Dashboard Phân tích: Cung cấp báo cáo trực quan về tỷ lệ lãng phí, hiệu suất bán hàng cận date và dự báo nhu cầu nhập hàng kỳ tới.",
    ],
    ctaLabel: "Yêu cầu Bản Demo Doanh nghiệp",
  },
  {
    id: "nguoi-tieu-dung",
    label: "Cho Người tiêu dùng",
    eyebrow: "Đầu ra sản phẩm",
    headline: "TIÊU DÙNG XANH, TIẾT KIỆM NHANH",
    problemTitle: "Vấn đề",
    problem:
      "Người dùng muốn mua đồ chất lượng với giá rẻ nhưng không biết tìm ở đâu, trong khi thực phẩm hoàn toàn ăn được lại bị vứt đi.",
    problemBullets: [
      "Muốn mua rẻ mà vẫn đảm bảo chất lượng.",
      "Không biết nơi nào gần mình đang giảm giá thực phẩm.",
      "Thực phẩm còn dùng được bị lãng phí mỗi ngày.",
    ],
    solutionsTitle: "Giải pháp từ EcoStock",
    solutions: [
      "Radar Ưu đãi: Bản đồ (Live Map) hiển thị theo thời gian thực các cửa hàng/siêu thị quanh khu vực đang có thực phẩm giảm giá sâu.",
      "Meal Kit Giá hời: Mua ngay các combo nấu ăn ngon miệng, đầy đủ dinh dưỡng được AI thiết kế sẵn với mức giá rẻ hơn 30-50%.",
      'Theo dõi "Dấu chân xanh": Tích lũy điểm thưởng và xem lại chính xác lượng CO2 bạn đã giúp giảm thiểu qua mỗi đơn hàng "giải cứu".',
    ],
    ctaLabel: "Mở bản đồ Ưu đãi ngay",
  },
  {
    id: "to-chuc-tu-thien",
    label: "Cho Tổ chức từ thiện",
    eyebrow: "Tạo tác động xã hội",
    headline: "Cầu nối số hóa cho những bữa ăn 0 đồng",
    problemTitle: "Vấn đề",
    problem:
      "Các mái ấm, tổ chức từ thiện thiếu nguồn thực phẩm ổn định, trong khi siêu thị đôi khi buộc phải hủy hàng vì không bán kịp và không tìm được nơi nhận nhanh chóng.",
    problemBullets: [
      "Thiếu nguồn thực phẩm ổn định và dự báo trước.",
      "Cần nhận hàng nhanh trước khi quá hạn/hư hỏng.",
      "Thiếu kênh minh bạch để ghi nhận và báo cáo.",
    ],
    solutionsTitle: "Giải pháp từ EcoStock",
    solutions: [
      'Mạng lưới Cứu trợ khẩn cấp: Khi thực phẩm không thể bán dù đã giảm giá kịch trần, hệ thống tự động phát thông báo "Tặng miễn phí" đến các tổ chức từ thiện đã xác thực trong bán kính gần nhất.',
      "Điều phối Logistic: Hỗ trợ tính toán quãng đường ngắn nhất để tình nguyện viên đến thu gom thực phẩm trước khi hỏng.",
      "Báo cáo Minh bạch: Ghi nhận rõ ràng nguồn gốc, số lượng thực phẩm được quyên góp để siêu thị có thể thực hiện báo cáo CSR (Trách nhiệm xã hội).",
    ],
    ctaLabel: "Đăng ký Nhận thực phẩm",
  },
];

export const DEFAULT_SOLUTION_TAB = "tap-hoa" as const;
