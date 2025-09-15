import React from 'react'

export default function Navbar() {
  return (
    <nav className='bg-white shadow-md sticky top-0 z-50'>
    <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>

      {/* logo */}
      <div className='text-3xl font-bold tracking-wider text-grey-900 cursor-pointer'>
        Fashion <span className='text-pink-500'>Hub</span>
      </div>

      {/* Menu links */}
      <ul className='hidden md:flex space-x-8 font-medium text-grey-700'>
        <li className='hover:text-pink-500 cursor-pointer'>Home</li>
        <li className='hover:text-pink-500 cursor-pointer'>Men</li>
        <li className='hover:text-pink-500 cursor-pointer'>Women</li>
        <li className='hover:text-pink-500 cursor-pointer'>Kids</li>
        <li className='hover:text-pink-500 cursor-pointer'>Sales</li>
      </ul>

      {/* Search + Icons */}
      <div className='flex items-center space-x-4'>
        {/* Search bar */}
        <div className='hidden md:flex items-center bg-grey-100 px-3 py-1 rounded-full'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#000" stroke-width="1"><circle cx="11" cy="11" r="5.5"/><path stroke-linecap="round" stroke-linejoin="round" d="m15 15l4 4"/></g></svg>
          <input type="text" placeholder='Search' className='bg-transparent outline-none px-2 text-sm' />
        </div>

        {/* Cart & User Icons */}
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 56 56"><path fill="#000" d="M14.559 51.953h27.586c4.218 0 6.656-2.437 6.656-7.266V20.43c0-4.828-2.461-7.266-7.36-7.266h-3.726c-.14-4.922-4.406-9.117-9.703-9.117c-5.32 0-9.586 4.195-9.727 9.117H14.56c-4.875 0-7.36 2.414-7.36 7.266v24.258c0 4.851 2.485 7.265 7.36 7.265M28.012 7.61c3.304 0 5.812 2.485 5.93 5.555h-11.86c.094-3.07 2.602-5.555 5.93-5.555"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#000" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"/></svg>
      </div>
    </div>
    </nav>
  )
}
