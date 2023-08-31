export interface Post {
  id: number
  slug: string
  title: string
  excerpt: string
  imageUrl: string
  categories: number[]
}

export interface Category {
  id: number
  name: string
  slug: string
}

// export enum CategoryEnum {
//   Books = 3,
//   Accessories = 4,
//   Music = 5,
//   Toys = 6,
//   Audiobooks = 7,
//   News = 8,
// }

// export type CategoryArray = readonly CategoryEnum[];

export interface BlogPosts {
  posts: Post[],
  categories: Category[]
  total: number
}