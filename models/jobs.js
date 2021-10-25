const mongoose = require('mongoose');
const Schema = mongoose.Schema

const jobSchema = new Schema({
    jobData: [
        {
          name: {
            type: String,
            required: true
          },
          age: {
            type: Number
          },
          isEven: {
            type: Boolean,
          },
        },
    ]
})

jobSchema.methods.updateIsEven = function () {
    let i = 0
    const updateJobData = [...this.jobData];
    while(i < updateJobData.length){
        let age = updateJobData[i].age
        if(age === null || age === undefined || age === NaN){
            updateJobData[i].age = null
            updateJobData[i].isEven = null
        } else if(age % 2 === 0){
            updateJobData[i].isEven = true
        } else {
            updateJobData[i].isEven = false
        }
        i++
    }
    this.jobData = updateJobData

    return this.save()
};

module.exports = mongoose.model('Jobs', jobSchema);