import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export const Slider = () => {
  const [images, setImages] = useState([]);

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

  const imageList = images.map((image: any) => {
    return <img src={image?.urls.small} />;
  });
  return <div>{imageList}</div>;
};
