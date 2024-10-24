import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true },
    rating: { type: Number, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    numReviews: { type: Number, required: true },
    countInStock: { type: Number, required: true, default: 0 },
    banner: { type: String, required: false },
    brand: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

ProductSchema.index({ slug: 1 });

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
