import React from 'react'
// create seprate function and pass in onclick event ,so when we click btn then they call function using refrance name
const EventPage = ({Message,name}) => {

    function button(){
        console.log(Message)
    }
  return (
    <button onClick={button}> {name} </button>
  )
}

export default EventPage