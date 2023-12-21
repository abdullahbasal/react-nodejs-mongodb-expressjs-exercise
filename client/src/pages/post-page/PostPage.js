import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatISO9075 } from "date-fns";
import { UserContext } from "../../components/user-context/UserContext";
import { Link } from "react-router-dom";
import returnIcon from "../../assets/icons/Return.svg";
import { API_URL } from "../../config";

export default function PostPage() {
  const [postInfo, setPostInfo] = useState(null);
  const { userInfo } = useContext(UserContext);
  const { id } = useParams();
  useEffect(() => {
    fetch(`${API_URL}/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, []);

  if (!postInfo) return "";

  return (
    <div className="container home-page-container" style={{ marginBottom: 30 }}>
      <div className="row">
        <div className="col-lg-12">
          <div className="page-content mt-0">
            <div style={{ color: "#F11A7B" }}>
              <Link to={"/blog"}>
                <img
                  src={returnIcon}
                  alt="Return Icon"
                  style={{ width: 44, height: 44 }}
                />{" "}
                Return to Blogs
              </Link>
            </div>
            <div className="section">
              <div className="d-flex  align-items-center justify-content-between">
                <div className="author ">By @{postInfo.author.username}</div>
                <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
                {userInfo.id === postInfo.author._id && (
                  <div className="edit-row d-flex justify-content-end align-items-center">
                    <Link
                      className="edit-btn d-flex justify-content-end align-items-center"
                      to={`/edit/${postInfo._id}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                        style={{ width: 24, height: 24 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                        />
                      </svg>
                      Edit this post
                    </Link>
                  </div>
                )}
              </div>
              <div>
                <h1
                  className="text-truncate linear-text"
                  style={{ marginTop: 30 }}
                >
                  {postInfo.title}
                </h1>
                <div className="image">
                  <img
                    src={`${API_URL}/${postInfo.cover}`}
                    alt=""
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: 500,
                      margin: "30px 0px",
                    }}
                  />
                </div>
                <div
                  className="content"
                  dangerouslySetInnerHTML={{ __html: postInfo.content }}
                  style={{ wordBreak: "break-word" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
