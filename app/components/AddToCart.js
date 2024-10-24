"use client";
import React, { useEffect, useState } from "react";
import { IoCart } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { useCartService } from "../lib/hooks/CartStore";

function AddToCart({ item }) {
  const router = useRouter();
  const { items, increase, decrease } = useCartService();
  const [existItems, setExistItems] = useState(null);

  useEffect(() => {
    if (!items || items.length === 0) return; // Return early if items are not ready
    if (item && items) {
      const foundItem = items.find((x) => x.slug === item.slug);
      setExistItems(foundItem);
    }
  }, [items, item]);

  const addCartHandler = () => {
    increase(item);
  };
  console.log("existItems", existItems);

  return existItems ? (
    <div className="flex flex-row justify-center items-center gap-16">
      <button onClick={() => decrease(existItems)}> - </button>
      <span>{existItems.qty}</span>
      <button onClick={() => increase(existItems)}> + </button>
    </div>
  ) : (
    <button
      className="bg-purple-600 rounded p-3 w-full flex flex-row gap-5 justify-center items-center"
      onClick={addCartHandler}
    >
      <IoCart />
      Add To Cart
    </button>
  );
}

export default AddToCart;
