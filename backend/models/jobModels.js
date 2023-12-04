import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema({
    title: {type: String},
    date: {type:String},
    description: { type: String},
    hourly_rate: {type:Number},
    name:{ type:String},
    location: {type:String},
    employees_count: {type:Number},
    experience: {type:String},
    project_type: {type:String},
    skills: {type:String},
    idUser: {type: mongoose.Types.ObjectId, ref: "jobs"}
});

const Job = mongoose.model("jobs",JobSchema );
export default Job;