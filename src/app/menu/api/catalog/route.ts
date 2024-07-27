import categoryIds from "@/components/categoryIds";
import axios from "axios";
import parseItem from "@/components/menuParse";

export async function GET(req: Request) {
  const {searchParams} = new URL(req.url)
  const category = searchParams.get('category')
  const start = Date.now();
  const searchRes = await axios.post('https://connect.squareup.com/v2/catalog/search ', {
    object_types: ['ITEM'],
    query: {
      exact_query: {
        attribute_name: "categories",
        attribute_value: category,
      },
    },
    include_deleted_objects: false,
    include_related_objects: true,
  },
  {
    headers: {
      "Square-Version": "2024-06-04",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + process.env.BEARER
    }
  })
  const reqTime = Date.now()
  console.log(`req took: ${reqTime-start}`)
  const images = {};
  searchRes.data.related_objects.forEach((related_object) => {
    if (related_object.type === "IMAGE") {
      images[related_object.id] = related_object.image_data.url;
    }
  })
  const unfilteredItems = searchRes.data.objects
  const instock_items = []
  unfilteredItems.forEach((item) => {
    if (item.item_data.visibility === "PRIVATE") {
      return;
    }
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
  if(category === categoryIds.beer) {
    const tapMenu = [];
    const canMenu = [];
    instock_items.forEach((item) => {
      const parsed = parseItem(item, images);
      if (parsed.category === "onTap") {
        tapMenu.push(parsed);
      } else {
         canMenu.push(parsed);
      }
    })
    const filterTime = Date.now();
    console.log(`filter took: ${filterTime - reqTime} \n total time ${filterTime - start}`)
    return Response.json({tapMenu, canMenu});
  } else {
    const parsedMenu = []
    instock_items.forEach((item) => {
      const parsed = parseItem(item,images);
      parsedMenu.push(parsed);
    })
    return Response.json(parsedMenu);
  }
}
