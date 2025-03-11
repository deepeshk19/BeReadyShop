import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import "./BrandsCollab.css";

const BrandsCollab = () => {
  const brands = [
    { name: "Bershka", logo: "https://logos-world.net/wp-content/uploads/2020/02/Bershka-Logo.png" },
    { name: "PULL&BEAR", logo: "https://brandlogos.net/wp-content/uploads/2022/04/pullbear-logo-brandlogos.net_-512x512.png" },
    { name: "H&M", logo: "https://mallmaverick.imgix.net/web/retailers/h-m/logo_aHR0cHNfX19tYWxsbWF2ZXJpY2suaW1naXgubmV0X3dlYl9wcm9wZXJ0eV9tYW5hZ2Vyc18xX3Byb3BlcnRpZXNfNzA4X2FsbF8yMDI0MDMyNjIyMDQ0Nl9obS0wMS5wbmc=?auto=format,compress&fit=clamp" },
    { name: "ZARA", logo: "https://img.businessoffashion.com/resizer/v2/https%3A%2F%2Fprod-bof-media.s3.eu-west-1.amazonaws.com%2Fimport%2Ffilestack%2Fz2OC32OLSkWODRkgwZnZ_c2101aa153fda068b36023e9191e4b4e.png?auth=0d905e18bf59bb456c77d06b94e08275dd8c62e1c48130048f96ae28ed4023f6&width=480" },
    { name: "MANGO", logo: "https://1000logos.net/wp-content/uploads/2021/05/Mango-logo.png" }
  ];

  return (
    <div className="brands-section">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        modules={[Pagination, Autoplay]}
        className="brands-swiper"
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index} className="brand-slide">
            <img style={{height:'100px', width:'90px'}} src={brand.logo} alt={brand.name} className="brand-logo" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BrandsCollab;
