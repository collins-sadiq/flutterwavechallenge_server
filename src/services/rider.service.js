const Rider = require("../models/rider.model");
const CustomError = require("./../utils/custom-error");
const { createSubAccount } = require("../utils/flw");

class riderService {
  async create(data) {
    const result = await createSubAccount(data);
    let rider = await Rider.findOne({ phoneNumber: data.phoneNumber });
    if (rider)
      throw new CustomError("Rider is registered with this phone number");
    if (result.status === "error") {
      throw new CustomError(
        "An error occur while trying to create flutterwave sub account for the rider"
      );
    }
    let Data = {
      ...data,
      flwSubAccount: {
        ...result.data,
      },
    };
    rider = new Rider(Data);
    await rider.save();
  }

  async getAll() {
    return await Rider.find();
  }

  async getOne(riderId) {
    const rider = await Rider.findOne(
      { _id: riderId },
      { password: 0, __v: 0 }
    );
    if (!rider) throw new CustomError("Rider does not exists");

    return rider;
  }

  async update(riderId, data) {
    const rider = await Rider.findByIdAndUpdate(
      { _id: riderId },
      { $set: data },
      { new: true }
    );

    if (!rider) throw new CustomError("Rider dosen't exist", 404);

    return rider;
  }

  async delete(riderId) {
    const rider = await Rider.findOne({ _id: riderId });
    rider.remove();
    return rider;
  }
}

module.exports = new riderService();
