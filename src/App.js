import { Navbar } from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals } from "./cart/cartSlice";
import Modal from "./components/Modal";

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);

  const dispatch = useDispatch();

  const handleCalculateTotals = useCallback(() => {
    dispatch(calculateTotals());
  }, [dispatch]);

  useEffect(() => {
    handleCalculateTotals();
  }, [cartItems, handleCalculateTotals]);

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
