import React from 'react'
import { Button } from './ui/button'

const Hero = () => {
  return (
    <section className='bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12'>
      <div className='max-w-5xl mx-auto py-[30px] px-3'>
        <div className='grid grid-cols-2 gap-8 flex justify-between items-center'>
          <div>
            <h1 className='text-4xl md:text-6xl font-bold mb-4'>Latest Electronics at Best Prices</h1>
            <p className='text-xl mb-6 text-blue-100'>Discover cutting-edge technology with unbeatable deals on smartphones, laptops and more</p>
            <div className='flex flex-col sm:flex-row gap-4'>
              <Button className="cursor-pointer bg-white text-blue-600 hover:bg-gray-200">Shop now</Button>
              <Button varient="outline" className="cursor-pointer bg-white-0 border border-white-500 text-white hover:bg-white hover:text-blue-600">View deals</Button>
            </div>
          </div>
          <div className=' relative'>
            <img src='/Ekart-home1.png' alt="" className=' w-[500px] h-[500px] rounded-lg shadow-2xl' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero