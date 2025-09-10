// import React from 'react'

// export default function Conditionalrendering() {
//     const choice = false;
//   return (
//     <div>
//       <h1>Conditionalrendring</h1>
//       {choice ? <h1>Hello</h1> : <h1>Bye</h1>}
//     </div>
//   )
// }


import React, { useState } from 'react'

export default function Conditionalrendering() {
    const[choice,setchocie]=useState(false)
  return (
    // <div style={{backgroundColor:choice?"pink":"lightblue", height:"100vh"}}>
      <div style={{backgroundColor:choice&&"pink"}}> 
      <h1>Condtionalrendering</h1>
      <button onClick={()=>setchocie(!choice)}>Click</button>
      {choice && <h1>Hello</h1>} 
    </div>
  )
}

