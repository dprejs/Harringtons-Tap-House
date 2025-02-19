export type related_object = {
  type: string,
  id: string,
  updated_at?: string,
  created_at?: string
  version?: number,
  is_deleted?: boolean,
  catalog?: [{
    catalog_v1_id?: string,
    location_it?: string,
  }],
  present_at_all_locations?: boolean,
  present_at_location_ids?: [string],
  tax_data?: {
    name?: string,
    calculation_phase: string,
    inclusion_type: string,
    percentage: string | number,
    applies_to_custom_amounts: boolean,
    enabled: boolean
  },
  category_data?: {
    name: string,
    category_type: string,
    parent_category?: { ordinal?: number },
    is_top_level?: boolean,
    online_visibility?: boolean
  },
  image_data?: {
    url?: string,
  }
}
export type catalog_v1_id = {
  catalog_v1_id: string,
  location_id: string
}
export type price_money = {
  amount: number,
  currency: string
}
export type location_override = {
  location_id: string,
  track_inventory?: boolean,
  inventory_alert_type?: string,
  sold_out?: boolean
}
export type variation = {
  type: string,
  id: string,
  updated_at: string,
  created_at: string,
  version: number,
  is_deleted: boolean,
  catalog_v1_ids: [ catalog_v1_id ],
  present_at_all_locations: boolean,
  present_at_location_ids: [ string ],
  item_variation_data: {
    item_id: string,
    name: string,
    ordinal: number,
    pricing_type: string,
    price_money: [price_money],
    location_overrides: [location_override],
    user_data: string,
    sellable: boolean,
    stockable: boolean
  }
}
export type category = { id: string, ordinal: number }
export type item = {
  type: string,
  id: string,
  updated_at: string,
  created_at: string,
  version: number,
  is_deleted: boolean,
  present_at_all_locations: boolean,
  present_at_location_ids: [ string ],
  item_data: {
    name: string,
    description: string,
    is_taxable: boolean,
    visibility?: string,
    tax_ids?: [ string ],
    variations: [variation],
    product_type: string,
    image_ids: [ string ],
    categories: [ category ],
    description_html: string,
    description_plaintext: string,
    is_archived: boolean,
    reporting_category: { id: string, ordinal: number }
  }
}
export type parsedItem = {
  id: string,
  name: string,
  brewery: string,
  style: string,
  abv: string,
  ibu: string,
  description: string,
  img_url: string | undefined,
  category: string,
  onDeck: boolean,
}
export type images = {[key: string] : string | undefined}
