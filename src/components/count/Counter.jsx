"use client"
import React , { useState } from "react"


const Counter = () => {
    const [count , setCount] = useState(0);
  return (
    <div>
      <h1>count : {count}</h1>
      
      <button className="btn btn-primary" onClick={()=> setCount(count+1)}>Addition</button>
      <button className="btn btn-accent" onClick={() => setCount(count-1)}>subtract</button>
    </div>
  )
}

export default Counter;
