import { Link } from "react-router-dom";
import DeleteAd from "./DeleteAd";

const AdItem = ({ id, title, userId, body }) => {
  return (
    <div className="col-sm mt-2">
      <div className="card">
        <h3 className="card-header">{title}</h3>
        <div className="card-body">
          <p className="card-text">{body}</p>
          <Link to={`/ads/${id}`} className="btn btn-primary">
            See more
          </Link>
          <Link to={`/form/${id}`} className="btn btn-warning">
            Edit
          </Link>
          <DeleteAd id={id} />
        </div>
      </div>
    </div>
  );
};

export default AdItem;
