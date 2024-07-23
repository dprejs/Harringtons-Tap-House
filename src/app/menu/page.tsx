import React from "react";
import localFont from "next/font/local";
import { Box } from "@mui/material";
import MenuItem from "@/components/menuItem";
import axios from "axios";

const pittSerif = localFont({src: './Pittsbrook Serif.otf'});
//todo handle error response from squareup

const categoryIds = {
  onTap: "PF3DYNTHDCVWC5W3GALGGTLS",
  cider: "HMKNUQ4O73CMW6G4LCFOFO3V",
  soda: "BYBDT45EHXINV76SYHFOVZP5",
  mead: "FVBM5K4GRSCETVP6T56VESGD",
  sake: "72NFD5EA7AF3RGTPQNNAEJJ6",
  beer: "EFE43PUB5IXBGZKZFCAF5MLJ",
  nonAlcoholic: "3JZD6KDPW6ZEY43Z75WE37FI",
  growlerFill: "XX5XOLF2TXLVVNMJJU2KBVIG",
  hardWater: "PVATQNA2YJJCPMDFYKDUJSZ7",
  redWine: "AJIRQF7SUG6RT3GI42PRQE2Z",
  port: "GX5P7WMMEYNRMSEWL5QTATNZ",
  hardSeltzer: "GIHVT5Z34F4M2WOQYOTZYOJL",
  roseWine: "YUOGOV5VYMHHFDRTT34PXNDB",

}
async function getTapMenu() {
  const tapmenu = [];
  const cansAndBottles = [];
  const searchRes = await axios.post('https://connect.squareup.com/v2/catalog/search ', {
    object_types: ['ITEM'],
    // limit: 10,
    query: {
      exact_query: {
        attribute_name: "categories",
        attribute_value: categoryIds.beer,
      },
    },
    include_deleted_objects: false,
  },
  {
    headers: {
      "Square-Version": "2024-06-04",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + process.env.BEARER
    }
  })
  const unfilteredItems = searchRes.data.objects
  const instock_items = []
  unfilteredItems.forEach((item) => {
    let outOfStockCount = 0;

    if (item.item_data.variations.every((variation) => {
      if (variation.item_variation_data.location_overrides){
        return variation.item_variation_data.location_overrides.every((override) => override.sold_out === true)
      } else {
        return true;
      }
     }))
      {
    } else {
      instock_items.push(item);
    }
  })
  instock_items.forEach((item) =>{
    //parse style, abv, ibu from description
  const styleSearch = /(Style:).*/i.exec(item.item_data.description_plaintext);
  let style = "";
  const abvSearch = /(ABV:).*/i.exec(item.item_data.description_plaintext);
  let abv = "";
  const ibuSearch = /(IBU:).*/i.exec(item.item_data.description_plaintext);
  let ibu = "";
  if( styleSearch ) {
    style = styleSearch[0].split(':')[1].trim();
  }
  if( abvSearch ) {
    abv = abvSearch[0].split(':')[1].trim();
  }
  if( ibuSearch ) {
    ibu = ibuSearch[0].split(':')[1].trim();
  }
  //remove style abv ibu from description
  const descriptionSearch = /(.|\n)*(?=Style:)/i.exec(item.item_data.description_plaintext);
  let description = "";
  if (descriptionSearch){
    description=descriptionSearch[0].trim();
  }
  let name = item.item_data.name;
  let brewery = ""
  const nameSplit = item.item_data.name.split("-");
  if (nameSplit.length > 1 ) {
    name = nameSplit[0].trim();
    brewery = nameSplit[1].trim();
  }
  const menuItem = {
    id: item.id,
    name: name,
    brewery: brewery,
    style: style,
    abv: abv,
    ibu: ibu,
    description: description,
    // img_url: img_url,
  }
  if(item.item_data.categories.some((category) => category.id === categoryIds.onTap)) {
    tapmenu.push(menuItem);
  } else {
    cansAndBottles.push(menuItem);
  }
})
    return {tapmenu, cansAndBottles};
}


export default async function Menu () {
  const menus = await getTapMenu();
  // console.log(menuItems, "in component");

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
      {menus.tapmenu.map((item) => <MenuItem key={item.id} props= {item}/>)}

      <div>
      Cans and Bottles
      </div>
      {menus.cansAndBottles.map((item) => <MenuItem key={item.id} props= {item}/>)}

      </Box>

    </div>
  )
}




