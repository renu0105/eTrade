"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Product = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("/api/product/seed");
        setProducts(res.data.products);
      } catch (error) {
        console.log("error is", error);
      }
    };

    fetchProducts();
  }, []);

  if (!products) return <p>No product data available</p>;
  return (
    <div className="h-fit grid grid-cols-2 lg:grid-cols-4 justify-center gap-4 m-7 font-bold text-lg">
      {products.map((product) => (
        <div key={product._id}>
          <Link href={`/product/${product.slug}`}>
            <Image
              src={product.image}
              alt={product.name}
              height={200}
              width={200}
              className="h-52 w-72 rounded-lg"
            />
          </Link>
          <Link href={`/product/${product.slug}`}>
            <p>{product.name}</p>
          </Link>
          <p>${product.price}</p>
          <p>{product.brand}</p>
        </div>
      ))}
    </div>
  );
};
export default Product;
