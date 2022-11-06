import React,{useEffect, useState} from 'react';
import axios from 'axios';
import Render from './Render';

function FetchData() {
   const [posts,setPosts] = useState([])

    useEffect(()=>{
     axios.get('https://fakestoreapi.com/products')
     .then(res=>{
        // console.log(res);
        setPosts(res.data)
     })
    },[])
     
  return (
    <div>
        <Render props={posts} />
    </div>
  )
}

export default FetchData