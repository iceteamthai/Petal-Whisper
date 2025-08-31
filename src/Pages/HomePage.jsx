import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import Button from './../Components/Button';
import Products from './Products';


const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-[90vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('public/img/BgFlower.JPG')", // ✅ ตัด /public ออก
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Layer ทับพื้นหลังให้มืดลง */}
        <div className="absolute inset-0 bg-black/20"></div> {/* ✅ ปรับเป็นสีดำโปร่ง */}
        
        {/* Content */}
        <div className="relative z-10 max-w-2xl px-6 flex flex-col items-center">
          <h2 className="text-6xl font-bold text-teal-200  mb-4"
          style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.7)" }}>
            Petal Whisper
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            กระซิบด้วยกลีบดอกไม้ สื่อความหมายอบอุ่น
          </p>
          
          <Link to="/products">
            <Button>เลือกชมสินค้า</Button>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;