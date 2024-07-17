import Image from "next/image";
import ImgCarousel from "./swipeImg";
import { Box } from "@mui/material";
import Link from "next/link";
import localFont from 'next/font/local';

const pittSerif = localFont({src: './Pittsbrook Serif.otf'});
const alessEB = localFont({src: './Alesand Extra Bold.otf'});

export default function Home() {
  return (
<div className="App home">

      <div className="body">
        <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        >
          <div className={"Secondary-header " + alessEB.className}>
            Craft Beer House
          </div>
          <div className={'Secondary-text ' + alessEB.className}>
            <Link href="https://maps.app.goo.gl/bUBahW6E7mSujU6s9"
            >
            2711 E Lakin Dr, Flagstaff, AZ 86004
            </Link>
            <br/>
            <a href="tel: +19284404410">
              928-440-4410
            </a>
          </div>
          <div className={'Secondary-text ' + alessEB.className}>
            <Box
            display="flex"
            gap="0px 15px"
            justifyContent="space-evenly"
            >
              <span>sunday - Monday </span>
              <span> | </span>
              <span >Closed</span>
            </Box>
            <Box
            display="flex"
            gap="0px 15px"
            justifyContent="space-evenly"
            >
              <span>Tuesday - saturday</span>
              <span>|</span>
              <span>12pm - 10pm</span>
            </Box>

          </div>
          <ImgCarousel />
          <Box
          display="flex"
          flex-direction="row"
          alignItems="center"
          gap="0px 30px"
          >
            <Link href="/menu">
            <button  className={"button button-white " + alessEB.className}>
              <Image src="hops_empty_pb.svg"
              height="40"
              width="40"
              alt="Hops icon"/>
              <span>
              Tap Menu
              </span>
            </button>

            </Link>
            <Image src="/Harringtons_Primary-Logo.png" alt="Harrington's Tap House primary round logo" width="100" height="100"/>

            <button
            className={"button button-blue " + alessEB.className}>
            <Image src="hops_empty_white.svg"
              height="40"
              width="40"
              alt="Hops icon"/>
              <span>
              About us
              </span>
            </button>
          </Box>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3259.8208517064745!2d-111.60925912357517!3d35.21093107274278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872d8f46ae8a23f5%3A0xaa750b8aa8473a43!2sHigh%20Altitude%20Home%20Brew%20Supply!5e0!3m2!1sen!2sus!4v1719878958008!5m2!1sen!2sus" height="400" style={{border: "0"}} loading="lazy"></iframe>
        </Box>
      </div>
    </div>
  );
}
