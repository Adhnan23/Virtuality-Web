import { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";
import reviews from "../assets/reviews";

function ReviewsSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  // Window resize handler for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Mobile carousel controls
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col gap-6 md:gap-8 mb-10 md:mb-20 px-4 md:px-6 lg:px-8">
      <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">
        Reviews
      </h2>

      {/* Mobile Carousel View */}
      {isMobile && (
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div key={index} className="min-w-full">
                  <ReviewCard {...review} />
                </div>
              ))}
            </div>
          </div>

          {/* Carousel indicators */}
          <div className="flex justify-center mt-4 gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex ? "bg-[#b709c0]" : "bg-[#474646]"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>

          {/* Carousel controls */}
          <button
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-black/50 rounded-full p-2 text-white"
            onClick={prevSlide}
          >
            &#10094;
          </button>
          <button
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-black/50 rounded-full p-2 text-white"
            onClick={nextSlide}
          >
            &#10095;
          </button>
        </div>
      )}

      {/* Tablet/Desktop View */}
      {!isMobile && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ReviewsSection;
