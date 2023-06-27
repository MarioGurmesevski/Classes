import { useContext } from "react";
import AdItem from "./AdItem";
import { AdsContext } from "../common/context/AdsContext";

const AdsList = () => {
  const { ads } = useContext(AdsContext);
  return (
    <div>
      {ads.map((ad) => (
        <AdItem key={ad.id} {...ad} />
      ))}
    </div>
  );
};

export default AdsList;
