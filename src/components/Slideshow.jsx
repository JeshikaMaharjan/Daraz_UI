import { useState } from "react";
import "../styles/slideshow.css";
import slide1 from "../assets/slideshow/slide1.jpg";
import slide2 from "../assets/slideshow/slide2.jpg";
import slide3 from "../assets/slideshow/slide3.jpg";
import slide4 from "../assets/slideshow/slide4.jpg";
import slide5 from "../assets/slideshow/slide5.jpg";
import slide6 from "../assets/slideshow/slide6.jpg";
export default function Slideshow() {
  const slideImages = [
    {
      url: `${slide1}`,
    },
    {
      url: `${slide2}`,
    },
    {
      url: `${slide3}`,
    },
    {
      url: `${slide4}`,
    },
    {
      url: `${slide5}`,
    },
    {
      url: `${slide6}`,
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
