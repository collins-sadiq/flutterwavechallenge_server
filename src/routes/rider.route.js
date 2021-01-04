const router = require("express").Router();
const RiderCtrl = require("../controllers/rider.controller");
const auth = require("./../middlewares/auth.middleware");
const upload = require("./../middlewares/multer.middleware");
const { role } = require("./../config");

router.post("/", upload("image"), RiderCtrl.create);
router.get("/", RiderCtrl.getAll);
router.get("/:riderId", auth(role.ADMIN), RiderCtrl.getOne);
router.put("/:riderId", auth(role.ADMIN), upload("image"), RiderCtrl.update);
router.delete("/:riderId", auth(role.ADMIN), RiderCtrl.delete);

module.exports = router;
