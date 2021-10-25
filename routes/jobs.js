const express = require("express");
const jobController = require("../controllers/job");
const saveJob = require("../middleware/saveJob");

router = express.Router();

router.post("/postJob", saveJob, jobController.postAddJob);

router.get("/getJob", jobController.getJob);

module.exports = router;
