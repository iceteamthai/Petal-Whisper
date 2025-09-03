import React from "react";
import Footer from "../Components/Footer";

const rainyFlowers = [
  {
    title: "Hydrangea",
    img: "/img/Rainy/Hydrangea.jpg",
    desc: "ความกตัญญู ความเข้าใจ และความโรแมนติก",
  },
  {
    title: "Delphinium",
    img: "/img/Rainy/Delphinium.jpg",
    desc: "ความสง่างาม ความไว้วางใจ และความเปิดใจ",
  },
  {
    title: "White Lily",
    img: "/img/Rainy/White Lily.jpg",
    desc: "ความรัก ความห่วงใย และกำลังใจ",
  },
  {
    title: "Purple Rose",
    img: "/img/Rainy/Purple-rose.jpg",
    desc: "ความฝัน ความลึกลับและความรักลึกซึ้ง",
  },
  {
    title: "Carnation",
    img: "/img/Rainy/Carnation.jpg",
    desc: "ความรัก ความห่วงใยและกำลังใจ",
  },
  {
    title: "Lotus",
    img: "/img/Rainy/Lotus.jpg",
    desc: "ความสงบ ความศรัทธา และความเข้มแข็งภายใน",
  },
];

const Rainy = () => {
  return (
    <div
      className="relative w-full min-h-screen bg-fixed flex  flex-col"
      style={{
          backgroundImage: "url('/public/img/BgFlower.JPG", // แก้ไข path ให้ถูกต้อง
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
            Rainy
          </h2>

          {/* Grid flowers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rainyFlowers.map((flower, index) => (
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

export default Rainy;
