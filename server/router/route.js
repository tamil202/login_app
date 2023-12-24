const router = require("express").Router();
// import all controller from controller/appcontroller.js
const controller = require("../controller/appController");

// post methods
router.post("/register", (req, res) => {
  controller.register(req, res);
});

// router.post("/registerMail", () => {});
router.post("/authenticate", (req, res) => {
  res.end();
});
router.post("/login", (req, res) => {
  controller.login(req, res);
});

// get methods
router.get("/user/:username", (req, res) => {
  controller.getuser(req, res);
});
router.get("/genrateOTP", (req, res) => {
  controller.genrateOTP(req, res);
});
router.get("/verifiyOPT", (req, res) => {
  controller.verifiyOTP(req, res);
});
router.get("/createRestSeassion", (req, res) => {
  controller.createRestSession(req, res);
});

// put methods
router.put("/updateuser", (req, res) => {
  controller.updateuser(req, res);
});
router.put("/restPassword", (req, res) => {
  controller.restPassword(req, res);
});

module.exports = router;
