import "./Post.css";
import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";
import { API_URL } from "../../config";

export default function Post({
  _id,
  title,
  summary,
  cover,
  createdAt,
  author,
}) {
  return (
    <div className="col-md-3 post-card">
      <div className="card" style={{ marginBottom: 24 }}>
        <img
          src={`${API_URL}/` + cover}
          style={{ width: "200px", margin: "10px auto", height: "200px" }}
          alt="cover"
        />
        <div className="card-body">
          <Link to={`/post/${_id}`} />
          <h5 className="card-title text-truncate">{title}</h5>
          <div className="d-flex justify-content-between">
            <a className="author text-truncate">{author.username}</a>
            <time>{formatISO9075(new Date(createdAt))}</time>
          </div>
          <p className="card-tex text-truncate">{summary}</p>
          <Link className="blog-post-button" to={`/post/${_id}`}>
            Go
          </Link>
        </div>
      </div>
    </div>
  );
}
