import ConnectToDb from "@/app/lib/ConnectToDb";
import ProductModel from "@/app/models/ProductModel";
import { NextResponse } from "next/server";

// GET handler to fetch all products
export const GET = async (req) => {
  try {
    await ConnectToDb();
    const products = await ProductModel.find();
    return NextResponse.json({ message: "success", products });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { message: "error", error: error.message },
      { status: 500 }
    );
  }
};
