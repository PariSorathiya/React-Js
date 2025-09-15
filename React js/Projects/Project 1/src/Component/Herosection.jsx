import React from 'react'

export default function Herosection() {
  return (
    <section className='relative bg-grey-100'>

        {/* background Image */}
    <div className='absolute inset-0 bg-cover bg-center' style={{backgroundImage:"url('/website_banner')"}}>

    {/* Overlay */}
    <div className='absolute inset-0 bg-black bg-opacity-50'></div>

    {/* Content */}
    <div className='relative max-w-7xl mx-auto px-6 py-32 flex flex-col items-center text-center text-white'>
        <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
            Discover Your Style
        </h1>
        <p className='mt-4 text-lg md:text-xl text-gray-200 max-w-2xl'>
            Upgrade your wardrobe with the latest fashion trends for Men, Women,
          and Kids.
        </p>
        <button className='mt-6 px-6 py-3 bg-pink-500 hover:bg-pink-600 rounded-full text-lg font semibold shadow-md transition'>
            Shop Now
        </button>
    </div>
    </div>
    </section>
  )
}
