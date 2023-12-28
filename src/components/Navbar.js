import { CartIcon } from "../icons";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const { amount } = useSelector((state) => state.cart);
  return (
    <nav>
      <div className="nav-center">
        <h3>redux tolkit</h3>
      </div>
    </nav>
  );
};
