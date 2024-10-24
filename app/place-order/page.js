"use client";
import { useRouter } from "next/navigation";
import { useCartService } from "../lib/hooks/CartStore";
import { useEffect } from "react";

const PlaceOrder = () => {
  const router = useRouter();
  const {
    items,
    paymentMethod,
    shippingAddress,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = useCartService();

  console.log(
    items,
    paymentMethod,
    shippingAddress,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice
  );

  useEffect(() => {
    if (!paymentMethod) {
      router.push("/payment");
    }
  }, [paymentMethod, router]);

  return (
    <div className="flex h-screen flex-col">
      <h1 className="text-xl font-bold text-red-800 text-center">
        Place Order
      </h1>

      <div className="bg-base-300 mx-9 rounded-xl p-7 ">
        <h1 className="font-bold text-xl">Shipping Address</h1>
        <p>Full Name : {shippingAddress.fullName}</p>
        <p> Address : {shippingAddress.address}</p>
        <p>City : {shippingAddress.city}</p>
        <p>Zip Code : {shippingAddress.zipCode}</p>
        <p>Country : {shippingAddress.country}</p>
      </div>

      {items.map((item) => {
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>;
      })}
    </div>
  );
};
export default PlaceOrder;
