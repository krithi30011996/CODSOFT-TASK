import express from "express";
import { registerCompany, getCompanyData, loginCompany, postJob, getCompanyJobApplicants,getCompanyPostedJobs, ChangeJobApplicationsStatus, ChangeVisibility} from "../controllers/companyController.js";
import upload from "../config/multer.js";
import { protectCompany } from "../middlewares/authMiddleware.js";


const router = express.Router();

//register a company
router.post('/register', upload.single('image'), registerCompany);

//company login
router.post('/login', loginCompany);

//get company data
router.get('/company', protectCompany, getCompanyData);

//post a job
router.post('/post-job', protectCompany, postJob);

//get applicants data of company
router.get('/applicants', protectCompany, getCompanyJobApplicants);  

//get company job list
router.get('/list-jobs', protectCompany, getCompanyPostedJobs);

//change apllication status
router.post('/change-status', protectCompany, ChangeJobApplicationsStatus);

//change applications visiblity
router.post('/change-visiblity', protectCompany, ChangeVisibility);

export default router;