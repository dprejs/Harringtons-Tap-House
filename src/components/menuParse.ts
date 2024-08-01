import categoryIds from "./categoryIds";
import { images, item, parsedItem } from "./types";

const parseItem = (item: item ,images: images): parsedItem => {
  const styleSearch = /(Style:).*/i.exec(item.item_data.description_plaintext);
    let style = "";
    const abvSearch = /(ABV:).*%/i.exec(item.item_data.description_plaintext);
    let abv = "";
    const ibuSearch = /(IBU:) \d{1,3}/i.exec(item.item_data.description_plaintext);
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
    // const img_url = await getItemImg(item.id);
    let menuCategory = ""
    if(item.item_data.categories.some((category) => category.id === categoryIds.onTap)) {
      menuCategory = "onTap";
    } else {
      menuCategory = "bottles";
    }
    let img_url: string | undefined = ""
    if (item.item_data.image_ids && item.item_data.image_ids.length && images[item.item_data.image_ids[0]] ) {
      img_url = images[item.item_data.image_ids[0]];
    }
    const menuItem = {
      id: item.id,
      name: name,
      brewery: brewery,
      style: style,
      abv: abv,
      ibu: ibu,
      description: description,
      img_url: img_url,
      category: menuCategory,
    }
    return menuItem;
}
export default parseItem;