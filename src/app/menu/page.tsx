"use client"
import React, { useEffect, useState } from "react";
import localFont from "next/font/local";
import { Box } from "@mui/material";
import MenuItem from "@/components/menuItem";
import axios from "axios";
import categoryIds from "@/components/categoryIds";
import SkeletonMenuItem from "@/components/skeletonMenuItem";
import { parsedItem } from "@/components/types";
const pittSerif = localFont({ src: './Pittsbrook Serif.otf' });
//todo handle error response from squareup

export default function Menu() {
  const [fullMenuList, setFullMenuList] = useState({});
  const [tapMenu, setTapMenu] = useState([]);
  const [onDeckMenu, setOnDeckMenu] = useState([]);
  const [canMenu, setCanMenu] = useState([]);
  const [naMenu, setNaMenu] = useState([]);
  const [meadMenu, setMeadMenu] = useState([]);
  const [width, setWidth] = useState<number | undefined>(undefined);
  const [isMobile, setIsMobile] = useState(false);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);
  useEffect(() => {
    if (width) {
      setIsMobile(width <= 768);
    }

  }, [width])

  useEffect(() => {
    axios.get(`/menu/api/catalog?category=${categoryIds.onTap}`).then((res) => {
      setTapMenu(res.data.onTapMenu);
      setOnDeckMenu(res.data.onDeckMenu)
      return;
    }).then(() => {
      axios.get(`/menu/api/catalog?category=${categoryIds.cansAndBottles}`).then((res) => {
        setCanMenu(res.data)
      }).then(() => {
        // console.log("get NA")
        axios.get(`/menu/api/catalog?category=${categoryIds.nonAlcoholic}`).then((res) => {
          setNaMenu(res.data)
          return;
        }).then(() => {
          // console.log("get mead")
          axios.get(`/menu/api/catalog?category=${categoryIds.mead}`).then((res) => {
            setMeadMenu(res.data);
            return;
          })
        })
      })
    })
  }, [])
  const scrollTo = (selection: "NA" | "tap" | "cans" | "onDeck") => {
    let div;
    if (selection === "tap") {
      div = document.getElementById("Tap-Menu");
    } else if (selection === "cans") {
      div = document.getElementById("Can-Menu");
    } else if (selection === "NA") {
      div = document.getElementById("NA-Menu");
    } else if (selection === "onDeck") {
      div = document.getElementById("OnDeck-Menu")
    }
    div?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <div className={"menu App " + pittSerif.className}>
      <div className="menuNav">
        <button onClick={() => { scrollTo("tap") }}>On Draft</button>
        <span>
          |
        </span>
        <button onClick={() => { scrollTo("onDeck") }}>On Deck</button>
        <span>
          |
        </span>
        <button onClick={() => { scrollTo("cans") }}>Cans and Bottles </button>
        <span>
          |
        </span>
        <button onClick={() => { scrollTo("NA") }}> Non Alcoholic</button>
        <span>
          |
        </span>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          back to top
        </button>
      </div>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="start"
        gap="10px"
      >
        <div id="Tap-Menu" >
          On Draft
        </div>
        <div className="menu-list">
          {tapMenu.length ? null : <SkeletonMenuItem />}
          {tapMenu.map((item: parsedItem) => <MenuItem key={item.id} props={item} />)}
        </div>
        <div id="OnDeck-Menu">
          <span>On Deck</span>
          <span>-</span>
          <span className="menu-sec">will be replacing some of our current taps</span>
        </div>
        <div className="menu-list">
          {onDeckMenu.length ? null : <SkeletonMenuItem />}
          {onDeckMenu.map((item: parsedItem) => <MenuItem key={item.id} props={item} />)}
        </div>
        <div id="Can-Menu">
          Cans and Bottles
        </div>
        <div className="menu-list">
          {tapMenu.length ? null : <SkeletonMenuItem />}
          {canMenu.map((item: parsedItem) => <MenuItem key={item.id} props={item} />)}
        </div>
        <div id="NA-Menu">
          Non alcholic
        </div>
        <div className="menu-list">
          {tapMenu.length ? null : <SkeletonMenuItem />}
          {naMenu.map((item: parsedItem) => <MenuItem key={item.id} props={item} />)}
        </div>
      </Box>

    </div>
  )
}




