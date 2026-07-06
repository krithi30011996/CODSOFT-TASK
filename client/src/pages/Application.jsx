import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { assets } from '../assets/assets'
import moment from 'moment'
import Footer from '../components/Footer'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext.jsx'
import { useAuth, useUser } from '@clerk/react'
import axios from 'axios'
import { toast } from 'react-toastify'

const Application = () => {

    const {user} = useUser()
    const {getToken} = useAuth()
      
    const [isEdit, setIsEdit] = useState(true) 
    const [resume, setResume] = useState(null)
    const {backendUrl, userData, userApplications, fetchUserData} = useContext(AppContext)

    const updateResume = async() => {
        if (!resume) {
            return toast.error("Please select a resume file before saving.")
        }

        try {
            const formData = new FormData()
            formData.append('resume', resume)

            const token = await getToken()
            const {data} = await axios.post(backendUrl + '/api/users/update-resume',
                formData,
                {headers:{Authorization: `Bearer ${token}`}}
            )
            if(data.success){
                toast.success(data.message)
                await fetchUserData()
                setIsEdit(false)
            }
            else{
                toast.error(data.message)
            }
            
        } catch (error) {
            toast.error(error.message)
        }
        setResume(null)
    }

    return (
        /* FIX: Enforce a full-screen dynamic vertical flex grid */
        <div className='min-h-screen flex flex-col bg-white'>
            <Navbar />
            
            {/* FIX: added 'grow' so this main content block expands vertically to lock the footer below */}
            <div className='container grow px-4 2xl:px-20 mx-auto my-10'>
                <h2 className='text-xl font-semibold'>Your Resume</h2>
                <div className='flex gap-2 mb-6 mt-3'>
                    {
                        isEdit || (userData && userData.resume === "")
                         ? 
                            <div className='flex items-center gap-2'>
                                {/* Select Resume Button */}
                                <label className='flex items-center cursor-pointer' htmlFor="resumeUpload">
                                    <p className='bg-blue-100 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors font-medium text-sm'>
                                        {resume ? resume.name : "Select Resume"}
                                    </p>
                                    <input id='resumeUpload' onChange={e => setResume(e.target.files[0])} accept='application/pdf' type="file" hidden />
                                </label>
                                
                                {/* Cloud/Folder Save Icon Button */}
                                <button className='bg-blue-600 text-white rounded-lg p-2 hover:bg-blue-700 transition-colors flex items-center justify-center h-9.5 w-9.5 shadow-sm'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L9 9.414V13H5.5z" />
                                        <path d="M9 13h2v5H9v-5z" />
                                    </svg>
                                </button>
                                
                                {/* Save Button */}
                                <button onClick={updateResume} className='bg-green-100 border border-green-400 text-green-700 font-medium text-sm rounded-lg px-4 py-2 hover:bg-green-200 transition-colors shadow-sm'>
                                    Save
                                </button>
                            </div>
                         : 
                            <div className='flex gap-2'>
                                <a className='bg-blue-100 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors text-sm font-medium' href={userData && userData.resume} target="_blank" rel="noreferrer">
                                    Resume
                                </a>
                                <button onClick={() => setIsEdit(true)} className='text-gray-500 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50 transition-colors text-sm font-medium'>
                                    Edit
                                </button>
                            </div>
                    }
                </div>

                <h2 className='text-xl font-semibold mb-4'>Jobs Applied</h2>
                <div className="overflow-x-auto w-full">
                    <table className='min-w-full bg-white border-none'>
                        <thead>
                            <tr className='border-b border-gray-200'>
                                <th className='py-3 px-4 text-left text-sm font-semibold text-gray-600'>Company</th>
                                <th className='py-3 px-4 text-left text-sm font-semibold text-gray-600'>Job Title</th>
                                <th className='py-3 px-4 text-left text-sm font-semibold text-gray-600 max-sm:hidden'>Location</th>
                                <th className='py-3 px-4 text-left text-sm font-semibold text-gray-600 max-sm:hidden'>Date</th>
                                <th className='py-3 px-4 text-left text-sm font-semibold text-gray-600'>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userApplications && userApplications.length > 0 ? (
                                userApplications.map((job, index) => (
                                    <tr key={index} className='border-b border-gray-100 last:border-none'>
                                        <td className='py-3 px-4 flex items-center gap-2.5 whitespace-nowrap'>
                                            <img className='h-8 w-8 object-contain' src={job.companyId?.image} alt="" />
                                            <span className='text-gray-800 text-sm font-medium'>{job.companyId?.name}</span>
                                        </td>
                                        <td className='py-3 px-4 text-sm text-gray-700 whitespace-nowrap'>{job.jobId?.title}</td>
                                        <td className='py-3 px-4 text-sm text-gray-700 max-sm:hidden whitespace-nowrap'>{job.jobId?.location}</td>
                                        <td className='py-3 px-4 text-sm text-gray-700 max-sm:hidden whitespace-nowrap'>{moment(job.date).format('ll')}</td>
                                        <td className='py-3 px-4 text-sm whitespace-nowrap'>
                                            <span className={`inline-block px-3 py-1 rounded-md text-xs font-medium
                                                ${job.status === 'Accepted' ? 'bg-green-100 text-green-700' : ''}
                                                ${job.status === 'Rejected' ? 'bg-red-100 text-red-700' : ''}
                                                ${job.status === 'Pending' ? 'bg-blue-100 text-blue-700' : ''}
                                            `}>
                                                {job.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="text-center py-10 text-gray-500 text-sm font-medium">
                                        No applications found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            
            {/* The Footer will now stay permanently anchored at the bottom boundary */}
            <Footer/>
        </div>
    )
}

export default Application