import React from "react";
import HeroSlider from "react-slick/lib/slider";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousel = () => {
  const settingsLg = {
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "300px",
    infinite: true,
  };

  const settings = {
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = [
    "https://images.unsplash.com/photo-1636022490849-1f88045af3ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1635939364889-324dbe6d9cfc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80",
    "https://images.unsplash.com/photo-1636052064333-29065bd5c617?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1635797086390-696fe0db4556?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80",
    "https://images.unsplash.com/photo-1636023174965-7feeefbe80df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=829&q=80",
  ];

  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...settings}>
          {images.map((img) => (
            <div className="w-20 h-64 md:h-80 py-3">
              <img src={img} alt="testing" className="h-full w-full rounded" />
            </div>
          ))}
        </HeroSlider>
      </div>
      <div className="hidden lg:block">
        <HeroSlider {...settingsLg}>
          {images.map((img) => (
            <div className="w-full h-80 px-1 py-3">
              <img src={img} alt="testing" className="h-full w-full rounded" />
            </div>
          ))}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousel;
