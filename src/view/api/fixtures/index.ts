const commonFieds = {
  title: "Naruto",
  poster_path: "Image de Naruto",
  original_language: "fr",
  adult: true,
  backdrop_path: "backdrop_path",
  genre_ids: [23],
  media_type: "media_type",
  original_title: "original_title",
  overview: "bla",
  popularity: 2.4,
  release_date: "release_date",
  video: false,
  vote_average: 3,
  vote_count: 3,
};

export const Movies = [
  {
    ...commonFieds,
    id: 1,
  },
  {
    ...commonFieds,
    id: 2,
  },
  {
    ...commonFieds,
    id: 3,
  },
  {
    ...commonFieds,
    id: 4,
  },
  {
    ...commonFieds,
    id: 5,
  },
  {
    ...commonFieds,
    id: 6,
  },
];

export const Wishlist = {
  id: 1,
  name: "myWishlist",
  items: Movies,
};
