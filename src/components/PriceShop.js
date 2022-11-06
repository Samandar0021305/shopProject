import React, { useState } from 'react'

function PriceShop({count}) {
    // console.log(count);
    let initial = 0
    const [summa ,setSumma] = useState(initial)
  return (
    <div>
      <ul>
         {count.map(fak=>{
            return <li  key={fak.id}>summa {summa}</li>
         })}
      </ul>
    </div>
  )
}

export default PriceShop