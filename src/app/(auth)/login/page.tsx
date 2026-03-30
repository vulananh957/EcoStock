'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import {
  ShoppingBag,
  ArrowRight,
  ArrowLeft,
  Mail,
  Lock,
  User
} from 'lucide-react';

// --- Reusable UI Components ---

const UnderlineInput = ({ label, type = "text", icon: Icon, placeholder, required = false, ...props }: any) => (
  <div className="w-full mb-6">
    <label className="block text-sm font-bold text-gray-700 mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div className="relative flex items-center group">
      {Icon && <Icon className="w-5 h-5 text-gray-400 absolute left-0 group-focus-within:text-[#0766AD] transition-colors" />}
      <input
        type={type}
        className={`block w-full py-2 ${Icon ? 'pl-8' : 'pl-0'} bg-transparent border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-[#0766AD] focus:outline-none transition-colors text-gray-900 placeholder:text-gray-400 font-medium`}
        placeholder={placeholder}
        required={required}
        {...props}
      />
    </div>
  </div>
);

const PrimaryButton = ({ text, onClick, type = "submit" }: any) => (
  <button
    type={type}
    onClick={onClick}
    className="group relative flex items-center justify-center w-full bg-[#0766AD] text-white rounded-full py-4 px-6 font-bold text-lg hover:bg-[#065a99] transition-all shadow-lg shadow-[#0766AD]/20 hover:shadow-xl hover:shadow-[#0766AD]/40 overflow-hidden"
  >
    <span className="relative z-10">{text}</span>
    <div className="absolute right-2 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white transition-colors z-10">
      <ArrowRight className="w-5 h-5 text-white group-hover:text-[#0766AD] transition-colors" />
    </div>
  </button>
);

// --- Main Page Component ---

export default function LoginPage() {
  return (
    <>
      <div className="min-h-screen bg-[#F3F3F3] flex items-center justify-center p-4 sm:p-8" style={{ fontFamily: 'var(--font-montserrat, system-ui, sans-serif)' }}>
        <div className="max-w-[1200px] w-full bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[750px]">
          
          {/* Left Panel - Image & Branding */}
          <div className="w-full md:w-5/12 relative hidden md:block bg-gray-900">
            {/* Sử dụng một hình ảnh thực phẩm tươi ngon để tạo cảm giác tích cực */}
            <img 
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000&auto=format&fit=crop" 
              alt="EcoStock Fresh Food" 
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#044272] via-[#0766AD]/40 to-transparent flex flex-col justify-end p-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h1 className="text-5xl text-white mb-4 leading-tight tracking-wide drop-shadow-lg" style={{ fontFamily: 'var(--font-anton, system-ui, sans-serif)' }}>
                  Chào mừng<br/>trở lại.
                </h1>
                <p className="text-white/95 text-lg font-medium leading-relaxed drop-shadow-md">
                  Tiếp tục hành trình giảm thiểu lãng phí thực phẩm và tối ưu hóa chuỗi cung ứng cùng EcoStock.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right Panel - Interactive Area */}
          <div className="w-full md:w-7/12 p-8 sm:p-12 lg:p-16 flex flex-col relative overflow-y-auto max-h-[90vh] md:max-h-none">
            
            {/* Back to Home Link removed as requested */}
            {/* Header */}
            <div className="flex items-center justify-between py-2 mb-12 shrink-0 w-full">
              <div className="flex items-center" style={{ fontFamily: 'var(--font-anton, system-ui, sans-serif)' }}>
                <a href="/" tabIndex={0} aria-label="Về trang chủ">
                  <img
                    src="/img/logo-eco.jpeg"
                    alt="EcoStock Logo"
                    className="h-32 w-auto object-contain cursor-pointer"
                    style={{ maxWidth: '400px' }}
                  />
                </a>
              </div>
              <div className="flex items-center">
                <a href="/" className="text-sm font-bold text-[#0766AD] hover:text-[#29ADB2] transition-colors bg-gray-50 hover:bg-blue-50 py-2 px-4 rounded-full">
                  Quay về trang chủ
                </a>
              </div>
            </div>

            {/* Dynamic Content Area */}
            <div className="flex-grow flex flex-col justify-center max-w-md w-full mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-10">
                  <h2 className="text-4xl font-bold text-gray-900 mb-3">Đăng nhập</h2>
                  <p className="text-gray-500 text-lg">
                    Vui lòng nhập thông tin tài khoản của bạn.
                  </p>
                </div>

                <div className="space-y-6">
                  <button className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-100 text-gray-700 py-3.5 px-6 rounded-full hover:bg-gray-50 hover:border-gray-200 transition-all shadow-sm font-bold text-base">
                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                    Đăng nhập bằng Google
                  </button>
                  
                  <div className="relative flex items-center py-2">
                    <div className="flex-grow border-t border-gray-200"></div>
                    <span className="flex-shrink-0 mx-4 text-gray-400 text-sm font-medium">Hoặc đăng nhập bằng Email/SĐT</span>
                    <div className="flex-grow border-t border-gray-200"></div>
                  </div>

                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <UnderlineInput label="Tài khoản" icon={User} placeholder="Email hoặc Số điện thoại" required />
                    
                    <div>
                      <UnderlineInput label="Mật khẩu" icon={Lock} type="password" placeholder="••••••••" required />
                      <div className="flex justify-end -mt-2 mb-6">
                        <a href="#" className="text-sm font-bold text-[#0766AD] hover:text-[#29ADB2] transition-colors">
                          Quên mật khẩu?
                        </a>
                      </div>
                    </div>

                    <div className="pt-2">
                      <PrimaryButton text="Đăng nhập" />
                    </div>
                  </form>
                </div>
                
                <div className="mt-12 text-center text-base text-gray-500 font-medium">
                  Chưa có tài khoản? <Link href="/register" className="font-bold text-[#0766AD] hover:text-[#29ADB2] transition-colors hover:underline underline-offset-4">Đăng ký ngay</Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}