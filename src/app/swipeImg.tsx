'use client'
import Carousel from "react-material-ui-carousel";
import Image from "next/image";
import React from "react";
import { isMobile } from "react-device-detect";

const stockImages = [
  {
    label: "Stock Confident Contruction worker",
    imgPath: "/stock-images/confident.png",
    height: 205,
    width: 137,
  },
  {
    label: "Stock Jackhammer Construction Worker",
    imgPath: '/stock-images/jackhammer.png',
    height: 205,
    width: 137,
  },
  {
    label: "Stock Construction Workers Planning",
    imgPath: '/stock-images/plan.png',
    height: 192,
    width: 288,
  },
  {
    label: "Stock Construction Arguing",
    imgPath: '/stock-images/trouble.png',
    height: 192,
    width: 288,
  },
  {
    label: "Stock construction worker with walkie",
    imgPath: '/stock-images/walkie.png',
    height: 192,
    width: 288,
  },
  {
    label: "stock construction worker",
    imgPath: '/stock-images/Shirtless.png',
    height: 205,
    width: 137,
  },
];
let aspect1 = 300;
let aspect2 = 225;

const images = [
  {
    label: "bar construction",
    imgPath: '/construction/01686747-EEAF-4564-9648-F7A89B11663B.jpg',
    height: aspect2,
    width: aspect1,
  },
  {
    label: "bar construction",
    imgPath: '/construction/IMG_1142.jpg',
    height: aspect1,
    width: aspect2,
  },
  {
    label: "bar construction",
    imgPath: '/construction/IMG_4298.jpg',
    height: aspect1,
    width: aspect2,
  },
  // {
  //   label: "bar construction",
  //   imgPath: '/construction/IMG_4299.jpg',
  //   height: aspect2,
  //   width: aspect1,
  // },
  {
    label: "bar construction",
    imgPath: '/construction/IMG_4300.jpg',
    height: aspect1,
    width: aspect2,
  },
  {
    label: "bar construction",
    imgPath: '/construction/IMG_4306.jpg',
    height: aspect1,
    width: aspect2,
  },
  {
    label: "bar construction",
    imgPath: '/construction/IMG_4305.jpg',
    height: aspect1,
    width: aspect2,
  },
  {
    label: "bar construction",
    imgPath: '/construction/IMG_4304.jpg',
    height: aspect2,
    width: aspect1,
  },
  {
    label: "bar construction",
    imgPath: '/construction/IMG_4303.jpg',
    height: aspect1,
    width: aspect2,
  },
  {
    label: "bar construction",
    imgPath: '/construction/IMG_4302.jpg',
    height: aspect2,
    width: aspect1,
  },
]

function ImgCarousel() {
  return (
    <Carousel className="carousel" sx={{height: aspect1, width: aspect1}}>
      {
        images.map( (item, i) => <Image src={item.imgPath} width={item.width} height={item.height} alt={item.label} key={i} />)
      }
    </Carousel>
  )
}

export default ImgCarousel;