import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../Hooks/useFetch';

export default function Articals() {
    const { id } = useParams();
    const { data: artical, isPending, error } = useFetch(`http://localhost:3000/articles/${id}`);
  return (
        <div className='card'>
          {isPending && <h1>is pending</h1>}
          {error && <h1>404 error</h1>}
          { artical &&
              <div key={artical.id}>
                  <h1>{artical.title}</h1>
                  <h3>{artical.author}</h3>
                  <p>{artical.body}</p>
              </div>
          }
        </div>
  )
}
