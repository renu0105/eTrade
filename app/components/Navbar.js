"use client";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import Login from "../login/page";
import { useCartService } from "../lib/hooks/CartStore";

const Navbar = () => {
  const { items } = useCartService();
  return (
    <div className="flex justify-between text-xl bg-white font-semibold m-3 rounded p-3 text-black ">
      <Link className="text-blue-400 font-bold cursor-pointer" href="/">
        eTRADE
      </Link>
      <span>
        <Login />
      </span>
      <Link href="/cart" className="h-8 w-8 cursor-pointer">
        {items.map((item) => (
          <p
            className="bg-pink-800 text-white rounded-full text-center absolute right-5 top-3 px-1"
            key={item.slug}
          >
            {items.reduce((acc, item) => acc + item.qty, 0)}
          </p>
        ))}
        <IoCartOutline className="h-8 w-8" />
      </Link>
    </div>
  );
};
export default Navbar;
