import BussinessSection from '@/widgets/Bussiness-Section'
import CarsGrid from '@/widgets/Car-Grid'
import CarsOffers from '@/widgets/Car-Offers'
import Hero from '@/widgets/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main className=''>
      {/* Hero Section */}
      <Hero />
      <CarsGrid/>
      <BussinessSection/>
      <CarsOffers/>
    </main>
  )
}
