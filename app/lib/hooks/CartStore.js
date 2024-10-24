import { create } from "zustand";
import { persist } from "zustand/middleware";
import { round } from "../utils";
const initialState = {
  items: [],
  itemsPrice: 0,
  taxPrice: 0,
  shippingPrice: 0,
  totalPrice: 0,
  paymentMethod: "Paypal",
  shippingAddress: {
    name: "",
    address: "",
    city: "",
    zipCode: "",
    state: "",
  },
};

export const CartStore = create(
  persist(() => initialState, {
    name: "cartStore",
  })
);

export function useCartService() {
  const {
    items,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    paymentMethod,
    shippingAddress,
    clear,
  } = CartStore();

  return {
    items,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    paymentMethod,
    shippingAddress,
    clear,

    increase: (item) => {
      const exist = items.find((x) => x.slug === item.slug);

      const updatedCartItems = exist
        ? items.map((x) =>
            x.slug === item.slug
              ? {
                  ...exist,
                  qty: exist.qty + 1,
                }
              : x
          )
        : [...items, { ...item, qty: 1 }];

      const { itemsPrice, taxPrice, shippingPrice, totalPrice } =
        calcPrice(updatedCartItems);
      CartStore.setState({
        items: updatedCartItems,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
      });
    },

    decrease: (item) => {
      const exist = items.find((x) => x.slug === item.slug);
      if (!exist) return;

      const updatedCartItems =
        exist.qty === 1
          ? items.filter((x) => x.slug !== item.slug)
          : items.map((x) =>
              x.slug === item.slug ? { ...exist, qty: exist - 1 } : x
            );

      const { itemsPrice, taxPrice, shippingPrice, totalPrice } =
        calcPrice(updatedCartItems);
      CartStore.setState({
        items: updatedCartItems,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
      });
    },

    saveShippingAddress: (shippingAddress) => {
      CartStore.setState({ shippingAddress });
    },

    savePaymentMethod: (paymentMethod) => {
      CartStore.setState({ paymentMethod });
    },

    clear: () => {
      CartStore.setState({ items: [] });
    },
    init: () => {
      CartStore.setState(initialState);
    },
  };
}

const calcPrice = (items) => {
  const itemsPrice = round((acc, item) => acc + item.price * item.qty, 0);
  const taxPrice = round(Number(itemsPrice * 0.15));
  const shippingPrice = round(itemsPrice > 100 ? 0 : 100);
  const totalPrice = round(itemsPrice + taxPrice + shippingPrice);
  return { itemsPrice, taxPrice, shippingPrice, totalPrice };
};
