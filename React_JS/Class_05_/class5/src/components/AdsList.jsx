import { useEffect, useState } from "react";
import axios from "axios";
import AdItem from "./AdItem";

const AdsList = () => {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setAds(response.data);
      });
  }, []);

  return (
    <div>
      {ads.map((ad) => (
        <AdItem key={ad.id} {...ad} />
      ))}
    </div>
  );
};

export default AdsList;
