import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

//referig the API
const url = 'https://course-api.com/react-tours-project'


function App() {
  
  //states
  //loadin state will be true by default
  const [loading, setLoading]= useState(true)

  //Tour State
  const [tours, setTours] = useState([])
  
  //removing the tour using id
  const removeTour = (id) => {
    const newTours = tours.filter((tour)=> tour.id !== id)
    setTours(newTours)
  }

  //fetching the tours
  const fetchTours = async ()=> {
    setLoading(true)
    try {
      const response = await fetch(url)     // passing api url
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
    
  }

  //making sure useeffect runs only once
  useEffect(()=>{
    fetchTours()
  },[])
  
  if(loading){
    return (
      <main>
      <Loading/>
    </main>
    )
  }

   //if tours state array is empty
  if(tours.length ===0){
    return (
    
    <main>
      <div className='title'>
        <h2>no tour left</h2>
        <button className='btn' onClick={()=>
        fetchTours()}>
          refresh
        </button>
      </div>
    </main>

    )
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  )

}

export default App
