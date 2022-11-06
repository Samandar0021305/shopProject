import React, { useEffect, useState } from 'react'
import PriceShop from './PriceShop'

function Render({props}) {

     const [Price,setPrice] = useState([])

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
    useEffect(()=>{
        // console.log(Price)
    },[Price])

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
                    <button onClick={()=>
                        {setPrice([...Price,{price:el.price, name:el.title,id:el.id}])}
                        } className='list-btn'>add</button>
                </li>
            })
        }
      </ul>
      <PriceShop  count={Price} />
    </div>
  )
}

export default Render