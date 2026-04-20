import TestimonialCard from "./TestimonialCard";
import "./Testimonial.css";

function Testimonial() {
  return (
    <div className="testimonial-section">
      <h2 className="testimonial-heading">What Our Customers Say</h2>
      <div className="testimonial-cards">
        <TestimonialCard text="Apex Wear has transformed my workout wardrobe! The quality and fit are unmatched." author="Sarah M." rating={5} />
        <TestimonialCard text="I love the stylish designs and the comfort of Apex Wear. It's my go-to brand for gym clothes." author="James L." rating={4.5} />
        <TestimonialCard text="The customer service at Apex Wear is fantastic! They really care about their customers." author="Emily R." rating={5} />
      </div>
    </div>
  );
}

export default Testimonial;