"use client";
import ProductCard from "./ProductCard";
import axios from "axios";

async function getProducts() {
  const res = await axios.get("http://localhost:3000/api/products");

  return res.data.products;
}

const ThreeProducts = async () => {
  const products = await getProducts();

  return (
    <div className="grid grid-cols-3 ">
      {products.map((product) => (
        <ProductCard product={product} key={product.slug}></ProductCard>
      ))}
      <h1>hello</h1>
    </div>
  );
};

export default ThreeProducts;
