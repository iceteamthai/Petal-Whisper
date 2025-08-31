import React from "react";
import Footer from "../Components/Footer";

const winterFlowers = [
  {
    title: "Red Rose",
    img: "public/img/Winter/Red Rose.jpg",
    desc: "ความรักมั่นคง โรแมนติก ความหลงใหล",
  },
  {
    title: "Tulip",
    img: "public/img/Winter/Tulip.jpg",
    desc: "ความรักบริสุทธิ์ ความอ่อนโยน ความจริงใจ",
  },
  {
    title: "Gypsophila",
    img: "public/img/Winter/Gypsophila.jpg",
    desc: "ความอ่อนโยน ความรักนิรันดร์ ความบริสุทธิ์",
  },
  {
    title: "Poinsettia",
    img: "public/img/Winter/Poinsettia.webp",
    desc: "ความสุข ความโชคดี เทศกาลคริสต์มาส",
  },
  {
    title: "Camellia",
    img: "public/img/Winter/Camellia.jpg",
    desc: "ความสง่างาม ความซื่อสัตย์ ความสมบูรณ์แบบ",
  },
  {
    title: "Pansy",
    img: "public/img/Winter/Pansy.jpg",
    desc: "ความรักที่ลึกซึ้ง ความคิดถึง และการรำลึกถึง",
  },
];

const Winter = () => {
  return (
    <div
      className="relative w-full min-h-screen bg-fixed flex flex-col"
      style={{
        backgroundImage: "url('public/img/BgFlower.JPG')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/20"></div>

      <section className="relative z-10 py-16 flex-grow">
        <div className="container mx-auto px-6">
          <h2 className="text-6xl md:text-7xl font-bold text-center text-white mb-12">
            Winter
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {winterFlowers.map((flower, index) => (
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

      <Footer />
    </div>
  );
};

export default Winter;
