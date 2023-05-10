import { useEffect, useState } from "react";
import Loader from "./Loader";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const SliderItem = ({ src, alt }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      setIsLoading(false);
    };
  }, [src]);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <img src={src} alt={alt} className="fade-in h-screen w-full object-cover " />
        </div>
      )}
    </div>
  );
};

const Slider = ({ data, autoplay, indicators }) => {
  const properties = {
    arrows: false,
    transitionDuration: 500,
    pauseOnHover: false,
    autoplay: autoplay,
    indicators: indicators,
  };

  return (
    <section>
      <Slide {...properties} id="slide-home">
        {data.map((item) => (
          <SliderItem key={item.id} src={item.image} alt="" />
        ))}
      </Slide>
    </section>
  );
};

export default Slider;
