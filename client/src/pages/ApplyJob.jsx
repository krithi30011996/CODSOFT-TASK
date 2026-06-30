import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import Loading from '../components/Loading'
import Navbar from '../components/Navbar'
import kconvert from 'k-convert';
import moment from 'moment';
import JobCard from '../components/JobCard'
import Footer from '../components/Footer'

const ApplyJob = () => {
  const { id } = useParams()
  const [JobData, setJobData] = useState(null)
  const { jobs } = useContext(AppContext)

  const fetchJob = async () => {
    const data = jobs.filter(job => job._id === id)
    if (data.length !== 0) {
      setJobData(data[0])
      console.log(data[0]);
    }
  }

  useEffect(() => {
    if (jobs.length > 0) {
      fetchJob()
    }
  }, [id, jobs])

  return JobData ? (
    <>
      <Navbar />

      
      <div className='min-h-screen flex flex-col py-10 max-w-6xl w-full px-4 sm:px-6 lg:px-8 mx-auto'>
        <div className='bg-white text-black w-full' >
          
         
          <div className='flex justify-center md:justify-between flex-wrap gap-8 px-4 sm:px-10 py-12 mb-10 bg-sky-50/50 border border-sky-100 rounded-xl'>
            <div className='flex flex-col md:flex-row items-center w-full md:w-auto'>
              
              <img className='h-20 w-20 object-contain bg-white rounded-lg p-4 md:mr-6 mb-4 md:mb-0 border border-gray-100' src={JobData.companyId.image} alt="" />
              
              <div className='text-center md:text-left text-neutral-700 w-full md:w-auto'>
                <h1 className='text-2xl sm:text-3xl font-semibold text-gray-800 '>
                  {JobData.title}
                </h1>
                
                <div className='flex flex-row flex-wrap justify-center md:justify-start gap-y-2 gap-x-4 lg:gap-6 items-center text-gray-500 mt-3 text-sm'>
                  <span className='flex items-center gap-1.5 whitespace-nowrap'>
                    <img className="h-4" src={assets.suitcase_icon} alt="" />
                    {JobData.companyId.name}
                  </span>
                  <span className='flex items-center gap-1.5 whitespace-nowrap'>
                    <img className="h-4" src={assets.location_icon} alt="" />
                    {JobData.location}
                  </span>
                  <span className='flex items-center gap-1.5 whitespace-nowrap'>
                    <img className="h-4" src={assets.person_icon} alt="" />
                    {JobData.level}
                  </span>
                  <span className='flex items-center gap-1.5 whitespace-nowrap'>
                    <img className="h-4" src={assets.money_icon} alt="" />
                    CTC: {kconvert.convertTo(JobData.salary)}
                  </span>
                </div>
              </div>
            </div>
            
            <div className='flex flex-col justify-center text-center md:text-end text-sm w-full md:w-auto mx-auto md:mx-0'>
              <button className='bg-blue-600 hover:bg-blue-700 transition-colors py-2.5 px-10 text-white rounded-md font-medium w-full md:w-auto'>Apply Now</button>
              <p className='mt-2 text-xs text-gray-400'>{moment(JobData.date).fromNow()}</p>
            </div>
          </div>

        
          <div className='flex flex-col lg:flex-row justify-between items-start gap-10 px-2 sm:px-0'>
           
            <div className='w-full lg:w-2/3'>
              <h2 className='font-bold text-xl text-gray-800 mb-4'>Job description</h2>
              <div className='rich-text text-gray-600 leading-relaxed ' dangerouslySetInnerHTML={{ __html: JobData.description }}></div>
              <button className='bg-blue-600 hover:bg-blue-700 transition-colors py-2.5 px-10 text-white rounded-md font-medium mt-10 w-full sm:w-auto'>Apply Now</button>
            </div>

           
            <div className='w-full lg:w-1/3 space-y-5'>
              <h2 className='font-bold text-lg text-gray-800 mb-4'>More jobs from {JobData.companyId.name}</h2>
              <div className="space-y-4">
                {jobs.filter(job => job._id !== JobData._id && job.companyId._id === JobData.companyId._id)
                  .slice(0, 4)
                  .map((job, index) => <JobCard key={index} job={job} />)}
              </div>
            </div>
          </div>
          <Footer/>

        </div>
      </div>
    </>
  ) : (
    <Loading />
  )
}

export default ApplyJob