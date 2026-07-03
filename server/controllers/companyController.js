import Company from '../models/Company.js';
import bcrypt from 'bcrypt';
import {v2 as cloudinary} from 'cloudinary';
import generateToken from '../utils/generateToken.js';

// //register a new company
// export const registerCompany = async(req, res) =>{
//     const {name, email, password} = req.body;
//     const imageFile = req.file;

//     if(!name || !email || !password || !imageFile){
//         return res.json({success:false, message:"Missing Details"});
//     }

//     try{
//         const companyExists = await Company.findOne({email});

//         if(companyExists){
//             return res.json({success:false, message:"Company already exists"});

//         }

//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);
//         const imageUpload = await cloudinary.uploader.upload(imageFile.path);
//         const company = await Company.create({
//             name,
//             email,
//             password: hashedPassword,
//             image: imageUpload.secure_url
//         });
//         res.json({
//             success:true,
//             company:{
//                 _id: company._id,
//                 name: company.name,
//                 email: company.email,
//                 image: company.image
//             },
//             token: generateToken(company._id)
//         })

    
   

//     }
//     catch(err){
//         res.json({success:false, message:err.message});


//     }


// }

//new register
export const registerCompany = async (req, res) => {
  const { name, email, password } = req.body;
  const imageFile = req.file;

  if (!name || !email || !password || !imageFile) {
    return res.status(400).json({ success: false, message: "Missing Details" });
  }

  try {
    console.log("Checking existing company");
    const companyExists = await Company.findOne({ email });

    if (companyExists) {
      return res.status(409).json({ success: false, message: "Company already exists" });
    }

    console.log("Hashing password");
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    console.log("Uploading image to Cloudinary");
    const imageUpload = await cloudinary.uploader.upload(imageFile.path);

    console.log("Creating company");
    const company = await Company.create({
      name,
      email,
      password: hashedPassword,
      image: imageUpload.secure_url
    });

    console.log("Generating token");
    return res.status(201).json({
      success: true,
      company: {
        _id: company._id,
        name: company.name,
        email: company.email,
        image: company.image
      },
      token: generateToken(company._id)
    });

  } catch (err) {
    console.error("registerCompany error:", err);
    return res.status(500).json({ success: false, message: err.message });
  }
};



// company login
export const loginCompany = async(req, res) =>{

}

//get company data
export const getCompanyData = async(req, res) =>{

}

//post a new job
export const postJob = async(req, res) =>{

}

//get company job applicants
export const getCompanyJobApplicants = async(req, res) =>{

}

//get company posted jobs
export const getCompanyPostedJobs = async(req, res) =>{

}

//change job application status
export const ChangeJobApplicationsStatus = async(req, res) =>{

}

//change job visiblity
export const ChangeVisibility = async(req, res) =>{

}

