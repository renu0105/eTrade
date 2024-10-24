"use client";
import Link from "next/link";
import { IoBagHandle } from "react-icons/io5";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useCartService } from "../lib/hooks/CartStore";

export const Cart = () => {
  const router = useRouter();
  const { items, increase, decrease } = useCartService();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="h-screen text-pink-900 flex flex-col gap-6 items-center">
      <h1 className="text-4xl font-bold">Shopping Cart</h1>
      {items.length === 0 ? (
        <div className="flex flex-col gap-4 items-center w-full h-[60%] text-xl text-white justify-center">
          <p className="font-bold text-2xl">Hey, it feel so light !</p>
          <p>Your Cart is empty</p>
          <p>There is nothing in your cart. lets add some items</p>
          <IoBagHandle className="text-pink-900 text-9xl" />
          <Link
            href="/"
            className="bg-pink-900 text-white p-3 w-72 text-center rounded-xl mt-7"
          >
            Add some items to your cart
          </Link>
        </div>
      ) : (
        <div className="w-full card-body text-white">
          <table className="table w-full bg-base-300">
            <thead className="bg-pink-900">
              <tr className="text-left">
                <th className="p-4">Items</th>
                <th className="p-4">Quantity</th>
                <th className="p-4">Price</th>
              </tr>
            </thead>
            <tbody className=" w-full">
              {items.map((item) => (
                <tr key={item.slug} className="w-full">
                  <td className="p-4 flex items-center gap-4">
                    <Link href={`/product/${item.slug}`}>
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={100}
                        height={100}
                        className="rounded-lg h-24 w-36"
                      />
                    </Link>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => increase(item)}
                        className="border p-2 bg-base-100"
                      >
                        +
                      </button>
                      <span>{item.qty}</span>
                      <button
                        onClick={() => decrease(item)}
                        className="border p-2 bg-base-100"
                      >
                        -
                      </button>
                    </div>
                  </td>
                  <td className="p-4">${item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="w-full flex flex-col justify-between items-center gap-4 text-white text-lg">
            <p className="font-bold ">
              Subtotal ({items.reduce((acc, item) => acc + item.qty, 0)}) :$
              {items.reduce((acc, item) => acc + item.price, 0)}
            </p>
            <button
              onClick={() => router.push("/shipping")}
              className="bg-pink-700 text-white p-5 w-fit rounded mx-auto"
            >
              Proceed to checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
