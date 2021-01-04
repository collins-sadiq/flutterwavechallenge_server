const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { BCRYPT_SALT } = require("./../config");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: [true, "Email is required"],
    },
    phoneNumber: {
      type: String,
      trim: true,
      unique: true,
      required: [true, "Phone number is required"],
    },
    password: {
      type: String,
    },
    logo: {
      type: String,
    },
    role: {
      type: String,
      trim: true,
      enum: ["merchant", "user", "admin"],
      default: "user",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isApproved: {
      type: Boolean,
      default: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    flwSubAccount: {
      type: Object,
    },
    rider: {
      type: Object,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const hash = await bcrypt.hash(this.password, BCRYPT_SALT);
  this.password = hash;

  next();
});

module.exports = mongoose.model("users", userSchema);
