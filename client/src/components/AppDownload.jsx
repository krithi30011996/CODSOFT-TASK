import React from 'react'
import { assets } from '../assets/assets'

const AppDownload = () => {
  return (
    <div className='w-full px-4 mx-auto my-16 block clear-both float-none relative z-50'>
        <div className='bg-gradient-to-r from-violet-50 to-purple-50 p-6 sm:p-12 md:p-16 lg:p-24 rounded-2xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden'>
            
            <div className='max-w-xl flex-1'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-800 leading-tight'>
                    Download Mobile App For Better Experience
                </h1>
                
                <div className='flex justify-center md:justify-start gap-4'>
                    <a href="#" className='inline-block active:scale-95 transition-transform'>
                        <img className='h-10 sm:h-12 object-contain' src={assets.play_store} alt="Play Store"/>
                    </a>
                    <a href="#" className='inline-block active:scale-95 transition-transform'>
                        <img className='h-10 sm:h-12 object-contain' src={assets.app_store} alt="App Store"/>
                    </a>
                </div>
            </div>

            {/* This image container handles layout natively on desktop, hides cleanly on mobile without breaking heights */}
            <div className='hidden lg:block max-w-sm flex-1'>
                <img className='w-full h-auto object-contain' src={assets.app_main_img} alt="App mockup"/>
            </div>

        </div>
    </div>
  )
}

export default AppDownload