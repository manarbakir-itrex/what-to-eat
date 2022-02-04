export type FoodDm = {
  id: string,
  name: string,
  description?: string,
  type: string,
  img?: string | null,
  rating: number,
  tags?: string[],

  // think of "user_rating" field as of result of "left join" to restaurant model
  user_rating?: number | null,
}

export type Food = {
  id: string,
  name: string,
  type: string,
  rating: number,
  description?: string,
  imageUrl?: string | null,
  tags?: string[],

  // think of "userRating" field as of result of "left join" to restaurant model
  userRating?: number | null,
}
