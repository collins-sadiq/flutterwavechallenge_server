const cloudinary = require("cloudinary").v2;
const { cloudinary_secrects } = require("../config");

const { CLOUD_NAME, API_KEY, API_SEC } = cloudinary_secrects;

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SEC,
});

const uploader = async (file, options) => {
  let result = await cloudinary.uploader.upload(file, { options });
  return result;
};

module.exports = uploader;
