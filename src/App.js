import { Navbar } from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals, getCartItems } from "./cart/cartSlice";
import Modal from "./components/Modal";
import { CartItem } from "./components/CartItem";

function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);

  const dispatch = useDispatch();

  const handleCalculateTotals = useCallback(() => {
    dispatch(calculateTotals(""));
  }, [dispatch]);

  useEffect(() => {
    handleCalculateTotals();
  }, [cartItems, handleCalculateTotals]);

  useEffect(() => {
    dispatch(getCartItems()).then((item) => {
      console.log(item);
    });
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading.. </h1>
      </div>
    );
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
