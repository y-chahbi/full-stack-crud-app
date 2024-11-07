import React from 'react'

export const UploadSection = () => {
    return (
        <div className='flex justify-center flex-col items-center'>
            <div className='Title text-2xl font-bold md:text-5xl mt-16 md:mt-20 mb-10'>
                Free Image <span className='text-[var(--primary-color)]'>URL Generator</span>
            </div>
            <div className='Description max-w-xl text-center md:font-semibold md:text-base'>
                Upload your files in various formats (JPG, JPEG, PNG, BMP, PDF, or WEBP) and
                generate image URLs to share them without compromising their quality.
            </div>
            <div className='UploadButton my-10'>
                <input className="hidden" type='file' id='file' name='file'/>
                <label htmlFor='file' className='bg-[var(--primary-color)] text-[var(--tertiary-color)] p-4 font-semibold rounded-md cursor-pointer'>Start Uploading</label>
            </div>
            <div className='UploadDeatailesSection h-64'>

            </div>
        </div>
    )
}
