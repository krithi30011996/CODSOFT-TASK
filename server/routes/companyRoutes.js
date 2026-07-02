import express from "express";
import { registerCompany, getCompanyData, loginCompany, postJob, getCompanyJobApplicants,getCompanyPostedJobs, ChangeJobApplicationsStatus, ChangeVisibility} from "../controllers/companyController.js";
import upload from "../config/multer.js";


const router = express.Router();

//register a company
router.post('/register', upload.single('image'), registerCompany);

//company login
router.post('/login', loginCompany);

//get company data
router.get('/company', getCompanyData);

//post a job
router.post('/post-job', postJob);

//get applicants data of company
router.get('/applicants', getCompanyJobApplicants);  

//get company job list
router.get('/list-jobs', getCompanyPostedJobs);

//change apllication status
router.put('/change-status', ChangeJobApplicationsStatus);

//change applications visiblity
router.put('/change-visibility', ChangeVisibility);

export default router;