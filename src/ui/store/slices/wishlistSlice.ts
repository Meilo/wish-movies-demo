import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { WishlistTransformed } from "core/domain/models";
import wishlistControllerHandler from "ui/services/handleControllers/wishlistControllerHandler";

const wishlist = wishlistControllerHandler.controller;
const vm = wishlistControllerHandler.vm;

export const fetchWishlist = createAsyncThunk(
  "wishlist/fetchWishlist",
  async () => {
    await wishlist.retreive();
  }
);

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: vm.wishlist as WishlistTransformed | undefined,
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWishlist.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchWishlist.fulfilled, (state) => {
      state.wishlist = vm.wishlist;
      state.loading = false;
    });
    builder.addCase(fetchWishlist.rejected, (state) => {
      state.error = true;
    });
  },
});

export default wishlistSlice.reducer;
