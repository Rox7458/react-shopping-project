import React, { useState } from "react";
import data from "../helper/data";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState(data);

  return (
    <div className="flex flex-wrap">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
