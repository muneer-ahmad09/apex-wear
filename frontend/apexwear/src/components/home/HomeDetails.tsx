import { MdOutlineLocalShipping } from "react-icons/md";
import { TbRosetteDiscountCheck } from "react-icons/tb";
import { FaArrowsRotate } from "react-icons/fa6";
import { GoShieldCheck } from "react-icons/go";
import "./HomeDetails.css";

function HomeDetails() {
  return (
    <div className="container">
      <div className="order-details">
        <MdOutlineLocalShipping className="icon" />
        <div className="order-details-text">
          <h2>Free Shipping</h2>
          <p>On order above ₹999</p>
        </div>
      </div>

      <div className="divider"></div>

      <div className="quality-details">
        <TbRosetteDiscountCheck className="icon" />
        <div className="quality-details-text">
          <h2>Premium Quality</h2>
          <p>Heigh-performance fabrics</p>
        </div>
      </div>
      <div className="divider"></div>

      <div className="return-details">
        <FaArrowsRotate className="icon" />
        <div className="return-details-text">
          <h2>Easy Returns</h2>
          <p>14 days hassle-free returns</p>
        </div>
      </div>
      <div className="divider"></div>

      <div className="payment-details">
        <GoShieldCheck className="icon" />
        <div className="payment-details-text">
          <h2>Secure Checkout</h2>
          <p>100% protected payments</p>
        </div>
      </div>
    </div>
  );
}

export default HomeDetails;
