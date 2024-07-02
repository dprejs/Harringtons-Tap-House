import Image from "next/image"
import localFont from 'next/font/local';

const alessEB = localFont({src: '../app/Alesand Extra Bold.otf'});


export default function MenuItem (props) {
  return (
    <div className={"menu-card " + alessEB.className}>
      <Image
      src="/hops_filled_pr_white_hops.svg"
      alt="placeholder hops icon"
      width="50"
      height="50"
      className="menu-image"
      />
      <div className="menu-name">
        Tower Station
      </div>
      <div className="menu-divider">|</div>
      <div className="menu-brewery"> Mother Road</div>
      <div className="menu-style">
      IPA - American
      </div>
      <div className="menu-abv">7.3% ABV</div>
    </div>
  )
}