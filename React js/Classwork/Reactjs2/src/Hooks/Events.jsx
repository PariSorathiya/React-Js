import React, { useState } from 'react'

export default function Events() {
    const [name, setName]=useState("")
    // const greet = (name)=>{
        const greet = ()=>{
        console.log("Hello ",name);
    }
  return (
    <div>
      <h1>Events</h1>
      {/* <input type="text" onChange={()=>greet("Dockman")} /> */}
      <input type="text" onChange={(e)=>setName(e.target.value)} placeholder='Enter your name' />
      <button onClick={()=>greet("raj")}>Click</button>
      <h1>{name}</h1>
    </div>
  );
// }
}
