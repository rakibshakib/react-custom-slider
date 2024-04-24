/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import SlideBgLines from "./SlideBgLines.svg";
import "./slider.css";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";



const ImageSlider = ({ contentList }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const goToPrevSlide = () => {
    setImageIndex((prevIndex) =>
      prevIndex === 0 ? contentList.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setImageIndex((prevIndex) =>
      prevIndex === contentList.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, 5000); // Automatically advance to next slide every 5 seconds
    return () => clearInterval(intervalId);
  }, [imageIndex]);

  const containerStyle = {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    flexShrink: 0,
    flexGrow: 0,
    backgroundImage: `url(${SlideBgLines}), linear-gradient(87.84deg, #096529 1.81%, #12CB52 165.69%)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "200%",
    backgroundPosition: "center",
    color: "white !important",
    borderRadius: "10px",
  };
  return (
    <div className="update-dashboard-slider-component">
      <div className="update-dashboard-slider-controller">
        <div className="flex justify-between items-center">
          <div className="flex justify-between">
            {contentList.map((slide, index) => (
              <ul
                key={slide.title}
                onClick={() => setImageIndex(index)}
                className={`pointer ${
                  imageIndex === index
                    ? "active-dashboardSlide-pointer text-white"
                    : "dashboardSlide-pointer"
                }`}
              >
                <li key={index}></li>
              </ul>
            ))}
          </div>
          <div className="flex justify-between slideControll-icon">
            <span onClick={goToPrevSlide}><FaAngleLeft className="text-white" /> </span>
            <span onClick={goToNextSlide}><FaAngleRight className="text-white"  /></span>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
          color: "white",
        }}
        className="parent-images-slider"
      >
        {contentList.map((content) => (
          <div style={containerStyle} key={content.title}>
            <div
              className="image-dashboard-carousel"
              style={{ translate: `${-100 * imageIndex}%` }}
            >
              <h2>{content.title}</h2>
              <div style={{ color: "white !important" }}>
                {Array.isArray(content?.description) ? (
                  <p className="grid grid-cols-3">
                    {content.description.map((value, index) => (
                      <li
                        style={{
                          listStyle: "none",
                        }}
                        key={index}
                      >
                        ({index + 1}) {value}
                      </li>
                    ))}
                  </p>
                ) : (
                  <p style={{ color: "white !important" }}>
                    {content.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
