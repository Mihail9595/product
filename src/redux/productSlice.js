import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const { data } = await axios("https://api.escuelajs.co/api/v1/products");
    const data1 = data.filter((_, index) => index < 20);
    return data1;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    liked: [],
    isLoading: false,
  },
  reducers: {
    addInLiked(state, action) {
      const findItem = state.liked.find(
        (element) => element.id == action.payload.id
      );
      if (findItem) {
        return;
      } else {
        state.liked.push({
          ...action.payload,
        });
      }
    },
    addProduct(state, action) {
      state.products.push({
        id: new Date().toISOString(),
        title: action.payload.title,
        category: { name: action.payload.name },
        images: [action.payload.img],
      });
    },
    removeProduct(state, action) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
      state.liked = state.liked.filter(
        (product) => product.id !== action.payload
      );
    },
    // toggleTodoComplete(state, action) {
    //   const toggledTodo = state.todos.find(
    //     (todo) => todo.id === action.payload.id
    //   );
    //   toggledTodo.completed = !toggledTodo.completed;
    // },
  },

  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { removeProduct, addInLiked, addProduct } = productsSlice.actions;

export default productsSlice.reducer;
