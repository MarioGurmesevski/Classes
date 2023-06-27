import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import CommentSection from "./CommentsSection";

const AdDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [ad, setAd] = useState({});
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((adResponse) => {
        setAd(adResponse.data);
      });
  }, [id]);

  return (
    <div className="col-sm mt-2">
      <button
        className="btn btn-primary"
        onClick={() => navigate(-1)}
      >
        Go back
      </button>
      <div className="card">
        <h2 className="card-header">{ad.title}</h2>
        <div className="card-body">
          <p className="card-text">{ad.body}</p>
          <CommentSection id={id} />
        </div>
      </div>
    </div>
  );
};

export default AdDetails;
