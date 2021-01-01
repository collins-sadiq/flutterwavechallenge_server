const superagent = require("superagent");
const { flw } = require("../config");

const { V3_URL, SEC_KEY } = flw;

const createSubAccount = async ({
  bank,
  account_number,
  business_name,
  country,
  business_email,
  business_contact,
  split_type,
  split_value,
}) => {
  try {
    const res = await superagent
      .post(V3_URL)
      .send({
        account_bank: bank,
        account_number,
        business_name,
        country,
        business_email,
        business_contact,
        split_value,
        split_type,
      })
      .set(Authorization, `Bearer ${SEC_KEY}`);
    return res;
  } catch (err) {
    return err;
  }
};
module.exports = {
  createSubAccount,
};
