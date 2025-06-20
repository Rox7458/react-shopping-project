import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  return (
    <div>
      <nav class="bg-gray-800 flex justify-between pl-2 pr-2">
        <h4 class="text-5xl p-2">Shopping</h4>
        <div class="text-5xl p-2">
          <FaShoppingCart />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
