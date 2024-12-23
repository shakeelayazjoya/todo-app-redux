import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      image:
        "https://omyofficial.com/cdn/shop/products/34442342_460x.jpg?v=1630714194",
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      image:
        "https://omyofficial.com/cdn/shop/products/35654674_460x.jpg?v=1624552749",
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
      image:
        "https://omyofficial.com/cdn/shop/products/23445234_460x.jpg?v=1624551389",
    },
  ],
  reducers: {},
});

export default productSlice.reducer;
