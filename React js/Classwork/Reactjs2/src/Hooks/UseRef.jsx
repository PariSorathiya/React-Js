// Useref: this is a hook used to create mutable refrence with dom Elements and it does not cause  re-render.

import React, { useRef } from 'react'


export default function UseRef() {
    const userRef = useRef()

    const handleClcik = () => {
        console.log(userRef.current.value);
    }
  return (
    <div>
        <h1></h1>
      <input type="text" ref={userRef} />
      <button onClick={handleClcik}>Click</button>
    </div>
  );
}
