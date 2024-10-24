"use client";
import { useRouter } from "next/navigation";
import CheckOutSteps from "../components/CheckOutSteps";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useCartService } from "../lib/hooks/CartStore";

const Shipping = () => {
  const router = useRouter();
  const { saveShippingAddress, ShippingAddress } = useCartService();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      fullName: "",
      address: "",
      city: "",
      zipCode: "",
      country: "",
    },
  });

  useEffect(() => {
    if (ShippingAddress) {
      setValue("fullName", ShippingAddress.fullName || "");
      setValue("address", ShippingAddress.address || "");
      setValue("city", ShippingAddress.city || "");
      setValue("zipCode", ShippingAddress.zipCode || "");
      setValue("country", ShippingAddress.country || "");
    }
  }, [setValue, ShippingAddress]);

  const FormInput = ({ name, id, required, pattern }) => {
    return (
      <div className="flex gap-3 flex-col">
        <label className="label" htmlFor={id}>
          {name}
        </label>
        <input
          type="text"
          id={id}
          {...register(
            id,
            { required: required && `${name} is required` },
            pattern
          )}
          className="w-full p-3"
        />
        {errors[id]?.message && <div>{errors[id].message}</div>}
      </div>
    );
  };
  const formSubmit = (form) => {
    saveShippingAddress(form);
    router.push("/payment");
  };

  return (
    <div>
      <CheckOutSteps current={1} />
      <div className="bg-base-300 mx-5 rounded-xl my-6 lg:mx-16">
        <h1 className=" text-2xl font-bold text-yellow-500 mx-3 p-3">
          Shipping Address
        </h1>
        <form
          type="isSubmitting"
          onSubmit={handleSubmit(formSubmit)}
          className=" px-6"
        >
          <FormInput name="FullName" id="fullName" required />
          <FormInput name="Address" id="address" required />
          <FormInput name="city" id="city" required />
          <FormInput name="Zip code" id="zipCode" required />
          <FormInput name="Country" id="country" required />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-purple-700 w-full p-3 rounded my-7"
          >
            {isSubmitting && <span className="loading loading-spinner"></span>}
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default Shipping;
