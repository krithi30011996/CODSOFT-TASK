import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { assets, jobsApplied } from '../assets/assets'
import moment from 'moment'
import Footer from '../components/Footer'

const Application = () => {
    const [isEdit, setIsEdit] = useState(false)
    const [resume, setResume] = useState(null)

    return (
        <div>
            <Navbar />
            <div className='container px-4 min-h-[65vh] 2xl:px-20 mx-auto my-10'>
                <h2 className='text-xl font-semibold'>Your Resume</h2>
                <div className='flex gap-2 mb-6 mt-3'>
                    {
                        isEdit ? (
                            <>
                                <label className='flex items-center cursor-pointer' htmlFor="resumeUpload">
                                    <p className='bg-blue-100 text-blue-600 px-4 py-2 rounded-lg mr-2 hover:bg-blue-200 transition-colors'>Select Resume</p>
                                    <input id='resumeUpload' onChange={e => setResume(e.target.files[0])} accept='application/pdf' type="file" hidden />
                                    <img src={assets.profile_upload_icon} alt="" />
                                </label>
                                <button onClick={() => setIsEdit(false)} className='bg-green-100 border border-green-400 text-green-700 rounded-lg px-4 py-2 hover:bg-green-200 transition-colors'>Save</button>
                            </>
                        ) : (
                            <div className='flex gap-2'>
                                <a className='bg-blue-100 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors' href="#resume">Resume</a>
                                <button onClick={() => setIsEdit(true)} className='text-gray-500 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50 transition-colors'>Edit</button>
                            </div>
                        )
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
                            {jobsApplied.map((job, index) => (
                                <tr key={index} className='border-b border-gray-100 last:border-none'>
                                    <td className='py-3 px-4 flex items-center gap-2.5 whitespace-nowrap'>
                                        <img className='h-8 w-8 object-contain' src={job.logo} alt={`${job.company} logo`} />
                                        <span className='text-gray-800 text-sm font-medium'>{job.company}</span>
                                    </td>
                                    <td className='py-3 px-4 text-sm text-gray-700 whitespace-nowrap'>{job.title}</td>
                                    <td className='py-3 px-4 text-sm text-gray-700 max-sm:hidden whitespace-nowrap'>{job.location}</td>
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
                            ))}
                        </tbody>
                    </table>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Application