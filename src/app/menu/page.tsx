import React from "react";
import localFont from "next/font/local";
import { Box } from "@mui/material";
import MenuItem from "@/components/menuItem";

const pittSerif = localFont({src: './Pittsbrook Serif.otf'});


export default function Menu () {
  return (
    <div className={"menu App " + pittSerif.className}>
      <Box
      display="flex"
      flexDirection="column"
      alignItems="start"
      gap="10px"
>
      <div>
      On Draft
      </div>
      <MenuItem></MenuItem>
      <MenuItem></MenuItem>
      <MenuItem></MenuItem>
      <div>
      Cans and Bottles
      </div>
      <MenuItem></MenuItem>
      <MenuItem></MenuItem>
      <MenuItem></MenuItem>

      </Box>

    </div>
  )
}