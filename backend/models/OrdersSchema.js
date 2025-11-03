import mongoose from "mongoose";

const OrdersSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    qty: { type: Number, required: true },
    price: { type: Number, required: true },
    mode: { type: String, required: true },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", OrdersSchema);

export default Order;
