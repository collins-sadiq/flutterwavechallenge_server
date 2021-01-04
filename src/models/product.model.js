const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, "Product name is require"],
  },
  quantity: {
    type: String,
    default: 0,
  },
  pricePerProduct: {
    type: String,
    default: [true, "Price is required"],
  },
  images: {
    type: Array,
  },
  rating: {
    type: Object,
  },
});

module.exports = mongoose.model("products", productSchema);
