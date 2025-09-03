
import React from 'react';
import Footer from '../Components/Footer';
import Button from './../Components/Button';

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-[90vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('public/img/BgFlower.JPG')", // ✅ แก้ path ถูกต้อง (เอา /public ออก)
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Layer ทับพื้นหลังให้มืดลง */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-2xl px-6 flex flex-col items-center">
          <h2
            className="text-6xl font-bold text-teal-200 mb-4"
            style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.7)" }}
          >
            Petal Whisper
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            กระซิบด้วยกลีบดอกไม้ สื่อความหมายอบอุ่น
          </p>

          {/* ใช้ Button ที่ส่ง to และ children ได้ */}
          <Button to="/products">เลือกชมสินค้า</Button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;
