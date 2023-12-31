import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import "./index.scss";
const ProductCard = ({id, movieImg, movieStatus, movieTitle,moviePrice,discountedPrice }) => {
  return (
    <div className="col-12 col-md-4 col-lg-2">
      <div className="popular_card_content">
        <div className="popular_card_top">
          <div className="popular_card_img">
            <img src={movieImg} alt="" />
          </div>

          {movieStatus && (
            <span className="popular_card_status">{movieStatus}</span>
          )}

          <div className="popular_card_overlay">
            <div className="card_overlay_btn">
              {/* <Button text="detail" color="white_btn" /> */}
                <Link to={`/detail/`+id}> detail </Link>
            </div>
          </div>
        </div>

        <h6 className="popular_card_title">{movieTitle}</h6>
        <div className="popular_card_price">
          <span>${moviePrice}</span>
          <span>{discountedPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
