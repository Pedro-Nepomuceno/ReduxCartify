import React from "react";
import { ChevronDown, ChevronUp } from "../icons";

export const CartItem = ({ id, image, price, title, amount }) => {
  return (
    <article className="cart-item">
      <img src={image} alt="title" />
    </article>
  );
};
