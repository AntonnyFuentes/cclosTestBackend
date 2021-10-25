const Jobs = require("../models/jobs");
const { validationResult } = require("express-validator");

module.exports = async (req, res, next) => {
    const errors = validationResult(req);
    const jobArray = req.body;

    if (!errors.isEmpty()) {
        console.log('error validation middleware')
        const error = new Error(errors.array()[0].msg);
        res.status(422).json(error.message);
        throw error;
    }

    try {
        const newJob = new Jobs({
            jobData: jobArray,
        });
        req.job = newJob;
        await newJob.save();
        return next();
    } catch (err){
        res.status(422).json(err.message);
    }
};