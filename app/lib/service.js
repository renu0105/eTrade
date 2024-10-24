import ProductModel from "../models/ProductModel";
import ConnectToDb from "./ConnectToDb";
import { cache } from "react";

const getLatest = cache(async () => {
  await ConnectToDb();
  const product = await ProductModel.find({}).sort({ _id: -1 }).limit(4).lean();
  return product;
});

const getFeatured = cache(async () => {
  await ConnectToDb();
  const product = await ProductModel.find({ isFeatured: true })
    .sort({ _id: -1 })
    .limit(4)
    .lean();
  return product;
});

const getBySlug = cache(async (slug) => {
  await ConnectToDb();
  const product = await ProductModel.findOne({ slug }).lean();
  return product;
});

const productService = {
  getLatest,
  getFeatured,
  getBySlug,
};

export default productService;
