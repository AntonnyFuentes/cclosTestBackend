const mongoose = require('mongoose');
const Schema = mongoose.Schema

//Schema is the way how configurate the Data Base with mongoose and MongoDB
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

//We use this method to update de DB and add the Even Number
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