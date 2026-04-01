'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShoppingBag,
  Store,
  Building2,
  HeartHandshake,
  ArrowRight,
  ChevronLeft,
  Mail,
  Lock,
  Phone,
  User,
  MapPin,
  UploadCloud
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

// --- Form Components ---

const ConsumerForm = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
    <button className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-100 text-gray-700 py-3.5 px-6 rounded-full hover:bg-gray-50 hover:border-gray-200 transition-all shadow-sm font-bold text-base">
      <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
      Đăng ký nhanh bằng Google
    </button>
    
    <div className="relative flex items-center py-2">
      <div className="flex-grow border-t border-gray-200"></div>
      <span className="flex-shrink-0 mx-4 text-gray-400 text-sm font-medium">Hoặc đăng ký cơ bản</span>
      <div className="flex-grow border-t border-gray-200"></div>
    </div>

    <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
      <UnderlineInput label="Họ và tên" icon={User} placeholder="Nhập họ và tên của bạn" required />
      <UnderlineInput label="Số điện thoại" icon={Phone} placeholder="Nhập số điện thoại" type="tel" required />
      <div className="pt-4">
        <PrimaryButton text="Nhận mã OTP" />
      </div>
    </form>
  </motion.div>
);

const StoreForm = ({ otpSent, setOtpSent }: { otpSent: boolean, setOtpSent: (v: boolean) => void }) => {
  if (!otpSent) {
    return (
      <motion.form 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="space-y-6" 
        onSubmit={(e) => { e.preventDefault(); setOtpSent(true); }}
      >
        <div className="bg-[#29ADB2]/10 text-[#29ADB2] p-4 rounded-2xl text-sm mb-6 font-medium flex items-start gap-3">
          <Store className="w-5 h-5 shrink-0 mt-0.5" />
          Dành cho chủ tiệm tạp hóa. Vui lòng nhập số điện thoại để nhận mã xác thực SMS.
        </div>
        <UnderlineInput label="Số điện thoại" icon={Phone} placeholder="Ví dụ: 0912 345 678" type="tel" required />
        <div className="pt-2">
          <PrimaryButton text="Gửi mã SMS OTP" />
        </div>
      </motion.form>
    );
  }

  return (
    <motion.form 
      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
      className="space-y-2" 
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="flex items-center gap-2 mb-6 bg-gray-50 p-3 rounded-xl">
        <span className="text-sm text-gray-600 font-medium">Mã OTP đã gửi đến SĐT của bạn.</span>
        <button type="button" onClick={() => setOtpSent(false)} className="text-sm text-[#0766AD] font-bold hover:underline ml-auto">Đổi số</button>
      </div>
      <UnderlineInput label="Mã OTP" icon={Lock} placeholder="Nhập 6 số từ SMS" type="number" required />
      <div className="h-px bg-gray-100 my-6"></div>
      <UnderlineInput label="Tên cửa hàng" icon={Store} placeholder="Ví dụ: Tạp hóa Cô Hương" required />
      <UnderlineInput label="Họ và tên chủ tiệm" icon={User} placeholder="Nhập họ và tên" required />
      <UnderlineInput label="Địa chỉ cửa hàng" icon={MapPin} placeholder="Số nhà, tên đường, phường/xã..." required />
      <div className="pt-6">
        <PrimaryButton text="Hoàn tất đăng ký" />
      </div>
    </motion.form>
  );
};

