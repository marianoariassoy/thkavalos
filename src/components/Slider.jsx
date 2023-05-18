import { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Loader from "./Loader";

const SliderItem = ({ src, src_portrait, alt }) => {
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
        <picture>
          <source media="(min-width: 768px)" srcSet={src} />
          <source media="(max-width: 767px)" srcSet={src_portrait} />
          <img src={src} alt={alt} className="fade-in h-screen w-full object-cover" />
        </picture>
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
          <SliderItem key={item.id} src={item.image} src_portrait={item.image_portrait} alt="Imagen para el Slider de Avalos" />
        ))}
      </Slide>
    </section>
  );
};

export default Slider;
