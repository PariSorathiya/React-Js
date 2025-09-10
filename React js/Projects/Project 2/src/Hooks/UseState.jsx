import React, { useState } from 'react'

export default function UseState() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex justify-center p-5 0 h-screen bg-black">
      <div className="flex flex-col items-center border-2 border-white w-80 h-80 p-6">
        {/* Title */}
        <h1 className="font-bold font-serif text-4xl text-white underline mb-4">Calculator</h1>

        {/* Display */}
        <h1 className="text-white border-2 border-white w-full text-center py-2 text-3xl mb-4">
        {count}
        </h1>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-2 w-full">
        <button onClick={increment} className="bg-white text-black py-2 rounded" > + </button> 
        <button onClick={() => setCount(count - 1)} className="bg-white text-black py-2 rounded" > - </button> 
        <button onClick={() => setCount(count * 2)} className="bg-white text-black py-2 rounded" > × </button> 
        <button onClick={() => setCount(count / 2)} className="bg-white text-black py-2 rounded" > ÷ </button> 
        <button onClick={() => setCount(0)} className="col-span-2 bg-white text-black py-2 rounded" > Reset </button>
        </div>
      </div>
    </div>
  );
}