const EnterpriseForm = () => (
  <motion.form initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2" onSubmit={(e) => e.preventDefault()}>
    <UnderlineInput label="Tên Doanh nghiệp / Tổ chức" icon={Building2} placeholder="Nhập tên tổ chức" required />
    <UnderlineInput label="Người đại diện liên hệ" icon={User} placeholder="Họ và tên người đại diện" required />
    <UnderlineInput label="Email liên hệ" icon={Mail} placeholder="email@congty.com" type="email" required />
    
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
      <UnderlineInput label="Mật khẩu" icon={Lock} type="password" placeholder="••••••••" required />
      <UnderlineInput label="Xác nhận mật khẩu" icon={Lock} type="password" placeholder="••••••••" required />
    </div>
    
    <div className="mt-2 mb-6">
      <label className="block text-sm font-bold text-gray-700 mb-2">Giấy phép kinh doanh (Tùy chọn)</label>
      <div className="border-2 border-dashed border-gray-200 rounded-2xl p-8 flex flex-col items-center justify-center text-gray-500 hover:bg-[#0766AD]/5 hover:border-[#0766AD] transition-colors cursor-pointer group">
        <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-3 group-hover:bg-white transition-colors">
          <UploadCloud className="w-6 h-6 text-gray-400 group-hover:text-[#0766AD] transition-colors" />
        </div>
        <span className="text-sm font-medium text-gray-700">Nhấn để tải lên tài liệu</span>
        <span className="text-xs text-gray-400 mt-1">Hỗ trợ PDF, JPG, PNG (Tối đa 5MB)</span>
      </div>
    </div>

    <div className="pt-4">
      <PrimaryButton text="Tạo tài khoản B2B" />
    </div>
  </motion.form>
);

