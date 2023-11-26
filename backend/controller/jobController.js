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
    var JobsList = await Job.find ();
    res.json (JobsList);
}
const getOneJob = async (req, res) => {
    var _idJob = req.params._idJob;
   
    var job = await Job.findById(_idJob);
    res.status(200).json(job);

}
const updateAuthor = async (req, res) => {
    try{
        var id = req.params.idAuthor;
        var data = req.body;
        await Author.findByIdAndUpdate(id, data, {runValidators: true});
        res.status(200).json();
    }catch(e){
        res.status(400).json({
            "message": e.message
        })
    }
}
const updateJob = async (req, res) => {
    try{
        var id = req.params.idJob;
        var data = req.body;
        await Job.findByIdAndUpdate(id, data, {runValidators: true});
        res.status(200).json();
    }catch(e){
        res.status(400).json({
            "message": e.message
        })
    }
}
const deleteJob = async (req, res) => {
    var id = req.params.idJob;
    await Job.findByIdAndDelete(id);
    res.status(200).json();
}


export { createJob, getJob, getOneJob, updateJob, deleteJob}