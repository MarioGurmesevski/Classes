import axios from "axios";
import { useContext } from "react";
import { AdsContext } from "../common/context/AdsContext";
const DeleteAd = ({ id }) => {
  const { deleteAdvertisment } = useContext(AdsContext);

  const onDelete = async () => {
    await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    deleteAdvertisment(id);
  };

  return (
    <button className="btn btn-danger" onClick={onDelete}>
      Delete
    </button>
  );
};

export default DeleteAd;
