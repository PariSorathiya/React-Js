import React from 'react';

export default function Home() {
    let name = "Pari";
    console.log(name);

    return ( 
    <div>
        <h1>This is Home Component</h1>
        <h1>Welcome to Home Page</h1>
        <h1>{name}</h1>
    </div>
    )
}