"use client"
import Image from "next/image"
import localFont from 'next/font/local';
import { useState } from "react";

const alessEB = localFont({src: '../app/Alesand Extra Bold.otf'});


export default function MenuItem ({props}) {
  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => {
    setShowDetails(!showDetails)
  }
  return (
    <div className={"menu-card " + alessEB.className}>
      {props.img_url ?
      <Image
      src={props.img_url}
      alt={`${props.name} image`}
      width={100}
      height={100}
      style={{
        width: '100%',
        height: 'auto'
      }}
      className="menu-image"
    /> :
      <Image
      src="/hops_filled_pr_white_hops.svg"
      alt="placeholder hops icon"
      width="50"
      height="50"
      className="menu-image"
      />
    }
      <div className="menu-text">
        <div className="menu-primary">
          <span className="menu-name">
            {props.name}
          </span>
          <span>{props.style}</span>
        </div>
        <div className="menu-secondary">
          <span className="menu-brewery">{props.brewery}</span>
          <span>{props.abv ? "•" : ""}</span>
          <span>{props.abv} {props.abv ? "ABV" : ""}</span>
          <span>{props.ibu ? "•" : ""}</span>
          <span>{props.ibu} {props.ibu ? "IBU" : ""}</span>
        </div>
        <div className="menu-description">
          {showDetails ? props.description : props.description.slice(0,100)} {props.description.length > 100 ? <span className="show-more" onClick={toggleDetails}>{showDetails ? "show less ▴" : "show more ▸"}</span> : null}
        </div>
      </div>
    </div>
  )
}