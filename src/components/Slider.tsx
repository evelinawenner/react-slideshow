import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

export const Slider = () => {
  const [images, setImages] = useState([]);
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

  useEffect(() => {
    getImages();
  }, []);

  const nextImage = () => {
    setCurrImage(currImage === length - 1 ? 0 : currImage + 1);
  };

  const prevImage = () => {
    setCurrImage(currImage === 0 ? length - 1 : currImage - 1);
  };

  const imageList = images.map((image: any, index) => {
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
    <section>
      <MdArrowBackIos className="prev-arrow" onClick={prevImage} />
      <MdArrowForwardIos className="next-arrow" onClick={nextImage} />
      {imageList}
    </section>
  );
};
