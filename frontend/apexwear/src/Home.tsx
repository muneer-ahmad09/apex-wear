import BestSeller from "./components/home/BestSeller";
import Category from "./components/home/Category";
import Hero from "./components/home/Hero";
import HomeDetails from "./components/home/HomeDetails";
import Join from "./components/home/Join";
import Testimonial from "./components/home/Testimonial";

function Home() {
  return (
    <div className="home">
      <Hero />
      <HomeDetails />
      <Category />
      <BestSeller />
      <Testimonial />
      <Join />
    </div>
  );
}

export default Home;
