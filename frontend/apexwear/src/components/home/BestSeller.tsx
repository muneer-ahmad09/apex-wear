import { GrFormNextLink } from "react-icons/gr";
import image from "../../assets/images/gym-t-shirt.png";
import offer from "../../assets/images/offer.png";

import "./BestSeller.css";
import ItemCard from "../ItemCard";

function BestSeller() {
  return (
    <div className="best-seller">
      <div className="best-seller-header">
        <h2 className="best-seller-heading">Best Sellers</h2>
        <div className="view-all-wrapper">
          <p className="view-all">View All</p>
          <GrFormNextLink className="next-icon" />
        </div>
      </div>
      <div className="best-seller-grid">
        <div className="best-seller-list">
          <ItemCard
            image={image}
            title="Core Compression T-Shirt"
            description="Jet Black"
            originalPrice={100}
            finalPrice={80}
            rating={3}
          />
          <ItemCard
            image={image}
            title="Signature Stringer"
            description="Olive Black"
            originalPrice={100}
            finalPrice={80}
            rating={3.5}
            isFavorite={true}
          />
          <ItemCard
            image={image}
            title="Core Compression T-Shirt"
            description="Jet Black"
            originalPrice={100}
            finalPrice={80}
            rating={3}
          />
          <ItemCard
            image={image}
            title="Core Compression T-Shirt"
            description="Jet Black"
            originalPrice={100}
            finalPrice={80}
            rating={3}
          />
        </div>
        <div className="offer-card">
          <img src={offer} alt="Offer image" className="offer-img" />
          <div className="offer-content">
            <h2 className="offer-title">Up To</h2>
            <h1 className="offer-discount">20% OFF</h1>
            <h3 className="offer-subtitle">Limited Time Offer</h3>
            <p className="offer-description">
              On selecting best seller no code needed
            </p>
            <button className="offer-btn">Shop The Sale</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestSeller;
