import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cartItems from "../cartItems";
import { CartItem } from "./CartItem";
import { clearCart } from "../cart/cartSlice";

const CartContainer = () => {
  const dispatch = useDispatch();

  const { amount, total } = useSelector((store) => store.cart);
  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your Bag</h2>
          <h4 className="empty-cart">is empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>Your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <hr />
      <footer>
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(clearCart())}>
          Clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
