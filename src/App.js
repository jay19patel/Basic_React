import React, { useContext, useState } from 'react'
import HomePage from './Components/HomePage'

import FormPage from './Components/FormPage'

import ContextAPI from './Context/ContextAPI'

const App = () => {
  const data = ["Jay"]  
  //  Add New User Direct using State and change value using Setstate and add copy of data list
  const [user,setuser] = useState(data)

  function adduser(userdata){

    setuser([...user,userdata]);
  }

  const Contextnew = useContext(ContextAPI)
  console.log("Contextnew",Contextnew)
  return (
    <>
    {/* <ContextAPI></ContextAPI> */}
    <FormPage dataget={adduser}/>


      {user.map((name,index) => (
          <HomePage name={name} key={index}/>
          
        ))}

    

     
    </>
  )
}

export default App