// --- Main Page Component ---

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [otpSent, setOtpSent] = useState(false);

  const roles = [
    {
      id: 'consumer',
      title: 'Người tiêu dùng',
      desc: 'Săn thực phẩm giá rẻ',
      icon: ShoppingBag,
      iconBg: 'bg-blue-50',
      iconColor: 'text-[#0766AD]',
      hoverBorder: 'hover:border-[#0766AD]',
    },
    {
      id: 'store',
      title: 'Cửa hàng tạp hóa',
      desc: 'Bán thực phẩm cận date',
      icon: Store,
      iconBg: 'bg-teal-50',
      iconColor: 'text-[#29ADB2]',
      hoverBorder: 'hover:border-[#29ADB2]',
    },
    {
      id: 'enterprise',
      title: 'Siêu thị / Doanh nghiệp',
      desc: 'Tối ưu chuỗi cung ứng',
      icon: Building2,
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-500',
      hoverBorder: 'hover:border-amber-400',
    },
    {
      id: 'charity',
      title: 'Tổ chức từ thiện',
      desc: 'Nhận thực phẩm cứu trợ',
      icon: HeartHandshake,
      iconBg: 'bg-rose-50',
      iconColor: 'text-rose-500',
      hoverBorder: 'hover:border-rose-400',
    },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        /* Ẩn mũi tên của thẻ input type="number" */
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      `}} />
      <div className="min-h-screen bg-[#F3F3F3] flex items-center justify-center p-4 sm:p-8" style={{ fontFamily: 'var(--font-montserrat, system-ui, sans-serif)' }}>
        <div className="max-w-[1200px] w-full bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[750px]">
          
          {/* Left Panel - Image & Branding */}
          <div className="w-full md:w-5/12 relative hidden md:block bg-gray-900">
            <img 
              src="https://thumbs.dreamstime.com/b/hand-putting-lid-garbage-can-full-waste-food-puts-63217352.jpg" 
              alt="EcoStock Background" 
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#044272] via-[#0766AD]/40 to-transparent flex flex-col justify-end p-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h1 className="text-5xl text-white mb-4 leading-tight tracking-wide drop-shadow-lg" style={{ fontFamily: 'var(--font-anton, system-ui, sans-serif)' }}>
                  Cứu thực phẩm.<br/>Bảo vệ môi trường.
                </h1>
                <p className="text-white/95 text-lg font-medium leading-relaxed drop-shadow-md">
                  Tham gia mạng lưới EcoStock ngay hôm nay để tối ưu hóa chuỗi cung ứng và giảm thiểu lãng phí.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right Panel - Interactive Area */}
          <div className="w-full md:w-7/12 p-4 sm:p-6 lg:p-8 flex flex-col relative overflow-y-auto max-h-[90vh] md:max-h-none">
            
            {/* Header */}
            <div className="flex items-center justify-between mb-4 shrink-0 min-h-0 w-full gap-2 sm:gap-4">
              <div className="flex items-center min-w-0" style={{ fontFamily: 'var(--font-anton, system-ui, sans-serif)' }}>
                <a href="/" tabIndex={0} aria-label="Về trang chủ">
                  <img
                    src="/img/logo-eco.jpeg"
                    alt="EcoStock Logo"
                    className="h-16 sm:h-20 md:h-32 w-auto object-contain cursor-pointer"
                    style={{ maxWidth: 'clamp(80px, 25vw, 400px)' }}
                  />
                </a>
              </div>
              <div className="flex items-center flex-shrink-0 gap-2">
                {step === 2 ? (
                  <button 
                    onClick={() => { setStep(1); setOtpSent(false); }}
                    className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-bold text-gray-400 hover:text-[#0766AD] transition-colors bg-gray-50 hover:bg-blue-50 py-2 px-3 sm:px-4 rounded-full whitespace-nowrap"
                  >
                    <ChevronLeft className="w-3 sm:w-4 h-3 sm:h-4" /> Quay lại
                  </button>
                ) : (
                  <a href="/" className="text-xs sm:text-sm font-bold text-[#0766AD] hover:text-[#29ADB2] transition-colors bg-gray-50 hover:bg-blue-50 py-2 px-3 sm:px-4 rounded-full whitespace-nowrap">
                    Quay về trang chủ
                  </a>
                )}
              </div>
            </div>

            {/* Dynamic Content Area */}
            <div className="flex-grow flex flex-col justify-center">
              <AnimatePresence mode="wait">
                
                {/* Step 1: Role Selection */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-4xl font-bold text-gray-900 mb-3">Bạn là ai?</h2>
                    <p className="text-gray-500 mb-10 text-lg">Chọn vai trò phù hợp để chúng tôi tối ưu trải nghiệm cho bạn.</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {roles.map((role) => (
                        <motion.button
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          key={role.id}
                          onClick={() => { setSelectedRole(role.id); setStep(2); }}
                          className={`p-6 rounded-3xl border-2 border-gray-100 ${role.hoverBorder} bg-white shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-all text-left flex flex-col gap-4 group`}
                        >
                          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${role.iconBg} ${role.iconColor} group-hover:scale-110 transition-transform`}>
                            <role.icon className="w-7 h-7" />
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900 text-xl">{role.title}</h3>
                            <p className="text-sm text-gray-500 mt-1.5 font-medium leading-relaxed">{role.desc}</p>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                    
                    <div className="mt-12 text-center text-base text-gray-500 font-medium">
                      Đã có tài khoản? <a href="/login" className="font-bold text-[#0766AD] hover:text-[#29ADB2] transition-colors hover:underline underline-offset-4">Đăng nhập ngay</a>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Forms */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-10">
                      <h2 className="text-4xl font-bold text-gray-900 mb-3">
                        {selectedRole === 'consumer' && 'Đăng ký tài khoản'}
                        {selectedRole === 'store' && 'Đăng ký Cửa hàng'}
                        {(selectedRole === 'enterprise' || selectedRole === 'charity') && 'Đăng ký Tổ chức'}
                      </h2>
                      <p className="text-gray-500 text-lg">
                        {roles.find(r => r.id === selectedRole)?.desc}
                      </p>
                    </div>

                    {selectedRole === 'consumer' && <ConsumerForm />}
                    {selectedRole === 'store' && <StoreForm otpSent={otpSent} setOtpSent={setOtpSent} />}
                    {(selectedRole === 'enterprise' || selectedRole === 'charity') && <EnterpriseForm />}

                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}