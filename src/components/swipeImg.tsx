'use client'
import Image from "next/image";
import React, { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ScreenContext } from "../app/context";


const exampleImage = {
  label: "description of photo",
  imgPath: "/nameOfFile.jpg", //or .jpeg
  orientation: "has to be either horizontal or vertical"
  //right now images only support 3/4 ratio images will need to be refactored to support other image ratios.
}

const images = [
  {
    label: "Photo of Harrington's Tap House from behind the bar",
    imgPath: "/bar-photos/behind-bar.jpg",
    orientation: "horizontal",
  },
  {
    label: "Photo of seating at Harrington's Tap House",
    imgPath: "/bar-photos/couch-beer.jpg",
    orientation: "horizontal",
  },
  {
    label: "Photo of the bartop at Harrington's Tap House",
    imgPath: "/bar-photos/bartop-close.jpg",
    orientation: "horizontal",
  },
  {
    label: "Photo of interior at Harrington's Tap House",
    imgPath: "/bar-photos/bar-wideshot.jpg",
    orientation: "horizontal",
  },
  {
    label: "Photo of tap handles at Harrington's Tap House",
    imgPath: "/bar-photos/tap-handles.jpg",
    orientation: "horizontal",
  },
  {
    label: "Photo of a beer on the bartop at Harrington's Tap House",
    imgPath: "/bar-photos/bar-beer.jpg",
    orientation: "horizontal",
  },
  {
    label: "Photo of mount elden through the window at Harrington's Tap House",
    imgPath: "/bar-photos/logo-mountains-flip.jpg",
    orientation: "horizontal",
  },
  {
    label: "Photo of patio at Harrington's Tap House",
    imgPath: "/bar-photos/patio.jpg",
    orientation: "horizontal",
  },
  {
    label: "Photo of the art hanging at Harrington's Tap House",
    imgPath: "/bar-photos/art.jpg",
    orientation: "horizontal",
  },
  {
    label: "Photo of the window seating at Harrington's Tap House",
    imgPath: "/bar-photos/seating-mountains.jpg",
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
