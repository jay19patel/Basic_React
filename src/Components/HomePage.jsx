import React from 'react'
import EventPage from './EventPage'
// import Counter from './Counter'
const HomePage = ({name}) => {
   
  return (
    <>
    <div>My Name Is {name}</div>
    
    <EventPage Message={"Hi "+name} name="Hi"/>
    <EventPage Message={"BYe "+name} name="Bye"/>

    {/* <Counter /> */}

    </>

    
  )
}

export default HomePage