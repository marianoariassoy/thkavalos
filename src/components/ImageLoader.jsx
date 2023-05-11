import { useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";

const ImageLoader = ({ src, alt }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      setIsLoading(false);
    };
  }, [src]);

  return (
    <>
      {isLoading ? (
        <div className="w-full h-full flex items-center justify-center p-12">
          <BeatLoader />
        </div>
      ) : (
        <img src={src} alt={alt} className="fade-in w-full" />
      )}
    </>
  );
};

export default ImageLoader;
