import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../redux/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => <CartItem key={item.id} item={item} />)
      )}
      <div className="total">
        <h3>Total: ${total}</h3>
        <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
      </div>
    </div>
  );
};

export default Cart;
