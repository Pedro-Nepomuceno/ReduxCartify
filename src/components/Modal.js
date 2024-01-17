import React from "react";
import modalSlice from "../features/modal/modalSlice";
import { useDispatch } from "react-redux";
import { clearCart } from "../cart/cartSlice";

function Modal() {
  const dispatch = useDispatch();

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Remove all items from your shopping cart?</h4>
        <div className="btn-container">
          <button
            type="button"
            className="btn confirm-btn"
            onClick={() => {
              dispatch(clearCart);
            }}
          >
            Confirm
          </button>
          <button type="button" className="btn clear-btn">
            Cancel
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Modal;
