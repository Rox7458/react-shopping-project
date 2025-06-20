import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav class="bg-gray-800 flex justify-between pl-2 pr-2">
        <Link to="/home" class="text-5xl p-2">
          Shopping
        </Link>

        <Link to="/basket" class="text-5xl p-2">
          <FaShoppingCart />
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
