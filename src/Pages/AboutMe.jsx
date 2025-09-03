import React from 'react'
import Footer from './../Components/Footer';

const AboutMe = () => {
  return (
    <div
      className="relative w-full min-h-screen bg-fixed flex flex-col"
      style={{
        backgroundImage: "url('/img/BgFlower.JPG')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay ทำให้พื้นหลังมืดลง */}
      <div className="absolute inset-0 bg-black/20 bg-opacity-50"></div>

      {/* เนื้อหา */}
      <main className="relative z-10 container mx-auto px-4 py-16 flex-grow">
        <h1 className="text-7xl font-bold text-center text-white mb-12">
          Contact
        </h1>

        <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-8 space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-indigo-800 mb-3">
              Addresse
            </h2>
            <p className="text-gray-700">
              Petal Whisper: 123/45 ถนนสายดอกไม้ แขวงสวนสวย เขตกลางเมือง กรุงเทพฯ
              10200
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold text-indigo-800 mb-3">
              Phone
            </h2>
            <p className="text-gray-700">091-234-5678 หรือ 091-432-5687</p>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold text-indigo-800 mb-3">
              Email
            </h2>
            <p className="text-gray-700">PetalWhisper@mail.com</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutMe;