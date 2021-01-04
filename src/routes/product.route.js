const router = require("express").Router();
const ProductCtrl = require("../controllers/product.controller");
const upload = require("./../middlewares/multer.middleware");

router.post("/", upload("image"), AuthCtrl.signup);
router.post("/sign-in", AuthCtrl.signin);
router.post("/request-email-verification", AuthCtrl.RequestEmailVerification);
router.post("/verify-email", AuthCtrl.VerifyEmail);
router.post("/request-password-reset", AuthCtrl.RequestPasswordReset);
router.post("/reset-password", AuthCtrl.resetPassword);

module.exports = router;
