import React from 'react'

export const HowToUse = () => {
  return (
    <div className='HowToUse bg-[var(--howtouse-color)] mx-2 md:mx-20 rounded-md p-4 mb-4'>
        <div className='title text-xl md:text-4xl font-bold text-[var(--primary-color)] text-center py-2 md:py-4 mt-6'>Steps to Create URL for Images</div>
        <div className='description text-center md:px-40 text-sm mb-10'>Wish to share your images online? A URL for images can be generated here. Get access to high-quality images. So, choose yourself from a wide range of formats.</div>
        <div className='steps flex flex-col md:flex-row px-4'>
            <div className='StepOne'>
                <div className='stepNumber text-sm md:text-base font-semibold md:font-bold mb-4 text-center md:text-start'>STEP 1:<span className='block md:inline'>CLICK ON THE START UPLOADING BUTTON</span></div>
                <div className='description text-sm text-center md:text-start md:mr-10 mb-10'>Drag & drop or click 'Start Uploading' to upload your file (JPG, JPEG, PNG, BMP, PDF, or WEBP) to the image hosting website.</div>
            </div>
            <div className='StepTwo'>
                <div className='stepNumber text-sm md:text-base font-semibold md:font-bold mb-4 text-center md:text-start'>STEP 2:<span className='block md:inline'>CLICK ON THE UPLOAD BUTTON</span></div>
                <div className='description text-sm text-center md:text-start md:mr-10 mb-10'>Once the image is selected, click on the upload button and it will provide you with image URLs to access the image.</div>
            </div>
            <div className='StepThree'>
                <div className='stepNumber text-sm md:text-base font-semibold md:font-bold mb-4 text-center md:text-start'>STEP 3:<span className='block md:inline'>OPEN AND COPY THE LINK</span></div>
                <div className='description text-sm text-center md:text-start md:mr-10 mb-10'>Click on the open link button to view all the generated links (direct, viewer, and HTML) and copy the URL to share images.</div>
            </div>
        </div>
    </div>
  )
}
