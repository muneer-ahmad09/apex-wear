import "./Join.css";

function Join() {
  return (
    <div className="join-container">
      <div className="join-content">
        <h2 className="join-title">Join The Momvement</h2>
        <p className="join-description">
          Get 10% off your first order & early access to new drops, exclusive sales & more!
        </p>
        </div>
        <div className="join-form">  
          <input type="email" placeholder="Enter your email" className="join-input" />
          <button className="join-btn">Subscribe</button>
        </div>
      </div>
  );
}

export default Join;