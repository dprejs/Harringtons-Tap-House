'use client'
import Carousel from "react-material-ui-carousel";
import Image from "next/image";
import React from "react";
const images = [
  {
    label: "Stock Confident Contruction worker",
    imgPath: "/bar-photos/epoxyBar.jpg",
    height: 300,
    width: 400,
  },
  {
    label: "Stock Jackhammer Construction Worker",
    imgPath: "/bar-photos/barTop.jpg",
    height: 300,
    width: 400,
  },
  {
    label: "Stock Construction Workers Planning",
    imgPath: "/bar-photos/barFrame.jpg",
    height: 400,
    width: 300,
  },
  // {
  //   label: "Stock Construction Arguing",
  //   imgPath: '/stock-images/trouble.png',
  //   height: 192,
  //   width: 288,
  // },
  // {
  //   label: "Stock construction worker with walkie",
  //   imgPath: '/stock-images/walkie.png',
  //   height: 192,
  //   width: 288,
  // },
  // {
  //   label: "stock construction worker",
  //   imgPath: '/stock-images/Shirtless.png',
  //   height: 205,
  //   width: 137,
  // },
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