import express from 'express';
import * as jobCtlr from '../controller/jobController.js';

const router= express.Router();

router.post("/api/jobs/create", jobCtlr.createJob);
router.get("/api/Jobs/get", jobCtlr.getJob);
router.get("/api/Job/getOne/:_idJob", jobCtlr.getOneJob);
router.put("api/update/:idJob", jobCtlr.updateJob);
router.delete("api/delete/:idJob",jobCtlr.deleteJob)

export {router};