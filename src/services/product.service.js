const Product = require("./../models/product.model");
const CustomError = require("./../utils/custom-error");

class ProductService {
  async create(data) {
    return await new Product(data).save();
  }

  async getAll() {
    return await Product.find({}, { password: 0, __v: 0 });
  }

  async getOne(productId) {
    const product = await Product.findOne(
      { _id: productId },
      { password: 0, __v: 0 }
    );
    if (!product) throw new CustomError("Product does not exists");

    return product;
  }

  async update(productId, data) {
    const Product = await Product.findByIdAndUpdate(
      { _id: productId },
      { $set: data },
      { new: true }
    );

    if (!Product) throw new CustomError("Product dosen't exist", 404);

    return Product;
  }

  async delete(productId) {
    const Product = await Product.findOne({ _id: productId });
    Product.remove();
    return Product;
  }
}

module.exports = new ProductService();
