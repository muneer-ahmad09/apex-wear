import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import "./TestimonialCard.css";

type TestimonialCardProps = {
    text: string;
    author: string;
    rating: number;
}

function TestimonialCard({ text, author, rating }: TestimonialCardProps) {
    return (
        <div className="testimonial-card">
                    <div className="card-rating">
                      {[1, 2, 3, 4, 5].map((i) => {
                        if (rating >= i) return <FaStar className="rating-icon" key={i} />;
                        else if (rating >= i - 0.5)
                          return <FaStarHalfAlt className="rating-icon" key={i} />;
                        else return <FaRegStar className="rating-icon" key={i} />;
                      })}
                    </div>
            <p className="testimonial-text">"{text}"</p>
            <p className="testimonial-author">- {author}</p>
        </div>
    );
}

export default TestimonialCard;