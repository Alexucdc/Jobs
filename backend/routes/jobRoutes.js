import express from 'express';
import * as jobCtlr from '../controller/jobController.js';



const router= express.Router();

router.post("/api/jobs/create", jobCtlr.createJob);
router.get("/api/Jobs/get", jobCtlr.getJob);
router.get("/api/Job/getOne/:_idJob",jobCtlr.getOneJob);
router.delete("/api/jobs/delete/:idJob",jobCtlr.deleteJob);
router.get("/api/Jobs/getByUser/:idUser",jobCtlr.getByUserId);

export {router};