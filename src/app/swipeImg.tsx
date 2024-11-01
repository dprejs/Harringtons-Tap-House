'use client'
import Image from "next/image";
import React, { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ScreenContext } from "./context";


const exampleImage = {
  label: "description of photo",
  imgPath: "/nameOfFile.jpg", //or .jpeg
  orientation: "has to be either horizontal or vertical"
  //right now images only support 3/4 ratio images will need to be refactored to support other image ratios.
}

const images = [
  {
    label: "Photo of the bar and beer menu at Harrington's Tap House",
    imgPath: "/Bar1.jpg",
    orientation: "horizontal",
  },
  {
    label: "Photo of the bartop at Harrington's Tap House",
    imgPath: "/Bar2.jpg",
    orientation: "horizontal",
  },
  {
    label: "Photo of seating at Harrington's Tap House",
    imgPath: "/Bar3.jpg",
    orientation: "horizontal",
  },
];


function ImgCarousel() {
  const screen = useContext(ScreenContext);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    centerMode: true,
    speed: 1000,
    autoplaySpeed: 5000,
    swipeToSlide: screen.isMobile,
    variableWidth: true,
    adaptiveHeight: true,
  }

  return (
    <div className="carousel">
      <Slider {...settings} >
        {images.map((item, i) => {
          let height = 300;
          let width = 400;
          if (screen.isMobile) {
            if (item.orientation === "horizontal") {
              width = screen.vw * .78;
              height = width * .75;
            } else {
              width = screen.vw * .78;
              height = width / .75;
            }
          } else {
            if (item.orientation === "horizontal") {
              width = screen.vw * .3;
              height = width * .75;
            } else {
              width = screen.vw * .17;
              height = width / .75;
            }
          }
          return (
              <div className="carousel-item" key={i}>
                <Image
                  src={item.imgPath}
                  height={height}
                  width={width}
                  alt={item.label}
                />
              </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default ImgCarousel;
