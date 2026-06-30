import React, { useContext, useRef } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Hero = () => {
    const {setSearchFilter, setIsSearched}= useContext(AppContext)
    const titleRef = useRef(null)
     const locationRef = useRef(null)
     const onSearch = () =>{
         setSearchFilter({
            title:titleRef.current.value,
            location:locationRef.current.value

         })
         setIsSearched(true)
        
     }


  return (
    <div className='container 2xl:px-20 mx-auto my-10 px-4'>
        <div className='bg-gradient-to-r from-purple-800 to-purple-950 text-white py-16 text-center mx-2 rounded-xl px-6 md:px-16 lg:px-24'>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-medium mb-4 text-center'>Over 10,000+ jobs to apply</h2>
            <p className='mb-8 max-w-xl mx-auto text-sm font-light px-2'>Your Next Big Career Move Starts Right Here - Explore more</p>
            <div className='flex flex-row items-center justify-between bg-white rounded text-gray-600 max-w-2xl w-full pl-2 sm:pl-4 mx-auto shadow-sm overflow-hidden'>
                <div className='flex items-center flex-1 min-w-0'>
                    <img className='h-4 sm:h-5 ml-1' src={assets.search_icon} alt=''/>
                    <input type='text'
                     placeholder='Search for jobs'
                     className='max-sm:text-xs p-2 rounded outline-none w-full min-w-0'
                     ref={titleRef}/>
                </div>
                <div className='flex items-center flex-1 miin-w-0'>
                    <img className='h-4 sm:h-5 ml-1' src={assets.location_icon} alt=''/>
                    <input type='text' placeholder='Location' 
                    className='max-sm:text-xs p-2 rounded outline-none w-full min-w-0'
                    ref={locationRef}/>
                 </div>
                 <button onClick={onSearch} className='bg-blue-600 text-xs sm:text-sm px-4 sm:px-6 py-2 rounded text-white m-1 hover:bg-bllue-700 transition' >
                    search
                 </button>
            </div>
        </div>
        <div className='border border-gray-300 shadow-md mx-2 mt-5 p-6 rounded-md flex justify-center items-center'>
            <div className='flex justify-center items-center gap-6 sm:gap-10 lg:gap-16 flex-wrap w-full' >
                <p className='font-medium text-gray-700'>Trusted by</p>
                <img className='h-5 sm:h-6 max-w-[80px] sm:max-w-none object-contain ' src={assets.microsoft_logo} alt=''/>
                <img className='h-5 sm:h-6 max-w-[80px] sm:max-w-none object-contain' src={assets.walmart_logo} alt=''/>
                <img className='h-5 sm:h-6 max-w-[80px] sm:max-w-none object-contain' src={assets.accenture_logo} alt=''/>
                <img className='h-5 sm:h-6 max-w-[80px] sm:max-w-none object-contain' src={assets.samsung_logo} alt=''/>
                <img className='h-5 sm:h-6 max-w-[80px] sm:max-w-none object-contain' src={assets.amazon_logo} alt=''/>
                <img className='h-5 sm:h-6 max-w-[80px] sm:max-w-none object-contain' src={assets.adobe_logo} alt=''/>
            </div>
        </div>
    </div>
  )
}

export default Hero