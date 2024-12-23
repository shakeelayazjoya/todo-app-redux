import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          addToCart={() => dispatch(addToCart(product))}
        />
      ))}
    </div>
  );
};

export default ProductList;
