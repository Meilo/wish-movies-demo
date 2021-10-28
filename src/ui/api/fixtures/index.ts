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
    isInWishlist: true,
    id: 1,
  },
  {
    ...commonFieds,
    isInWishlist: true,
    id: 2,
  },
  {
    ...commonFieds,
    isInWishlist: true,
    id: 3,
  },
  {
    ...commonFieds,
    isInWishlist: true,
    id: 4,
  },
  {
    ...commonFieds,
    isInWishlist: true,
    id: 5,
  },
  {
    ...commonFieds,
    isInWishlist: true,
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
  isInWishlist: true,
};

export const MoviesTransformed = [
  {
    id: 1,
    title: "Naruto",
    poster: "https://image.tmdb.org/t/p/w440_and_h660_faceImage de Naruto",
    overview: "bla",
    isInWishlist: true,
  },
  {
    id: 2,
    title: "Naruto",
    poster: "https://image.tmdb.org/t/p/w440_and_h660_faceImage de Naruto",
    overview: "bla",
    isInWishlist: true,
  },
  {
    id: 3,
    title: "Naruto",
    poster: "https://image.tmdb.org/t/p/w440_and_h660_faceImage de Naruto",
    overview: "bla",
    isInWishlist: true,
  },
  {
    id: 4,
    title: "Naruto",
    poster: "https://image.tmdb.org/t/p/w440_and_h660_faceImage de Naruto",
    overview: "bla",
    isInWishlist: true,
  },
  {
    id: 5,
    title: "Naruto",
    poster: "https://image.tmdb.org/t/p/w440_and_h660_faceImage de Naruto",
    overview: "bla",
    isInWishlist: true,
  },
  {
    id: 6,
    title: "Naruto",
    poster: "https://image.tmdb.org/t/p/w440_and_h660_faceImage de Naruto",
    overview: "bla",
    isInWishlist: true,
  },
];

export const WishlistTransformed = {
  id: 1,
  name: "myWishlist",
  movies: [MoviesTransformed[0]],
};
