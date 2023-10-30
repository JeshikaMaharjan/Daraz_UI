import { useState } from "react";
import "../styles/slideshow.css";
export default function Slideshow() {
  const slideImages = [
    {
      url: "../src/assets/slideshow/slide1.jpg",
    },
    {
      url: "../src/assets/slideshow/slide2.jpg",
    },
    {
      url: "../src/assets/slideshow/slide3.jpg",
    },
    {
      url: "../src/assets/slideshow/slide4.jpg",
    },
    {
      url: "../src/assets/slideshow/slide5.jpg",
    },
    {
      url: "../src/assets/slideshow/slide6.jpg",
    },
  ];
  const [activeImageNum, setCurrent] = useState(0);
  const length = slideImages.length;
  const nextSlide = () => {
    setCurrent(activeImageNum === length - 1 ? 0 : activeImageNum + 1);
  };
  const prevSlide = () => {
    setCurrent(activeImageNum === 0 ? length - 1 : activeImageNum - 1);
  };
  setTimeout(nextSlide, 6000);
  return (
    <>
      <div className="slideshow-container">
        {slideImages.map((currentSlide, ind) => {
          if (ind === activeImageNum) {
            return <img src={currentSlide.url} className="image" />;
          }
          // return (
          // <div
          //   className={
          //     ind === activeImageNum ? "currentSlide active" : "currentSlide"
          //   }
          //   key={ind}
          // >
          //   {ind === activeImageNum && (
          //     // <h1>slide</h1>
          //     <img src={currentSlide.url} className="image" />
          //   )}
          // </div>
          // );
        })}
        <div class="left">
          <button className="scroll-btn" onClick={prevSlide}>
            &#10094;
          </button>
        </div>
        <div class="right">
          <button className="scroll-btn" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      </div>
    </>
  );
}
