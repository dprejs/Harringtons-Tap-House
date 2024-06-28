import Image from "next/image";
import ImgCarousel from "./swipeImg";
import { Box } from "@mui/material";
export default function Home() {
  return (
<div className="App">
      <header className="App-header">
        <Image src="/Harringtons_Primary-Logo.png" priority={true} height={302} width={302} alt="Logo"/>
        <div>
            Coming Soon <br/>
            Late Summer 2024
        </div>
      </header>
      <div >
        <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        >
          <div className='Secondary-text'>
            2711 E Larkin Dr
          </div>
          <div className='Secondary-text'>
            Meanwhile Come visit us at <br/>
            <a  href="https://highaltitudehomebrew.com/">High Altitude Home Brew Supply</a><br/>
            And get some drinks to go or brew supplies<br/>
            2711 E Larkin Dr<br/>
            Tues -Sat, 10am - 6pm<br/>
          </div>
          <ImgCarousel />
        </Box>
      </div>
    </div>
  );
}
