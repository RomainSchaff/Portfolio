import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Slider.scss";

const proprietes = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
};

const Slideshow = ({ images }) => {
  return (
    <div className="containerSlide">
      <Slide {...proprietes}>
        {images.map((image, index) => {
          return (
            <div className="each-slide" key={index}>
              <a href={image.link} target="_blank" rel="noreferrer">
                <img
                  src={image.url}
                  alt="img1"
                  height="300px"
                  max-width="600px"
                />
              </a>
            </div>
          );
        })}
      </Slide>
    </div>
  );
};

export default Slideshow;
