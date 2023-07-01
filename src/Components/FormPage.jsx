import React, { useState } from 'react'

const FormPage = ({dataget}) => {

    const [user,setuser] = useState({state:"Gujarat"})

    function adddata(e){
        e.preventDefault(); 
        dataget(user.name)

    }
    function chnagehandle(e){
        setuser({...user,
        name:e.target.value})

    }
    

    
  return (
    <div>
        <form>
            <input type="text" placeholder='Enter Name' onChange={chnagehandle} name='name' />
            <button onClick={adddata}>Add</button>
        </form>
    </div>
  )
}

export default FormPage