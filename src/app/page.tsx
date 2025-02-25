"use client"
import Image from "next/image";
import ImgCarousel from "../components/swipeImg";
import { Box } from "@mui/material";
import Link from "next/link";
import localFont from 'next/font/local';
import { useContext } from "react";
import { ScreenContext } from "./context";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';


const pittSerif = localFont({ src: './Pittsbrook Serif.otf' });
const alessEB = localFont({ src: './Alesand Extra Bold.otf' });

export default function Home() {
  const screen = useContext(ScreenContext);
  return (
    <div className="App home">
      <div className="body">
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          gap={1}
        >
          <div className={"Secondary-header " + alessEB.className}>
            Now open come and grab a pint!
          </div>
          <div className={'Secondary-text ' + alessEB.className}>
            Outside food welcome,
            <br />
            just get your drinks from us!
          </div>
          <div className={'Secondary-text ' + alessEB.className}>
            <Link href="https://maps.app.goo.gl/bUBahW6E7mSujU6s9"
            >
              2711 E Lakin Dr, Flagstaff, AZ 86004
            </Link>
            <br />
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
              <span>Monday </span>
              <span> | </span>
              <span >Closed</span>
            </Box>
            <Box
              display="flex"
              gap="0px 15px"
              justifyContent="space-evenly"
              marginBottom="2px"
            >
              <span>Tuesday - Friday</span>
              <span>|</span>
              <span>2pm - 10pm</span>
            </Box>
            <Box
              display="flex"
              gap="0px 15px"
              justifyContent="space-evenly"
              marginBottom="2px"
            >
              <span>Saturday</span>
              <span>|</span>
              <span>12pm - 10pm</span>
            </Box>
            <Box
              display="flex"
              gap="0px 15px"
              justifyContent="space-evenly"
              marginBottom="2px"
            >
              <span>Sunday</span>
              <span>|</span>
              <span>11am - 9pm</span>
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
              <button className={"button button-white " + alessEB.className + (screen.isMobile ? " small-button" : " large-button")}>
                <Image src="hops_empty_pb.svg"
                  height={screen.isMobile ? "40" : "60"}
                  width={screen.isMobile ? "40" : "60"}
                  alt="Hops icon" />
                <span>
                  Tap Menu
                </span>
              </button>

            </Link>
            {screen.isMobile ?
              <Image src="/Harringtons_Primary-Logo.png" alt="Harrington's Tap House primary round logo" width="100" height="100" />
              :
              <Image src="/Harringtons_Primary-Logo.png" alt="Harrington's Tap House primary round logo" width="200" height="200" />
            }
            <Link href="/about">
              <button
                className={"button button-blue " + alessEB.className + (screen.isMobile ? " small-button" : " large-button")}>
                <Image src="hops_empty_white.svg"
                  height={screen.isMobile ? "40" : "60"}
                  width={screen.isMobile ? "40" : "60"}
                  alt="Hops icon" />
                <span>
                  About us
                </span>
              </button>
            </Link>
          </Box>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13039.836409957634!2d-111.60908713854975!3d35.20748765389516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872d8f7b4277ce35%3A0x689c889f7d2cc7c5!2sHarrington&#39;s%20Tap%20House!5e0!3m2!1sen!2sus!4v1738302293455!5m2!1sen!2sus" height="350" style={{ border: "0" }} loading="lazy"></iframe>
        </Box>
        <div className="icons w-100">
          <a href="mailto: info@harringtonstaphouse.com">
            <EmailIcon fontSize="large" />
          </a>
          <a href="https://www.instagram.com/harringtonstaphouse/">
            <InstagramIcon fontSize="large" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61572922251178">
            <FacebookIcon fontSize="large" />
          </a>
        </div>
      </div>
    </div>
  );
}
