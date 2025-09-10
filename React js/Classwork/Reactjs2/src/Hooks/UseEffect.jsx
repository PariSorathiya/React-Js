// This is a important hook used to perform side effects in functional component like data fetching and api calling.This

// We can also perform life cycle methods in functional component using useEffecthook.

import React, { useEffect, useState, useTransition } from 'react'

export default function UseEffect() {
    // Mounting
    useEffect(()=>{
        console.log("Component Mounted");
    },[])


    // Updating

    const [count,setcount]=useState(0);

    useEffect(()=>{
        console.log("Component Updated");
    },[count]);


// Unmounting
    useEffect(()=>{
        return // statement get execute on umounting
    },[])



  return (
    <div>
      <h1>useEffect</h1>
      <h1>{count}</h1>
      <button onClick={()=>setcount(count+1)}>Click</button>
    </div>
  )
}
