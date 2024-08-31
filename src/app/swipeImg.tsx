'use client'
import Carousel from "react-material-ui-carousel";
import Image from "next/image";
import React from "react";
import { isMobile } from "react-device-detect";

const exampleImage = {
  label: "description of photo",
  imgPath: "/nameOfFile.jpg", //or .jpeg o
  height: 300, // has to be 300 or 400 to display properly on mobile,
  width: 400, // has to be 300 or 400 to display properly on mobile,
}

const images = [
  {
    label: "Photo of bartop with finished epoxy pour",
    imgPath: "/bar-photos/epoxyBar.jpg",
    height: 300,
    width: 400,
  },
  {
    label: "Installing the bar top on the bar",
    imgPath: "/bar-photos/barTop.jpg",
    height: 300,
    width: 400,
  },
  {
    label: "Bar frame finished construction",
    imgPath: "/bar-photos/barFrame.jpg",
    height: 400,
    width: 300,
  },
];

function ImgCarousel() {
  return (
    <Carousel className="carousel width-100">
      {
        images.map( (item, i) => <Image src={item.imgPath} width={item.width} height={item.height} alt={item.label} key={i} />)
      }
    </Carousel>
  )
}

export default ImgCarousel;
