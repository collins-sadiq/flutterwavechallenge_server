const ProductServ = require("./../services/product.service");
const response = require("./../utils/response");

class ProductContoller {
  async create(req, res) {
    const result = await ProductServ.create(req.body);
    res.status(200).send(response("Product created", result));
  }

  async getAll(req, res) {
    const result = await ProductServ.getAll();
    res.status(200).send(response("All product", result));
  }

  async getOne(req, res) {
    const result = await ProductServ.getOne(req.params.productId);
    res.status(200).send(response("Product data", result));
  }

  async update(req, res) {
    const result = await ProductServ.update(req.params.productId, req.body);
    res.status(200).send(response("Product updated", result));
  }

  async delete(req, res) {
    const result = await ProductServ.delete(req.params.productId);
    res.status(200).send(response("Product deleted", result));
  }
}

module.exports = new ProductContoller();
