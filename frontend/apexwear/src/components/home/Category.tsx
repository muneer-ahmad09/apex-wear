import { GrFormNextLink } from "react-icons/gr";
import { BsBoxSeam } from "react-icons/bs";

import "./Category.css";
import gymTShirt from "../../assets/images/gym-t-shirt.png";

function Category() {
  return (
    <section className="category">
      <div className="category-header">
        <h1 className="category-heading">Shop By Category</h1>

        <div className="view-all-wrapper">
          <p className="view-all">View All</p>
          <GrFormNextLink className="next-icon" />
        </div>
      </div>
      <div className="category-list">
        <div className="card">
          <img src={gymTShirt} alt="Product image" className="card-img" />
          <div className="card-overlay">
            <h3 className="card-title">Gym T-Shirts</h3>
            <p className="card-subtitle">12 Styles</p>
          </div>
        </div>

        <div className="card">
          <img src={gymTShirt} alt="Product image" className="card-img" />
          <div className="card-overlay">
            <h3 className="card-title">Product Name</h3>
            <p className="card-subtitle">Short description</p>
          </div>
        </div>

        <div className="card">
          <img src={gymTShirt} alt="Product image" className="card-img" />
          <div className="card-overlay">
            <h3 className="card-title">Product Name</h3>
            <p className="card-subtitle">Short description</p>
          </div>
        </div>

        <div className="drop-card">
          <div  className="drop-card-header">
            <div className="icon-container">
              <BsBoxSeam className="drop-icon" />
            </div>
            <p className="drop-card-title">New Drop</p>
          </div>
          <div className="drop-card-content">
            <h2 className="card-title">Product Name</h2>
            <p className="card-subtitle">Short description</p>
            <button className="notify-btn">Notify Me</button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Category;
