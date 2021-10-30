const Jobs = require("../models/jobs");
const { validationResult } = require("express-validator");
const { Worker, isMainThread, parentPort } = require('worker_threads');
const workerScriptFilePath = require.resolve('./worker')

// setting an sleep function to test the running case
function sleep(ms) {
    return new Promise(
        resolve => setTimeout(resolve, ms)
    );
}

// Controller of the Post Method
exports.postAddJob = async (req, res, next) => {
    const errors = validationResult(req);
    const jobData = req.job;

    if (!errors.isEmpty()) {
      const error = new Error(errors.array()[0].msg);
      res.status(422).json(error.message);
      throw error;
    }

    //setting Workers Threads to get the response and edit the DB at same time
    const worker = new Worker(workerScriptFilePath);

    worker.on('message', async result => {
      console.log('date updateIsEven: ', new Date().getTime())
      //apliying the sleepfunction to 10 seconds
      await sleep(10000);
      jobData.updateIsEven()
    });

    worker.on('message', result => {
      console.log('date response: ', new Date().getTime())
      res.status(200).json(jobData._id);
    });

    worker.on('error', (error) => {
      console.log('error: ', error)
    });

    worker.on('exit', (code) => {
      if (code !== 0){
        throw new Error(`Worker stopped with exit code ${code}`);
      }
    });

};

// Controller of the Get Method
exports.getJob = async (req, res, next) => {
    try {
      let response
      let status = "Finished"
      let jobId = req.query.jobId
      const job = await Jobs.findOne({ _id: jobId });

      if (!jobId) {
        const error = new Error("Please enter and jobId");
        throw error;
      }

      if (!job) {
        const error = new Error("Could not found the job whit the id: " + req.jobId);
        throw error;
      }

      job.jobData.forEach(function(object) {
        if(object.isEven === undefined){
          status = "Running"
        } else if(object.age === null){
          status = "Failed"
        }
      })

      response = {
        "_id": job._id,
        "status": status,
        "result": job.jobData
      }
      res.status(200).json(response);

    } catch (err) {
      res.status(500).json(err.message);
    }
};