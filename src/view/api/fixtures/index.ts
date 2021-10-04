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

export const MovieIntegraleTransformed = {
  id: 1,
  title: "Naruto",
  poster: "https://image.tmdb.org/t/p/w440_and_h660_facebackdrop_path",
  original_language: "fr",
  poster_path: "Image de Naruto",
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

export const MoviesTransformed = [
  {
    id: 1,
    title: "Naruto",
    poster: "https://image.tmdb.org/t/p/w440_and_h660_faceImage de Naruto",
    overview: "bla",
  },
  {
    id: 2,
    title: "Naruto",
    poster: "https://image.tmdb.org/t/p/w440_and_h660_faceImage de Naruto",
    overview: "bla",
  },
  {
    id: 3,
    title: "Naruto",
    poster: "https://image.tmdb.org/t/p/w440_and_h660_faceImage de Naruto",
    overview: "bla",
  },
  {
    id: 4,
    title: "Naruto",
    poster: "https://image.tmdb.org/t/p/w440_and_h660_faceImage de Naruto",
    overview: "bla",
  },
  {
    id: 5,
    title: "Naruto",
    poster: "https://image.tmdb.org/t/p/w440_and_h660_faceImage de Naruto",
    overview: "bla",
  },
  {
    id: 6,
    title: "Naruto",
    poster: "https://image.tmdb.org/t/p/w440_and_h660_faceImage de Naruto",
    overview: "bla",
  },
];

export const WishlistTransformed = {
  id: 1,
  name: "myWishlist",
  movies: [MoviesTransformed[0]],
};
