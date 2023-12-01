import React from 'react'
import {bussinessSectionData} from "@/assets/data/bussiness-section-data"
import ContentSlider from './ContentSlider'

const BussinessSection = () => {
  return (
    <section className='pt-20'>
        <h2 className='font-semibold text-3xl'>
        Business sellers - legal entities
        </h2>
        <div className='mt-10'>
          <ContentSlider bussinessSectionData={bussinessSectionData}/>
        </div>
    </section>
  )
}

export default BussinessSection