import {React } from 'react'
import './Home.css'
import { useFetch } from '../Hooks/useFetch'
import { Link } from 'react-router-dom'
export default function Home() {
  
const {data:articals , isPending , error} = useFetch('http://localhost:3000/articles')

  return (
    <div className='home'>
      <h1>My Articals</h1>
      
      {isPending && <h1>page is pending</h1>}
      {error && <h1>404 errore</h1>}
      {
       
        
          articals &&            
          articals.map(artical => {
          return(
          <div className='card' key={artical.id}>
          <h1>{artical.title}</h1>
          <p>{artical.author}</p>
          <Link to={`/articals/${artical.id}`}>Read more ...</Link>
          </div>
          )
        })
            
        
        
      }

    </div>
  )
}
