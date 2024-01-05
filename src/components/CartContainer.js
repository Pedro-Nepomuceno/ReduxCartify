import React from "react";
import { CartItem } from "./CartItem";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

const CartContainer = () => {
  const { CartItems, total, amount } = useSelector((store) => store.amount);
  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your Bag</h2>
          <h4 className="empty cart">is empty </h4>
        </header>
      </section>
    );
  }
  return <div>CartContainer</div>;
};

export default CartContainer;
