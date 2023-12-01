import React from 'react'
import Category from './Category'
import UploadPhoto from './UploadPhoto'
import Information from './Information'
import ContactInformation from './ContactInformation'

const page = () => {
  return (
    <section className='mt-10'>
        <div className='flex flex-col items-center gap-y-4'>
            <h3 className='font-semibold md:text-5xl text-4xl'>Create an Ad</h3>
            <p className='md:text-lg text-base font-medium'>Fill the form to place your ad</p>
        </div>
        <div className='mt-10'>
            <Category/>
        </div>
        <div className='mt-10'>
            <UploadPhoto/>
        </div>
        <div className='mt-10'>
            <Information/>
        </div>
        <div className='mt-10'>
            <ContactInformation/>
        </div>
        <div className='mt-10 mb-12 flex justify-center'>
            <button className='bg-primary text-white text-sm px-10 py-4 rounded-md shadow-lg'>
                Go to next page
            </button>
        </div>
    </section>
  )
}

export default page