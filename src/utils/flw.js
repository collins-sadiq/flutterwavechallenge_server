const { flw } = require("../config");
const fetch = require("node-fetch");
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
    let body = {
      account_bank: bank,
      account_number,
      business_name,
      country,
      business_email,
      business_contact,
      split_value,
      split_type,
    };
    const res = await fetch(`${V3_URL}/subaccounts`, {
      method: "post",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${SEC_KEY}`,
      },
    });
    return res.json();
  } catch (err) {
    return err;
  }
};
module.exports = {
  createSubAccount,
};
