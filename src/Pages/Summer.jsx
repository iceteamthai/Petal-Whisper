import React from "react";
import Footer from "../Components/Footer";

const summerFlowers = [
  {
    title: "Sunflower",
    img: "public/img/Summer/Sunflower.jpg",
    desc: "สัญลักษณ์ของความสุขความเข้มแข็ง และความหวัง",
  },
  {
    title: "Geranium",
    img: "public/img/Summer/Geranium.jpg",
    desc: "ความสุขุม ความมั่นคงและความเป็นมิตร",
  },
  {
    title: "Lily",
    img: "public/img/Summer/Lily.jpg",
    desc: "ความสง่างาม ความสดชื่นและความงามอันบริสุทธิ์",
  },
  {
    title: "Yellow Rose",
    img: "public/img/Summer/Yellow Rose.jpg",
    desc: "ความอบอุ่น สดใส มิตรภาพ",
  },
  {
    title: "Daisy",
    img: "public/img/Summer/Daisy.jpg",
    desc: "ความไร้เดียงสา ความจริงใจความสุขเล็กๆ",
  },
  {
    title: "Orchid",
    img: "public/img/Summer/Orchid.jpg",
    desc: "ความหรูหรา ความงดงาม  และความเข้มแข็ง",
  },
];

const Summer = () => {
  return (
    <div
      className="relative w-full min-h-screen bg-fixed flex flex-col"
      style={{
        backgroundImage: "url('public/img/BgFlower.JPG')", // ✅ ไม่ต้องใส่ /public
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Layer ทับพื้นหลังให้มืดลงเล็กน้อย */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <section className="relative z-10 py-16 flex-grow">
        <div className="container mx-auto px-6">
          <h2 className="text-6xl md:text-7xl font-bold text-center text-white mb-12">
            Summer
          </h2>

          {/* Grid flowers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {summerFlowers.map((flower, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={flower.img}
                  alt={flower.title}
                  className="w-full h-60 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">
                    {flower.title}
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    {flower.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Summer;
