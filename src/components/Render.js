import React, { useState } from 'react'

function Render({props}) {
    
  return (
    <div>
      <ul> 
        {
            props.map(el=>{
                return <li key={el.id}>
                    <img src={el.image} />
                    <h2>{el.title}</h2>
                </li>
            })
        }
      </ul>
    </div>
  )
}

export default Render