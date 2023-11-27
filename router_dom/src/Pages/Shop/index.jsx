import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router'
import ProductCard from '../../components/ProductCard'

const Shop = () => {
    const [data,setData]=useState([])
    function getData(){
        fetch("http://localhost:3000/popularFilms")
        .then(res=>res.json())
        .then(data=>setData(data))
    }
    useEffect(()=>{
        getData()
    },[])

  return (
    <div className='row'>
        {
            data.map(item=>(
                <ProductCard {...item}/>
            ))
        }
    </div>
  )
}

export default Shop
