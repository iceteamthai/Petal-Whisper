import React from 'react';
import CardList from '../Components/CardList';
import Footer from '../Components/Footer';
import ErrorMessage from '../Components/ErrorMessage';
import CardData from '../service/cardData';''
import { Link } from 'react-router-dom';

const products = [
  {
    title: "Summer",
    img: "/img/summer.jpg",
    desc: "“ความสดใสของฤดูร้อนสะท้อนผ่านดอกไม้สีสันสดจัดจ้าน เต็มไปด้วยพลังงาน ความสุข และความอบอุ่น เหมาะสำหรับการมอบเป็นกำลังใจหรือสร้างรอยยิ้มให้คนพิเศษในวันที่สดใส”",
    path: "/summer"
  },
  {
    title: "Rainy",
    img: "/img/Rainy.jpg",
    desc: "ฤดูฝนชุ่มฉ่ำเต็มไปด้วยความโรแมนติกอันอ่อนโยน สื่อถึงความสงบ สบายใจ และความรักที่ละมุนละไมเหมาะกับการส่งต่อความคิดถึงและกำลังใจท่ามกลางสายฝน",
    path: "/rainy"
  },
  {
    title: "Winter",
    img: "/img/winter.jpg",
    desc: "ฤดูหนาวคือช่วงเวลาแห่งความอบอุ่นในอากาศเย็นสร้างบรรยากาศโรแมนติกและหรูหรา เหมาะสำหรับการเฉลิมฉลอง ความรักอันมั่นคง และมิตรภาพอันจริงใจ โดยเฉพาะในเทศกาลคริสต์มาสและปีใหม",
    path: "/winter"
  },
];

const Products = () => {
  return (
    <div
      className="relative w-full min-h-screen  bg-fixed flex flex-col"
      style={{
        backgroundImage: "url('/img/BgFlower.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-opacity-50"></div>

      <section className="relative bg-black/20 z-10 py-16 flex-grow">
        <div className="container mx-auto px-6">
          <h2 className="text-7xl font-bold text-center text-white mb-12">
            Season
          </h2>

          <div className="grid grid-cols-1  md:grid-cols-3 gap-8">
            {products.map((item, index) => (
              <Link to={item.path} key={index}>
                <div className="bg-white/50 backdrop-blur-md rounded-2xl h-150 shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-72 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-3xl font-bold mb-2 text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-xl leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;