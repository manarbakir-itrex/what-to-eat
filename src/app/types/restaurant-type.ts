export type RestaurantDm = {
  id: string,
  name: string,
  description?: string,
  address: string,
  cuisine_type: string,
  operating_hours: any,
  rating: number,
  img?: string | null,
  // think of "user_rating" field as of result of "left join" to restaurant model
  user_rating?: number | null,
}

export type Restaurant = {
  id: string,
  name: string,
  address: string,
  cuisine: string,
  rating: number,
  description?: string,
  imageUrl?: string | null,

  // think of "userRating" field as of result of "left join" to restaurant model
  userRating?: number | null,
}
