import './App.css'
import { useState, useEffect } from 'react'

function App() {
 const [card, setcard] = useState([])

  const fetchData = async ()=>{
    let a = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await a.json()
    setcard(data)
    console.log(data)
  }

 useEffect(() => {
   fetchData()
 }, [])
 

  return (
    <>
      <div className="container">
        {card.map((card)=>{
          return <div key={card.id} className="card">
            <h1>{card.title}</h1>
            <p>{card.body}</p>
            <span>By UserId: {card.userID}</span>
          </div>
        })}
        
      </div>
    </>
  )
}

export default App
