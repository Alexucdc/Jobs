import Job from "../models/jobModels.js";


const createJob = async (req, res) => {
    try{
        var jobData = req.body;
        var newJob = await Job.create (jobData);
        res.status(200).json(newJob);
} catch(e) {
    res.status(400).json({
        "message": e.message
    });
 
}}
const getJob = async (req, res) => {
    var listJobs = await Job.find ();
    res.json (listJobs);
}
const getOneJob = async (req, res) => {
    var _idJob = req.params._idJob;
   
    var job = await Job.findById(_idJob);
    res.status(200).json(job);

}


const deleteJob =  async(req, res) => {
    var id = req.params.idJob;
    await Job.findByIdAndDelete(id);
    res.status(200).json("");
  
}
const getByUserId =  async (req,res) => {
    var user = req.params.idUser;
    var listJobs = await Job.find({idUser: user});
    res.status(200).json(listJobs);

}


export { createJob, getJob, getOneJob, deleteJob, getByUserId}