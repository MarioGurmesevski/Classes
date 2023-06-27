import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AdsContext = createContext({
  ads: [],
});

export const AdsProvider = ({ children }) => {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setAds(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <AdsContext.Provider value={{ ads }}>
      {children}
    </AdsContext.Provider>
  );
};
