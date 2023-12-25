"use client";
import "../styles/carousel.css";
import Image from "next/image";
import { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

export default function Carousel({ data }) {
  const [slide, setSlide] = useState(0);

  const prevSlide = () => {
    if (slide == 0) {
      setSlide(data.length - 1);
    } else {
      setSlide((prev) => prev - 1);
    }
  };

  const nextSlide = () => {
    if (slide == data.length - 1) {
      setSlide(0);
    } else {
      setSlide((prev) => prev + 1);
    }
  };

  return (
    <>
      <div className="carousel_div">
        <FaArrowAltCircleLeft className="arrow-left" onClick={prevSlide} />
        {data.map((image, idx) => (
          <Image
            src={image.src}
            width={140}
            height={140}
            key={idx}
            className={slide == idx ? "slide" : "slide-inactive"}
          />
        ))}
        <FaArrowAltCircleRight className="arrow-right" onClick={nextSlide} />
      </div>
    </>
  );
}
