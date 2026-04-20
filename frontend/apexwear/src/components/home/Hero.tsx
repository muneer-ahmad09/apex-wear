import hero from "../../assets/images/hero.png";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${hero})` }}>
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <div className="subtitle-container">
          <div className="dot"></div>
          <span className="hero-subtitle">Premium Gym Wear</span>
        </div>

        <h1 className="hero-title">
          Train Hard. <br />
          Wear <span>Apex.</span>
        </h1>

        <p className="hero-description">
          Engineered for athletes who demand more. Premium fabrics, perfect fit,
          unmatched performance.
        </p>

        <div className="hero-btns">
          <button className="btn-primary">Shop Now</button>
          <button className="btn-secondary">Explore Collection</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
