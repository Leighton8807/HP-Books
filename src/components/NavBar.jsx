import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/ShoppingCartContext";

export const Navbar = () => {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const navStyles = {
    textDecoration: "none",
  };

  return (
    <nav>
      <Link to={"/"} style={navStyles}>
        <h2>HARRY BOOKS</h2>
        <img src="/public/images/hp_logo.png" alt="HarryPotter-Logo" />
      </Link>
      <ul className="nav-list">
        <Link to={"/cart"} style={navStyles}>
          <li>
            Cart items: <span className="cart-count">{quantity}</span>
          </li>
        </Link>
      </ul>
    </nav>
  );
};
