import AddToCart from "@/app/components/AddToCart";
import { FaStar } from "react-icons/fa";

import Image from "next/image";
import React from "react";
import productService from "@/app/lib/service";
import { convertTopObj } from "@/app/lib/utils";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const product = await productService.getBySlug(params.slug);
  if (!product) return { title: "Product not found" };

  return {
    title: `${product.name}`,
    description: `${product.description}`,
  };
}

async function ProductDetails({ params }) {
  const product = await productService.getBySlug(params.slug);
  if (!product) return "no product";
  return (
    <div className=" flex flex-col gap-3 my-4 flex-wrap text-xl">
      <Link
        href="/"
        className="mx-10 text-gray-300 font-bold hover:text-gray-500"
      >
        BACK TO PRODUCTS
      </Link>
      <div className="flex flex-col gap-4 lg:flex-row mx-6">
        <div className="flex flex-row  w-fit gap-4 m-4 items-center">
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
            className="h-96 w-96 rounded-lg"
          />

          <div className="border border-gray-300 p-9 m-3 ">
            <h1>{product.name}</h1>
            <p>${product.price} onwards</p>
            <div>
              <div className=" bg-green-600 w-fit rounded-full h-fit flex flex-row gap-1 p-1 text-lg">
                {product.rating}
                <FaStar className=" mt-1" />
              </div>
              {product.rating} Ratings , {product.numReviews} Reviews
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[90%] lg:w-[50%] gap-4 m-7 justify-center">
          <h1 className="font-bold text-2xl">Key Features</h1>
          {product.description}
        </div>
      </div>

      <div className=" bg-base-300 flex flex-col w-[70%] rounded p-9 my-7 gap-3 h-fit mx-auto lg:w-[50%]">
        <div className="flex justify-between w-[100%]">
          <p>Price</p>
          <p>${product.price}</p>
        </div>

        <div className="flex justify-between">
          <p>Stock</p>
          {product && product.stock === 0 ? (
            <p>Out of Stock</p>
          ) : (
            <p>In Stock</p>
          )}
        </div>

        <AddToCart item={{ ...convertTopObj(product), qty: 0 }} />
      </div>
    </div>
  );
}

export default ProductDetails;
