import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { IoHeartOutline } from "react-icons/io5";
import { IoHeartSharp } from "react-icons/io5";

import "./ItemCard.css";

type ItemCardProps = {
  image: string;
  title: string;
  description: string;
  originalPrice: number;
  finalPrice: number;
  rating: number;
  isFavorite?: boolean;
};

function ItemCard({
  image,
  title,
  description,
  originalPrice,
  finalPrice,
  rating,
  isFavorite = false,
}: ItemCardProps) {
  return (
    <div className="item-card">
      <img src={image} alt="Product image" className="card-img" />
      <div className="item-details">
        <h3 className="item-card-title">{title}</h3>
        <p className="item-card-subtitle">{description}</p>
        <div className="price-container">
          <span className="final-price">${finalPrice.toFixed(2)}</span>
          <span className="original-price">${originalPrice.toFixed(2)}</span>
        </div>
        <div className="card-rating">
          {[1, 2, 3, 4, 5].map((i) => {
            if (rating >= i) return <FaStar className="rating-icon" key={i} />;
            else if (rating >= i - 0.5)
              return <FaStarHalfAlt className="rating-icon" key={i} />;
            else return <FaRegStar className="rating-icon" key={i} />;
          })}
          <span>(200)</span>
        </div>
      </div>
      <div className="wishlist-icon-container">
        {!isFavorite ? (
          <IoHeartOutline className="heart-icon" />
        ) : (
          <IoHeartSharp className="heart-icon" />
        )}
      </div>
    </div>
  );
}

export default ItemCard;
