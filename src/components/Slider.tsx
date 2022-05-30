import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

interface IImage {
  urls: {
    small: string;
  };
}

export const Slider = () => {
  const [images, setImages] = useState<IImage[]>([]);
  const [currImage, setCurrImage] = useState(0);
  const length = images.length;

  const getImages = async () => {
    let clientId = "eUzQm28A457kQ1rrVWI4DSQxLZZ3edeYnGpr8DKVOz0";
    let url = "https://api.unsplash.com/photos?page=1&client_id=";
    await axios.get(url + clientId).then((res) => {
      const data = res.data;
      console.log(res.data);
      setImages(() => data);
    });
  };

  const nextImage = () => {
    setCurrImage(currImage === length - 1 ? 0 : currImage + 1);
  };

  const prevImage = () => {
    setCurrImage(currImage === 0 ? length - 1 : currImage - 1);
  };

  useEffect(() => {
    getImages();
  }, []);

  useEffect(() => {
    let timeoutID = setTimeout(
      () =>
        setCurrImage((prevCurrImage) =>
          prevCurrImage === length - 1 ? 0 : prevCurrImage + 1
        ),
      4000
    );

    return () => {
      clearTimeout(timeoutID);
    };
  }, [currImage]);

  const imageList = images.map((image: IImage, index) => {
    return (
      <div
        key={index}
        className={index === currImage ? "active-slide" : "slide"}
      >
        {index === currImage && (
          <img src={image?.urls.small} alt="" className="image" />
        )}
      </div>
    );
  });
  return (
    <section className="slider">
      <MdArrowBackIos className="prev-arrow" onClick={prevImage} />
      <MdArrowForwardIos className="next-arrow" onClick={nextImage} />
      <div>{imageList}</div>
    </section>
  );
};
