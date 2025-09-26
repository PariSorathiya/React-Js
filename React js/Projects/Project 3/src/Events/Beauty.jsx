import React, { useState } from 'react'

export default function Beauty() {
    const[Url, setUrl] = useState("")
    const[Name, setName] = useState("")
    const[Brand, setBrand] = useState("")
    const[Price, setPrice] = useState("")

        const [record,setRecord] = useState([])

    const addData = ()=>{
        let obj = {"Name":Name, "Brand":Brand, "Price":Price, "Url":Url}
        setRecord([...record,obj])
    }
      return (
        <div className='bg-black h-auto w-auto'>
            <h1 className='font-bold text-center text-5xl text-white hover:underline cursor-pointer'>Beauty Product</h1>
            <div className='w-full h-500 border-1 rounded-2xl mt-10 border-gray-300 justify-center flex '>

                <div>
                    <input type="text" placeholder='Enter item Url' onChange={(e) => setUrl(e.target.value)} className='p-3 w-95 rounded-2xl bg-gray-300 justify-center flex items-center mt-10'/>
                    <input type="text" placeholder='Enter item Name' onChange={(e) => setName(e.target.value)} className=' p-3 w-95 rounded-2xl  bg-gray-300 justify-center flex items-center mt-10'/>
                    <input type="text" placeholder='Enter item Brand' onChange={(e) => setBrand(e.target.value)} className=' p-3 w-95 rounded-2xl  bg-gray-300 justify-center flex items-center mt-10'/>
                    <input type="text" placeholder='Enter item Price' onChange={(e) => setPrice(e.target.value)} className=' p-3 w-95 rounded-2xl  bg-gray-300 justify-center flex items-center mt-10'/>
                    <button onClick={addData}  className=' p-3 w-45 ml-20 hover:bg-green-900 rounded-2xl  bg-green-700 justify-center flex items-center mt-10'>Submit </button>
                </div>
                {
                    record.map((e,i) => {
                        return <ul key={i} className='ml-10 mt-5 text-center w-full flex-wrap text-white'>
                            <li className='border-1 text-xl  w-80 h-50  rounded-2xl '><li className='border-1 text-xl w-80 h-50 rounded-2xl flex justify-center items-center'>
                                <img src={e.Url} alt={e.Name}  className=" w-80 h-49 object-cover rounded-xl"/>
                            </li></li>
                            <li className='border-1 text-xl mt-7 pl-5 pr-5 p-2 rounded-2xl'>{e.Name} </li>
                            <li className='border-1 text-xl mt-7 pl-5 pr-5 p-2 rounded-2xl'>{e.Brand}</li>
                            <li className='border-1 text-xl mt-7 pl-5 pr-5 p-2 rounded-2xl'>₹{e.Price}</li>
                        </ul>
                    })
                }
            </div>
        </div>
    )
}
    
