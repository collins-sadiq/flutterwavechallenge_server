const RiderServ = require("../services/rider.service");
const response = require("../utils/response");

class RiderController {
  async create(req, res) {
    const result = await RiderServ.create(req.body);
    res.status(200).send(response("Rider created", result));
  }

  async getAll(req, res) {
    const result = await RiderServ.getAll();
    res.status(200).send(response("All riders", result));
  }

  async getOne(req, res) {
    const result = await RiderServ.getOne(req.params.riderId);
    res.status(200).send(response("Rider data", result));
  }

  async update(req, res) {
    const result = await RiderServ.update(req.params.riderId, req.body);
    res.status(200).send(response("Rider updated", result));
  }

  async delete(req, res) {
    const result = await RiderServ.delete(req.params.riderId);
    res.status(200).send(response("Rider deleted", result));
  }
}

module.exports = new RiderController();
