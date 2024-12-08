import "./slider.scss";
import { useState } from "react";

function Slider({ images }) {
  const [imageIndex, setImageIndex] = useState(null);

  const changeSlide = (amount) => {
    if (imageIndex + amount < 0) {
      setImageIndex(images.length - 1);
    } else if (imageIndex + amount > images.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + amount);
    }
  };
  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullSlider">
          <div className="arrow">
            <img
              src="/arrow.png"
              alt=""
              onClick={() => {
                changeSlide(-1);
              }}
            />
          </div>
          <div className="imgContainer">
            <img src={images[imageIndex]} alt="mainImage" />
          </div>
          <div className="arrow">
            <img
              src="/arrow.png"
              alt=""
              className="right"
              onClick={() => {
                changeSlide(1);
              }}
            />
          </div>
          <div
            className="close"
            onClick={() => {
              setImageIndex(null);
            }}
          >
            X
          </div>
        </div>
      )}
      <div className="bigImage">
        <img
          src={images[0]}
          alt=""
          onClick={() => {
            console.log("Clicked!");
            setImageIndex(0);
          }}
        />
      </div>
      <div className="smallImages">
        {images.slice(1).map((image, index) => (
          <img
            src={image}
            alt=""
            key={index}
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
