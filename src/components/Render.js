import React, { useState } from 'react'

function Render({props}) {
    const liElStyle = {
        width:'300px',
        height:'320px',
        margin:'0 40px',
        marginTop:'20px'
    }
    const imgStyle = {
        width:'150px',
        height:'150px',
        display:'flex'
    }
    console.log(props);
  return (
    <div>
      <ul className='renderList'> 
        {
            props.map(el=>{
                return <li className='item' style={liElStyle} key={el.id}>
                    <img style={imgStyle} src={el.image} />
                    <h2>{el.title}</h2>
                    <p>{el.price} $</p>
                    <br />
                    <button className='list-btn'>add</button>
                </li>
            })
        }
      </ul>
    </div>
  )
}

export default Render