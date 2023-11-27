import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import ProductCard from "../../components/ProductCard";

const Detail = () => { 
    const [data,setData]=useState([])
    const {id}=useParams()
   
    
    useEffect(()=>{
        fetch("http://localhost:3000/popularFilms/"+id)
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])

  return (
    // <div className="col-12 col-md-4 col-lg-2">
    //   <div className="popular_card_content">
    //     <div className="popular_card_top">
    //       <div className="popular_card_img">
    //         <img src={movieImg} alt="" />
    //       </div>

    //       {movieStatus && (
    //         <span className="popular_card_status">{movieStatus}</span>
    //       )}

    //       <div className="popular_card_overlay">
    //         <div className="card_overlay_btn">
    //           <Button text="detail" color="white_btn" />
    //         </div>
    //       </div>
    //     </div>

    //     <h6 className="popular_card_title">{movieTitle}</h6>
    //     <div className="popular_card_price">
    //       <span>${moviePrice}</span>
    //       <span>{discountedPrice}</span>
    //     </div>
    //   </div>
    // </div>
   <>
    
    {
          data && 
          <div key={data.id}>
            <h2>{data.id}</h2>
            
            <h2>{data.movieTitle}</h2>
            <h2>{data.category}</h2>
          </div>
    }

   </>
  );
};

export default Detail;
