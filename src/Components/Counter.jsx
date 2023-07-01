import React, { useState } from 'react'

const Counter = () => {
    const [number,setNumber]= useState(0);
    function addcount(e){
        // e.setPropogation();
        setNumber(number+1)
        console.log("add",number)
    }
  return (
    <>
    <h4>{number}</h4>
    <button onClick={addcount}>Add</button>
    </>
  )
}

export default Counter