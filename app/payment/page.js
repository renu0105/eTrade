"use client";
import CheckOutSteps from "../components/CheckOutSteps";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCartService } from "../lib/hooks/CartStore";

const PaymentMethod = () => {
  const router = useRouter();
  const { savePaymentMethod, PaymentMethod, shippingAddress } =
    useCartService();
  const [selectPayment, setSelectPayment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    savePaymentMethod(selectPayment);
    router.push("/place-order");
  };

  useEffect(() => {
    if (!shippingAddress.address) {
      router.push("/shipping");
    }
    setSelectPayment(PaymentMethod || "Paypal");
  }, [shippingAddress.address, PaymentMethod, router]);

  return (
    <div className="h-screen">
      <CheckOutSteps current={2} />
      <button
        type="submit"
        onClick={() => router.back()}
        className="mx-16 lg:mx-40 text-xl font-bold text-gray-600 mt-6"
      >
        BACK
      </button>
      <form
        className="flex flex-col bg-base-300 rounded-xl mx-16 text-xl lg:mx-40 my-8"
        onSubmit={handleSubmit}
      >
        <h1 className="mx-auto my-9 font-bold text-3xl text-yellow-500">
          Payment Method
        </h1>

        {["Paypal", "UPI", "Cash On Delivery"].map((payment) => (
          <div key={payment} className="m-4">
            <label className="label" htmlFor="payment">
              <span>{payment}</span>
              <input
                type="radio"
                name="paymentMethod"
                value={payment}
                checked={selectPayment === payment}
                onChange={() => setSelectPayment(payment)}
              ></input>
            </label>
          </div>
        ))}

        <button
          className="bg-yellow-500 p-3 rounded-xl w-full  my-6"
          type="submit"
        >
          Next
        </button>
      </form>
    </div>
  );
};
export default PaymentMethod;
