import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema({
    title: {type: String},
    date: {type:String},
    description: { type: String},
    tags: [{type:String}],
    hourly_rate: {type:Number},
    client: {
        name:{ type:String},
        location: {type:String},
        employees_count: {type:Number}
    },
    experience: {type:String},
    project_type: {type:String},
    skills: [{type:String}]
});

const Job = mongoose.model(Jobs,JobSchema );
export default Job;