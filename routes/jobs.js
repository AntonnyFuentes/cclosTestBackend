const express = require("express");
const jobController = require("../controllers/job");
const saveJob = require("../middleware/saveJob");

//setting the Paths with Express
router = express.Router();

router.post("/createJob", saveJob, jobController.postAddJob);

router.get("/getJob", jobController.getJob);

module.exports = router;
