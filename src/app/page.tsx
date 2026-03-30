"use client";

import { motion } from "motion/react";
import { Mic, TrendingDown, ChefHat, Star, Plus, Minus, ArrowRight, Store, Users, Utensils, HeartHandshake, ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import { BLOG_POSTS, FAQ_ITEMS, TESTIMONIALS } from "@/constants";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" as const }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-100px" },
  transition: { staggerChildren: 0.2 }
};

const staggerItem = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const }
};

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const t = TESTIMONIALS[testimonialIndex] ?? TESTIMONIALS[0];
  const prevTestimonial = () =>
    setTestimonialIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const nextTestimonial = () =>
    setTestimonialIndex((i) => (i + 1) % TESTIMONIALS.length);

  return (
    <div className="min-h-screen bg-[#F3F3F3] text-[#0766AD] font-montserrat selection:bg-[#29ADB2] selection:text-white">
      <SiteHeader />

      <main>
        {/* 2. Hero Section */}
        <motion.section className="pt-12 pb-20" {...fadeInUp}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16">
              <div className="lg:col-span-7 pr-4">
                <span className="text-[#29ADB2] font-bold tracking-wider uppercase text-sm mb-6 block">SỨ MỆNH GIẢI CỨU THỰC PHẨM</span>
                <h1 className="font-anton text-6xl md:text-7xl lg:text-[80px] text-[#0766AD] uppercase leading-[1.25]">
                  <span className="block">BÁN SẠCH HÀNG TỒN</span>
                  <span className="block text-[#29ADB2]">KIẾN TẠO KỶ NGUYÊN BÁN LẺ XANH</span>
                </h1>
              </div>
              <div className="lg:col-span-5 pb-4">
                <p className="text-lg md:text-xl text-[#0766AD]/80 mb-8 leading-relaxed">
                  Nền tảng Agentic SaaS đầu tiên kết nối tiệm tạp hóa và cộng đồng cư dân. Dùng giọng nói để quản lý kho, để AI lo phần tiếp thị, chung tay chấm dứt lãng phí thực phẩm tại Việt Nam.
                </p>
                <a href="/register" tabIndex={-1} className="bg-[#0766AD] hover:bg-[#0766AD]/90 text-white px-6 py-3 rounded-full font-medium transition-all inline-flex w-fit items-center gap-2 group">
                  Bắt đầu ngay
                  <span className="bg-white text-[#0766AD] rounded-full p-1 group-hover:translate-x-1 transition-transform ml-2 inline-flex">
                    <ArrowRight size={18} />
                  </span>
                </a>
              </div>
            </div>

            <div className="relative h-[500px] md:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="https://picsum.photos/seed/grocery/1920/1080" 
                alt="Grocery store" 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </motion.section>

        {/* 3. About Us */}
        <motion.section id="about" className="py-20" {...fadeInUp}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[#29ADB2] font-bold tracking-wider uppercase text-sm mb-4 block">Về chúng tôi</span>
                <h2 className="font-anton text-5xl md:text-6xl text-[#0766AD] uppercase leading-tight mb-6">
                  Cùng Nhau <span className="text-[#29ADB2]">Giảm Rác Thải</span> Thực Phẩm
                </h2>
                <p className="text-lg text-[#0766AD]/80 mb-8">
                  EcoStock kết nối các cửa hàng tạp hóa, siêu thị với người tiêu dùng và tổ chức từ thiện để giải quyết vấn đề thực phẩm cận date một cách thông minh và hiệu quả. Chúng tôi tin rằng công nghệ có thể tạo ra tác động tích cực đến môi trường.
                </p>
                <a href="/register" tabIndex={-1} className="bg-[#0766AD] hover:bg-[#0766AD]/90 text-white px-6 py-3 rounded-full font-medium transition-all inline-flex w-fit items-center gap-2 group">
                  Tham gia ngay
                  <span className="bg-white text-[#0766AD] rounded-full p-1 group-hover:translate-x-1 transition-transform ml-2 inline-flex">
                    <ArrowRight size={18} />
                  </span>
                </a>
              </div>
              <div className="relative">
                <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-xl">
                  <Image 
                    src="https://picsum.photos/seed/community/800/1000" 
                    alt="Community working together" 
                    fill 
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <motion.div 
                  className="absolute -bottom-8 -right-8 bg-[#0766AD] text-white p-8 rounded-3xl shadow-2xl max-w-[240px]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <div className="text-5xl font-anton mb-2 text-[#C5E898]">1.4M<span className="text-3xl">+</span></div>
                  <div className="font-medium text-lg leading-tight">Cửa hàng tạp hóa đối tác</div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 4. Stats */}
        <section className="bg-[#0766AD] py-16 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Store size={40} className="text-[#C5E898] mb-4" />
                <div className="font-anton text-5xl text-white mb-2">1.4M+</div>
                <div className="text-white/80 font-medium">Cửa hàng</div>
              </div>
              <div className="flex flex-col items-center">
                <Users size={40} className="text-[#C5E898] mb-4" />
                <div className="font-anton text-5xl text-white mb-2">50K+</div>
                <div className="text-white/80 font-medium">Người dùng</div>
              </div>
              <div className="flex flex-col items-center">
                <Utensils size={40} className="text-[#C5E898] mb-4" />
                <div className="font-anton text-5xl text-white mb-2">10M+</div>
                <div className="text-white/80 font-medium">Bữa ăn được cứu</div>
              </div>
              <div className="flex flex-col items-center">
                <HeartHandshake size={40} className="text-[#C5E898] mb-4" />
                <div className="font-anton text-5xl text-white mb-2">500+</div>
                <div className="text-white/80 font-medium">Đối tác NGO</div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Services */}
        <motion.section id="solutions" className="py-24" {...fadeInUp}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <span className="text-[#29ADB2] font-bold tracking-wider uppercase text-sm mb-4 block">Giải pháp</span>
                <h2 className="font-anton text-5xl md:text-6xl text-[#0766AD] uppercase leading-tight mb-6">
                  SỨC MẠNH CỦA <span className="text-[#29ADB2]">ECOSTOCK</span>
                </h2>
                <p className="text-lg text-[#0766AD]/80">
                  Các giải pháp AI đột phá giúp tối ưu hóa chuỗi cung ứng thực phẩm cận date, mang lại lợi ích cho cả người bán và người mua.
                </p>
              </div>
              <a href="/register" tabIndex={-1} className="bg-[#0766AD] hover:bg-[#0766AD]/90 text-white px-6 py-3 rounded-full font-medium transition-all inline-flex w-fit items-center gap-2 group whitespace-nowrap">
                Dùng thử AI
                <span className="bg-white text-[#0766AD] rounded-full p-1 group-hover:translate-x-1 transition-transform ml-2 inline-flex">
                  <ArrowRight size={18} />
                </span>
              </a>
            </div>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div variants={staggerItem} className="bg-white hover:bg-[#0766AD] group p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-all duration-300">
                <div className="h-48 relative rounded-2xl overflow-hidden mb-8">
                  <Image src="https://picsum.photos/seed/voice/600/400" alt="Voice control" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <h3 className="font-anton text-3xl text-[#0766AD] group-hover:text-[#C5E898] uppercase mb-4 transition-colors duration-300">Giao Diện Vô Hình</h3>
                <p className="text-[#0766AD]/70 group-hover:text-white/80 text-lg transition-colors duration-300">Điều khiển bằng giọng nói qua nền tảng Web. Không cần thao tác phức tạp, tiểu thương chỉ cần &apos;đọc lệnh&apos; để AI tự động cập nhật và quản lý kho hàng.</p>
              </motion.div>

              <motion.div variants={staggerItem} className="bg-white hover:bg-[#0766AD] group p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-all duration-300">
                <div className="h-48 relative rounded-2xl overflow-hidden mb-8">
                  <Image src="https://picsum.photos/seed/pricing/600/400" alt="Dynamic pricing" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <h3 className="font-anton text-3xl text-[#0766AD] group-hover:text-[#C5E898] uppercase mb-4 transition-colors duration-300">Định Giá Động</h3>
                <p className="text-[#0766AD]/70 group-hover:text-white/80 text-lg transition-colors duration-300">Thuật toán AI tự động giảm giá chống lỗ, tối ưu hóa doanh thu cho từng sản phẩm cận date theo thời gian thực.</p>
              </motion.div>

              <motion.div variants={staggerItem} className="bg-white hover:bg-[#0766AD] group p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-all duration-300">
                <div className="h-48 relative rounded-2xl overflow-hidden mb-8">
                  <Image src="https://picsum.photos/seed/chef/600/400" alt="Virtual chef" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <h3 className="font-anton text-3xl text-[#0766AD] group-hover:text-[#C5E898] uppercase mb-4 transition-colors duration-300">Bếp Trưởng Ảo</h3>
                <p className="text-[#0766AD]/70 group-hover:text-white/80 text-lg transition-colors duration-300">AI tự động thiết kế Combo Meal Kit từ nguyên liệu sẵn có, gợi ý thực đơn hấp dẫn giúp cửa hàng bán chéo sản phẩm và giải quyết nhanh chóng hàng cận date.</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* 6. Projects / Impact */}
        <motion.section className="py-24" {...fadeInUp}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-xl order-2 lg:order-1">
                <Image 
                  src="https://picsum.photos/seed/impact/800/1000" 
                  alt="Positive impact" 
                  fill 
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="order-1 lg:order-2">
                <span className="text-[#29ADB2] font-bold tracking-wider uppercase text-sm mb-4 block">Tác động</span>
                <h2 className="font-anton text-5xl md:text-6xl text-[#0766AD] uppercase leading-tight mb-6">
                  XANH MÔI TRƯỜNG, <span className="text-[#29ADB2]">MẠNH DOANH THU</span>
                </h2>
                <p className="text-lg text-[#0766AD]/80 mb-8">
                  Chúng tôi không chỉ giúp doanh nghiệp giảm lỗ mà còn tạo ra tác động tích cực đến môi trường và xã hội. Mỗi sản phẩm được cứu là một bước tiến tới tương lai bền vững.
                </p>
                <a href="/register" tabIndex={-1} className="bg-[#0766AD] hover:bg-[#0766AD]/90 text-white px-6 py-3 rounded-full font-medium transition-all inline-flex w-fit items-center gap-2 group mb-12">
                  Đăng ký miễn phí
                  <span className="bg-white text-[#0766AD] rounded-full p-1 group-hover:translate-x-1 transition-transform ml-2 inline-flex">
                    <ArrowRight size={18} />
                  </span>
                </a>

                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-[#29ADB2] p-8 rounded-3xl text-white">
                    <div className="font-anton text-5xl mb-2">75%</div>
                    <div className="font-medium text-lg leading-tight">Giảm lượng rác thải thực phẩm</div>
                  </div>
                  <div className="bg-[#0766AD] p-8 rounded-3xl text-white">
                    <div className="font-anton text-5xl mb-2 text-[#C5E898]">80%</div>
                    <div className="font-medium text-lg leading-tight">Tăng doanh thu từ hàng cận date</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 7. Testimonial */}
        <motion.section className="py-16 md:py-20" {...fadeInUp}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-12 gap-8">
              <div className="max-w-2xl">
                <span className="text-[#29ADB2] font-bold tracking-wider uppercase text-sm mb-4 block">Đánh giá</span>
                <h2 className="font-anton text-5xl md:text-6xl text-[#0766AD] uppercase leading-tight mb-6">
                  CỘNG ĐỒNG BÁN LẺ XANH ĐÃ <span className="text-[#29ADB2]">NÓI GÌ VỀ ECOSTOCK?</span>
                </h2>
                <p className="text-lg text-[#0766AD]/80">
                  Những câu chuyện thành công từ các đối tác trong hệ sinh thái EcoStock.
                </p>
              </div>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full border-2 border-[#29ADB2] text-[#29ADB2] flex items-center justify-center hover:bg-[#29ADB2] hover:text-white transition-colors"
                  aria-label="Đánh giá trước"
                >
                  <ArrowLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full bg-[#29ADB2] text-white flex items-center justify-center hover:bg-[#29ADB2]/90 transition-colors"
                  aria-label="Đánh giá tiếp theo"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>

            <div className="bg-[#FDFBF7] border border-[#0766AD]/10 rounded-[36px] p-6 md:p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                <div className="md:col-span-4 relative h-[240px] md:h-[320px] rounded-3xl overflow-hidden">
                  <Image src={t.avatarUrl} alt={`Ảnh ${t.name}`} fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="md:col-span-8">
                  <div className="flex text-[#29ADB2] mb-6">
                    {[...Array(5)].map((_, i) => <Star key={i} size={22} fill="currentColor" />)}
                  </div>
                  <p className="text-xl md:text-2xl text-[#0766AD] font-medium leading-relaxed mb-8 italic">
                    &quot;{t.quote}&quot;
                  </p>
                  <div>
                    <div className="font-bold text-[#0766AD] text-xl">{t.name}</div>
                    <div className="text-[#0766AD]/60 text-lg">{t.role}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-6 gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Chọn đánh giá ${i + 1}`}
                  onClick={() => setTestimonialIndex(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === testimonialIndex ? "w-10 bg-[#29ADB2]" : "w-2.5 bg-[#0766AD]/15 hover:bg-[#0766AD]/25"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.section>

        {/* 8. FAQ */}
        <motion.section id="faq" className="bg-[#0766AD] py-24 text-white" {...fadeInUp}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-5">
                <h2 className="font-anton text-5xl md:text-6xl uppercase leading-tight mb-6">
                  CÂU HỎI THƯỜNG GẶP
                </h2>
                <p className="text-lg text-white/80">
                  Tìm hiểu thêm về cách EcoStock hoạt động và những lợi ích mà hệ thống mang lại cho doanh nghiệp của bạn.
                </p>
              </div>
              <div className="lg:col-span-7 space-y-4">
                {FAQ_ITEMS.map((faq, index) => (
                  <div key={index} className="border-b border-white/20">
                    <button 
                      className="w-full py-6 flex justify-between items-center text-left hover:text-[#C5E898] transition-colors"
                      onClick={() => toggleFaq(index)}
                    >
                      <span className="font-medium text-xl pr-8">{faq.q}</span>
                      {openFaq === index ? <Minus className="flex-shrink-0" /> : <Plus className="flex-shrink-0" />}
                    </button>
                    {openFaq === index && (
                      <div className="pb-6 text-white/70 text-lg">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* 9. Blog */}
        <motion.section id="blog" className="py-24" {...fadeInUp}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <span className="text-[#29ADB2] font-bold tracking-wider uppercase text-sm mb-4 block">Blog</span>
                <h2 className="font-anton text-5xl md:text-6xl text-[#0766AD] uppercase leading-tight mb-6">
                  Bài Viết <span className="text-[#29ADB2]">Mới Nhất</span>
                </h2>
                <p className="text-lg text-[#0766AD]/80">
                  Cập nhật tin tức và kiến thức về chống lãng phí thực phẩm.
                </p>
              </div>
              <button className="bg-[#0766AD] hover:bg-[#0766AD]/90 text-white px-8 py-4 rounded-full font-medium transition-all flex items-center gap-2 group whitespace-nowrap">
                Xem tất cả
                <div className="bg-white text-[#0766AD] rounded-full p-1 group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={18} />
                </div>
              </button>
            </div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-100px" }}
            >
              {BLOG_POSTS.map((blog, i) => (
                <motion.div key={i} variants={staggerItem} className="bg-white rounded-3xl overflow-hidden shadow-md border border-[#0766AD]/5 group cursor-pointer">
                  <div className="h-64 relative overflow-hidden">
                    <Image src={blog.img} alt={blog.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  </div>
                  <div className="p-8">
                    <div className="text-sm text-[#0766AD]/60 mb-4">Bởi: {blog.author} - {blog.dateLabel}</div>
                    <h3 className="font-anton text-2xl text-[#0766AD] uppercase mb-4 group-hover:text-[#29ADB2] transition-colors">{blog.title}</h3>
                    <p className="text-[#0766AD]/70 mb-6">Khám phá những cách đơn giản nhưng hiệu quả để giảm thiểu rác thải và bảo vệ môi trường sống của chúng ta.</p>
                    <div className="flex items-center gap-2 text-[#0766AD] font-medium group-hover:text-[#29ADB2] transition-colors">
                      Đọc thêm <ArrowRight size={18} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* 10. Contact */}
        <motion.section className="py-24" {...fadeInUp}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#FDFBF7] rounded-[40px] p-8 md:p-16 shadow-xl border border-[#0766AD]/5">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-12">
                <div>
                  <span className="text-[#29ADB2] font-bold tracking-wider uppercase text-sm mb-4 block">Liên hệ</span>
                  <h2 className="font-anton text-5xl md:text-6xl text-[#0766AD] uppercase leading-[1.22] overflow-visible pt-[0.14em] pb-[0.18em]">
                    SẴN SÀNG <span className="text-[#29ADB2]">NÂNG CẤP CỬA HÀNG?</span>
                  </h2>
                </div>
                <div className="flex items-start lg:pt-12">
                  <p className="text-lg text-[#0766AD]/80">
                    Ưu tiên số điện thoại (Zalo) để hỗ trợ nhanh nhất. Email là không bắt buộc. Để lại thông tin, đội ngũ của chúng tôi sẽ liên hệ hỗ trợ cài đặt trợ lý ảo AI hoàn toàn miễn phí cho cửa hàng của bạn.
                  </p>
                </div>
              </div>

              <form className="space-y-8">
                <div>
                  <label className="block text-[#0766AD] font-medium mb-2">Họ tên</label>
                  <input
                    type="text"
                    required
                    autoComplete="name"
                    className="w-full bg-transparent border-b-2 border-[#0766AD]/20 py-3 focus:outline-none focus:border-[#29ADB2] transition-colors text-lg"
                  />
                </div>
                <div>
                  <label className="block text-[#0766AD] font-medium mb-2">Số điện thoại (Zalo)</label>
                  <input
                    type="tel"
                    required
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="Ví dụ: 09xxxxxxxx"
                    className="w-full bg-transparent border-b-2 border-[#0766AD]/20 py-3 focus:outline-none focus:border-[#29ADB2] transition-colors text-lg placeholder:text-[#0766AD]/40"
                  />
                </div>
                <div>
                  <label className="block text-[#0766AD] font-medium mb-2">Email (không bắt buộc)</label>
                  <input
                    type="email"
                    autoComplete="email"
                    placeholder="example@gmail.com"
                    className="w-full bg-transparent border-b-2 border-[#0766AD]/20 py-3 focus:outline-none focus:border-[#29ADB2] transition-colors text-lg placeholder:text-[#0766AD]/40"
                  />
                </div>
                <div>
                  <label className="block text-[#0766AD] font-medium mb-2">Lời nhắn (Tên cửa hàng/Địa chỉ nếu có)</label>
                  <textarea rows={4} className="w-full bg-transparent border-b-2 border-[#0766AD]/20 py-3 focus:outline-none focus:border-[#29ADB2] transition-colors text-lg resize-none"></textarea>
                </div>
                <div className="flex justify-center pt-4">
                  <button type="button" className="bg-[#0766AD] hover:bg-[#0766AD]/90 text-white px-12 py-4 rounded-full font-medium transition-all flex items-center gap-2 group text-lg">
                    Nhận hỗ trợ miễn phí
                    <div className="bg-white text-[#0766AD] rounded-full p-1 group-hover:translate-x-1 transition-transform">
                      <ArrowRight size={18} />
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.section>
      </main>
      <SiteFooter />
    </div>
  );
}
