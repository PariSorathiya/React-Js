import React from 'react'

export default function Navbar({dark,setDark}) {
  console.log(dark);
  return (
    <div className='flex' style={{backgroundColor: dark ? "black" : "white"}}>
      <div className='w-100 h-19 flex'>

        
      <div>
        <img src="/Image/Logo.png" alt=""  className='w-27 h-11 items-center mt-3 ml-6'/>
      </div>


    <div class="border-l h-7.5 ml-4 mt-5 text-gray-200"></div>


    <div className='pl-3 mt-6'>
      <a href="" className='mt-5'><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24"><g fill="none"><path d="M12 2a8 8 0 0 1 8 8c0 6.5-8 12-8 12s-8-5.5-8-12a8 8 0 0 1 8-8m0 5a3 3 0 1 0 0 6a3 3 0 0 0 0-6" clip-rule="evenodd"/><path stroke="#5733e5" stroke-width="2" d="M20 10c0 6.5-8 12-8 12s-8-5.5-8-12a8 8 0 1 1 16 0Z"/><path stroke="#5733e5" stroke-width="2" d="M15 10a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"/></g></svg></a>  
    </div>


    <div className='pl-2 mt-3 '>
      <h1 className='font-sans text-semibold text-1xl'>Gurugram
      </h1>
        <span className='text-gray-500 text-sm'>Haryana</span>
    </div>
 </div>

 <div className="flex space-x-6 pt-5 h-13 pl-3">
  <a href="" className="textcolor-[#231268] rounded-3xl">
    For you
    </a>
  <a href="" className="text-gray-600 font-semi-bold">Dining</a>
  <a href="" className="text-gray-600 font-semi-bold">Events</a>
  <a href="" className="text-gray-600 font-semi-bold">Movies</a>
  <a href="" className="text-gray-600 font-semi-bold">Activities</a>
 </div>
 <button onClick={()=>setDark(!dark)}>🌙</button>
    </div>
  )
}
