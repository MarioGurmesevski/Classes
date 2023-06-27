import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AdsContext = createContext({
  ads: [],
  adAdvertistment: () => {},
  updateAdvertistment: () => {},
  deleteAdvertisment: () => {},
});

export const AdsProvider = ({ children }) => {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setAds(response.data);
      });
  }, []);

  const adAdvertistment = (newAd) => {
    setAds((prevAds) => [...prevAds, newAd]);
  };
  const updateAdvertistment = (updateAdvertistment) => {
    setAds((prevState) =>
      prevState.map((ad) =>
        ad.id === updateAdvertistment.id ? updateAdvertistment : ad
      )
    );
  };
  const deleteAdvertisment = (id) => {
    setAds((prevAds) => prevAds.filter((ad) => ad.id !== id));
  };

  return (
    <AdsContext.Provider
      value={{
        ads,
        adAdvertistment,
        updateAdvertistment,
        deleteAdvertisment,
      }}
    >
      {children}
    </AdsContext.Provider>
  );
};
